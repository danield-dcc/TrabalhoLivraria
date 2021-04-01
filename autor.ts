import { Livro } from "./livro";
import prompt from "prompt-sync";

export class Autor {
     private _nome: string;
     private _dataDeNascimento: Date;

    constructor(nome: string, dataDeNascimento: Date) {
        this._nome = nome;
        this._dataDeNascimento = dataDeNascimento;
    }

    public get nome(): string {
        return this._nome
    }

    public set nome(nome: string) {
        this._nome = nome;
    }
    public  get dataDeNascimento(): Date{
        return this._dataDeNascimento
    }
    public set dataDeNascimento(dataDeNascimento:Date){
        this._dataDeNascimento = dataDeNascimento
    }

    
    //método
    public pegarNome(): string {
        let nomeAutor = this.nome
        return nomeAutor
    }

    public salvarNome(salvaNome: string): void {
        this.nome = salvaNome

    }

    //pegar como uma string e salvar como date
    public setDatadeNascimento(dataDeNscimento: string): void {
     
        const diaFormatoBR = dataDeNscimento
        let dia1 = diaFormatoBR.slice(0, 2)
        let mes1 = diaFormatoBR.slice(3, 5)
        let ano1 = diaFormatoBR.slice(6)
        let AnoMesDia = ano1 + "/" + mes1 + "/" + dia1
        const data = new Date(AnoMesDia) // joga as datas no formato internacional

        // const ano = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(data)
        // const mes = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(data)
        // const dia = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(data)

        // console.log(`Data que deve ser salva: ${data}`)
        // console.log(`${dia}/${mes}/${ano}`)
        this._dataDeNascimento = data;
        console.log(`Data salva na classe: ${this._dataDeNascimento}`)

    }

    public getDataDeNascimento(): void {
        let data = this._dataDeNascimento.toLocaleDateString()
        const diaFormatoBR = data
        let posicaoDia2 = diaFormatoBR.lastIndexOf("-")
        let dia2 = diaFormatoBR.slice(posicaoDia2 + 1)
        let posicaoAno2 = diaFormatoBR.indexOf("-")
        let ano2 = diaFormatoBR.slice(0, posicaoAno2)
        let mes2 = diaFormatoBR.slice(posicaoAno2 + 1, posicaoDia2)
        let AnoMesDia = dia2 + "/" + mes2 + "/" + ano2
        console.log(`Data Formatada: ${AnoMesDia}`)

    }



    // public mostrarNomes(): void {
    //     for (let nome of this.nome) {
    //         console.log(`Nome do Autor: ${nome}`);
    //     }
    // }
  


}




//date internacional: ano mes dia
const nome = new Autor('Ana', new Date('2021-03-25'))
nome.salvarNome('Mariana Da silva Soares')
// console.log(nome.pegarNome())
// console.log(nome)
nome.setDatadeNascimento('01/03/1999')
nome.getDataDeNascimento();

//n.toLocaleString("pt-BR")