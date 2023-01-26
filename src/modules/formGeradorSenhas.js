import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const quantidade = document.querySelector('.quantidade');
const rangeValueText = document.querySelector('.range-value');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const numeros = document.querySelector('.numeros');
const simbolos = document.querySelector('.simbolos');
const gerarSenha = document.querySelector('.gerar-senha');
const copiarSenha = document.querySelector('.copiar-senha');

export default () => {
    quantidade.addEventListener('mousemove', () => { // Mudar os valores dos caracteres exibidos na página 
        rangeValueText.innerHTML = `Tamanho ${quantidade.value} caracteres`;
    });

    gerarSenha.addEventListener('click', () => { // Chamar função para gerar a senha e exibi-lá
        senhaGerada.value = gera();
    });

    copiarSenha.addEventListener('click', () => { // Chamar função para copiar na área de transferência
        copyToClipboard();
    });
};

function gera() { // Chamar função importada para gerar a senha com base nos parâmetros
    const senha = geraSenha(
        quantidade.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked
    );

    return senha || 'Opção inválida.';
}

function copyToClipboard() {
    if(senhaGerada.value === 'Opção inválida.' || senhaGerada.value.length === 0) {
        console.error('Não há nenhuma senha para copiar.');
    } else {
        navigator.clipboard.writeText(senhaGerada.value).then(() => {
            console.log('Senha copiada com sucesso.');
        }).catch(err => {
            console.error(`Ocorreu algum erro: ${err}`);
        });
    }
}
