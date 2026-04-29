
function converteprimeira()
{
  a = Number(document.getElementById("numero1").value);
  b = Number(document.getElementById("numero2").value);
  c = Number(document.getElementById("numero3").value);
  primeira.apply(null, [a,b,c])
}


function primeira()
{
    return document.getElementById("demo11").innerHTML = `A soma dos três números é: ${arguments[0] + arguments[1] + arguments[2]}
o quadrado do primeiro é: ${Math.pow(arguments[0],2)}
e o quadrado do segundo é: ${Math.pow(arguments[1],2)}`

}



function convertesegunda()
{
  palavra = document.getElementById("texto2").value;
  segunda.apply(null, chars = palavra.split(""))
}

function segunda()
{
  if( arguments[0].match(/[a-z]/i) && arguments[1].match(/[a-z]/i) && arguments[2].match(/[a-z]/i) && arguments[3].match(/[a-z]/i) && arguments[4].match(/[a-z]/i))
    {
    let vetor = [...arguments]
    let palavras = []
    while(palavras.length < 10) {
      let temp = vetor.slice().sort(() => Math.random() - 0.5)
      let palavra = ""
      palavra = palavra.concat.apply(palavra, temp)
      if(!palavras.includes(palavra)) {
        palavras.push(palavra)
      }
    }
    return document.getElementById("demo22").innerHTML = palavras;
  }
    else
    {
      alert("Informe apenas caracteres do alfabeto A-Z");
    }
}
