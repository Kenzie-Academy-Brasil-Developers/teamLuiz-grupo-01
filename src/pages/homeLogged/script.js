import {getAllPetsApi, readProfile} from "../../scritps/requestGET.js"
import {renderPet} from "../../scritps/render.js"
import { dropdown } from "../../scritps/dropdown.js"





let myToken = JSON.parse(localStorage.getItem("@userToken"))

async function showPetsForAdoption(){
let gettingPets = await getAllPetsApi(myToken)

let petAvaliabled = gettingPets.filter(pet => pet.available_for_adoption == true)

petAvaliabled.forEach(renderPet)
}

async function keepLogged(){
    
    if(!localStorage.getItem("@userToken")){
        window.location.assign("../homeUnlogged/index.html")
    }else{
        let getMyProfile = await readProfile(myToken)          
        if(getMyProfile == undefined){
            window.location.assign("../homeUnlogged/index.html")
        }        
    }

    
}

const profileButton = document.querySelectorAll(".profileButton")
profileButton.forEach(button=>{
    button.addEventListener("click", ()=>{
 
        window.location.assign("../profile/index.html")
       
       })
})


const logoutButton = document.querySelectorAll(".logoutButton")
logoutButton.forEach(button=>{
    button.addEventListener("click", ()=>{
        localStorage.removeItem("@userToken")
        window.location.assign("../homeUnlogged/index.html")
    })
})


export function refreshPage(){

    document.querySelector(".listAllPets").innerHTML = ""

    keepLogged()
    showPetsForAdoption()    
}

keepLogged()
showPetsForAdoption()
dropdown()
