import Pessoa from './Pessoa.js';
export default class Aluno extends Pessoa {
    matricula;
    curso;
    escolaOrigem;
    constructor(nome, idade, cpf, matricula, curso) {
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.curso = curso;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
}
//# sourceMappingURL=Aluno.js.map