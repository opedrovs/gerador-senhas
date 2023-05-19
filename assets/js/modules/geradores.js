function shuffle(arr) {
    for(let j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);

    return arr;
}

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const maiuscula = () => String.fromCharCode(rand(65, 91));
const minuscula = () => String.fromCharCode(rand(97, 123));
const numero = () => String.fromCharCode(rand(48, 58));
const simbolos = '{}[].,:;!@#$%*()_+-=';
const simbolo = () => simbolos[rand(0, simbolos.length - 1)];

export default function geraSenha(qnt, chkMai, chkMin, chkNum, chkSim) {
    qnt = Number(qnt.value);
    const senhaArray = [];

    for(let cont = 0; cont < qnt; cont++) {

        chkMai && senhaArray.push(maiuscula());
        chkMin && senhaArray.push(minuscula());
        chkNum && senhaArray.push(numero());
        chkSim && senhaArray.push(simbolo());
    
    }

    return shuffle(senhaArray).join('').slice(0, qnt);
}
