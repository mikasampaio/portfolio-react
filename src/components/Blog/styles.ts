import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.125rem;
  background-color: #edf7fa;
  width: 90%;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const Text = styled.h1`
  font-weight: 400;
  color: #21243d;
  font-size: 1.375rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  color: #21243d;
  font-size: 1.375rem;
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  width: 340px;
  padding: 1.5rem;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CreatedAt = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
`;

export const Description = styled.span`
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
`;
