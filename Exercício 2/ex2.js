let numero = prompt("Insira um Numero:");
numero = parseFloat(numero);
let penultimo = 0;
let ultimo = 1;

while (numero >= ultimo + penultimo) {
  ultimo += penultimo;
  penultimo += ultimo;
}
if (penultimo === numero) {
  alert(numero + " faz parte de Fibonacci");
} else if (ultimo === numero) {
  alert(numero + " faz parte de Fibonacci");
} else alert(numero + " não faz parte de Fibonacci");
