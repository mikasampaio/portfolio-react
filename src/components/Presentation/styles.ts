import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  padding: 3.125rem;

  @media screen and (max-width: 1024px) {
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;
