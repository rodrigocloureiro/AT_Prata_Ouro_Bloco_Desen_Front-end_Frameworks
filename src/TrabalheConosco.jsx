import "./TrabalheConosco.css";
import Input from "./Input";
import TextArea from "./TextArea";

export default function TrabalheConosco() {
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
              label="Currículo:"
              name="curriculo"
              id="curriculo"
              placeholder="Detalhe aqui o seu currículo"
            />
            <p className="aviso">* Item de preenchimento obrigatório</p>
            <Input type="submit" />
          </form>
        </div>
      </div>
    </article>
  );
}
