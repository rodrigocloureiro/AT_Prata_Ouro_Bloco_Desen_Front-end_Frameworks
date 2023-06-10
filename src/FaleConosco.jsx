import { Component } from "react";
import "./FaleConosco.css";
import Input from "./Input";
import TextArea from "./TextArea";
import Botao from "./Botao";

//item 3.1 realizado 
export default class FaleConosco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    };
  }

  render() {
    const { nome, email, telefone, mensagem } = this.state;
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
                valor={nome}
                handleEvent={(e) => this.setState({nome: e.target.value})}
              />
              <Input
                label="E-mail:"
                type="text"
                name="email"
                id="email"
                placeholder="elias.jorge@gmail.com"
                valor={email}
                handleEvent={(e) => this.setState({email: e.target.value})}
              />
              <Input
                label="Telefone:"
                type="tel"
                name="telefone"
                id="telefone"
                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                placeholder="(21) 99912-5003"
                valor={telefone}
                handleEvent={(e) => this.setState({telefone: e.target.value})}
              />
              <TextArea
                label="Mensagem:"
                name="mensagem"
                id="mensagem"
                placeholder="Escreva aqui sua mensagem"
                valor={mensagem}
                handleEvent={(e) => this.setState({mensagem: e.target.value})}
              />
              <p className="aviso">* Item de preenchimento obrigatório</p>
              {/* item 3.2 realizado */}
              <Botao
                type="submit"
                texto="Enviar"
              />
            </form>
          </div>
        </div>
      </article>
    );
  }
}
