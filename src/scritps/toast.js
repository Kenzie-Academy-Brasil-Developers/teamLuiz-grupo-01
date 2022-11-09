// Call this function as:
// toast('mensagem tipo string')
// call in the request.ok

export function toast(message, color) {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("toast-container");

  const h3 = document.createElement("h3");
  // h3.classList.add(" FONT - STYLE ");
  h3.innerText = message;

  if (color == "green") {
    container.classList.add("container-green");
  } else if (color == "red") {
    container.classList.add("container-red");
  }

  container.appendChild(h3);
  body.appendChild(container);
}
