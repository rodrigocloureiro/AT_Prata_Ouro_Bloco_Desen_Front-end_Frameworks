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
  const [ logado, setLogado ] = useState(false);
  const [ usuario, setUsuario ] = useState({});
  const [ corpo, setCorpo ] = useState([]); // Corpo discente e docente
  const [ state, dispatch ] = useReducer(reducer, corpo);

  useEffect(() => {
    (async () => {
      const response = await fetch("src/data/dados_login.json");
      const data = await response.json();
      setCorpo(data);
    })();
  }, []);

  useEffect(() => dispatch({type: "atualizar", corpo: corpo}), [corpo]);

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

  const handleUsuario = (user) => {
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
