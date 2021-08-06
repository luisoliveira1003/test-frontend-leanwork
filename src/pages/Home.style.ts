import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 70%;
  height: 100vh;
  background: linear-gradient(
    90deg,
    var(--background-initial),
    var(--background-final)
  );
`;
