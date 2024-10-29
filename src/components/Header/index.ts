import styled from "styled-components";

export const ContainerHeader = styled.div`
  padding: 50px;
  margin: 0;
  display: flex;
  height: 5%;
  width: 100vw;
  /* background-color: #F72798; */
  align-items: center;
  justify-content: center;
`;
export const ContainerLogo = styled.div`
  width: 5%;
  margin-right: 40rem;
`;

export const ContainerMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 3rem;
`;

export const ContainerButton = styled.div`
  margin-left: 3rem;
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #8F43EE;
    transform: scale(1.1);
  }
  font-size: 18px ;
  transition: 0.3s ease;
  /* box-shadow: 0px 0px 2px 2px lightblue; */
`;
