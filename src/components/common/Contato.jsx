import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/Contato.css';

export default function Contato({contatos}) {
  const { contatoID } = useParams();
  //item 2.1 realizado
  const [ contato, setContato ] = useState(() => contatos.find(contato => contato.path === contatoID));

  //item 2.3 realizado && item 1.3 realizado
  useEffect(() => setContato(contatos.find(contato => contato.path === contatoID)), [contatoID, contatos]);

  return (
    <section className="contato_area">
      {contato &&
        <div className="contato_area__contatos">
          <div className="contato">
            <p className="contato_title">{contato.contato}</p>
          </div>
          <div className="contato">
            <p className="contato_subtitle">Horário de atendimento:</p>
            {
              contato.horarios.map((horario, index) => (
                <p key={index} className="contato_info">{horario}</p>
              ))
            }
          </div>
          <div className="contato">
            <p className="contato_subtitle">Contato:</p>
            {
              contato.contatos.map((contato, index) => (
                <p key={index} className="contato_info">{contato}</p>
              ))
            }
          </div>
        </div>
      }
    </section>
  );
}