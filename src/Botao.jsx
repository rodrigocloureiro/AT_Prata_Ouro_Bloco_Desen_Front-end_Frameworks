import './Botao.css';

export default function Botao({type, texto}) {
  return (
    <button
      type={type}
      className="botao_personalizado"
    >
      {texto}
    </button>
  );
}