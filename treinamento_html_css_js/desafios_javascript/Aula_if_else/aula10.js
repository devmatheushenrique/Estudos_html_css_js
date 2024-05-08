let num = [5,9,6,7,4,1];
num.push(0);
num.sort();
console.log(num);
console.log(`nosso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);


let valores = [8,9,2,5,7,4];

for(let numero = 0; numero < valores.length; numero++){
    console.log(`a posição é ${numero} e o vetor tem o valor ${valores[numero]}`);
}

console.log('-------------------------');

valores.sort();

for (let pos in valores){
    console.log(`a posição é ${pos} e o seu valor é ${valores[pos]}`);
}
console.log(`-------------------------');
`);

teste  = [1,2,3,4,5,6];

let posicao = teste.indexOf(5);

if (posicao == -1){
    console.log('O valor não foi encontrado');
}else{
    console.log(`a posição do valor é ${posicao}`);
}