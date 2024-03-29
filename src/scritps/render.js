export {renderPet}
import {adoptePetApi} from "../scritps/requestPOST.js"
import {openModal} from "../scritps/modal.js"
import { refreshPage } from "../pages/homeLogged/script.js"
import { toast } from "./toast.js"


let myToken = JSON.parse(localStorage.getItem("@userToken"))

function renderPet(pet){

    let li = document.createElement("li")
    // li.classList = "flex column petAdoption"

    let divImgFrame = document.createElement("div")
    divImgFrame.classList = "containerImgPet"

    let petImg = document.createElement("img")
    petImg.src = `${pet.avatar_url}`

    divImgFrame.appendChild(petImg)

    let divInfoPet = document.createElement("div")
    divInfoPet.classList = "dataPet"

    let namePet = document.createElement("h2")
    namePet.innerText = `${pet.name}`

    let speciesPet = document.createElement("p")
    speciesPet.innerText = `${pet.species}`

    let buttonAdoption = document.createElement("button")
    buttonAdoption.innerText = "Me adota?"
    buttonAdoption.classList = "buttonAdoption"
    buttonAdoption.addEventListener("click", ()=>{  
        let modalConfirm = confirmAdoptionModal(myToken, {pet_id: `${pet.id}`})      
        openModal(modalConfirm)
        
    })

    divInfoPet.append(namePet,speciesPet,buttonAdoption)

    li.append(divImgFrame,divInfoPet)

    document.querySelector("ul").appendChild(li)
}

function confirmAdoptionModal(token, pet){
    let divModal = document.createElement("section")
    divModal.classList = "flex column modalConfirm"
    

    let title = document.createElement("h2")
    title.innerText = "Adotar este pet?"

    let buttonAdoption = document.createElement("button")
    buttonAdoption.innerText = "Adotar"
    buttonAdoption.classList = "buttonAdoption"
    buttonAdoption.addEventListener("click", async ()=>{        
        await adoptePetApi({token:`${token}`},pet)
        document.querySelector(".modal-background").remove()        
        toast("Pet adotado com sucesso!","green")
        refreshPage()
    })

    divModal.append(title,buttonAdoption)

    return divModal

    
}