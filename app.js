alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    tentativas ++

    if (chute == numeroSecreto) {
        break;

    } else if (chute < numeroSecreto) {
        alert(`O numero secreto eh maior que ${chute}`);

    } else if (chute > numeroSecreto) {
        alert(`O numero secreto eh menor que ${chute}`);
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);
// if (tentativas == 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativa!`)
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas!`)
// }