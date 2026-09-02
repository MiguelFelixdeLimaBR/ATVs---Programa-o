import Pessoa from "./Pessoa";

export default class Professor extends Pessoa{
    private siape: string;
    private nivelInst: string;
    private areaForm:string;

    constructor(
        nome:string,
        idade:number,
        cpf:string,
        siape:string,
        nivelInst:string,
        areaForm:string
    )
    {
    super(nome,idade,cpf)
        this.siape = siape;
        this.nivelInst = nivelInst;
        this.areaForm = areaForm;
    }
     getSiape():string{
        return this.siape;
    }
     getnivelInst():string{
        return this.nivelInst;
    }
    getareaForm():string{
        return this.areaForm;
    }

    setsiape(siape:string):void{
        this.siape = siape
    }
    setnivelInst(nivelInst:string):void{
        this.nivelInst = nivelInst
    }
    setareaForm(areaForm:string):void{
        this.areaForm = areaForm
    }
    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()} - Idade: ${this.getIdade()} - CPF: ${this.getCpf()}`)
        console.log('Siape: '+this.siape+'  nivel de instrução:'+this.nivelInst+' Área de formação '+this.areaForm)
    }
}
