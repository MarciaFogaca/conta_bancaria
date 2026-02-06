import { Input } from './src/util/Input';
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() { // Aqui eu abri a chave que faltava

    // 1. Declaração da variável de opção (apenas uma vez)
    let opcao: number;

    // 2. Criando os objetos de teste (apenas uma vez, no início)
    const cc1 = new ContaCorrente(1, 456, "Mariana", 1, 15000, 1000);
    const cp1 = new ContaPoupanca(3, 789, 2, "Victor", 1000, 10);

    // 3. Área de Testes (executa uma vez antes de entrar no menu)
    console.log(colors.fg.whitestrong, "\n--- Testes das Classes ---\n", colors.reset);
    cc1.visualizar();
    cp1.visualizar();

    // 4. Início do Loop do Menu
    while (true) {

        console.log(colors.bg.black + colors.fg.yellow + "**************************************************");
        console.log("                                                  ");
        console.log("             BANCO DO BRAZIL COM Z                ");
        console.log("                                                  ");
        console.log("**************************************************");
        console.log("        1 - Criar Conta                           ");
        console.log("        2 - Listar todas as Contas                ");
        console.log("        3 - Buscar Conta por Numero               ");
        console.log("        4 - Atualizar dados da Conta              ");
        console.log("        5 - Apagar Conta                          ");
        console.log("        6 - Sacar                                 ");
        console.log("        7 - Depositar                             ");
        console.log("        8 - Transferir valores entre as Contas    ");
        console.log("        9 - Sair                                  ");
        console.log("**************************************************" + colors.reset);

        console.log("Digite a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - o seu futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCriar Conta\n", colors.reset);
                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nListar todas as Contas\n", colors.reset);
                // Usando as variáveis que criamos no início
                cc1.visualizar();
                cp1.visualizar();
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nConsultar dados da Conta - por número\n", colors.reset);
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar dados da Conta\n", colors.reset);
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nApagar uma Conta\n", colors.reset);
                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nSaque\n", colors.reset);
                cc1.sacar(100);
                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\nDepósito\n", colors.reset);
                cc1.depositar(500);
                keyPress();
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\nTransferência entre Contas\n", colors.reset);
                keyPress();
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n******************************************************");
    console.log("Projeto Desenvolvido por: Márcia Telles Fogaça");
    console.log("marciatellesfogaca@gmail.com");
    console.log("\nhttps://github.com/MarciaFogaca");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "\nDigite enter para prosseguir...");
    Input.prompt();
}

// Inicia a aplicação
main();