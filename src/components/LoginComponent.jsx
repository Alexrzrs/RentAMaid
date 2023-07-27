import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">
            <h1 className="text-center">Admin Panel Login</h1>

            <div className="LoginForm">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <label className="text-bg-dark p-3">Email</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="uteq@mail.com"
                            value={username}
                            onChange={handleUsernameChange}
                            className="text-bg-light p-3"
                        />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <label className="text-bg-dark p-3">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="*********"
                            value={password}
                            onChange={handlePasswordChange}
                            className="text-bg-light p-3"
                        />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <button
                            type="button"
                            name="login"
                            onClick={handleSubmit}
                            className="btn btn-dark"
                            style={{ marginBottom: 20 }}
                        >
                            Login
                        </button>
                    </div>
                </div>
                {showErrorMessage && (
                    <div
                        className="errorMessage alert alert-danger"
                        role="alert"
                    >
                        Authentication Failed. Please check your credentials.
                    </div>
                )}
            </div>
        </div>
    );
}
