import { Autor } from "./autor";
import { Capitulo } from "./capitulo";

export class Livro {
    titulo: string;
    ISBN: string;
    autores: Array<Autor>
    capitulos: Array<Capitulo>

    constructor(titulo: string, ISBN: string) {
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autores = [];
        this.capitulos = [];
    }

    

}

