import Button from "../Button/index.tsx";
import * as S from "./index";

const Header = () => {
  return (
    <>
      <S.ContainerHeader>
        <S.ContainerLogo>
          <div>logo</div>
        </S.ContainerLogo>
        <S.ContainerMenu>
          <S.ListItem><a href="#home">Home</a></S.ListItem>
          <S.ListItem><a href="#projects">Portifólio</a></S.ListItem>
        </S.ContainerMenu>
        <S.ContainerButton>
          <Button></Button>
        </S.ContainerButton>
      </S.ContainerHeader>
    </>
  );
};
export default Header;
