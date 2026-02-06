import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

      // Atributos específicos de Conta Corrente 
      private _limite: number;

     // Atributos específicos de Conta Corrente
      constructor( 
        numero: number, 
        agencia: number, 
        titular: string, 
        tipo: number, 
        saldo: number,
        limite: number) {
        super(numero, agencia, titular, tipo, saldo);
        this._limite = limite;
      
    }
    
      public get limite() {
        return this._limite;
    }

      public set limite(limite: number) {
        this._limite = limite;
    }

       
      public sacar(valor: number): boolean {
       
       if (valor <= 0) {
        console.log(colors.fg.red, "\nO valor deve ser positivo!", colors.reset);
        return false;
    }
       
       
        if ((this.saldo + this._limite) < valor) {
          console.log("\n Saldo Inauficiente!");
          return false;
       }
       
       this.saldo = this.saldo - valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Limite: " + this._limite.toFixed(2));
    }

}