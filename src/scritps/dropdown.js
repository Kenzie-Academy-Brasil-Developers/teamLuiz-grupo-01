export function dropdown(){
    const dropdownButton = document.getElementById("dropdown")
    const containerButtons = document.getElementById("containerButtons")
    dropdownButton.addEventListener("click",event=>{
        containerButtons.classList.toggle("hideMe")
        event.target.classList.toggle("dropdown-close");
    })
}
