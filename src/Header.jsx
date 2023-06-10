import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import logo from './assets/global_connect_logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logado, setLogado, usuario } = this.props;
    
    //item 1.8 realizado && item 4.3 realizado
    return (
      <header>
        <div className="container">
          <nav>
            <NavLink to='/' className="brand_name">
              <img src={logo} alt="Logo GlobalConnect" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/quem_somos">Quem Somos</NavLink>
              </li>
              <li>
                <NavLink to="/fale_conosco">Fale Conosco</NavLink>
              </li>
              <li>
                <NavLink to="/trabalhe_conosco">Trabalhe Conosco</NavLink>
              </li>
            </ul>
            {!logado ?
              <div className="login_area">
                <NavLink to="/login" className="btn_login">Entrar</NavLink>
                <NavLink to="/cadastre-se" className="btn_signup">Cadastre-se</NavLink>
              </div>
              :
              <div className="usuario_area">
                <p>{usuario.nome}</p>
                <p>|</p>
                <NavLink to={`/area_${usuario.tipo}/${usuario.id}`}>Área do {usuario.tipo}</NavLink>
                <p>|</p>
                <NavLink to="/" onClick={() => setLogado(false)}>Sair</NavLink>
              </div>
            }
          </nav>
        </div>
      </header>
    );
  }
}
