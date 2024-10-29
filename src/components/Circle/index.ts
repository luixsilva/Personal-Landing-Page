import styled from "styled-components";

interface CircleProps {
  color?: string;
  margin_rigth?: number;
  margin_left?: number;
  margin_top?: number;
}

export const Circle = styled.div<CircleProps>`
  margin: 0;
  padding: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: ${(props) => props.margin_top}%;
  margin-left: ${(props) => props.margin_left}%;
  margin-right: ${(props) => props.margin_rigth}%;
  background-color: ${(props) => props.color};
  position: absolute;
  z-index: 1;
`;
