import { Modal, Alert, Button, ModalBody } from "react-bootstrap";
import useAuth from "../auth/useAuth";

const DeleteModal = ({ isOpen, close }) => {
  const { logout } = useAuth();

  const handleDelete = () => {
    //Petición http
    //close()
    logout();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          ¿Estás seguro que deseas eliminar permanentemente tu cuenta?{" "}
          <b>se perderán tus datos</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Eliminar cuenta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
