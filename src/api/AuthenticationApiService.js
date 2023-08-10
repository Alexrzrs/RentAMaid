import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService = (username, password) =>
    apiClient.post(`/authenticate/admin`, {
        username,
        password,
    });
