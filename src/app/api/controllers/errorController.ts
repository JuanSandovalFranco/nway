export class ErrorApi extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith("4") ? "fail" : "error";
    this.operational = true;
  }
}

export const errorHandlerResponse = (error, req) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal Server Error";

  return Response.json({ status: "error", message: message });
};
