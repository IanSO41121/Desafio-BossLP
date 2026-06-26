//Foi utilizado variáveis, operadores, laços de repetição e estruturas de decição. Como solicitado no desafio. 

//Criando o vetor de herois.
let herois = [
    { nome: "Jorge", quantiaXp: 1000},
    { nome: "Joao", quantiaXp: 1000},
    { nome: "Andre", quantiaXp: 1000},
    { nome: "Julia", quantiaXp: 1000},
];
//percorrer cada elemento do array, um de cada vez, permitindo executar a mesma lógica para todos os heróis.
for (let i = 0; i < herois.length; i++) {
    let elo = "";
    let quantiaXp = herois[i].xp;
//Defindo os elos a partir da comparação da quantidade de xp.
if (quantiaXp <= 1000){
    elo = "Ferro";
}
else if((quantiaXp >= 1001) && (quantiaXp <= 2000)){
    elo = "Bronze";
}
else if((quantiaXp >= 2001) && (quantiaXp <= 5000)){
    elo = "Prata";
}
else if((quantiaXp >= 5001) && (quantiaXp <= 7000)){
    elo = "Ouro";
}
else if((quantiaXp >= 7001) && (quantiaXp <= 8000)){
    elo = "Platina";
}
else if((quantiaXp >= 8001) && (quantiaXp <= 9000)){
    elo = "Ascendente";
}
else if((quantiaXp >= 9001) && (quantiaXp <= 10000)){
    elo = "Imortal";
}
else{
    elo = "Radiante";
}
console.log(`O Herói ${herois[i].nome} está no elo ${elo}`);
}