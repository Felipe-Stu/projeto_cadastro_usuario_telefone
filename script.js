let linhas='';
let contador=0

const form=window.document.getElementById('formulario')

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();
    atualizaContador();
});

function adicionarLinha(){
    const inputNomeUsuario=document.getElementById('nomeUsuario')
    const inputTelUsuario=document.getElementById('telUsuario')

    let linha='<tr>';
    linha+=`<td>${inputNomeUsuario.value}</td>`
    linha+=`<td>${inputTelUsuario.value}</td>`
    linha+='</tr>'
    
    linhas+=linha
    inputNomeUsuario.value='';
    inputTelUsuario.value='';
    contador+=1
}

function atualizaTabela(){
    const corpoTabela=document.querySelector('tbody')
    corpoTabela.innerHTML=linhas;
}

//para atualizar o contador, tenho que focar no tfoot

function atualizaContador(){
    const count=document.getElementById('count')
    count.innerHTML=contador
}

