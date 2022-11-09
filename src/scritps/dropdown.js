export function dropdown(){
    const dropdownButton = document.getElementById("dropdown")
    const buttons = document.querySelectorAll("#menuDrop")
    dropdownButton.addEventListener("click",event=>{
        buttons.forEach(button=>button.classList.toggle("hideMe"));
        event.target.classList.toggle("dropdown-close");
    })
}
