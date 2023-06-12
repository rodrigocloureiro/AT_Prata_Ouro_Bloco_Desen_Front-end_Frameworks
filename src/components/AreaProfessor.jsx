import { Component } from 'react';
import './styles/AreaProfessor.css';

export default class AreaProfessor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: props.corpo.filter(aluno => aluno.tipo === "aluno" && aluno.curso === props.usuario.curso),
    };
  }

  render() {
    const { usuario } = this.props
    const { alunos } = this.state;

    return (
      <article className="professor_area">
        <div className="container">
          <h2 className="professor_area_title">Área do Professor</h2>
          <p className="professor_area_nome">Olá, {usuario.nome} - Central</p>
          <h3 className="professor_area_subtitle">Alunos - Turma {usuario.curso}</h3>
          <div className="professor_area_alunos">
            <ul className="lista_alunos">
              {
                alunos
                .sort((a, b) => `${a.curso}-${a.nivel}` > `${b.curso}-${b.nivel}` ? 1 : -1)
                .map(aluno => (
                  <li key={aluno.id} className="aluno">
                    <p className="aluno__nome">{aluno.nome}</p>
                    <div className="aluno__detalhes">
                      <p className="aluno__curso">{aluno.curso}</p>
                      <p>-</p>
                      <p className="aluno__nivel">{aluno.nivel}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
            <p className="turma_detalhes">Alunos: {alunos.length}</p>
            <p className="turma_detalhes">Básico: {alunos.filter(aluno => aluno.nivel === "Básico").length}</p>
            <p className="turma_detalhes">Intermediário: {alunos.filter(aluno => aluno.nivel === "Intermediário").length}</p>
            <p className="turma_detalhes">Avançado: {alunos.filter(aluno => aluno.nivel === "Avançado").length}</p>
          </div>
        </div>
      </article>
    );
  }
}
