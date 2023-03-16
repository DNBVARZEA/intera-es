let nome = prompt("Insira o seu nome")
document.write("Olá " + nome + " é um prazer ter você por aqui!")

let saldo = 10;
let senha = 3589;

function inicio () {
    let escolha = parseFloat(prompt("Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair"));

    switch (escolha) {
        case 1:
        ver_saldo();
        break;
        case 2: 
        extrato();
        break;
        case 3:
        fazer_saque();
        break
        case 4:
        fazer_deposito();
        break;
        case 5:
        transferencia();
        break;
        case 6:
        sair();
        default:
        erro();
        break;
    }
}

function ver_saldo () {
    if (senha == prompt("Qual é a sua senha?")){
        alert("Seu saldo atual é: " + saldo);
        inicio();
    } else {
        ver_saldo();
    }
}

function fazer_deposito () {
    let deposito = parseFloat(prompt("Qual é o valor para depósito?"));
    switch (isNaN(deposito) || deposito === "" || deposito <= 0) {
        case true:
        fazer_deposito();
        alert("Operação não autorizada");
        break;
        case false:
        saldo += deposito;
        ver_saldo();
        inicio();
        break;
    }
}

function fazer_saque () {
    let saque = parseFloat(prompt("Qual o valor para saque?"));
    switch (isNaN(saque) || saque === "" || saque > saldo || saque <= 0){
        case true:
        alert("Operação não autorizada");
        fazer_saque();
        break;
        case false: 
        if (senha == prompt("Qual é a sua senha?")){
            saldo -= saque
            alert("O seu saldo é: " + saldo);
            inicio();
        } else {
            fazer_saque();
        }
        break;
    }
}

function erro () {
    alert('Por favor, informe um número entre 1 e 6');
	inicio();
}

function sair () {
    let confirma = confirm("Você deseja sair?");
    switch (confirma) {
        case true: 
        alert(nome + ", foi um prazer ter você por aqui!");
        window.close();
        break;
        case false:
        inicio();
        break;
    }
}

function extrato () {
    if (senha == prompt("Qual é a sua senha?")){
        alert("Depósito de R$100,00\n" + "Saque de R$50,00");
        inicio();
    } else {
        extrato();
    }
}

function transferencia () {
    let transfer = parseFloat(prompt("Insira o número da conta que gostaria de realizar essa tranferência"));
    switch (isNaN(transfer) || transfer === "" || transfer < 0){
        case true:
        alert("Esse número não é valido!");
        transferencia();
        break;
        case false:
        let valor_tranfer = parseFloat(prompt("Insira o valor desejado para tranferência"));
        switch (isNaN(valor_tranfer) || valor_tranfer === "" || valor_tranfer <= 0 || valor_tranfer > saldo){
            case true:
            alert("Operação não autorizada");
            transferencia();
            break;
            case false:
            if (senha == prompt("Qual é a sua senha?")){
                saldo -= valor_tranfer
                alert("Seu saldo é: " + saldo);
                inicio();
            }
            break;
        }
    }
}

inicio();