import './Botao.css';

export default function Botao({type, texto, largura, corTexto, padding, radius}) {
  return (
    <button
      type={type}
      className="botao_personalizado"
      style={{
        width: `${largura}`,
        color: `${corTexto}`,
        borderRadius: `${radius}`,
        padding: `${padding}`,
      }}
    >
      {texto}
    </button>
  );
}