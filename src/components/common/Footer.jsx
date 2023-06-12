import { Component } from "react";
import './styles/Footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import footerShape from '../../assets/footer_shape.png';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <img src={footerShape} className="footer_img" alt="Composição footer" />
        <div className="container">
          <div className="info">
            <div className="footer_info">
              <p className="footer_subtitle">Entre em contato</p>
              <p className="footer_text">Fale conosco através das nossas redes sociais</p>
              <div className="footer_icons">
                <a href="https://pt-br.facebook.com/" target="_blank">
                  <img src={facebook} alt="Ícone Facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={instagram} alt="Ícone Instagram" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img src={twitter} alt="Ícone Twitter" />
                </a>
              </div>
            </div>
            <div className="footer_info">
              <p className="footer_subtitle">Informações</p>
              <p className="footer_sub">Sobre nós</p>
              <p className="footer_sub">Carreiras</p>
              <p className="footer_sub">Trabalhe Conosco</p>
              <p className="footer_sub">Blog</p>
            </div>
            <div className="footer_info">
              <p className="footer_subtitle">Características</p>
              <p className="footer_sub">Marketing</p>
              <p className="footer_sub">User Analytics</p>
              <p className="footer_sub">Chat ao-vivo</p>
              <p className="footer_sub">Suporte Ilimitado</p>
            </div>
            <div className="footer_info">
              <p className="footer_subtitle">Recursos</p>
              <p className="footer_sub">IOS e Android</p>
              <p className="footer_sub">Demonstração</p>
              <p className="footer_sub">Recrutadores</p>
              <p className="footer_sub">API Tradução</p>
            </div>
          </div>
          <p>Todos os direitos reservados para GlobalConnect</p>
        </div>
      </footer>
    );
  }
}
