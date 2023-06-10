import "./TrabalheConosco.css";
import Input from "./Input";
import TextArea from "./TextArea";
import { useState } from "react";
import Botao from "./Botao";

//item 3.1 realizado 
export default function TrabalheConosco() {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ curriculo, setCurriculo ] = useState('');

  return (
    <article className="trabalhe_conosco">
      <div className="container">
        <h2 className="trabalhe_conosco_title">Trabalhe Conosco</h2>
        <div className="trabalhe_conosco_inputs">
          <form>
            <Input
              label="Nome:"
              type="text"
              name="nome"
              id="nome"
              placeholder="Jorge Elias Silva"
              valor={nome}
              handleEvent={(e) => setNome(e.target.value)}
            />
            <Input
              label="E-mail:"
              type="text"
              name="email"
              id="email"
              placeholder="elias.jorge@gmail.com"
              valor={email}
              handleEvent={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Telefone:"
              type="tel"
              name="telefone"
              id="telefone"
              pattern="^\(\d{2}\) \d{5}-\d{4}$"
              placeholder="(21) 99912-5003"
              valor={telefone}
              handleEvent={(e) => setTelefone(e.target.value)}
            />
            <TextArea
              label="Currículo:"
              name="curriculo"
              id="curriculo"
              placeholder="Detalhe aqui o seu currículo"
              valor={curriculo}
              handleEvent={(e) => setCurriculo(e.target.value)}
            />
            <p className="aviso">* Item de preenchimento obrigatório</p>
            //item 3.2 realizado
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
