import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 3.125rem;
`;

export const ContainerList = styled.div`
  display: flex;
  gap: 3rem;
`;

export const List = styled.div`
  a {
    color: #21243d;
    font-size: 2.5rem;
    text-decoration: none;
    transition: color 0.3s;
  }
  a:hover {
    color: rgba(33, 36, 61, 0.8);
  }
`;
