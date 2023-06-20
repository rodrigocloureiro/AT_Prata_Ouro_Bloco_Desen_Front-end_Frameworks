import "./styles/QuemSomos.css";
import { Component } from "react";
import banner from "../assets/quem_somos_banner.png";

export default class QuemSomos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textos: "",
    };
  }

  //item 1.4 realizado
  async componentDidMount() {
    //item 1.6 realizado
    // const response = await fetch("../src/data/quem_somos.json");
    const response = await fetch("https://api.npoint.io/14a14f3e3a7430ea5073");
    const data = await response.json();
    //item 1.3 realizado
    this.setState({ textos: data });
  }

  render() {
    const { textos } = this.state;

    return (
      <article className="quem_somos">
        <div className="container">
          <h2 className="quem_somos_title">Quem Somos</h2>
          <img
            className="quem_somos_logo"
            src={banner}
            alt="Logo GlobalConnect"
          />
          {textos &&
            textos.map((texto) => (
              <p className="quem_somos_texto" key={texto.id}>
                {texto.conteudo}
              </p>
            ))}
        </div>
      </article>
    );
  }
}
