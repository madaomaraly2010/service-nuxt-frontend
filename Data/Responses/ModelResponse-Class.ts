export class ModelResponse<ModelType> {
  data: ModelType[] | null = [];
  error?: boolean | any;
  message?: string;
  status: number = -1;

  static deepClone(obj: any, seen = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;

    if (seen.has(obj)) return seen.get(obj); // Handle circular reference

    const copy: any = Array.isArray(obj) ? [] : {};
    seen.set(obj, copy);

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = ModelResponse.deepClone(obj[key], seen);
      }
    }
    return copy;
  }
  static fromServerResponse(response: any) {
    const cloned = JSON.parse(JSON.stringify(response));

    return cloned;
  }
  static createSuccessResponse<ModelType>(
    data: ModelType[]
  ): ModelResponse<ModelType> {
    return {
      status: 200,
      message: "Success",
      data: data,
      error: false,
    };
  }

  static createDbErrorResponse<ModelType>(
    error: any,
    message: string,
    statusCode: number
  ): ModelResponse<ModelType> {
    return {
      status: statusCode,
      message,
      data: null,
      error: error,
    };
  }

  static createServerErrorResponse<ModelType>(
    error: any,
    message?: string
  ): ModelResponse<ModelType> {
    return {
      status: 500,
      message: "Internal Server error " + message,
      data: null,
      error: error,
    };
  }
}
