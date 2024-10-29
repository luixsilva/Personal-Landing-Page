import styled from "styled-components";

export const Button = styled.button`
  background-color: #F0EB8D;
  /* border: 2px solid #8F43EE; */
  width: 150px;
  border-radius: 3rem;
  color: #413543;
  box-shadow: 5px 8px #8F43EE;
  &:hover{
    background-color: #8F43EE;
    color: #FFF;
    transform: scale(1.1);
    box-shadow: none;
  }
  transition: 0.5s ease;
`;
