import { Autor } from "./autor";
import { Livro } from "./livro";

//import prompt from "prompt-sync";

export class Capitulo{

    constructor(
        private _titulo: string,
        private _descricao: string,
        ){}

        public get titulo(): string{
            return this._titulo;
        }

        public set titulo(t: string){
            this._titulo = t;
        }

        public get descricao(): string{
            return this._descricao;
        }

        public set descricao(d: string){
            this._descricao = d;
        }
        
}

//let teclado = prompt();
let capitulo = new Capitulo("Cap 2 Rosas Malvadas", "Descição Terras");
console.log(`${capitulo.titulo}\n${capitulo.descricao}`);






