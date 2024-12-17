import Pesquisa from "../componentes/Pesquisa";
import styled from "styled-components";
import UltimosLancamentos from "../componentes/UltimosLancamentos";
import CardRecomenda from "../componentes/CardRecomenda";
import imagemLivro from "../imagens/livro2.png";
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
