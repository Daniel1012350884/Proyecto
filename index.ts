class cuentaBancaria{

    private saldo: number;

    constructor(saldoInicial: number){
        this.saldo = saldoInicial;
    }

    consultarSaldo(): number{
        return this.saldo;
    }

    retirarMonto(monto: number): void{
        this.saldo = this.saldo - monto;

    }

    depositarMonto(deposito: number): void{
        this.saldo = this.saldo + deposito;
    }
}

const miCuenta = new cuentaBancaria(20000);
console.log("su saldo inicial es:" + miCuenta.consultarSaldo());

class retiro {

    montoRetiro: number;
    cuenta: cuentaBancaria;

    constructor(montoRetiro: number, cuenta: cuentaBancaria){
        this.montoRetiro = montoRetiro
        this.cuenta = cuenta

        const saldoActual = this.cuenta.consultarSaldo();

        if (this.montoRetiro <= saldoActual){
            this.cuenta.retirarMonto(this.montoRetiro);
            console.log("Retiro exitoso de: " + this.montoRetiro);
        } else {
            console.log("Saldo insuficiente")
        }
    }

}
const miRetiro = new retiro(5000, miCuenta);
console.log("Saldo actual: " + miCuenta.consultarSaldo());


class deposito {

    montoDeposito: number;
    cuenta: cuentaBancaria; 

    constructor(montoDeposito: number, cuenta: cuentaBancaria){
        this.montoDeposito = montoDeposito
        this.cuenta = cuenta

        this.cuenta.depositarMonto(this.montoDeposito);
        console.log("su deposito fue exitoso de :" + this.montoDeposito)

    }
    
}
const miDeposito = new deposito(2000, miCuenta);
console.log("Saldo actual: " + miCuenta.consultarSaldo());