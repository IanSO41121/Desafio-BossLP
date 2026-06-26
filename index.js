let nome = "Jorge";
let quantiaXp = 91000;
let elo = "";

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
console.log("O Herói " + nome , "está no elo " + elo);