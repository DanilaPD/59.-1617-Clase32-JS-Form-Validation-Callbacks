const btn1 = document.getElementById("hola");
const btn2 = document.getElementById("chau");

//* Vamos a pasar la función de "callback" desde afuera:
const sayHi = () => {
  alert("hola");
};

//*Al poner una función como "callback", tiene que ir SIN los "paréntesis". Sino va a ejecutarla inmediatamente y no con el evento "click".
//* btn1.addEventListener("click", sayHi());
btn1.addEventListener("click", sayHi); //? Como "callback", con los "paréntesis", se ejecutaría automáticamente.

//! Lo anterior es equivalente a esto:
// Acá el segundo "parámetro" le dice que lo ejecute después, que no lo haga ahora, que espere a que lo llame el "click".
//* btn1.addEventListener("click", () => alert("hola"));

//* Podemos pasarla con los "paréntesis", pero, para eso, tenemos que hacer lo siguiente:
const cb = () => {
  console.log("chau");
};

const andate = (bolaDePelos) => {
  bolaDePelos(); // Ahora está "función" es un "parámetro", entonces podría pasarle cualquier "función".
};

btn2.addEventListener("click", () => andate(cb));

//* Intro a "asincronía":
const fn1 = () => {
  setTimeout(() => {
    console.log("Soy la primera.");
  }, 1000);
};

//* Yo quiero que siga siendo la segunda:
const fn2 = () => {
  console.log("Soy la segunda.");
};

// fn1();
// fn2();

//* Para eso, veámoslo con dos funciones nuevas:
const fn3 = (fn) => {
  setTimeout(() => {
    console.log("Soy la primera.");
    fn();
  }, 1000);
};

const fn4 = () => {
  console.log("Soy la segunda.");
};

fn3(fn4);
