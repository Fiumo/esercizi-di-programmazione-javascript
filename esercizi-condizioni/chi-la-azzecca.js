/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var Player1= prompt("Player1 insert your guess number > 0");
var Player2= prompt("Player2 insert your guess number > 0");
var GuessNumb= Math.floor(Math.random() * (100-1) + 1);

while (Player1<=0){
  Player1= prompt("Player1 insert your guess number > 0");
}
while (Player2<=0){
  Player2= prompt("Player2 insert your guess number > 0");
}

if (Player1==GuessNumb && Player2==GuessNumb){
  console.log("Congrats both of you gain the challenge");
} else if (Player1==GuessNumb) {
  console.log("Congrats Player1 gain the challenge");
} else if(Player2==GuessNumb) {
  console.log("Congrats Player2 gain the challenge");
} else if (Math.abs(Player1-GuessNumb)<Math.abs(Player2-GuessNumb)){
  console.log("Congrats Player1 gain the challenge");
} else {
  console.log("Congrats Player2 gain the challenge");
}
