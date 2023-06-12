import { Component } from "react";
import imageBoy from '../assets/image_boy.png';
import './styles/Principal.css';
import { Link } from "react-router-dom";
import MiniCard from "./common/MiniCard";
import img1MiniCard from '../assets/img1_minicard.png';
import img2MiniCard from '../assets/img2_minicard.png';
import img3MiniCard from '../assets/img3_minicard.png';

export default class Principal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //item 1.8 realizado && tem 4.2 realizado
    return (
      <article className="principal_area">
        <div className="container">
          <div className="cta_area">
            <div>
              <h1>CURSOS DE EXCELENTE QUALIDADE</h1>
              <p className="cta_decoy">Aprenda um novo idioma e expanda seus horizontes com a GlobalConnect.</p>
              <Link to="/cadastre-se" className="btn_cta">Garanta sua vaga!</Link>
              <Link to="/quem_somos" className="btn_cta btn_cta_inverted">Saiba mais</Link>
            </div>
            <img src={imageBoy} alt="Image Boy" />
          </div>
          <div className="minicards">
            <MiniCard
              image={img1MiniCard}
              title='Acesso Vitalício'
              text='Com acesso vitalício ao nosso curso de idiomas, você pode dominar novas línguas no seu próprio ritmo, sem prazos ou restrições.'
            />
            <MiniCard
              image={img2MiniCard}
              title='Certificado Oficial'
              text='Emitimos certificado de conclusão. Aprenda, aprimore suas habilidades linguísticas e comprove seu conhecimento.'
            />
            <MiniCard
              image={img3MiniCard}
              title='Concorra à viagens'
              text='Nossos alunos concorrem semestralmente à viagens incríveis para desfrutar todo o seu aprendizado.'
            />
          </div>
        </div>
      </article>
    );
  }
}
