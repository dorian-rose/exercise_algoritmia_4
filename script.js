// 1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están en posiciones impares.
// array constante del que partimos: ["XXtierra", "loro", "XXalto", "otorgar", "XXcosa", "tumbona", "fresón", "tirar"]

let words = [
  "tierra",
  "loro",
  "alto",
  "otorgar",
  "cosa",
  "tumbona",
  "fresón",
  "tirar",
];
let div = document.querySelector(".container");

const result = words.filter(
  (word) =>
    ((words.indexOf(word) % 2) + 1 == 1 && word.includes("a")) ||
    ((words.indexOf(word) % 2) + 1 == 1 && word.includes("t"))
);
function print() {
  result.forEach((element) => {
    let para = document.createElement("P");
    para.textContent = element;
    div.append(para);
  });
}
print();

const numbers = [3, 6, 60, 73, 80, 300, 240, 555, 89, 123];
const odd = numbers.filter((number) => number % 2 == 1);
const even = numbers.filter((number) => (number % 2) + 1 == 1);
console.log(odd);
console.log(even);
