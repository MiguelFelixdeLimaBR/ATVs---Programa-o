import Funcionario from './Funcionário.js';

export default class Pj extends Funcionario{
    private horas: number;
    private salarioLiquido: number;
    private valorHora: number;

    constructor( 
        nome: string,
        id: number,
        cpf: string,
        salariobase: number,
        horas: number,
        salarioLiquido: number,
        valorHora: number
    ){
        super( nome, id, cpf, salariobase );
        this.horas = horas;
        this.salarioLiquido = salarioLiquido;
        this.valorHora = valorHora;
    }
    getHoras():number{
        return this.horas;
    }

    getValorHora():number{
        return this.valorHora;
    }

    setHoras(horas:number):void{
        if (horas != 0 && horas > 0 && horas <= 220) {
            this.horas = horas
        } else {
            console.log('O número de horas não pode ser vazio, negativo ou maior que 220!')
        }
    }

    setValorHora(valorHora:number):void{
        this.valorHora = valorHora
    }

    getSalarioLiquido():number{
        return this.salarioLiquido;
    }

    setSalarioLiquido(salarioLiquido:number, horas:number, valorHora:number):void{
        if((salarioLiquido)){
            this.salarioLiquido = valorHora * horas;
        }
        this.salarioLiquido = salarioLiquido;
    }

    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()} - ID: ${this.getId()} - CPF: ${this.getCpf()} - Tipo: Pj - Salário : ${this.getSalarioLiquido()} - Horas: ${this.getHoras()} - Valor Hora: ${this.getValorHora()}`)

        console.log(`Horas: ${this.horas}`)
        console.log(`Salário Líquido: ${this.salarioLiquido}`)
    }


}