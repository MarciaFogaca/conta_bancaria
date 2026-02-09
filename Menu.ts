import { Input } from './src/util/Input';
import { Colors } from "./src/util/Colors"; 
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';
import { formatarMoeda } from './src/util/Currency'; 

const contas = new ContaController();
const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

export function main() { 
    let opcao: number;

    // Criando objetos de teste
    const cc1 = new ContaCorrente(contas.gerarNumero(), 456, "Marcia", 1, 15000, 1000);

    const cp1 = new ContaPoupanca(contas.gerarNumero(), 789, "Vanessa", 2, 1000, 10);
    contas.cadastrar(cc1);
    contas.cadastrar(cp1);

    while (true) {
        console.log(Colors.fg.bluestrong + "╔══════════════════════════════════════════════════╗");
        console.log("║             BANCO DO BRAZIL COM Z                ║");
        console.log("║           - Excelência em Atender! -             ║");
        console.log("╠══════════════════════════════════════════════════╣");
        console.log("║   [1] Criar Conta                                ║");
        console.log("║   [2] Listar Todas as Contas                     ║");
        console.log("║   [3] Buscar Conta por Numero                    ║");
        console.log("║   [4] Atualizar Dados da Conta                   ║");
        console.log("║   [5] Apagar Conta                               ║");
        console.log("║   [6] Sacar                                      ║");
        console.log("║   [7] Depositar                                  ║");
        console.log("║   [8] Transferir valores entre Contas            ║");
        console.log("║   [9] Buscar Conta por Nome do Titular           ║");
        console.log("║   [0] Sair                                       ║");
        console.log("╚══════════════════════════════════════════════════╝" + Colors.reset);
      
        console.log("Entre com a opcao desejada:");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong, "\nExcelência em Atender!");
            sobre();
            process.exit(0);
        }
        
        switch (opcao) {
            case 1: criarConta(); break;
            case 2: listarTodasContas(); break;
            case 3: buscarContaPorNumero(); break;
            case 4: atualizarConta(); break;
            case 5: deletarContaPorNumero(); break;
            case 6: sacar(); break;
            case 7: depositar(); break;
            case 8: transferir(); break;
            case 9: procurarPorTitular(); break;
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);
        }
        keyPress();
    }
}

function criarConta(){
    console.log("Digite o numero da agencia: ");
    const agencia = Input.questionInt("");
    console.log("Digite o nome do titular: ");
    const titular = Input.question("");
    const tipo = Input.keyInSelect(tipoContas, "Selecione o tipo da conta: ", { cancel: false}) + 1;
    console.log("Digite o saldo da conta: ");
    const saldo = Input.questionFloat("");

    if(tipo === 1){
        console.log("Digite o limite: ");
        const limite = Input.questionFloat("");
        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
    } else {
        console.log("Digite o dia do aniversário: ");
        const aniversario = Input.questionInt("");
        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, titular,  tipo, saldo, aniversario));
    }
}

function listarTodasContas() {
    contas.listarTodas();
}

function buscarContaPorNumero() {
    const numero = Input.questionInt("Digite o numero da conta: ");
    contas.procurarPorNumero(numero);
}

function atualizarConta(): void {
    const numero = Input.questionInt("Digite o numero da conta: ");
    const conta = contas.buscarNoArray(numero);

    if (conta !== null) {
       
        let agencia = conta.agencia;
        let titular = conta.titular;
        let saldo = conta.saldo;
        const tipo = conta.tipo; 
  
        console.log(`\nAgência atual: ${agencia}`);
        let inputAg = Input.question("Nova agência (Enter para manter): ");
     if (inputAg.trim() !== "") agencia = parseInt(inputAg);

        console.log(`Titular atual: ${titular}`);
        let inputTit = Input.question("Novo titular (Enter para manter): ");
    if (inputTit.trim() !== "") titular = inputTit;

        console.log(`Saldo atual: ${formatarMoeda(saldo)}`);
        let inputSal = Input.question("Novo saldo (Enter para manter): ");
    
    if (inputSal.trim() !== "") saldo = parseFloat(inputSal);

    if (tipo === 1) {
            let limite = (conta as ContaCorrente).limite;
            console.log(`Limite atual: ${formatarMoeda(limite)}`);
            let inputLim = Input.question("Novo limite (Enter para manter): ");
            
    if (inputLim.trim() !== "") limite = parseFloat(inputLim);
            contas.atualizar(new ContaCorrente(numero, agencia, titular, tipo, saldo, limite));
        } else {
            let aniversario = (conta as ContaPoupanca).aniversario;
            console.log(`Aniversário atual: ${aniversario}`);
            let inputAniv = Input.question("Novo aniversário (Enter para manter): ");
            
    if (inputAniv.trim() !== "") aniversario = parseInt(inputAniv);
            contas.atualizar(new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario));
        }
    } else {
        console.log(Colors.fg.red, "\nA conta não foi encontrada!", Colors.reset);
    }
}

function deletarContaPorNumero() {
    const numero = Input.questionInt("Digite o numero da conta: ");
    const conta = contas.buscarNoArray(numero);

    if (conta !== null) {
        // Em vez de keyInYN, usamos question e comparamos a resposta
        console.log(`\nConfirma a exclusao da conta ${numero}? (S/N): `);
        const confirma = Input.question("").toUpperCase();

        if (confirma === 'S') {
            contas.deletar(numero);
        } else {
            console.log("\nOperacao cancelada!");
        }
    } else {
        console.log("\nConta nao encontrada!");
    }
}

function sacar() {
    const numero = Input.questionInt("Numero da conta: ");
    const valor = Input.questionFloat("Valor do saque: ");
    contas.sacar(numero, valor);
}

function depositar() {
    const numero = Input.questionInt("Numero da conta: ");
    const valor = Input.questionFloat("Valor do deposito: ");
    contas.depositar(numero, valor);
}

function transferir() {
    const orig = Input.questionInt("Numer da conta de origem: ");
    const dest = Input.questionInt("Numero da conta de destino: ");
    const valor = Input.questionFloat("Valor: ");
    contas.transferir(orig, dest, valor);
}

function procurarPorTitular() {
    const titular = Input.question("Nome do titular: ");
    contas.procurarPorTitular(titular);
}

function sobre(): void {
    console.log("\n******************************************************");
    console.log("Projeto Desenvolvido por: Márcia Telles Fogaça");
    console.log("marciatellesfogaca@gmail.com");
    console.log("\nhttps://github.com/MarciaFogaca");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(Colors.reset, "\nPressione enter para continuar...");
    Input.prompt();
}

main();