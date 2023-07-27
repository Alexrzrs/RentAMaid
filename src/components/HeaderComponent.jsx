import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function HeaderComponent() {
    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    function logout() {
        authContext.logout();
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2 text-bg-dark">
            <div className="container ">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        {isAuthenticated && (
                            <Link
                                className="navbar-brand ms-2 fs-2 fw-bold text-white"
                                to="/welcome/efren"
                            >
                                Rent A Maid
                            </Link>
                        )}
                        {!isAuthenticated && (
                            <Link
                                className="navbar-brand ms-2 fs-2 fw-bold text-white"
                                to="/"
                            >
                                Rent A Maid
                            </Link>
                        )}

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {isAuthenticated && (
                                        <Link
                                            className="nav-link text-white"
                                            to="/usuarios"
                                        >
                                            Usuarios
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {!isAuthenticated && (
                                    <Link
                                        className="nav-link text-white"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                )}
                            </li>
                            <li className="nav-item">
                                {isAuthenticated && (
                                    <Link
                                        className="nav-link text-white"
                                        to="/logout"
                                        onClick={logout}
                                    >
                                        Logout
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
