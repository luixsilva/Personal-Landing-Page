import React from "react";
import * as S from "./index";

interface CircleProps {
  color?: string;
  margin_rigth?: number;
  margin_top?: number;
  margin_left?: number;
}

const Circle: React.FC<CircleProps> = (props) => {
  return (
    <>
      <S.Circle
        margin_left={props.margin_left}
        margin_top={props.margin_top}
        margin_rigth={props.margin_rigth}
        color={props.color}
      />
    </>
  );
};

export default Circle;
