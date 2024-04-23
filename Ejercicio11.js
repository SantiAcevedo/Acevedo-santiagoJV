var palabra=['l','l','a','v','e']
let letracontador = {};
    for (var i = 0; i < palabra.length; i++) {
      var letra = palabra[i];
  

      if (letracontador[letra]) {

        letracontador[letra]++;
      } else {

        letracontador[letra] = 1;
      }
    }
    console.log("Letras distintas y sus repeticiones:");
    for (var letra in letracontador) {
      console.log(letra + " = " + letracontador[letra]);
    }