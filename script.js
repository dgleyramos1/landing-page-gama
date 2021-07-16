var entrada = document.getElementById('email');

var paragrafo = document.getElementById('msgAlert');

document.getElementById('botao').addEventListener('click', function() {
    localStorage.chave = entrada.value;
    

    //Mensagem de sucesso após 3 segundos
    setTimeout( function() {
        let mensagem = "Você se cadastrou com sucesso!";
        paragrafo.innerText = mensagem;
    }, 3000 );
    
    //limpa a localStorage quando a pagina for fechada ou atualizada
    document.getElementById('email').value='';
    window.onbeforeunload = function() {
        localStorage.clear();
    };
});