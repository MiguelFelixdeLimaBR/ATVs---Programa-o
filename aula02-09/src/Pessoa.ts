export default abstract class Pessoa{
    private nome: string;
    private idade: number;
    private cpf: string;
    private tipoSanguineo?: string;

    constructor(
        nome: string,
        idade: number,
        cpf: string
    ){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    getNome():string{
        return this.nome
    }

    getIdade():number{
        return this.idade
    }
      getCpf():string{
        return this.cpf
    }

    setNome(nome:string):void{
        if(nome != ''){
            this.nome = nome
        }else{
            console.log('O nome não pode ser vazio!')
        }
    }

    imprimeInfo():void{
        console.log(this.nome+'  '+this.idade+'  '+this.cpf)
    }

}