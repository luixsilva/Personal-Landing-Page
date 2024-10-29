import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10; /* Mantém o Header acima do conteúdo */
`;

export const ContainerSection = styled.div`
  margin-top: 150px;
  padding: 0;
  /* margin: 0; */
  flex: 1;
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Image = styled.img`
  height: 400px;
  border-radius: 5rem;
`;

export const ContainerImage = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  margin-left: 40%;
`;

export const ContainerText = styled.div`
  padding: 0;
  margin: 0;
  z-index: 2;
  width: 40%;
  margin-right: 30%;
  text-align: justify;
`;
