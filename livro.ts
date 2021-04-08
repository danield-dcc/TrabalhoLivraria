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
    public adicionarCapitulo(capituloDoTexto: string, texto: string): void{
        const novoCapitulo = new Capitulo(capituloDoTexto, texto)
        this._capitulos.push(novoCapitulo)
    
    }
    
    public removerCapitulo(capituloDoTexto: string): void{
        for i in range(le)
        const pos = this._capitulos.indexOf(capituloDoTexto)
        this._capitulos.splice(pos, 1)
    }


    public adicionarAutor(nome: string, dataDeNascimento: Date): void {
        const novoAutor = new Autor(nome, dataDeNascimento)
        this._autores.push(novoAutor)
    }


    public removerAutor(nome: string):  void {
        const pos = this._autores.indexOf(nome)
        this._autores.splice(pos, 1);
    }
}

