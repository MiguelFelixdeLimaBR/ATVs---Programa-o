import Pessoa from './Pessoa.js';

export default class Aluno extends Pessoa{
    private matricula: string;
    private curso: string;
    private escolaOrigem?: string;

    constructor( 
        nome: string,
        idade: number,
        cpf: string,
        matricula: string,
        curso: string
    ){
        super( nome, idade, cpf )
        this.matricula = matricula;
        this.curso = curso;
    }

    getMatricula():string{
        return this.matricula;
    }

    setMatricula(matricula:string):void{
        this.matricula = matricula
    }
    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()} - Idade: ${this.getIdade()} - CPF: ${this.getCpf()}`)
        console.log('Matricula: '+this.matricula+ ' Curso: '+this.curso+ ' escola de Origem: '+this.escolaOrigem)
    }


}