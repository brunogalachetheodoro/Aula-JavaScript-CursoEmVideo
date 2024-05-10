/*Concatenação de Strings:

Declare duas variáveis de string, por exemplo, nome e sobrenome, e atribua a elas seus respectivos nomes.
Crie uma terceira variável chamada nomeCompleto e atribua a ela a concatenação das duas variáveis anteriores.
Imprima o valor de nomeCompleto no console. */

let nome = 'Bruno'
let sobrenome = 'Theodoro'
let nomeCompleto= nome + ' ' + sobrenome

console.log(nomeCompleto)

console.log(' ')
console.log ('----------------------------------------------------------------')
console.log(' ')

/* Conversão de Tipos:

Declare uma variável numérica, por exemplo, numero, e atribua a ela um número inteiro.
Crie uma segunda variável chamada texto e atribua a ela o valor de numero convertido para string.
Imprima o valor de texto no console. */ 

let numero = 42
let texto = String(numero)

console.log(texto)
console.log(typeof texto)

console.log(' ')
console.log ('----------------------------------------------------------------')
console.log(' ')

/* Manipulação de Arrays:

Declare um array com alguns números, por exemplo, [1, 2, 3, 4, 5].
Adicione um novo número no final do array usando o método push().
Remova o último número do array usando o método pop().
Imprima o array resultante no console. */ 

let sequenciaNumeros = [1, 2, 3, 4, 5]
sequenciaNumeros.push(6) // coloca dados desejados na array
console.log(sequenciaNumeros)
sequenciaNumeros.pop() // retira o último elemento de um array
console.log(sequenciaNumeros)




