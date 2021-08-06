export type People = {
  id?: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
};

export interface PeopleProps {
  people: People;
}
