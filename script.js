function responder() {
  const entrada = document.getElementById("input").value.toLowerCase();
  const mensaje = document.getElementById("mensaje");

  if (entrada.includes("hola")) {
    mensaje.textContent = "¡Hola! ¿Cómo estás?";
  } else if (entrada.includes("masha")) {
    mensaje.textContent = "¡Esa soy yo! 😊";
  } else if (entrada.includes("adiós")) {
    mensaje.textContent = "¡Hasta luego!";
  } else {
    mensaje.textContent = "No entendí eso... ¿puedes repetirlo?";
  }
}
