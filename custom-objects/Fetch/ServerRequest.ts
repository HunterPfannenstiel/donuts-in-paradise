import APIRequest from "./APIRequest";

const SERVER_URL = "http://localhost:8080";

class ServerRequest {
  static async request<T>(path: string, init?: RequestInit | undefined) {
    return APIRequest.request<T>(`${SERVER_URL}${path}`, init);
  }
}

export default ServerRequest;
