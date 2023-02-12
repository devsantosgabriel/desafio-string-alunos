//Dado o texto um, faça:

//1-  a substituição da palavra 'bom' por 'excelente' cada vez que a palavra 'bom' se repetir, e também permita que caso a palavra 'bom' esteja em letra maiúscula a substituição também seja feita. Exiba o resultado

//2- capture do texto a frase 'É bom saber que nossos alunos são reconhecidos pelo bom trabalho que fazem.' Exiba o resultado 

let textoUm = 'Todo aluno do Senac se torna um bom profissional. É bom saber que nossos alunos são reconhecidos pelo bom trabalho que fazem.'

//replace
let textoSubstituido = textoUm.replace(/bom/gi, 'excelente');
console.log(textoSubstituido);
//substring
let textoCapturado = textoUm.substring(49);
console.log(textoCapturado);

/***************/

//Dado o texto dois, faça:

//1- No texto dois insira a parte que falta 'bom trabalho que fazem'. Exiba o resultado

let textoDois = 'Todo aluno do Senac se torna um bom profissional. É bom saber que nossos alunos são reconhecidos pelo'

//concat
let textoAdicionado = textoDois.concat(' bom trabalho que fazem');
console.log(textoAdicionado);

