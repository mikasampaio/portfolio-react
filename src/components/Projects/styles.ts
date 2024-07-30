import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.125rem;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Text = styled.h1`
  font-weight: 400;
  color: #21243d;
  font-size: 1.375rem;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  gap: 3rem;
  padding-bottom: 2rem;
  width: calc(90% + 50px);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: #21243d;

  div {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 5px;
`;
