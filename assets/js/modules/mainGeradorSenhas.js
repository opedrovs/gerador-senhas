import geraSenha from "./geradores";

export default () => {
    document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-gerar')) {
            const senhaInput = document.querySelector('.senha-input');
            const qntCaracteres = document.querySelector('.caracteres-input')
            const maiusculas = document.querySelector('.maiusculas');
            const minusculas = document.querySelector('.minusculas');
            const numeros = document.querySelector('.numeros');
            const simbolos = document.querySelector('.simbolos');

            const senha = geraSenha(qntCaracteres, maiusculas.checked, minusculas.checked, numeros.checked, simbolos.checked);
            senhaInput.value = senha || 'Senha inválida!';
        }

        if(el.classList.contains('btn-copiar')) {
            const senhaInput = document.querySelector('.senha-input');
            
            if(senhaInput.value === 'Senha inválida!' || senhaInput.value.length === 0) {
                alert('Não há senha para copiar. Tente novamente!');
            } else {
                senhaInput.select();
    
                try {
                    document.execCommand('copy');
                    alert('Senha copiada com sucesso!');
                } catch(err) {
                    alert('Ocorreu um erro, não consegui copiar a senha, é possível que seu navegador não possua suporte, tente Ctrl+C');
                }
            }

        }
    });
}
