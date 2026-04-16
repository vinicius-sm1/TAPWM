let quantidadepessoas = 45;

let pessoavelha = 0;
let pessoanova = Infinity;
let idadetotal = 0;

let otimo = 0;
let bom = 0;
let regular = 0;
let pessimo = 0;

let mulheres = 0;
let homens = 0;
let outros = 0;

for (let i = 1; i <= quantidadepessoas; i++) {
  escolha = parseInt(prompt("Informe sua idade"));
  idadetotal = idadetotal + escolha;
  if (escolha > pessoavelha) {
    pessoavelha = escolha;
  }
  if (escolha < pessoanova) {
    pessoanova = escolha;
  }

  escolha = prompt("Informe seu sexo [1]Masculino [2]Feminino [3]Outros");
  if (escolha == 1) {
    homens++;
  } else if (escolha == 2) {
    mulheres++;
  } else {
    outros++;
  }

  escolha = prompt("Informe sua opnião [4]Ótimo [3]Bom [2]Regular [1]péssimo");
  if (escolha == 4) {
    otimo++;
  } else if (escolha == 3) {
    bom++;
  } else if (escolha == 2) {
    regular++;
  } else if (escolha == 1) {
    pessimo++;
  }
}
alert("Média " + Math.round(idadetotal / quantidadepessoas));
alert("Idade mais velha: " + pessoavelha);
alert("Idade mais nova: " + pessoanova);
alert("Quantidade de avaliações péssimas: " + pessimo);
alert("Porcentagem de ótimo e bom: " + [(otimo+bom)/quantidadepessoas]*100 + "%");
alert("Quantidade de pessoas: Homens: " + homens + " Mulheres: " + mulheres + " Outros: " + outros);
