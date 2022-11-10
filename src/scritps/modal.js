
export function openModal(children){
    const body = document.querySelector("body")
    const backgroundContainer = document.createElement("section");
    backgroundContainer.classList.add("modal-background");
    const modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")

    const divTop = document.createElement("div");
    divTop.classList.add("divTop")
    const closeModalButton = document.createElement("button");
    closeModalButton.classList.add("button-close");

    backgroundContainer.addEventListener("click", (event)=> {
        const {className} = event.target;
        if(className === "modal-background" || className==="button-close"){
            backgroundContainer.remove();
        }
    })
    divTop.appendChild(closeModalButton);

    const modalSection = document.createElement("section");
    modalSection.appendChild(children);

    const divBotton = document.createElement("div");
    divBotton.classList.add("divBotton")

    modalContainer.append(divTop,modalSection,divBotton);
    backgroundContainer.append(modalContainer);
    body.appendChild(backgroundContainer);
}

