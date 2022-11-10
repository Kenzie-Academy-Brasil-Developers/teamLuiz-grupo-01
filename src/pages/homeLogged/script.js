import {getAllPetsApi, readProfile} from "../../scritps/requestGET.js"
import {renderPet} from "../../scritps/render.js"
import { dropdown } from "../../scritps/dropdown.js"




let myToken = JSON.parse(localStorage.getItem("@userToken"))

async function showPetsForAdoption(){
let gettingPets = await getAllPetsApi(myToken)
console.log(gettingPets)
let petAvaliabled = gettingPets.filter(pet => pet.available_for_adoption == true)
console.log(petAvaliabled)
petAvaliabled.forEach(renderPet)
}

async function keepLoged(){
    
    if(!localStorage.getItem("@userToken")){
        window.location.assign("../homeUnlogged/index.html")
    }else{
        let getMyProfile = await readProfile(myToken) 
        console.log(getMyProfile)      
        if(getMyProfile == undefined){
            window.location.assign("../homeUnlogged/index.html")
        }        
    }

    
}

keepLoged()


const profileButton = document.querySelector(".profileButton")
console.log(profileButton)
profileButton.addEventListener("click", ()=>{
 console.log("clicou")
 window.location.assign("../profile/index.html")

})

const logoutButton = document.querySelector(".logoutButton")
logoutButton.addEventListener("click", ()=>{
    localStorage.removeItem("@userToken")
    window.location.assign("../homeUnlogged/index.html")
})


showPetsForAdoption()
dropdown()
