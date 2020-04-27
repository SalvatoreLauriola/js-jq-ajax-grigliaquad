// Descrizione:
// Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// DevTools console e network sono nostri amici

//Dichiaro l'API in una variabile
var api = "https://flynn.boolean.careers/exercises/api/random/int";

//seleziono i box
var boxes = $('.box');

// attendo il click su box
boxes.click(function(){

  //processo standard per capire dove viene cliccato
  var self = $(this);
  
  // chiamata ajax
  $.ajax({
    url: api,  //indirizzo
    method: 'GET',  // metodo get quindi lettura
    success: function(res) { //funzione in caso di successo
      //res mostra tutta la funzione
      // console.log(res)
      // success mostra solo il boolean
      // console.log(res.success)
      //response mostra il valore effettivo
      // console.log(res.response)

      //prendo solo il risultato effettivo
      var number = res.response;

      //assegno numero al box cliccato
      self.text(number);
      if (number <= 5 ) {
        self.addClass("yellow");
      }else if (number > 5) {
        self.addClass("green");
      }

      //risposta in caso di errore  nella chiamata
    },
    error: function(){
      console.log('Errore chiamata API')
    }
  
  })

})