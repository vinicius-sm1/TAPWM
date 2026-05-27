
function abre()
{
	document.getElementById('janela').src='2.png'
    document.getElementById("demo1").innerHTML = "Janela Aberta";
	document.title = "Feche a janela.";
}

function fecha()
{
	document.getElementById('janela').src='1.png'
    document.getElementById("demo1").innerHTML = "Janela Fechada";
	document.title = "Abra a janela.";
}

function quebra()
{
	document.getElementById('janela').src='3.png'
    document.getElementById("demo1").innerHTML = "Janela Quebrada";
	document.title = "Quebrou!";
}