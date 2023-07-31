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

    // Función para manejar el clic en el botón de editar usuario
    const handleEditUser = (userId) => {
        // Aquí puedes realizar la lógica para editar el usuario con el ID dado
        console.log("Editar usuario con ID:", userId);
    };

    // Función para manejar el clic en el botón de eliminar usuario
    const handleDeleteUser = (userId) => {
        // Aquí puedes realizar la lógica para eliminar el usuario con el ID dado
        console.log("Eliminar usuario con ID:", userId);
    };

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
                            <th>Acciones</th> {/* Nueva columna para los botones */}
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
                                <td>
                                    {/* Botones de editar y eliminar usuario */}
                                    <div className="d-flex">
                                        <button
                                            onClick={() => handleEditUser(user.id)}
                                            className="btn btn-success btn-sm me-1"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDeleteUser(user.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Borrar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
