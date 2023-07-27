import React from "react";

export default function ListUsersComponent() {
    const usuarios = [
        {
            id: 1,
            nombre: "Efren",
            apellido: "Ruiz",
            email: "eruiz@mail.com",
        },
        {
            id: 2,
            nombre: "Alice",
            apellido: "Johnson",
            email: "alice@mail.com",
        },
        {
            id: 3,
            nombre: "Bob",
            apellido: "Smith",
            email: "bob@mail.com",
        },
        {
            id: 4,
            nombre: "Catherine",
            apellido: "Lee",
            email: "catherine@mail.com",
        },
        {
            id: 5,
            nombre: "David",
            apellido: "Brown",
            email: "david@mail.com",
        },
    ];
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
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
