import { Form, Button } from "react-bootstrap";

import { PeopleContext } from "../../contexts/PeopleContext";
import { useContext, useState } from "react";
import { PeopleProps } from "../../types";

const EditForm = ({ people }: PeopleProps) => {
  const id = people.id;

  const [name, setName] = useState(people.name);
  const [cpf, setCpf] = useState(people.cpf);
  const [phone, setPhone] = useState(people.phone);
  const [email, setEmail] = useState(people.email);

  //@ts-ignore
  const { updatePeople } = useContext(PeopleContext);

  const updatedPeople = { id, name, cpf, phone, email };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePeople(id, updatedPeople);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nome Completo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome Completo *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>CPF</Form.Label>
        <Form.Control
          type="text"
          placeholder="CPF *"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Telefone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="E-mail *"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <br />
      <div className="d-grid gap-2">
        <Button variant="success" type="submit">
          Editar
        </Button>
      </div>
    </Form>
  );
};

export default EditForm;
