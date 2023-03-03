let word = prompt("Insira uma palavra/números");
let reverseWord = "";
let i = 0;

for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
}
prompt("A entrada foi: " + word + "\nAo contrário temos: " + reverseWord);
console.log(word);
console.log(reverseWord);
