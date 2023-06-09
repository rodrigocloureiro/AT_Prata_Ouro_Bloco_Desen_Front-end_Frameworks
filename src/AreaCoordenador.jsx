import { Component } from "react";
import './AreaCoordenador.css';

export default class AreaCoordenador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: props.corpo.filter(aluno => aluno.tipo === "aluno"),
      funcionarios: props.corpo.filter(funcionario => funcionario.tipo === "professor"),
    };
  }

  render() {
    const { usuario } = this.props;
    const { alunos, funcionarios } = this.state;

    return (
      <article className="coordenador_area">
        <div className="container">
          <h2 className="coordenador_area_title">Área do Coordenador</h2>
          <p className="coordenador_area_nome">Olá, {usuario.nome} - Central</p>
          <div className="coordenador_area__funcionarios">
            <h3 className="coordenador_area_subtitle">Professores</h3>
            <ul className="lista_funcionarios">
              {
                funcionarios.map(funcionario => (
                  <li key={`funcionario${funcionario.id}`} className="funcionario">
                    <p className="funcionario__nome">{funcionario.nome}</p>
                    <p className="funcionario__curso">{funcionario.curso}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="coordenador_area__alunos">
            <h3 className="coordenador_area_subtitle">Alunos</h3>
            <ul className="lista_alunos">
              {
                alunos.map(aluno => (
                  <li key={`aluno${aluno.id}`} className="aluno">
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
            <p className="coordenacao_detalhes">Alunos: {alunos.length}</p>
            <p className="coordenacao_detalhes">Professores: {funcionarios.length}</p>
          </div>
        </div>
      </article>
    );
  }
}
