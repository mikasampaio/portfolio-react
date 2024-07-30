import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: end;
  gap: 3rem;
  padding: 1rem 2rem;
`;

export const Option = styled.button`
  color: #000000;
  font-weight: 500;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
