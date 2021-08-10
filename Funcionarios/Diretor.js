import { Funcionario } from "./Funcionario";

export class Diretor extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)

        this._bonificacao = 2;

    }

}