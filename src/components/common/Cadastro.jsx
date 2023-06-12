import { Component } from "react";
import './styles/Cadastro.css';
import Input from "./Input";
import Select from "./Select";
import { Link, Navigate } from "react-router-dom";

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [],
      niveis: [],
      nome: '',
      username: '',
      senha: '',
      confirmaSenha: '',
      curso: '',
      nivel: '',
      cadastrou: false,
    };
  }

  //item 1.4 realizado
  async componentDidMount() {
    //item 1.6 realizado
    const response = await fetch("src/data/cursos.json");
    const data = await response.json();
    this.setState({cursos: data.cursos, niveis: data.niveis});
  }

  //item 1.4 realizado
  componentWillUnmount() {
    this.setState({
      cursos: [],
      niveis: [],
      nome: '',
      username: '',
      senha: '',
      confirmaSenha: '',
      curso: '',
      nivel: '',
      cadastrou: false,
    });
  }

  //item 1.2 realizado
  handleValidacao = (e) => {
    const { nome, username, senha, confirmaSenha, curso, nivel } = this.state;
    const { handleAdicionaMembro } = this.props;
    e.preventDefault();
    if(nome.trim() !== "" && username.trim() !== ""  && nivel.trim() !== "" && (senha === confirmaSenha)) {
      handleAdicionaMembro(nome, curso, nivel, username, senha);
      //item 1.3 realizado
      this.setState({cadastrou: true});
    } else {
      alert("Dados inválidos! (Ex.: Senhas não conferem)");
    }
  };

  render() {
    const { cursos, niveis, nome, username, senha, confirmaSenha, curso, nivel, cadastrou } = this.state;

    //item 1.3 realizado
    return (
      <article className="cadastro">
        <div className="container">
          <h2 className="cadastro_title">Cadastre-se</h2>
          <div className="cadastro_area">
            <form onSubmit={this.handleValidacao}>
              <Input
                label="Nome:"
                type="text"
                name="nome"
                id="nome"
                placeholder="Jorge Elias Silva"
                value={nome}
                handleEvent={(e) => this.setState({nome: e.target.value})}
              />
              <Select
                label="Curso:"
                name="curso"
                item={cursos}
                value={curso}
                handleEvent={(e) => this.setState({curso: e.target.value})}
              />
              <Select
                label="Nível:"
                name="niveis"
                item={niveis}
                value={nivel}
                handleEvent={(e) => this.setState({nivel: e.target.value})}
              />
              <Input
                label="Username:"
                type="text"
                name="username"
                id="username"
                placeholder="rod7"
                value={username}
                handleEvent={(e) => this.setState({username: e.target.value})}
              />
              <Input
                label="Senha:"
                type="password"
                name="senha"
                id="senha"
                placeholder="•••••••••••"
                value={senha}
                handleEvent={(e) => this.setState({senha: e.target.value})}
              />
              <Input
                label="Confirmar Senha:"
                type="password"
                name="confirma_senha"
                id="confirma_senha"
                placeholder="•••••••••••"
                value={confirmaSenha}
                handleEvent={(e) => this.setState({confirmaSenha: e.target.value})}
              />
              <p className="aviso">* Item de preenchimento obrigatório</p>
              <Input
                type="submit"
              />
            </form>
          </div>
        </div>
        {cadastrou && <Navigate to="/" />}
      </article>
    );
  }
}
