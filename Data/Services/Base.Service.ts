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

  findAll(): Promise<ModelResponse<ModelType>> {
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
  delete(id: number): Promise<ModelResponse<ModelType>> {
    throw new Error("Method not implemented.");
  }
  async fetchData(
    cls: ModelType,
    url: string,
    {
      queryStrings,
      method,
      options,
    }: {
      queryStrings?: any;
      method?: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE";
      options?: FetchOptions;
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

    // throw new Error();

    // console.log('(typeof Work as any)["fromDbRow"]', cls as any);
    // let staticFuncList: any = Object.getOwnPropertyNames(cls).filter(
    //   (prop) => typeof (cls as any)[prop] === "function"
    // );
    // const getFromDbRow = () =>
    //   (staticFuncList as any[]).filter((it) => it == "fromDbRow")[0];
    // console.log("Statis List", getFromDbRow());
    // callStaticMethod(cls, "callStaticMethod");
    // throw new Error();
    // let list: Work[] = [];
    // let { data, error } = await useFetch<WorkResponse>(
    //   config.Work.API_WORK_GET
    // );
    // let response: WorkResponse = ModelResponse.fromServerResponse(data.value);
    // if (error.value?.message) {
    //   throw new Error(error.value?.message);
    // }
    // if (response.error) {
    //   return response;
    // }
    // if (Array.isArray(response.data)) {
    //   list = response.data.map((work) => Work.fromDbRow(work));
    //   response.data = list;
    // }
    // return response;
  }
}
