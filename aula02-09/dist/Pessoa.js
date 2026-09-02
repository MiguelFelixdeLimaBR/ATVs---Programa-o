export default class Pessoa {
    nome;
    idade;
    cpf;
    tipoSanguineo;
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    setNome(nome) {
        if (nome != '') {
            this.nome = nome;
        }
        else {
            console.log('O nome não pode ser vazio!');
        }
    }
    imprimeInfo() {
        console.log('Nome: ' + this.nome + 'Idade: ' + this.idade + 'CPF: ' + this.cpf);
    }
}
//# sourceMappingURL=Pessoa.js.map