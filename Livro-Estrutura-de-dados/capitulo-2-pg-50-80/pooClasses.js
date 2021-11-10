// Classes

// declaração tradicional
function Book(title, pages, technology){
    this.title = title,
    this.pages = pages,
    this.technology = technology
}
Book.prototype.printTitle = function(){
    console.log(this.title)
}
let book1 = new Book('struct of date',457,'JavaScript')
book1.printTitle()
console.log(book1.title, book1.technology)



// NOVO JEITO DE DECLARAR CLASSES EM JS ES6
class Books {
    constructor(title, pages, technology){
        this.title = title,
        this.pages = pages,
        this.technology = technology
    }
    printtechnology(){
        console.log(this.technology)
    }
    print(){
        console.log(`Titulo: ${this.title}   Paginas: ${this.pages}   Tecnologia: ${this.technology}`)
    }
}
let books1 = new Books('Cangaceiro javaScript', 300, 'javaScript')
books1.print()
console.log('\n')




// HERANÇA DA CLASSE
class AuthorBook extends Books{
    constructor(title, pages, technology, author){
        super(title, pages, technology)
        this.author = author
    }
    printAuthor(){
        console.log(`Autor: ${this.author}`)
    }
}

let authorBook = new AuthorBook('struct of date with js', 457, 'js', 'Loiane')

authorBook.printAuthor()
authorBook.print()
