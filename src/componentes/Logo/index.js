import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-right: 10px;
`;
const LogoImagem = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImagem src={logo} alt="logo" />
      <p>
        <strong>Yuki</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
