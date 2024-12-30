import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;
const ResultadoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Pesquisa() {
  const [livrosPequisados, setlivrosPequisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros()
  }, []);

  async function fetchLivros() {
    const livrosdaAPI = await getLivros();
    setLivros(livrosdaAPI);
  }
  
  async function insertFavorito(id) {
    await postFavorito(id)
    alert(`Livro de id:${id} inserido!`)
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro na nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setlivrosPequisados(resultadoPesquisa);
        }}
      />
      <ResultadoContainer>
        {livrosPequisados.map((livro) => (
          <Resultado onClick={() => insertFavorito(livro.id)}>
            <p>{livro.nome}</p>
            <img src={livro.src} />
          </Resultado>
        ))}
      </ResultadoContainer>
    </PesquisaContainer>
  );
}

export default Pesquisa;
