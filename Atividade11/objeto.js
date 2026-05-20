
        
        function primeira()
        {
            const base = document.getElementById("base").value;
            const altura = document.getElementById("altura").value;
            var retangulo = new Retangulo(base, altura);
            return document.getElementById("demo11").innerHTML = retangulo.CalcularArea();
        }
        function convertecampos(aux)
        {
            const nome = document.getElementById("nome").value;
            const banco = document.getElementById("banco").value;
            const conta = document.getElementById("conta").value;
            const saldo = document.getElementById("saldo").value;
            switch (aux)
            {
                case 1:
                    const saldoEspecial = document.getElementById("saldoEspecial").value;
                    corrente(nome, banco, conta,saldo, saldoEspecial)
                    break;
                case 2:
                    const juros = document.getElementById("juros").value;
                    poupanca(conta, nome, banco,saldo, juros)
                    break;
            }
        }
        function corrente(nome, banco, conta,saldo, saldoEspecial)
        {
            var objContaCorrente = new Corrente();
            objContaCorrente.setNomeCorrentista(nome);
            objContaCorrente.setBanco(banco);
            objContaCorrente.setNumeroConta(conta);
            objContaCorrente.setSaldo(saldo);
            objContaCorrente.setSaldoEspecial(saldoEspecial);
            alert(`Nome=${objContaCorrente.getNomeCorrentista()}
                Banco=${objContaCorrente.getBanco()}
                Conta=${objContaCorrente.getNumeroConta()}
                Saldo=${objContaCorrente.getSaldo()}
                Saldo Especial=${objContaCorrente.getSaldoEspecial()}`);
        }
        function poupanca(conta, nome, banco,saldo, juros)
        {
            var objContaPoupanca = new Poupanca();
            objContaPoupanca.setNumeroConta(conta);
            objContaPoupanca.setNomeCorrentista(nome);
            objContaPoupanca.setBanco(banco);
            objContaPoupanca.setSaldo(saldo);
            objContaPoupanca.setJuros(juros);
            alert(`Nome=${objContaPoupanca.getNomeCorrentista()}
                   Banco=${objContaPoupanca.getBanco()}
                   Conta=${objContaPoupanca.getNumeroConta()}
                   Saldo=${objContaPoupanca.getSaldo()}
                   Juros=${objContaPoupanca.getJuros()}`);
        }
        //Função construtora
        function Retangulo(base, altura) {
            this.base = base;
            this.altura = altura;
            this.CalcularArea = function() {
                return "A área é " + this.base*this.altura;
            }
        }
        //usando class
        class Conta {
            constructor() {
                this.nomeCorrentista;
                this.banco;
                this.numeroConta;
                this.saldo;
            }
            setNomeCorrentista(value) {
                this.nomecorrentista = value;
            }
            getNomeCorrentista() {
                return this.nomecorrentista;
            }
            setBanco(value) {
                this.banco = value;
            }
            getBanco() {
                return this.banco;
            }
            setNumeroConta(value) {
                this.numeroConta = value;
            }
            getNumeroConta() {
                return this.numeroConta;
            }
            setSaldo(value) {
                this.saldo = value;
            }
            getSaldo() {
                return this.saldo;
            }
        }       
        //herança
        class Corrente extends Conta {
            constructor() {
                //super chama o
                //construtor da classe pai
                super();
                this.saldoEspecial;
            }
            setSaldoEspecial(value) {
                this.saldoEspecial = value;
            }
            getSaldoEspecial() {
                return this.saldoEspecial;
            }
        }
        class Poupanca extends Conta {
            constructor() {
                //super chama o
                //construtor da classe pai
                super();
                this.juros;
            }
            setJuros(value) {
                this.juros = value;
            }
            getJuros() {
                return this.juros;
            }
        }

