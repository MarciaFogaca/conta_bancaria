
export class ContaController implements ContaRepository{

    // Array vai guardar todos os dados das contas
    private listaContas = new Array<Contas>();
    
    // aqui controlo para que as contas tenho um numero unico
    public numero: number = 0;

}
