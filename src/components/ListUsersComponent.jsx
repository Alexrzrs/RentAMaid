import React, { useState, useEffect } from "react";
import { apiClient } from "../api/ApiClient";

export default function ListUsersComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Realizar la solicitud HTTP para obtener la lista de usuarios
        apiClient.get("/api/v1/users")
            .then((response) => {
                // Actualizar el estado con los usuarios recibidos
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener los usuarios:", error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Lista de Usuarios</h1>
            <div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
