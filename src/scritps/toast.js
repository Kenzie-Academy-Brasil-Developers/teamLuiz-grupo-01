// Call this function as:
// toast('mensagem tipo string')
// call in the request.ok

export function toast(message) {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("toast-container");

  const h3 = document.createElement("h3");
  // h3.classList.add(" FONT - STYLE ");
  h3.innerText = message;

  if (
    message == "Sua conta foi criada com sucesso!" ||
    message == "Você fez login com sucesso!" ||
    message == "Perfil atualizado com sucesso!"
  ) {
    container.classList.add("container-green");
  } else {
    container.classList.add("container-red");
  }

  container.appendChild(h3);
  body.appendChild(container);
}
