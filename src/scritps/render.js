export {renderPet}
import {adoptePetApi} from "../scritps/requestPOST.js"

let myToken ={
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MTc3MjYsImV4cCI6MTY2ODUyMjUyNiwic3ViIjoiOGIxYWRlNmItZGZkZS00NzVjLTliYjktOTUzODM1MTRlNGQwIn0.uOnxbjxkqHkv-aDcyoVgvLYjU0TGCqcyni5ehV1bbnI"
}

function renderPet(pet){

    let li = document.createElement("li")
    li.classList = "flex column petAdoption"

    let divImgFrame = document.createElement("div")
    divImgFrame.classList = "flex imgFrame"

    let petImg = document.createElement("img")
    petImg.src = `${pet.avatar_url}`

    divImgFrame.appendChild(petImg)

    let divInfoPet = document.createElement("div")
    divInfoPet.classList = "flex column petInfo"

    let namePet = document.createElement("h2")
    namePet.innerText = `${pet.name}`

    let speciesPet = document.createElement("span")
    speciesPet.innerText = `${pet.species}`

    let buttonAdoption = document.createElement("button")
    buttonAdoption.innerText = "Me adota?"
    buttonAdoption.classList = "buttonAdoption"
    buttonAdoption.addEventListener("click", ()=>{
        adoptePetApi(myToken, {pet_id: `${pet.id}`})
    })

    divInfoPet.append(namePet,speciesPet,buttonAdoption)

    li.append(divImgFrame,divInfoPet)

    document.querySelector("ul").appendChild(li)
}