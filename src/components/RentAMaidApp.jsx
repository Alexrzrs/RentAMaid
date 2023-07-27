import React from "react";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import "../styles/RentAMaidApp.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import ListUsersComponent from "./ListUsersComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthProvider from "../security/AuthContext";
import { useAuth } from "../security/AuthContext";

function AuthenticatedRoute({ children }) {
    const authContext = useAuth();
    if (authContext.isAuthenticated) {
        return children;
    }
    return <Navigate to="/" />;
}

export default function RentAMaidApp() {
    return (
        <div className="RentAMaidApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route
                            path="/welcome/:username"
                            element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent />
                                </AuthenticatedRoute>
                            }
                        />
                        <Route
                            path="/usuarios"
                            element={
                                <AuthenticatedRoute>
                                    <ListUsersComponent />
                                </AuthenticatedRoute>
                            }
                        />
                        <Route
                            path="/logout"
                            element={
                                <AuthenticatedRoute>
                                    <LogoutComponent />
                                </AuthenticatedRoute>
                            }
                        />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}
