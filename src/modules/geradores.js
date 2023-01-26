const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const maiuscula = () => String.fromCharCode(rand(65, 91));
const minuscula = () => String.fromCharCode(rand(97, 123));
const numero = () => String.fromCharCode(rand(48, 58));
const simbolos = '{}[],.;:?!@#$%&*()_+-=';
const simbolo = () => simbolos[rand(0, simbolos.length - 1)];

export default function geraSenha(qnt, chkMai, chkMin, chkNum, chkSim) {
    const senhaArray = [];
    
    for(let i = 0; i < qnt; i++) {
        const caracTemporario = [];
        chkMai && caracTemporario.push(maiuscula());
        chkMin && caracTemporario.push(minuscula());
        chkNum && caracTemporario.push(numero());
        chkSim && caracTemporario.push(simbolo());

        senhaArray.push(caracTemporario[rand(0, caracTemporario.length)]);
    }

    return senhaArray.join('');
}
