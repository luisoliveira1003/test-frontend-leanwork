import AddForm from "../components/People/AddForm";
import PeopleContextProvider from "../contexts/PeopleContext";
import { Container, Content } from "../../styles/Home.style";

export default function Home() {
  return (
    <Container>
      <Content />
      <PeopleContextProvider>
        <AddForm />
      </PeopleContextProvider>
    </Container>
  );
}
