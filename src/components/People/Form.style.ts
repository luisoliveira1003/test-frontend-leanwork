import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ContentForm = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 3rem;
  }

  label {
    color: var(--label);
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 3rem;
    border: 0;
    border-bottom: 1px solid var(--input-border);
    outline: 0;
    color: var(--input-without-focus);
    margin-bottom: 2rem;
    font-size: 1.3rem;
    background: transparent;
    transition: border-color 0.2s;
  }

  input:focus {
    color: var(--input-on-focus);
  }
`;

export const ButtonForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    width: 12rem;
    height: 3rem;
    font-size: 1.2rem;
    color: var(--button-enabled-focus);
    background-color: var(--button-background);
    border: none;
    border-radius: 4rem;

    &:enabled:hover {
      opacity: 0.7;
    }
  }

  button:disabled {
    color: var(--button-disabled);
    background-color: var(--button-disabled-background);
  }
`;
