import prompt from "prompt-sync";
import { Livro } from "./livro";
import { Autor } from "./autor"
import { Capitulo } from "./capitulo";


let teclado = prompt();
let option: number = 0;



export class Livraria {
    livros: Array<Livro>
    constructor() {
        this.livros = []

    }

    public menu(): void {
        let teclado = prompt();
        let option: number = 0;
        while (option != 9 || NaN) {
            console.log(`+===========$ Livraria $============+`)
            console.log(`|===================================|`)
            console.log(`|1. Cadastrar Livro                 |`)
            console.log(`|2. Remover Livro                   |`)
            console.log(`|3. Modificar Livro                 |`)
            console.log(`|4. Listar Acervo                   |`)
            console.log(`|5. Listar capítulos de livro       |`)
            console.log(`|6. Resetar Livraria                |`)
            console.log(`|9. Sair                            |`)
            console.log(`+===================================+`)

            option = +teclado('Faça uma opção: ');

            switch (option) {
                case 1:
                    this.cadastrarLivro();
                    break;
                case 2:
                    this.removerLivro();
                    break;
                case 3:
                    this.modificarLivro();
                    break;
                case 4:
                    this.listarAcervo();
                    break;
                case 5:
                    this.listarCapitulos();
                    break;
                case 6:
                    this.resetarLivraria();
                    break;
                default:
                    break
            }
        }
    }

    private cadastrarLivro() {

        let titulo: string = teclado("Entre com o titulo do Livro: ")
        let ISBN: string = teclado("Entre com o ISBN: ")

        let livro: Livro = new Livro(titulo, ISBN)

        livro.salvarTitulo(titulo)
        livro.salvarISBN(ISBN)

        let totalDeAutores: number = +teclado("Total de autores que obra possui: ")

       
        this.cadastrarAutores(livro, totalDeAutores)

        let totalDeCapitulos: number = +teclado("Total de capitulos do livro: ")

        this.cadastrarCapitulos(livro, totalDeCapitulos)

        this.livros.push(livro)


    }

    private cadastrarAutores(livro: Livro, totalDeAutores: number): any {
        for (let i = 0; i < totalDeAutores; i++) {
            console.log(`Autor número ${i + 1}`)
            let nomeAutor: any = teclado("Adicione nome do Autor: ")
            let dataNasc: any = teclado("Adicione data de Nascimento do Autor (dia/mês/ano): ")

            let autor: Autor = new Autor(nomeAutor, dataNasc)

            autor.salvarNome(nomeAutor)
            autor.salvarDatadeNascimento(dataNasc)

            livro.adicionarAutor(autor)


        }
    }

    private cadastrarCapitulos(livro: Livro, totalDeCapitulos: number) {
        for (let i = 0; i < totalDeCapitulos; i++) {
            console.log(`Capitulo número: ${i + 1}`)
            let tituloCapitulo: string = teclado("Adicione o titulo do capitulo: ")
            let textoCapitulo: string = teclado("Adicione o texto do capitulo:  ")

            livro.adicionarCapitulo(tituloCapitulo, textoCapitulo)


        }
    }

    private removerLivro() {
        this.listarAcervo();
        let posicao1: number = +teclado("Entre com a posição do livro que gostaria de remover: ")
        for (let i = 0; i <= this.livros.length; i++) {
            if (posicao1 == i) {
                this.livros.splice(posicao1, 1)
                console.log("Livro removido com sucesso.");
                return
            } else {
                console.log("Erro... livro não pode ser removido.")
                return
            }
        }
    }

    private listarAcervo() {
        for (let i = 0; i < this.livros.length; i++) {
            console.log(`Posição: ${i} - Livro: ${this.livros[i].buscarTitulo()} `)
            //console.log(`${i} -`, this.livros[i])

            
        }
    }





    private modificarLivro() {

        this.listarAcervo()
        console.log()
        let posicao: number = +teclado("Entre com a posição do livro que gostaria de modificar: ")
        console.log("+====================================+")
        console.log("|1. Adicionar novo capitulo          |")
        console.log("|2. Adicionar novo Autor             |")
        console.log("|3. Sair                             |")
        console.log("+====================================+")
        let escolha: number = +teclado("Escolha sua opção: ")

        switch (escolha) {
            case 1:
                this.adicionarNovoCapitulo(this.livros[posicao]);
                break;
            case 2:
                this.adicionarNovoAutor(this.livros[posicao]);
                break;
            default:
                break
        }

    }

    private adicionarNovoCapitulo(livro: Livro) {
        let novoCapitulo = teclado("Adicione o capítulo do Livro: ")
        let novoTexto = teclado("Adicione o novo texto do capítulo: ")
        livro.adicionarCapitulo(novoCapitulo, novoTexto)
    }

    private adicionarNovoAutor(livro: Livro) {
        let novoAutor: any = teclado("Entre com o nome do Autor: ")
        let novaDataNasc: any = teclado("Entre com a data de Nascimento(dia/mês/ano): ")
        let autor: Autor = new Autor(novoAutor, novaDataNasc)

        autor.salvarNome(novoAutor)
        autor.salvarDatadeNascimento(novaDataNasc)

        livro.adicionarAutor(autor)
    }



    private listarCapitulos() {
        this.listarAcervo();
        let posicao: number = +teclado("Entre com a posição do livro que gostaria de ver os capítulos: ")

        this.listagemDosCapitulos(this.livros[posicao])
    }

    //novo listar capitulos
    private listagemDosCapitulos(livro: Livro) {

        const capitulos = livro.buscarCapitulo();

        //usadno o get para pegar a posisão
        for (let i = 0; i < capitulos.length; i++) {
            console.log(`Capitulo ${i + 1}`, capitulos[i].titulo, capitulos[i].descricao)
        }
    }


    private resetarLivraria() {
        this.livros = []
        console.log("Livraria resetada com sucesso.")
    }


}



const menu1 = new Livraria()
menu1.menu()
