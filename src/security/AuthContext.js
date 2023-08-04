import { createContext, useState, useContext } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);

    // JWT AUTHENTICATION
    async function login(username, password) {
        try {
            const response = await executeJwtAuthenticationService(username, password);

            setIsAuthenticated(false);

            if (response.status === 200) {
                
                const jwtToken = "Bearer " + response.data.token;
                setIsAuthenticated(true);
                setUsername(username);
                setToken(jwtToken);
                setUserData(response.data);
                console.log(response.data);
                apiClient.interceptors.request.use((config) => {
                    console.log("intercepting and adding token");
                    config.headers.Authorization = jwtToken;
                    return config;
                });

                return true;
            } else {
                logout();
                return false;
            }
        } catch (error) {
            logout()
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
        setToken(null);
        setUsername(null);
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                username,
                token,
                userData
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}