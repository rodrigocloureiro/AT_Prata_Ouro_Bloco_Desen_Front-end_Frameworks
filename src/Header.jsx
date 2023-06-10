import { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from './assets/global_connect_logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logado, setLogado, usuario } = this.props;
    
    //item 1.8 realizado
    return (
      <header>
        <div className="container">
          <nav>
            <Link to='/' className="brand_name">
              <img src={logo} alt="Logo GlobalConnect" />
            </Link>
            <ul>
              <li>
                <Link to="/quem_somos">Quem Somos</Link>
              </li>
              <li>
                <Link to="/fale_conosco">Fale Conosco</Link>
              </li>
              <li>
                <Link to="/trabalhe_conosco">Trabalhe Conosco</Link>
              </li>
            </ul>
            {!logado ?
              <div className="login_area">
                <Link to="/login" className="btn_login">Entrar</Link>
                <Link to="/cadastre-se" className="btn_signup">Cadastre-se</Link>
              </div>
              :
              <div className="usuario_area">
                <p>{usuario.nome}</p>
                <p>|</p>
                <Link to={`/area_${usuario.tipo}`}>Área do {usuario.tipo}</Link>
                <p>|</p>
                <Link to="/" onClick={() => setLogado(false)}>Sair</Link>
              </div>
            }
          </nav>
        </div>
      </header>
    );
  }
}
