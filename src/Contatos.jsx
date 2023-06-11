import { Link, Outlet } from 'react-router-dom';
import './Contatos.css';
import banner from './assets/contact-us-banner.png';
import { useState ,useEffect } from 'react';

export default function Contatos({setContatos}) {
  //item 2.1 realizado
  const [ dados, setDados ] = useState("");

  //item 1.3 realizado && item 2.3 realizado
  useEffect(() => {
    fetch("../src/data/contatos.json")
    .then(response => response.json())
    .then(data => {
      setDados(data.contatos);
      setContatos(data.contatos);
    });
  }, []);
  
  //item 4.2 realizado
  return (
    <article className="contatos_area">
      <div className="container">
        <h2 className="contatos_title">Contatos</h2>
        <img src={banner} className="contatos_banner" alt="" />
        <p className="contatos_texto">Valorizamos a comunicação eficiente e estamos empenhados em fornecer diversas opções de contato para atender às necessidades dos nossos alunos e visitantes.</p>
        <p className="contatos_texto">Confira abaixo as opções disponíveis e clique na opção desejada.</p>
        <div className="contatos_opcoes">
          <ol className="lista_opcoes">
            {
              dados && dados.map(dado => (
                <li key={dado.id}>
                  <Link to={dado.path} className="contatos_opcao">{dado.contato}:</Link>
                  <span>{dado.texto}</span>
                </li>
              ))
            }
          </ol>
        </div>
        <Outlet />
      </div>
    </article>
  );
}