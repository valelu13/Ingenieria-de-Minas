function responder() {
  const entrada = document.getElementById("input").value.toLowerCase();
  const mensaje = document.getElementById("mensaje");

  if (entrada.includes("hola")) {
    mensaje.textContent = "¡Hola! ¿Cómo estás?";
  } else if (entrada.includes("quién eres")) {
    mensaje.textContent = "¡Soy Maya, tu amiga virtual!";
  } else if (entrada.includes("adiós")) {
    mensaje.textContent = "¡Hasta pronto! 😊";
  } else if (entrada.includes("cómo estás")) {
    mensaje.textContent = "¡Muy bien! ¿Y tú?";
  } else {
    mensaje.textContent = "Hmm... no entendí eso. Intenta con otra cosa.";
  }
}
