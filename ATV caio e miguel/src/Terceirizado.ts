import Funcionario from './Funcionário.js';

export default class Terceirizado extends Funcionario{
    private taxa: number;
    private salarioLiquido: number;

    constructor( 
        nome: string,
        id: number,
        cpf: string,
        salariobase: number,
        taxa: number,
        salarioLiquido: number
    ){
        super( nome, id, cpf, salariobase );
        this.taxa = taxa;
        this.salarioLiquido = salarioLiquido;
    }
    getTaxa():number{
        return this.taxa;
    }

    setTaxa(taxa:number):void{
        if( taxa != 0 && taxa > 0 && taxa <= 1){
            this.taxa = taxa
        }   else{
            console.log('A taxa não pode ser vazia, negativa ou maior que 100%!')
        }
    }

    setSalarioLiquido(salarioLiquido:number, taxa:number, salariobase:number):void{
        this.salarioLiquido = salariobase + (salariobase * taxa);
        this.salarioLiquido = salarioLiquido;
    }

    getSalarioLiquido():number{
        return this.salarioLiquido;
    }

    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()} - ID: ${this.getId()} - CPF: ${this.getCpf()} - Salário : ${this.getSalarioLiquido()} - Taxa: ${this.getTaxa()}`)

        console.log(`Taxa: ${this.taxa}`)
        console.log(`Salário Líquido: ${this.salarioLiquido}`)
    }


}