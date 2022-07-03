const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

function calculateAge(anos) { 
    return `Daqui a ${anos} anos, ${this.nome} terá ${
         this.idade + anos } anos de idade.`; 
}

console.log(calculateAge.call(pessoa2, 5));
console.log(calculateAge.apply(pessoa1, [7]));


