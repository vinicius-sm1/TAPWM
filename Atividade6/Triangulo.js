
let a;
let b;
let c;

while(isNaN(a))
{
  a = parseInt(prompt("Informe um numero valido para a medida do lado A"));
}

while(isNaN(b))
{
  b = parseInt(prompt("Informe um numero valido para a medida do lado B"));
}
  while(isNaN(c))
{
  c = parseInt(prompt("Informe um numero valido para a medida do lado C"));
}

if ((a < b + c) && (b < a + c) && (c < a + b))
{
  alert("Os valores formam um triângulo");

  if (a != b && a != c && b != c) 
  {
    alert("O triângulo é escaleno");
  } 
  else if (a != b || a != c || b != c) 
  {
    alert("O triângulo é isósceles");
  } 
  else {
    alert("O triângulo é equilátero");
  }
}
else
{
  alert("Os valores não formam um triângulo");
}

