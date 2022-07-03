const students = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function getApproved(students, finalAverage ) {
    let approved = [];

    if (!students || !finalAverage) {
        return "Entre com as notas de cada aluno e a  media final";
    }

    for (let i = 0; i < students.length; i++) {
        const { nota, nome} = students[i];

        if (nota >= finalAverage) {
            approved.push(nome);
        }
    }
    return approved;
}

console.log("Alunos aprovados:\n", getApproved(students, 6));


