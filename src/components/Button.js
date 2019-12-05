import styled from "styled-components";

// styled components
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size=: 1.3;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  letter-spacing: 0.05rem;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
