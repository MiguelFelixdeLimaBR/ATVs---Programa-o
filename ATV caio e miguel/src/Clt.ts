import Funcionario from './Funcionário.js';

export default class Clt extends Funcionario{
    private bonusAnual: number;
    private salarioLiquido: number;

    constructor( 
        nome: string,
        id: number,
        cpf: string,
        salariobase: number,
        bonusAnual: number,
        salarioLiquido: number
    ){
        super( nome, id, cpf, salariobase );
        this.bonusAnual = bonusAnual;
        this.salarioLiquido = salarioLiquido;
    }
    getBonusAnual():number{
        return this.bonusAnual;
    }

    setBonusAnual(bonusAnual:number):void{
        this.bonusAnual = bonusAnual
    }

    getSalarioLiquido():number{
        return this.salarioLiquido;
    }

    setSalarioLiquido(salarioLiquido:number, bonusAnual:number, salariobase:number):void{
        this.salarioLiquido = salariobase + bonusAnual;
        this.salarioLiquido = salarioLiquido;
    }

    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()} - ID: ${this.getId()} - CPF: ${this.getCpf()} - Tipo: Clt - Salário : ${this.getSalarioLiquido()} - Bonus Anual: ${this.getBonusAnual()}`)

        console.log(`Bonus Anual: ${this.bonusAnual}`)
        console.log(`Salário Líquido: ${this.salarioLiquido}`)
    }


}