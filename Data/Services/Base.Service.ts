import type { FetchOptions } from "~/common/fetch-options";
import type { IRepositry } from "../Repositries/IRepositry";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import type { FetchError } from "ofetch";
function callStaticMethod<T>(
  clazz: { [key: string]: any }, // Class reference
  methodName: string,
  ...args: any[]
): any {
  if (typeof clazz[methodName] === "function") {
    return clazz[methodName](...args);
  } else {
    throw new Error(`Method ${methodName} does not exist on ${clazz.name}`);
  }
}
export abstract class BaseModelService<ModelType>
  implements IRepositry<ModelType>
{
  abstract get getFetchKey(): string;

  findAll(options: FetchOptions): Promise<ModelResponse<ModelType>> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<ModelResponse<ModelType>> {
    throw new Error("Method not implemented.");
  }
  create(row: ModelType): Promise<ModelResponse<ModelType>> {
    throw new Error("Method not implemented.");
  }
  update(row: ModelType): Promise<ModelResponse<ModelType>> {
    throw new Error("Method not implemented.");
  }
  save(row: ModelType & { id?: number }): Promise<ModelResponse<ModelType>> {
    if (row.id) {
      return this.update(row);
    } else {
      return this.create(row);
    }
  }
  delete(id: number): Promise<ModelResponse<ModelType>> {
    throw new Error("Method not implemented.");
  }
  async serverUpdateRow(
    cls: ModelType,
    url: string,
    row: any,
    {
      queryStrings,
      options,
    }: {
      queryStrings?: any;
      options?: FetchOptions;
    } = {}
  ): Promise<ModelResponse<ModelType>> {
    let jsonRow = "toDbRow" in row ? row.toDbRow() : "";
    return this.fetchData(cls as any, url, {
      queryStrings,
      method: "PATCH",
      options,
      body: jsonRow,
    });
  }

  async serverCreateRow(
    cls: ModelType,
    url: string,
    row: any,
    {
      queryStrings,
      options,
    }: {
      queryStrings?: any;
      options?: FetchOptions;
    } = {}
  ): Promise<ModelResponse<ModelType>> {
    let jsonRow = "toDbRow" in row ? row.toDbRow() : "";
    return this.fetchData(cls as any, url, {
      queryStrings,
      method: "POST",
      options,
      body: jsonRow,
    });
  }

  async serverDeleteRow(
    cls: ModelType,
    url: string,
    id: number,
    {
      queryStrings,
      options,
    }: {
      queryStrings?: any;
      options?: FetchOptions;
    } = {}
  ): Promise<ModelResponse<ModelType>> {
    return this.fetchData(cls as any, `${url}/${id}`, {
      queryStrings,
      method: "DELETE",
      options,
    });
  }

  async fetchData(
    cls: ModelType,
    url: string,
    {
      queryStrings,
      method,
      options,
      body,
    }: {
      queryStrings?: any;
      method?: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE";
      options?: FetchOptions;
      body?: any;
    }
  ): Promise<ModelResponse<ModelType>> {
    //callStaticMethod(cls as any, "callStaticMethod");

    if (!method) method = "GET";

    let list: ModelType[] = [];
    //@ts-ignore
    let retResponse: Ref<ModelResponse<ModelType> | null> = ref<
      ModelResponse<ModelType | null>
    >(null as any);
    //@ts-ignore
    let retError: Ref<FetchError<any> | null> = ref<FetchError<any> | null>();

    if (method == "GET") {
      const refetch = options?.reFetch ?? false;
      const { data: cachedReponse } = useNuxtData<ModelResponse<ModelType>>(
        this.getFetchKey
      );
      if (cachedReponse.value && !refetch) {
        retResponse = cachedReponse;
      } else {
        const { data: fetchResponse, error: fetchError } = await useFetch<
          ModelResponse<ModelType>
        >(url, {
          method,
          query: queryStrings,
          key: this.getFetchKey,
          body,
        });
        retResponse = fetchResponse;
        retError = fetchError;
      }
    } else {
      const { data: fetchResponse, error: fetchError } = await useFetch<
        ModelResponse<ModelType>
      >(url, {
        method,
        query: queryStrings,
        key: this.getFetchKey,
        body,
      });
      retResponse = fetchResponse;
      retError = fetchError;
    }

    const response: ModelResponse<ModelType> = ModelResponse.fromServerResponse(
      retResponse.value
    );

    if (retError.value?.message) {
      throw new Error(retError.value?.message);
    }
    if (response.error) {
      return response;
    }

    if (Array.isArray(response.data)) {
      //   list = response.data.map((work) => Work.fromDbRow(work));
      list = response.data.map((row) =>
        callStaticMethod(cls as any, "fromDbRow", row)
      );

      response.data = list;
    }
    return response;
  }
}
