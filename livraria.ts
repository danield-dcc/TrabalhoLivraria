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

        //pula para o metodo cadastar autores
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
            console.log(`Posição: ${i} - Livro: ${this.livros[i].buscarTitulo()}`)
            console.log(`${i} -`, this.livros[i])

            //console.log(`${i} `,JSON.stringify((this.livros[i])))
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
              
                break;
            case 2:
                
                break;
            default:
                break
        }

    }

    private adicionarNovoCapitulo() {
        
    }

    private adicionarNovoAutor(){
        
    }



    private listarCapitulos(){
        
    }

    //novo listar capitulos
    private listagemDosCapitulos(livro: Livro){

        
    }


    private resetarLivraria(){
        this.livros[]

        console.log("A livraria foi resetada")
       
    }


}



const menu1 = new Livraria()
menu1.menu()
