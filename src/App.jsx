//item 1.5 realizado - 6 componentes criados e importados abaixo
import "./App.css";
import Header from "./Header";
import Principal from './Principal';
import QuemSomos from "./QuemSomos";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaleConosco from "./FaleConosco";
import TrabalheConosco from "./TrabalheConosco";
import Login from "./Login";
import Cadastro from "./Cadastro";
import { useEffect, useState, useReducer } from "react";
import AreaAluno from "./AreaAluno";
import AreaProfessor from "./AreaProfessor";
import AreaCoordenador from "./AreaCoordenador";

// Itens mais geneéricos eu coloquei acima do componente principal da aplicação
//item 1.7 realizado
//item 1.9 realizado
//item 2.6 realizado
//item 2.7 realizado

function reducer(state, action) {
  switch(action.type) {
    case "atualizar":
      return [...action.corpo];
    case "matricular":
      return [...state, action.membro];
    default:
      return state;
  }
}

function App() {
  //item 2.1 realizado
  const [ logado, setLogado ] = useState(false);
  const [ usuario, setUsuario ] = useState({});
  const [ corpo, setCorpo ] = useState([]); // Corpo discente e docente
  //item 2.5 realizado
  const [ state, dispatch ] = useReducer(reducer, corpo);

  //item 1.4 realizado && item 2.3 realizado
  useEffect(() => {
    (async () => {
      //item 1.6 realizado
      const response = await fetch("src/data/dados_login.json");
      const data = await response.json();
      //item 1.3 realizado
      setCorpo(data);
    })();
  }, []);

  //item 1.4 realizado && item 2.3 realizado
  useEffect(() => dispatch({type: "atualizar", corpo: corpo}), [corpo]);

  //item 1.2 realizado
  const handleAdicionaMembro = (nome, curso, nivel, username, senha) => {
    const novoMembro = {
      id: state.length + 1,
      nome: nome,
      username: username,
      senha: senha,
      tipo: "aluno",
      curso: curso,
      nivel: nivel,
    };
    dispatch({type: "matricular", membro: novoMembro});
  };

  //item 1.2 realizado
  const handleUsuario = (user) => {
    //item 1.3 realizado
    setUsuario(user);
  };

  return (
    <>
    <Router>
      <Header setLogado={setLogado} logado={logado} usuario={usuario} />
      <main>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="quem_somos" element={<QuemSomos />} />
          <Route path="/fale_conosco" element={<FaleConosco />} />
          <Route path="/trabalhe_conosco" element={<TrabalheConosco />} />
          <Route path="/login" element={<Login setLogado={setLogado} logado={logado} handleUsuario={handleUsuario} corpo={state} />} />
          <Route path="/cadastre-se" element={<Cadastro handleAdicionaMembro={handleAdicionaMembro} />} />
          <Route path="/area_aluno" element={<AreaAluno usuario={usuario} />} />
          <Route path="/area_professor" element={<AreaProfessor corpo={state} usuario={usuario} />} />
          <Route path="/area_coordenador" element={<AreaCoordenador corpo={state} usuario={usuario} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
