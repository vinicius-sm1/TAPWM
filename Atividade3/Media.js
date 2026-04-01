        var nome;
        var nota1;
        var nota2;
        var nota3;



        nome = prompt("Qual é o seu nome?");
        nota1 = prompt("Insira a primeira nota");
        nota2 = prompt("Insira a segunda nota");
        nota3 = prompt("Insira a terceira nota");

        var calculo = function () {
            let num1 = parseFloat(nota1);
            let num2 = parseFloat(nota2);
            let num3 = parseFloat(nota3);

            soma = ((num1 + num2 + num3)/3)
		    return soma;
        }

        final = calculo();


        alert("Nome = " + nome + " \n Média = " + final.toFixed(2));
