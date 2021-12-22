const hola = (cb) => {
  const text = "¡Hola!";
  cb(text);
};

hola((mensajes) => console.log(mensajes));
