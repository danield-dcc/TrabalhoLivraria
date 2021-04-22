import { Autor } from "./autor";
import { Capitulo } from "./capitulo";

export class Livro {

    private _titulo: string;
    private _ISBN: string;
    private _autores: Array<Autor>
    private _capitulos: Array<Capitulo>

    constructor(titulo: string, ISBN: string) {
        this._titulo = titulo;
        this._ISBN = ISBN;
        this._autores = [];
        this._capitulos = [];
    }

    public get titulo(): string {
        return this._titulo
    }
    public set titulo(nome: string) {
        this._titulo = nome;
    }

    public  get ISBN(): string{
        return this._ISBN
    }
    public set ISBN(ISBN: string){
        this._ISBN = ISBN
    }
    
    public set autores(autores: Autor[]){
        this._autores = autores
    }
    public  get autores(): Autor[]{
        return this._autores
    }

    public  get capitulos(): Capitulo[]{
        return this._capitulos
    }
    public set capitulos(capitulos: Capitulo[]){
        this._capitulos = capitulos
    }


     //método

     public buscarTitulo(): string {
        let titulo = this.titulo
        return titulo
    }

    public salvarTitulo(titulo: string): void {
        this.titulo = titulo
    }

    public buscarISBN(): string {
        let isbn = this.ISBN
        return isbn
    }

    public salvarISBN(isbn: string): void {
        this.ISBN = isbn
    }

    public buscarCapitulo() {
        let capitulos = this.capitulos
        return capitulos
    }


    public adicionarCapitulo(capituloDoTexto: string, texto: string): number{

        if (this._capitulos.length >= 100){
            var resposta = -1
            return (resposta)
        } else {
            const novoCapitulo = new Capitulo(capituloDoTexto, texto)
        this._capitulos.push(novoCapitulo)
            return (this._capitulos.length) + 1 
        }
    
    }
    
    public removerCapitulo(escolha: number): number{

        for (var i = 0; i < this._capitulos.length; i++)  {

            if (escolha == i) {
                this._capitulos.splice(i, 1)
                return escolha
            }
        }
        var resposta = -1
        return (resposta)
    }


    public adicionarAutor(novoAutor:Autor): number {
        if (this._autores.length >= 6){
            var resposta = -1
            return (resposta)
        }else {
            
            this._autores.push(novoAutor)
            return (this._autores.length) + 1 
        }
        
    }


    public removerAutor(escolha: number):  number {

        for (var i = 0; i < this._autores.length; i++)  {

            if (escolha  == i){
                this._autores.splice(i, 1)
                return escolha
            }
        }
        var resposta = -1
        return (resposta)
    }
}

