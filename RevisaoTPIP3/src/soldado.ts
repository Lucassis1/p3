  import { Militar } from "./militar";

  class Soldado extends Militar {
    cim: number;
    saldo: number;
    numero: number;

    constructor(
        nome: string,
        idade: number,
        altura: number,
        email: string,
        cim: number,
        saldo: number,
        numero: number = 0
    ) {
        super(nome, idade, altura, email, numero);
        this.cim = cim;
        this.saldo = saldo;
        this.numero = numero;
        console.log(this.requisitos() ? "Apto" : "Inapto");
    }

    validaEmail(): boolean {
        const regex = /^[a-zA-Z0-9._%-]+@(eb|marinha|fab)\.mil\.br$/;
        return regex.test(this.email);
    }     

    requisitos(): boolean {
        return this.altura >= 1.6 && this.idade >= 18 && this.idade <= 32;
    }
}


    export { Soldado };