function BankAccount(titular, saldoInicial) {
  this.titular = titular;
  this.saldo = saldoInicial;
}

BankAccount.prototype.ingresar = function (cantidad) {
  this.saldo += cantidad;
};

BankAccount.prototype.extraer = function (cantidad) {
  if (this.saldo >= cantidad) {
    this.saldo -= cantidad;
  }
};

BankAccount.prototype.informar = function () {
  // console.log("Titular: " + this.titular + ", Saldo: " + this.saldo);
  console.log(`Titulo: ${this.titular}, saldo: ${this.saldo}`);
};
