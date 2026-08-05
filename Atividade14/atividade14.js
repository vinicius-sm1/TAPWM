function validar(){
    let form = document.Formulario;
    let nome = form.elements["nome"].value;
    let comentario = form.elements["comentarios"].value;
    

    if (nome.length < 10 )
    {
        alert("O nome está muito curto, deve ter 10 caracteres ou mais");
        return false;
    }
    if (comentario.length < 20 )
    {
        alert("O comentario está muito curto, deve ter 20 caracteres ou mais");
        return false;
    }
    let pesquisa = document.getElementsByName("pesquisa");
    let respondido = false;
    let valor = "";
    for(let i = 0; i < pesquisa.length; i++){
        if(pesquisa[i].checked){
            respondido = true;
            valor = pesquisa[i].value;
        }
    }

    if(!respondido){
        alert("Responda a pesquisa.");
        return false;
    }

    if(valor == "sim"){
        alert("Que bom ter voce de volta!");
    }else{
        alert("Volte sempre!");
    }

    return true;
}