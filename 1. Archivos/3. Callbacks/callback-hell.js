//? Opción 1:

const dividir = (num1, num2, cb) => {
  num1 === 0 && cb(new Error("¡No podés dividir por cero!"));
  num2 === 0 && cb(new Error("¡No podés dividir por cero!"));
  cb(null, num1 / num2); // Creé un "callback" con dos "parámetros". El primero es "error", el segundo es "todo ok", así que te paso el "resultado".
};

//* Como el "callback" no lo creé afuera, no tiene nombre. Con pasarle los "parámetros", alcanza.
dividir(5, 0, (error, result1) => {
  // Básicamente este "callback" es anónimo porque no lo creé afuera. De vuelta, con pasarle los dos "parámetros", alcanza.
  // El tercer "parámetro" es el "callback" y ahí le paso los dos "parámetros" que le creé: El "error" y el "resultado".
  if (error) {
    throw error; // Tirate un "error".
  } else {
    console.log(result1);
  }
});

//? Opción 2:

const dividir2 = (num3, num4, cb2) => {
  if (num3 === 0) {
    cb2(console.log("Ufa."));
  } else if (num4 === 0) {
    cb2(console.log("Ufa."));
  } else {
    cb2(null, num3 / num4);
  }
};

dividir2(0, 3, (error, result2) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result2);
  }
});
