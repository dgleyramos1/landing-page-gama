var entrada = document.getElementById('email');

var paragrafo = document.getElementById('msgAlert');

document.getElementById('botao').addEventListener('click', function() {
    localStorage.chave = entrada.value;
    


    setTimeout( function() {
        let mensagem = "Você se cadastrou com sucesso!";
        msgAlert.innerText = mensagem;
      }, 5000 );
    
    
    document.getElementById('email').value='';
    window.onbeforeunload = function() {
        localStorage.clear();
    };
});