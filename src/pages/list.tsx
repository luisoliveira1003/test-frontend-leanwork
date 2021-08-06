import PeopleList from "../components/People/PeopleList";
import PeopleContextProvider from "../contexts/PeopleContext";

export default function List() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <PeopleContextProvider>
            <PeopleList />
          </PeopleContextProvider>
        </div>
      </div>
    </div>
  )
}
