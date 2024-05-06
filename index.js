const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calcularNivel(vitorias) {
      if (vitorias < 10) {
          return "Ferro";
      } else if (vitorias >= 11 && vitorias <= 20) {
          return "Bronze";
      } else if (vitorias >= 21 && vitorias <= 50) {
          return "Prata";
      } else if (vitorias >= 51 && vitorias <= 80) {
          return "Ouro";
      } else if (vitorias >= 81 && vitorias <= 90) {
          return "Diamante";
      } else if (vitorias >= 91 && vitorias <= 100) {
          return "Lendário";
      } else if (vitorias >= 101) {
          return "Imortal";
      }
  }
  
  readline.question("Digite a quantidade de vitórias: ", function(vitorias) {
    readline.question("Digite a quantidade de derrotas: ", function(derrotas) {
      let saldoRankeadas = vitorias - derrotas;
      let nivel = calcularNivel(vitorias);
  
      console.log(`O Herói tem de saldo de ${saldoRankeadas} vitórias e está no nível de ${nivel}`);
      readline.close();
    });
  });
  