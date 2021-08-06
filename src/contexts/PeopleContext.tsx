import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { People } from "../types";

export const PeopleContext = createContext({});

const PeopleContextProvider = (props) => {
  const [peoples, setPeoples] = useState([
    {
      id: uuidv4(),
      name: "John Doe 1",
      cpf: "111.222.333-44",
      phone: "(18) 9 9999-9999",
      email: "john1@test.com",
    },
    {
      id: uuidv4(),
      name: "John Doe 2",
      cpf: "555.666.777-88",
      phone: "(18) 9 9999-9999",
      email: "john2@test.com",
    },
  ]);

  useEffect(() => {
    setPeoples(JSON.parse(localStorage.getItem("peoples")));
  }, []);

  useEffect(() => {
    localStorage.setItem("peoples", JSON.stringify(peoples));
  });

  const sortedPeoples = peoples?.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addPeople = (name, cpf, phone, email) => {
    setPeoples([...peoples, { id: uuidv4(), name, cpf, phone, email }]);
  };

  const deletePeople = (id: string) => {
    setPeoples(peoples.filter((people) => people.id !== id));
  };

  const updatePeople = (id: string, updatePeople) => {
    setPeoples(
      peoples.map((people) => (people.id === id ? updatePeople : people))
    );
  };

  return (
    <PeopleContext.Provider
      value={{ sortedPeoples, addPeople, deletePeople, updatePeople }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
