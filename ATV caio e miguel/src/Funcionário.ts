export default abstract class Funcionario{
    private nome: string;
    private id: number;
    private cpf: string;
    private salariobase: number; 


    constructor(
        nome: string,
        id: number,
        cpf: string,
        salariobase: number,
    ){
        this.nome = nome;
        this.id = id;
        this.cpf = cpf;
        this.salariobase = salariobase;
    }

    getNome():string{
        return this.nome
    }

    getId():number{
        return this.id
    }

    getCpf():string{
        return this.cpf
    }

    getSalariobase():number{
        return this.salariobase
    }

    setNome(nome:string):void{
        if(nome != '' && nome.length > 3){
            this.nome = nome
        }else{
            console.log('O nome não pode ser vazio e deve ter mais de 3 caracteres!')
        }
    }

    setId(id:number):void{
        if(id != 0 ){
            this.id = id
        }else{
            console.log('O ID não pode ser vazio!')
        }
    }

    setSalariobase(salariobase:number):void{
        if(salariobase != 0 && salariobase > 0){
            this.salariobase = salariobase
        }else{
            console.log('O salário base não pode ser vazio ou negativo!')
        }
    }

    setCpf(cpf:string):void{
        if(this.cpfValido(cpf)){
            this.cpf = cpf
        }else{
            console.log('O CPF informado é inválido!')
        }
    }

    alterarDados(nome:string, salario:number, cpf:string):void{
        if(nome.length <= 3){
            console.log('O nome não pode ser vazio e deve ter mais de 3 caracteres!')
            return
        }

        if(salario <= 0){
            console.log('O salário não pode ser vazio ou negativo!')
            return
        }

        if(!this.cpfValido(cpf)){
            console.log('O CPF informado é inválido!')
            return
        }

        this.nome = nome
        this.salariobase = salario
        this.cpf = cpf
    }

    private cpfValido(cpf:string):boolean{
        if(!/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)){
            return false
        }

        const numeros = cpf.replace(/\D/g, '')
        if(/^([0-9])\1{10}$/.test(numeros)){
            return false
        }

        let soma = 0
        for(let indice = 0; indice < 9; indice++){
            soma += Number(numeros[indice]) * (10 - indice)
        }
        let resto = (soma * 10) % 11
        const primeiroDigito = resto === 10 ? 0 : resto

        if(primeiroDigito !== Number(numeros[9])){
            return false
        }

        soma = 0
        for(let indice = 0; indice < 10; indice++){
            soma += Number(numeros[indice]) * (11 - indice)
        }
        resto = (soma * 10) % 11
        const segundoDigito = resto === 10 ? 0 : resto

        return segundoDigito === Number(numeros[10])
    }

    abstract imprimeInfo(): void;
}