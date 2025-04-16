import type { ModelResponse } from "../Responses/ModelResponse-Class";

export class StoreHelper {
  static async genericFindAll<
    ModelType,
    ResponseType extends ModelResponse<ModelType>
  >(
    store: { list: ModelType[] },
    serviceCall: () => Promise<ResponseType>
  ): Promise<ResponseType> {
    const response = await serviceCall();
    store.list = response.data ?? [];
    return response;
  }

  static async genericSave<
    ModelType extends { id?: number },
    ResponseType extends ModelResponse<ModelType>
  >(
    store: { list: ModelType[] },
    row: ModelType,
    serviceCall: (row: ModelType) => Promise<ResponseType>
  ): Promise<ResponseType> {
    const isNew = row.id == null;
    const response = await serviceCall(row);

    if (response.success) {
      if (isNew) {
        store.list.push(row);
      } else {
        const index = store.list.findIndex((item) => item.id === row.id);
        if (index !== -1) {
          store.list[index] = row;
        }
      }
    }
    return response;
  }

  static async genericUpdate<
    ModelType extends { id?: number },
    ResponseType extends ModelResponse<ModelType>
  >(
    store: { list: ModelType[] },
    row: ModelType,
    serviceCall: (row: ModelType) => Promise<ResponseType>
  ): Promise<ResponseType> {
    const response = await serviceCall(row);
    if (!response.success) return response;

    const index = store.list.findIndex((item) => item.id === row.id);

    if (index !== -1 && Array.isArray(response.data)) {
      store.list[index] = response.data[0];
    }
    return response;
  }

  static async genericDelete<
    ModelType extends { id?: number },
    ResponseType extends ModelResponse<ModelType>
  >(
    store: { list: ModelType[] },
    id: number,
    serviceCall: (id: number) => Promise<ResponseType>
  ): Promise<ResponseType> {
    const response = await serviceCall(id);
    if (response.success) {
      store.list = store.list.filter((item) => item.id !== id);
    }
    return response;
  }

  static async genericCreate<
    ModelType extends { id?: number },
    ResponseType extends ModelResponse<ModelType>
  >(
    store: { list: ModelType[] },
    row: ModelType,
    serviceCall: (row: ModelType) => Promise<ResponseType>
  ): Promise<ResponseType> {
    const response = await serviceCall(row);
    if (response.success && Array.isArray(response.data)) {
      store.list.push(response.data[0]);
    }
    return response;
  }
}
