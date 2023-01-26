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
    quantidade.addEventListener('mousemove', () => {
        rangeValueText.innerHTML = `Tamanho ${quantidade.value} caracteres`;
    });

    gerarSenha.addEventListener('click', () => {
        senhaGerada.value = gera();
    });

    copiarSenha.addEventListener('click', () => {
        copiar();
    });
};

function gera() {
    const senha = geraSenha(
        quantidade.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked
    );

    return senha || 'Opção inválida.';
}

function copiar() {
    const senha = document.querySelector('.senha-gerada');
    if(senha.value === 'Opção inválida.' || senha.value.length === 0) {
        console.error('Não há nenhuma senha para copiar.')
    } else {
        async function copiaSenha() {
            try {
                await navigator.clipboard.writeText(senha.value);
                console.log('Senha copiada com sucesso para clipboard');
            } catch(err) {
                console.error(`Problema ao copiar: ${err}`);
            }
        }
    }
}
