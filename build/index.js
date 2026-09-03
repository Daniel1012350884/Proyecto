"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cuentaBancaria {
    saldo;
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    consultarSaldo() {
        return this.saldo;
    }
    retirarMonto(monto) {
        this.saldo = this.saldo - monto;
    }
    depositarMonto(deposito) {
        this.saldo = this.saldo + deposito;
    }
}
const miCuenta = new cuentaBancaria(20000);
console.log("su saldo inicial es:" + miCuenta.consultarSaldo());
class retiro {
    montoRetiro;
    cuenta;
    constructor(montoRetiro, cuenta) {
        this.montoRetiro = montoRetiro;
        this.cuenta = cuenta;
        const saldoActual = this.cuenta.consultarSaldo();
        if (this.montoRetiro <= saldoActual) {
            this.cuenta.retirarMonto(this.montoRetiro);
            console.log("Retiro exitoso de: " + this.montoRetiro);
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
const miRetiro = new retiro(5000, miCuenta);
console.log("Saldo actual: " + miCuenta.consultarSaldo());
class deposito {
    montoDeposito;
    cuenta;
    constructor(montoDeposito, cuenta) {
        this.montoDeposito = montoDeposito;
        this.cuenta = cuenta;
        this.cuenta.depositarMonto(this.montoDeposito);
        console.log("su deposito fue exitoso de :" + this.montoDeposito);
    }
}
const miDeposito = new deposito(2000, miCuenta);
console.log("Saldo actual: " + miCuenta.consultarSaldo());
//# sourceMappingURL=index.js.map