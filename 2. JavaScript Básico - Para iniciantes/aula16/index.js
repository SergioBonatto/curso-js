console.log('listas')
let lista1 = [1, 2, 3, 4, 5, 6]
console.log(lista1)
lista1.push(7)
console.log(lista1)
const alunos = ['Pedro', 'Tiago', 'Lucas', 'Mateus']
console.log(alunos[1])
alunos[4] = 'Paulo'
console.log(alunos)
alunos.unshift('Moises')
console.log(alunos)
console.log(alunos.slice(2,5))
const removido = alunos.pop()
console.log(alunos, removido)
delete alunos[2]
console.log(alunos)
