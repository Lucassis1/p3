import { Militar } from "./militar";

export class Oficial extends Militar {
    cim: number;
    soldo: number;
    patente: number;

    constructor(
        nome: string,
        idade: number,
        altura: number,
        email: string,
        cim: number,
        soldo: number,
        patente: number
    ) {
        super(nome, idade, altura, email, cim);
        this.cim = cim;
        this.soldo = soldo;
        this.patente = patente;
        console.log(this.validaEmail() ? "E-mail válido" : "E-mail inválido");
    }

    validaEmail(): boolean {
        const regex = /^[a-zA-Z0-9._%-]+@(eb|marinha|fab)\.mil\.br$/;
        return regex.test(this.email);
    }  

    getPatente(): string {
        switch (this.patente) {
            case 10:
                return "Marechal";
            case 9:
                return "General";
            case 8:
                return "Coronel";
            case 7:
                return "Tenente-Coronel";
            case 6:
                return "Major";
            case 5:
                return "Capitão";
            case 4:
                return "Tenente";
            case 3:
                return "Sargento";
            case 2:
                return "Cabo";
            case 1:
                return "Soldado";
            default:
                return "Patente não encontrada";
        }
    }
}