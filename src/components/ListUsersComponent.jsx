import React, { useState, useEffect } from "react";
import { apiClient } from "../api/ApiClient";
import { Modal, Button, Form } from "react-bootstrap";

export default function ListUsersComponent() {
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editedUser, setEditedUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    apiClient
      .get("/api/v1/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  };

  const handleEditUser = (userId) => {
    console.log("Editing user with ID:", userId);
    const userToEdit = users.find((user) => user.id === userId);
    setEditedUser(userToEdit);
    setShowEditModal(true);
  };

  const handleSaveEditUser = () => {
    console.log("Saving changes for user:", editedUser);

    apiClient
      .post(`/api/v1/users/edit/${editedUser.id}`, {
        firstname: editedUser.firstname,
        lastname: editedUser.lastname,
        email: editedUser.email,
        password: editedUser.password,
      })
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user.id === editedUser.id ? response.data : user
        );
        setUsers(updatedUsers);
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error("Error al guardar los cambios:", error.response);
      });
  };

  const handleDeleteUser = (userId) => {
    const user = users.find((user) => user.id === userId);
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const userId = userToDelete.id;
    apiClient
      .get(`/api/v1/users/delete/${userId}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario:", error.response);
      })
      .finally(() => {
        setUserToDelete(null);
        setShowDeleteModal(false);
      });
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
              <th>Acciones</th>
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

      {/* Ventana modal de edición */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                value={editedUser.firstname}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, firstname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={editedUser.lastname}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, lastname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editedUser.email}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={editedUser.password}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveEditUser}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userToDelete && (
            <p>¿Estás seguro de que quieres eliminar a {userToDelete.firstname} {userToDelete.lastname}?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
