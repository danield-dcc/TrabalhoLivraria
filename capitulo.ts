import { Autor } from "./autor";
import { Livro } from "./livro";

//import prompt from "prompt-sync";

export class Capitulo{
    private _titulo: string;
    private _descricao: string;

    constructor(titulo: string, descricao: string){
        this._titulo = titulo;
        this._descricao = descricao;
    }
        

        public get titulo():string{
            return this._titulo;
        }

        public set titulo(titulo:string){
            this._titulo = titulo;
        }

        public get descricao(): string{
            return this._descricao;
        }

        public set descricao(descricao: string){
            this._descricao = descricao;
        }
        
}






