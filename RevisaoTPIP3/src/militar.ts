    export abstract class Militar {
    nome: string;
    idade: number;
    altura: number;
    email: string;

    constructor(nome: string, idade: number, altura: number, email: string, numero: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.email = email; 
        console.log(this.validaEmail(email) ? "E-mail válido" : "E-mail inválido");
    }

    validaEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}
