import Pessoa from "./Pessoa";

export default class Professor extends Pessoa{
    private siape: string;
    private nivelInst: string;

    constructor(
        nome:string,
        idade:number,
        cpf:string,
        siape:string,
        nivelInst:string
    )
    {
    super(nome,idade,cpf)
        this.siape = siape;
        this.nivelInst = nivelInst;
    }
     getSiape():string{
        return this.siape;
    }
     getnivelInst():string{
        return this.nivelInst;
    }

    setsiape(siape:string):void{
        this.siape = siape
    }
    setnivelInst(nivelInst:string):void{
        this.nivelInst = nivelInst
    }
}
