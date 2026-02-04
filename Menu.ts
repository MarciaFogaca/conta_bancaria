import leia = require("readline-sync");
import { colors } from './src/util/Colors';
import  { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

      const c1 = new Conta(1, 1234, "Márcia", 1, 100000.00);

    c1.visualizar();

    // Testes do Método Sacar
    console.log("Sacar 100,00: ", c1.sacar(100.00));
    console.log("Sacar 200000.00: ", c1.sacar(200000.00));
    console.log("Sacar 0.00: ", c1.sacar(0.00));

    // Testes do Método Depositar
    console.log("Depositar -10.00: ");
    c1.depositar(-10.00);

    console.log("Depositar 500.00: ");
    c1.depositar(500.00);

    c1.visualizar();

    // console.log("O Titular da Conta é: ", c1.titular);
    // console.log("O Saldo da Conta é: ", c1.saldo);

   
    while (true){

    console.log(colors.bg.black + colors.fg.yellow+ "************************************************&*");
    console.log(colors.bg.black + colors.fg.yellow + "                                                 ");
    console.log(colors.bg.black + colors.fg.yellow + "            Banco do Brazil com Z                ");
    console.log(colors.bg.black + colors.fg.yellow + "                                                 ");
    console.log(colors.bg.black + colors.fg.yellow + "*************************************************");
    console.log(colors.bg.black + colors.fg.yellow + "                                                 ");
    console.log(colors.bg.black + colors.fg.yellow + "        1 - Criar Conta                          ");
    console.log(colors.bg.black + colors.fg.yellow + "        2 - Listar todas as Contas               ");
    console.log(colors.bg.black + colors.fg.yellow + "        3 - Buscar Conta por Numero              ");
    console.log(colors.bg.black + colors.fg.yellow + "        4 - Atualizar dados da Conta             ");
    console.log(colors.bg.black + colors.fg.yellow + "        5 - Apagar Conta                         ");
    console.log(colors.bg.black + colors.fg.yellow + "        6 - Sacar                                ");
    console.log(colors.bg.black + colors.fg.yellow + "        7 - Depositar                            ");
    console.log(colors.bg.black + colors.fg.yellow + "        8 - Transferir valores entre as Contas   ");
    console.log(colors.bg.black + colors.fg.yellow + "        9 - Sair                                 ");
    console.log(colors.bg.black + colors.fg.yellow + "                                                 ");
    console.log(colors.bg.black + colors.fg.yellow + "*************************************************");
    console.log(colors.bg.black + colors.fg.yellow + "                                                 " + 
    colors.reset);
    
    console.log("Entre com a opção desejada: ");
    opcao =leia.questionInt("");

   if (opcao == 9){
      console.log(colors.fg.greenstrong,
        "\nBanco do Brazil com Z - o seu futuro começa aqui!");
      sobre();
      console.log(colors.reset,"");
      process.exit(0);
  }

   switch (opcao){
    case 1:
        console.log(colors.fg.whitestrong,
            "\nCriar Conta\n\n", colors.reset);

        keyPress()
        break;
    case 2:
        console.log(colors.fg.whitestrong,
            "\n\nListar todas as  Contas\n\n", colors.reset);

        keyPress()
        break;
    case 3:
        console.log(colors.fg.whitestrong,
            "\nConsultar dados da Conta - por número\n\n", colors.reset);

        keyPress()
        break;
    case 4:
        console.log(colors.fg.whitestrong,
            "\n\nAtualizar dados da Conta\n\n", colors.reset);

        keyPress()
        break;
    case 5:
        console.log(colors.fg.whitestrong,
            "\n\nApagar uma Conta\n\n", colors.reset);

        keyPress()
        break;
    case 6:
        console.log(colors.fg.whitestrong,
            "\n\nSaque\n\n", colors.reset);

        keyPress()
        break;
    case 7:
        console.log(colors.fg.whitestrong,
            "\nDepósito\n\n", colors.reset);

        keyPress()
        break;
    case 8:
        console.log(colors.fg.whitestrong,
            "\n\nTransferência entre Contas\n\n", colors.reset);

        keyPress()
        break;
    default:
        console.log(colors.fg.whitestrong,
            "\nOpção Inválida!\n",colors.reset);
    
        keyPress()
        break;
    }
 }

}



export function sobre(): void {
   console.log("\n********************************************");
   console.log("Projeto Desenvolvido por: Márcia Telles Fogaça");
   console.log("marciatellesfogaca@gmail.com");
   console.log("\nhttps://github.com/MarciaFogaca");
   console.log("**********************************************");

}

function keyPress(): void {
    console.log(colors.reset,"\nDigite enter para prosseguir...");
    leia.prompt();
}

main();