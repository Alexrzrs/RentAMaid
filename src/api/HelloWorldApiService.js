import { apiClient } from "./ApiClient";

// export function getHelloWorldBean() {
//     return axios.get("http://localhost:8080/hello-world");
// }

export const getHelloWorldBean = (username, token) =>
    apiClient.get(`/hello-world/path-variable/${username}`);
