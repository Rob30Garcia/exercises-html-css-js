let number = 68;

let scoreA = number >= 90 && number <= 100;
let scoreB = number >= 80 && number <= 89;
let scoreC = number >= 70 && number <= 79;
let scoreD = number >= 60 && number <= 69;
let scoreF = number < 60;

if(scoreA) {
  console.log("A");
} else if(scoreB) {
  console.log("B");
} else if(scoreC) {
  console.log("C");
} else if(scoreD) {
  console.log("D");
} else if(scoreF) {
  console.log("F");
} else {
  console.log("nota inválida");
}

// para melhorar podemos fazer em funções