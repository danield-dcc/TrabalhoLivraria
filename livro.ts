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
    public adicionarCapitulo(capitulo: string): Capitulo[]{
            return Capitulo.append(capitulo);
    
    }
    
    public removerCapitulo(capitulo: string):  Capitulo[] {
        var pos = Capitulo.indexOf(capitulo)
        
        return Capitulo.splice(pos, 1);
    }


    public adicionarAuto(autor: string): Autor[] {
        return Autor.append(autor);
    }


    public removerAutor(autor: string):  Autor[] {
        var pos = Autor.indexOf(autor)
        
        return Autor.splice(pos, 1);
    }
}

