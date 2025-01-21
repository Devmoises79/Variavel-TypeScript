//Aprendo a tipar variáveis básicas em typescript

let estaChovendo: boolean = false; //Declarando uma variável

estaChovendo = true; //Alterando o valor

let idade: number = 27; //Declarando variável

let altura: number = 1.80;  //Declarando variável

const nacionalidade: string = "Brasileira"; //Declarando variável

const colegas: string[] = ["João", "Maria", "Pedro"]; //Declarando variável com array

const tecnologias: Array<string> = ["HTML", "CSS", "JS", "TS"] //Declarando variável com array de strings 

const notas: ReadonlyArray<number> = [10, 9, 8, 7]; //Declarando variável com array de numbers e readonly para nao poder ser alterado


const lista: [nome:string, estaEstudando: boolean, idade:number] = ['Gian', true, 27] //Declarando variável com array de strings, boolean e number



let idadeDaAna: number | string = 25 //Declarando variável com union
idadeDaAna = '25 anos' //Alterando o valor

let dadosDaApi: any; //Declarando variável com any. *Pode receber qualquer coisa
dadosDaApi = 10 // ...
dadosDaApi = true // ...
dadosDaApi = [1, 2, 3] // ...
dadosDaApi = 'string'  // ...