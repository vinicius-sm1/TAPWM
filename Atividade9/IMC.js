
function primeira()
{
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  if(!peso || !altura)
  {
    alert("Preencha todos os campos");
  }
  else
  {
    imc = peso / (altura*altura);
    imc = Number(imc.toFixed(2));
    if(imc < 18.5)
    {
      document.getElementById("demo22").innerHTML = "Magreza";
      document.getElementById("demo33").innerHTML = "0";
    }
    else if(imc >= 18.5 && imc <=24.9)
    {
      document.getElementById("demo22").innerHTML = "Normal";
      document.getElementById("demo33").innerHTML = "0";
    }
    else if(imc >= 25 && imc <=29.9)
    {
      document.getElementById("demo22").innerHTML = "Sobrepeso";
      document.getElementById("demo33").innerHTML = "1";
    }
    else if(imc >= 30 && imc <=39.9)
    {
      document.getElementById("demo22").innerHTML = "Obesidade";
      document.getElementById("demo33").innerHTML = "2";
    }
    else
    {
      document.getElementById("demo22").innerHTML = "Obesidade Grave";
      document.getElementById("demo33").innerHTML = "3";
    }
    return document.getElementById("demo11").innerHTML = imc;
  }

}
