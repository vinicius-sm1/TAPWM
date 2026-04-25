
function primeira(num1,num2,num3)
{
  a = document.getElementById(num1).value;
  b = document.getElementById(num2).value;
  c = document.getElementById(num3).value;
  if(a == "" || b == ""|| c == "")
  {
    alert("Preencha todos os campos");
  }
  else
  {
    return document.getElementById("demo11").innerHTML = Math.max(a,b,c)
    ;
  }

}

function segunda(num1,num2,num3)
{
  a = document.getElementById(num1).value;
  b = document.getElementById(num2).value;
  c = document.getElementById(num3).value;
  if(a == "" || b == ""|| c == "")
    {
      alert("Preencha todos os campos");
    }
    else
    {
      const numeros = [a,b,c];
      numeros.sort(function(a, b){return a-b});
      return document.getElementById("demo22").innerHTML = numeros;
    }
}

function terceira(texto1)
{
  palavra = document.getElementById(texto1).value;
  if(palavra == "")
    {
      alert("Preencha o campo");
    }
    else
    {
      palavra = palavra.replace(/\s/g, '');
      palavra = palavra.toLowerCase();
      let reverso = palavra.split('').reverse().join('');
      if(palavra == reverso)
        {
          return document.getElementById("demo33").innerHTML = "É palindromo";
        }
        else
        {
          return document.getElementById("demo33").innerHTML = "Não é palindromo";
        }
    }
}

function quarta(texto2, texto3)
{
  palavra1 = document.getElementById(texto2).value;
  palavra2 = document.getElementById(texto3).value;
  if(palavra1 == "" || palavra2 == "")
    {
      alert("Preencha todos os campos");
      return document.getElementById("demo44").innerHTML = "erro";
    }
    else
    {
      palavra1 = palavra1.replace(/\s/g, '');
      palavra1 = palavra1.toLowerCase();
      palavra2 = palavra2.replace(/\s/g, '');
      palavra2 = palavra2.toLowerCase();
      tamanho1 = palavra1.length;
      tamanho2 = palavra2.length;
      for (i = 0; i <= tamanho1; i++) 
        {  
          if(palavra1.substring(i, i+tamanho2) == palavra2)
            {
              return document.getElementById("demo44").innerHTML = "É um subconjunto";
            }
        }
          return document.getElementById("demo44").innerHTML = "Não é um subconjunto";
    }
}

function quinta(data1)
{
  data = new Date(document.getElementById(data1).value);

  if(data == "")
    {
      alert("Preencha o campo de data");
    }
    else
    {
      const nomes = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
      const dia = data.getDay();
      return document.getElementById("demo55").innerHTML = nomes[dia];
    }
}
