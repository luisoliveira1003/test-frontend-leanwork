import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../../contexts/PeopleContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";

const People = ({ people }) => {
  //@ts-ignore
  const { deletePeople } = useContext(PeopleContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [people]);

  return (
    <>
      <td>{people.name}</td>
      <td>{people.cpf}</td>
      <td>{people.phone}</td>
      <td>{people.email}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Editar</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">
              <RiEdit2Fill />
            </i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Deletar</Tooltip>}>
          <button
            onClick={() => deletePeople(people.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">
              <RiDeleteBin7Fill />
            </i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Pessoa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm people={people} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default People;
