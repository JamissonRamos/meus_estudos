
//Criando obj no js 


let turmas = []

function criarObjAluno (nome, n1, n2)
{
    this.nome = nome,
    this.n1 = parseFloat(n1), 
    this.n2 = parseFloat(n2),
    this.media = calcMedia(n1,n2)
   // this.media2 = calcMedia2()
}

function calcMedia(n1,n2) { return (parseFloat(n1) + parseFloat(n2)) / 2 }

//let calcMedia2 = () => { console.log(this.n1 )  }

//let aluno = new criarObjAluno('jamisson', 8 , 8)

turmas.push(new criarObjAluno('jamisson', 8 , 8))
turmas.push(new criarObjAluno('Lucas', 6 , 8))
turmas.push(new criarObjAluno('Amanda', 4 , 3))
turmas.push(new criarObjAluno('Rafael', 6 , 2))

console.log(turmas[0].media)

