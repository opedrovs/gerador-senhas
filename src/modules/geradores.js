const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const maiuscula = () => String.fromCharCode(rand(65, 91));
const minuscula = () => String.fromCharCode(rand(97, 123));
const numero = () => String.fromCharCode(rand(48, 58));
const simbolos = '{}[],.;:?!@#$%&*()_+-=';
const simbolo = () => simbolos[rand(0, simbolos.length - 1)];

export default function geraSenha(qnt, chkMax, chkMin, chkNum, chkSim) {
    const senhaArray = [];

    
    for(let i = 0; i < qnt; i++) {
        const caracGerado = [];
        chkMai && caracGerado.push(maiuscula());
        chkMin && caracGerado.push(minuscula());
        chkNum && caracGerado.push(numero());
        chkSim && caracGerado.push(simbolo());

        senhaArray.push(caracGerado[rand(0, caracGerado.length)]);
    }

    return senhaArray.join('');
}
