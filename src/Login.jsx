import { Component } from "react";
import './Login.css';
import Input from "./Input";
import { Link, Navigate } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: props.corpo,
      username: '',
      senha: '',
      tipo: '',
    };
    //item 1.1 realizado
    this.handleLogin = this.handleLogin.bind(this);
  }

  //item 1.1 realizado
  handleLogin(e) {
    const { setLogado, handleUsuario } = this.props;
    e.preventDefault();
    const {dados, username, senha, tipo} = this.state;
    if(dados.some(dado => dado.username === username && dado.senha === senha && dado.tipo === tipo)) {
      //item 1.3 realizado
      setLogado(true);
      handleUsuario(dados.find(dado => dado.username === username && dado.senha === senha && dado.tipo === tipo));
    } else {
      alert("Login inválido!");
    }
  }

  //item 1.2 realizado
  handleUsername = (e) => {
    //item 1.3 realizado
    this.setState({username: e.target.value});
  }

  //item 1.2 realizado
  handlePassword = (e) => {
    //item 1.3 realizado
    this.setState({senha: e.target.value})
  }

  //item 1.2 realizado
  handleSelecionaCaixa = (e) => {
    const caixas = document.querySelectorAll('.login_area_caixa_selecionavel');
    caixas.forEach(caixa => caixa.classList.remove('preenchimento_caixa'));
    e.target.classList.add('preenchimento_caixa');
    //item 1.3 realizado
    this.setState({tipo: e.target.nextSibling.textContent.toLowerCase()});
  }

  render() {
    const {username, senha} = this.state;
    const { logado } = this.props;

    return (
      <article className="login">
        <div className="container">
          <h2 className="login_title">Login</h2>
          <div className="login_area">
            <form onSubmit={this.handleLogin}>
              <div className="login_area_tipo">
                <div onClick={(e) => this.handleSelecionaCaixa(e)}  className="login_area_caixa_selecionavel"></div>
                <span>Professor</span>
                <div onClick={(e) => this.handleSelecionaCaixa(e)} className="login_area_caixa_selecionavel"></div>
                <span>Aluno</span>
                <div onClick={(e) => this.handleSelecionaCaixa(e)} className="login_area_caixa_selecionavel"></div>
                <span>Coordenador</span>
              </div>
              <Input
                label="Username:"
                type="text"
                name="username"
                id="username"
                valor={username}
                handleEvent={(e) => this.handleUsername(e)}
                placeholder="rod7"
              />
              <Input
                label="Senha:"
                type="password"
                name="senha"
                id="senha"
                valor={senha}
                handleEvent={(e) => this.handlePassword(e)}
                placeholder="•••••••••••"
              />
              <p className="aviso">* Item de preenchimento obrigatório</p>
              <Input
                type="submit"
              />
              <Link to="/cadastre-se"className="login_area_visitante">Visitante? Cadastre-se</Link>
              {logado && <Navigate to="/" />}
            </form>
          </div>
        </div>
      </article>
    );
  }
}
