import "./TrabalheConosco.css";
import Input from "./Input";
import TextArea from "./TextArea";
import { useState } from "react";
import Botao from "./Botao";
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
  curriculo: string()
    .min(10, "O currículo deve ter no mínimo 10 caracteres")
    .required("Campo obrigatório"),
});

//item 3.1 realizado 
export default function TrabalheConosco() {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ curriculo, setCurriculo ] = useState('');
  const [ erros, setErros ] = useState({});
  const [ valoresForm, setValoresForm ] = useState({
    nome: '',
    email: '',
    telefone: '',
    curriculo: '',
  });
  const [ enviado, setEnviado ] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValoresForm({
      ...valoresForm,
      [name]: value,
    });
  };

  const handleValidateField = async (e) => {
    const { name, value } = e.target;
    try {
      await reach(validationSchema, name).validate(value);
      setErros({
        ...erros,
        [name]: null,
      });
    } catch(error) {
      setErros({
        ...erros,
        [name]: error.message,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(valoresForm, {abortEarly: false});
      setEnviado(true);
    } catch(error) {
      const errosValidacao = {};
      error.inner.forEach(err => {
        errosValidacao[err.path] = err.message;
      });
      setErros(errosValidacao);
    }
  };

  return (
    <article className="trabalhe_conosco">
      <div className="container">
        <h2 className="trabalhe_conosco_title">Trabalhe Conosco</h2>
        <div className="trabalhe_conosco_inputs">
          <form onSubmit={handleSubmit}>
            <Input
              label="Nome:"
              type="text"
              name="nome"
              id="nome"
              placeholder="Jorge Elias Silva"
              valor={nome}
              handleEvent={(e) => {setNome(e.target.value); handleInputChange(e)}}
              handleInput={handleValidateField}
            />
            {erros.nome && <p className="aviso_form">{erros.nome}</p>}
            <Input
              label="E-mail:"
              type="text"
              name="email"
              id="email"
              placeholder="elias.jorge@gmail.com"
              valor={email}
              handleEvent={(e) => {setEmail(e.target.value); handleInputChange(e)}}
              handleInput={handleValidateField}
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
              handleEvent={(e) => {setTelefone(e.target.value); handleInputChange(e)}}
              handleInput={handleValidateField}
            />
            {erros.telefone && <p className="aviso_form">{erros.telefone}</p>}
            <TextArea
              label="Currículo:"
              name="curriculo"
              id="curriculo"
              placeholder="Detalhe aqui o seu currículo"
              valor={curriculo}
              handleEvent={(e) => {setCurriculo(e.target.value); handleInputChange(e)}}
              handleInput={handleValidateField}
            />
            {erros.curriculo && <p className="aviso_form">{erros.curriculo}</p>}
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
