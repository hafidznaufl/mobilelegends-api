interface ResponseMeta {
  success: boolean;
  message: string;
}

interface SuccessResponse {
  meta: ResponseMeta;
  results: string;
}

interface ErrorResponse {
  meta: ResponseMeta;
}

function successResponse(mess: string, data: any): SuccessResponse {
  return {
    meta: {
      success: true,
      message: mess,
    },
    results: data,
  };
}

function errorResponse(mess: string): ErrorResponse {
  return {
    meta: {
      success: false,
      message: mess,
    },
  };
}

export { successResponse, errorResponse };
