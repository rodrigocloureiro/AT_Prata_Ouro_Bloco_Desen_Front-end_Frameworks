import "./AreaAluno.css";
import { Component } from "react";
import { useEffect, useLayoutEffect, useState } from "react";

//item 2.2 realizado

// export default class AreaAluno extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       aulasCurso: [],
//     };
//   }

//   componentDidMount() {
//     const { usuario } = this.props;
//     fetch("../src/data/aulas.json")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((item) => {
//         if (usuario.curso === item.curso && usuario.nivel === item.nivel)
//           this.setState({aulasCurso: item.aulas});
//       });
//     });
//   }

//   render() {
//     const { usuario } = this.props;
//     const { aulasCurso } = this.state;
//     return (
//       <article className="aluno_area">
//         <div className="container">
//           <h2 className="aluno_area_title">Área do Aluno</h2>
//           <p className="aluno_area_nome">Olá, {usuario.nome} - Sala de Aula</p>
//           <div className="cursos">
//             <p className={usuario.curso === "Espanhol" ? "curso curso_selecionado" : "curso"}>
//               Espanhol
//             </p>
//             <p className={usuario.curso === "Inglês" ? "curso curso_selecionado" : "curso"}>
//               Inglês
//             </p>
//             <p className={usuario.curso === "Italiano" ? "curso curso_selecionado" : "curso"}>
//               Italiano
//             </p>
//             <p className={usuario.curso === "Francês" ? "curso curso_selecionado" : "curso"}>
//               Francês
//             </p>
//             <p className={usuario.curso === "Alemão" ? "curso curso_selecionado" : "curso"}>
//               Alemão
//             </p>
//           </div>
//           <div className="niveis">
//             <p className={usuario.nivel === "Básico" ? "nivel nivel_selecionado" : "nivel"}>
//               Básico
//             </p>
//             <p className={usuario.nivel === "Intermediário" ? "nivel nivel_selecionado" : "nivel"}>
//               Intermediário
//             </p>
//             <p className={usuario.nivel === "Avançado" ? "nivel nivel_selecionado" : "nivel"}>
//               Avançado
//             </p>
//           </div>
//           <div className="aulas">
//             {
//               aulasCurso.map((aula, index) => (
//                 <iframe key={index} src={aula} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
//               ))
//             }
//           </div>
//         </div>
//       </article>
//     );
//   }
// }

//item 2.2 realizado
export default function AreaAluno({usuario}) {
  //item 2.1 realizado
  const [ aulasCurso, setAulasCurso ] = useState([]);

  //item 1.4 realizado && item 2.3 realizado
  useEffect(() => {
    //item 1.6 realizado
    fetch('../src/data/aulas.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        if(usuario.curso === item.curso && usuario.nivel === item.nivel)
          //item 1.3 realizado
          setAulasCurso(item.aulas);
      })
    });
  }, []);

  //item 2.4 realizado
  useLayoutEffect(() => {
    document.title = `${usuario.nome}`;
    return () => document.title = 'GlobalConnect: Curso de Idiomas Online';
  }, []);

  return (
    <article className="aluno_area">
      <div className="container">
        <h2 className="aluno_area_title">Área do Aluno</h2>
        <p className="aluno_area_nome">Olá, {usuario.nome} - Sala de Aula</p>
        <div className="cursos">
          <p className={usuario.curso === "Espanhol" ? "curso curso_selecionado" : "curso"}>
            Espanhol
          </p>
          <p className={usuario.curso === "Inglês" ? "curso curso_selecionado" : "curso"}>
            Inglês
          </p>
          <p className={usuario.curso === "Italiano" ? "curso curso_selecionado" : "curso"}>
            Italiano
          </p>
          <p className={usuario.curso === "Francês" ? "curso curso_selecionado" : "curso"}>
            Francês
          </p>
          <p className={usuario.curso === "Alemão" ? "curso curso_selecionado" : "curso"}>
            Alemão
          </p>
        </div>
        <div className="niveis">
          <p className={usuario.nivel === "Básico" ? "nivel nivel_selecionado" : "nivel"}>
            Básico
          </p>
          <p className={usuario.nivel === "Intermediário" ? "nivel nivel_selecionado" : "nivel"}>
            Intermediário
          </p>
          <p className={usuario.nivel === "Avançado" ? "nivel nivel_selecionado" : "nivel"}>
            Avançado
          </p>
        </div>
        <div className="aulas">
          {
            aulasCurso.map((aula, index) => (
              <iframe key={index} src={aula} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            ))
          }
        </div>
      </div>
    </article>
  );
}
