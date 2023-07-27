import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHelloWorldBean } from "../api/HelloWorldApiService";
import { useAuth } from "../security/AuthContext";

export default function WelcomeComponent() {
    const { username } = useParams();
    const authContext = useAuth();
    const [message, setMessage] = useState(null);

    function callHelloWorldRestApi() {
        console.log("called");

        //SE PUEDE LLAMAR POR AXIOS O DEFINIRLO EN UNA API
        // axios
        //     .get("http://localhost:8080/hello-world")
        getHelloWorldBean("efren", authContext.token)
            .then((response) => successfulRespone(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("cleanup"));
    }

    function successfulRespone(response) {
        // console.log(response);
        setMessage(response.data.message);
    }

    function errorResponse(error) {
        console.log(error);
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Administrar Usuarios - <Link to="/usuarios">Ir</Link>
            </div>
            <div>
                <button
                    className="btn btn-success m-5"
                    onClick={callHelloWorldRestApi}
                >
                    Hello world rest API call
                </button>
                <div className="text-info">{message}</div>
            </div>
        </div>
    );
}
