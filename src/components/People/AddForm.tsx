import React, { useContext, useEffect, useState } from "react";
import { PeopleContext } from "../../contexts/PeopleContext";
import { People } from "../../types";
import { ButtonForm, Container, ContentForm } from "./Form.style";
import InputMask from "react-input-mask";
import { TiArrowRight } from "react-icons/ti";

const AddForm = () => {
  //@ts-ignore
  const { addPeople } = useContext(PeopleContext);

  const [newPeople, setNewPeople] = useState<People>({
    name: "",
    cpf: "",
    phone: "",
    email: "",
  });

  const onInputChange = (e: any) => {
    setNewPeople({ ...newPeople, [e.target.name]: e.target.value });
  };

  const { name, cpf, phone, email } = newPeople;

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    addPeople(name, cpf, phone, email);
  };

  useEffect(() => {
    var button = document.getElementById("button");
    //@ts-ignore
    button.disabled = true;

    document.addEventListener("input", function (event) {
      //@ts-ignore
      var name = document.getElementById("name").value;
      //@ts-ignore
      var email = document.getElementById("email").value;
      //@ts-ignore
      var cpf = document.getElementById("cpf").value;
      //@ts-ignore
      var phone = document.getElementById("phone").value;

      if (
        name !== null &&
        name !== "" &&
        email !== null &&
        email !== "" &&
        cpf !== null &&
        cpf !== "" &&
        phone !== null &&
        phone !== ""
      ) {
        //@ts-ignore
        button.disabled = false;
      } else {
        //@ts-ignore
        button.disabled = true;
      }
    });
  }, []);

  return (
    <Container>
      <ContentForm>
        <form onSubmit={handleSubmit}>
          <h1>Lean Cadastro</h1>

          <label>Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            required
          />

          <label>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
          />

          <label>CPF</label>
          <InputMask
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={(e) => onInputChange(e)}
            required
            mask="999.999.999-99"
          />

          <label>Telefone</label>
          <InputMask
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
            required
            mask="(99) 9 9999-9999"
          />

          <ButtonForm>
            <button type="submit" id="button">
              Cadastrar
            </button>
            <button disabled>
              Login <TiArrowRight />
            </button>
          </ButtonForm>
        </form>
      </ContentForm>
    </Container>
  );
};

export default AddForm;
