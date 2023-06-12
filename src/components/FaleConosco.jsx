import { Component } from "react";
import "./styles/FaleConosco.css";
import Input from "./common/Input";
import TextArea from "./common/TextArea";
import Botao from "./common/Botao";
import { object, string, reach } from "yup";

// item 3.3 realizado
const validationSchema = object({
  nome: string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .required("Campo obrigatório"),
  email: string()
    .email("O e-mail deve ser válido")
    .required("Campo obrigatório"),
  telefone: string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "O número deve seguir o padrão (21) 99912-5003")
    .required("Campo obrigatório"),
  mensagem: string()
    .min(5, "A mensagem deve ter no mínimo 5 caracteres")
    .required("Campo obrigatório"),
});

//item 3.1 realizado 
export default class FaleConosco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
      erros: {},
      valoresForm: {
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
      },
      enviado: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { valoresForm } = this.state;
    this.setState({valoresForm:{
      ...valoresForm,
      [name]: value,
    }});
  };

  handleValidateField = async (e) => {
    const { name, value } = e.target;
    const { erros } = this.state;
    try {
      await reach(validationSchema, name).validate(value);
      this.setState({erros: {
        ...erros,
        [name]: null,
      }});
    } catch(error) {
      this.setState({erros: {
        ...erros,
        [name]: error.message,
      }});
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { valoresForm } = this.state;
    try {
      await validationSchema.validate(valoresForm, {abortEarly: false});
      this.setState({enviado: true});
    } catch(error) {
      const errosValidacao = {};
      error.inner.forEach(err => {
        errosValidacao[err.path] = err.message;
      });
      this.setState({erros: errosValidacao});
    }
  };

  render() {
    const { nome, email, telefone, mensagem, erros, enviado } = this.state;

    return (
      <article className="fale_conosco">
        <div className="container">
          <h2 className="fale_conosco_title">Fale Conosco</h2>
          <div className="fale_conosco_inputs">
            <form onSubmit={this.handleSubmit}>
              <Input
                label="Nome:"
                type="text"
                name="nome"
                id="nome"
                placeholder="Jorge Elias Silva"
                valor={nome}
                handleEvent={(e) => {this.setState({nome: e.target.value}); this.handleInputChange(e)}}
                handleInput={this.handleValidateField}
              />
              {erros.nome && <p className="aviso_form">{erros.nome}</p>}
              <Input
                label="E-mail:"
                type="text"
                name="email"
                id="email"
                placeholder="elias.jorge@gmail.com"
                valor={email}
                handleEvent={(e) => {this.setState({email: e.target.value}); this.handleInputChange(e)}}
                handleInput={this.handleValidateField}
              />
              {erros.email && <p className="aviso_form">{erros.email}</p>}
              <Input
                label="Telefone:"
                type="tel"
                name="telefone"
                id="telefone"
                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                placeholder="(21) 99912-5003"
                valor={telefone}
                handleEvent={(e) => {this.setState({telefone: e.target.value}); this.handleInputChange(e)}}
                handleInput={this.handleValidateField}
              />
              {erros.telefone && <p className="aviso_form">{erros.telefone}</p>}
              <TextArea
                label="Mensagem:"
                name="mensagem"
                id="mensagem"
                placeholder="Escreva aqui sua mensagem"
                valor={mensagem}
                handleEvent={(e) => {this.setState({mensagem: e.target.value}); this.handleInputChange(e)}}
                handleInput={this.handleValidateField}
              />
              {erros.mensagem && <p className="aviso_form">{erros.mensagem}</p>}
              <p className="aviso">* Item de preenchimento obrigatório</p>
              {/* item 3.2 realizado */}
              <Botao
                type="submit"
                texto="Enviar"
                largura="100%"
                corTexto="#23A6F0"
                radius="5px"
                padding="10px"
              />
            </form>
          </div>
          {enviado && <p className="enviou_form">Enviado com sucesso ✔️</p>}
        </div>
      </article>
    );
  }
}
