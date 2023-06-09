import { Component } from "react";
import "./FaleConosco.css";
import Input from "./Input";
import TextArea from "./TextArea";

export default class FaleConosco extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="fale_conosco">
        <div className="container">
          <h2 className="fale_conosco_title">Fale Conosco</h2>
          <div className="fale_conosco_inputs">
            <form>
              <Input
                label="Nome:"
                type="text"
                name="nome"
                id="nome"
                placeholder="Jorge Elias Silva"
              />
              <Input
                label="E-mail:"
                type="text"
                name="email"
                id="email"
                placeholder="elias.jorge@gmail.com"
              />
              <Input
                label="Telefone:"
                type="tel"
                name="telefone"
                id="telefone"
                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                placeholder="(21) 99912-5003"
              />
              <TextArea
                label="Mensagem:"
                name="mensagem"
                id="mensagem"
                placeholder="Escreva aqui sua mensagem"
              />
              <p className="aviso">* Item de preenchimento obrigatório</p>
              <Input type="submit" />
            </form>
          </div>
        </div>
      </article>
    );
  }
}
