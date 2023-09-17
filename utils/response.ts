interface ResponseMeta {
  success: boolean;
  message: string;
}

interface SuccessResponse {
  meta: ResponseMeta;
<<<<<<< HEAD
<<<<<<< HEAD
  results: string;
=======
  character: string;
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
  results: string;
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
}

interface ErrorResponse {
  meta: ResponseMeta;
}

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
function successResponse(status: boolean, mess: string, data: any): SuccessResponse {
=======
function successResponse(mess: string, data: any): SuccessResponse {
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
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
<<<<<<< HEAD
      success: status,
>>>>>>> 8d5f4c1 (reafactor: change to typescript)
=======
      success: false,
>>>>>>> 9ca8c10 (refactor: hero, item & commander services)
      message: mess,
    },
  };
}

export { successResponse, errorResponse };
