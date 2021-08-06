import { useContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { PeopleContext } from "../../contexts/PeopleContext";
import Pagination from "./Pagination";
import People from "./People";

const PeopleList = () => {
  //@ts-ignore
  const { sortedPeoples } = useContext(PeopleContext);

  const [showAlert, setShowAlert] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [peoplesPerPage] = useState(5);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      handleShowAlert();
    };
  }, [sortedPeoples]);

  const indexOfLastPeople = currentPage * peoplesPerPage;
  const indexOfFirstPeople = indexOfLastPeople - peoplesPerPage;
  const currentPeoples = sortedPeoples.slice(
    indexOfFirstPeople,
    indexOfLastPeople
  );
  const totalPagesNum = Math.ceil(sortedPeoples.length / peoplesPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Gerenciar <b>Pessoas</b>
            </h2>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Lista de Pessoas Cadastradas foi atualizada!
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {currentPeoples.map((people) => (
            <tr key={people.id}>
              <People people={people} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentPeoples={currentPeoples}
        sortedPeoples={sortedPeoples}
      />
    </>
  );
};

export default PeopleList;
