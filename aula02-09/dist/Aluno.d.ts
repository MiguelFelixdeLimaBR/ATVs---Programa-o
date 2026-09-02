import Pessoa from './Pessoa.js';
export default class Aluno extends Pessoa {
    private matricula;
    private curso;
    private escolaOrigem?;
    constructor(nome: string, idade: number, cpf: string, matricula: string, curso: string);
    getMatricula(): string;
    setMatricula(matricula: string): void;
}
//# sourceMappingURL=Aluno.d.ts.map