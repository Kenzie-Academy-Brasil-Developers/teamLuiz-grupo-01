import {getAllPetsApi} from "../../scritps/requestGET.js"
import {renderPet} from "../../scritps/render.js"
import { dropdown } from "../../scritps/dropdown.js"



let myToken ={
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MTc3MjYsImV4cCI6MTY2ODUyMjUyNiwic3ViIjoiOGIxYWRlNmItZGZkZS00NzVjLTliYjktOTUzODM1MTRlNGQwIn0.uOnxbjxkqHkv-aDcyoVgvLYjU0TGCqcyni5ehV1bbnI"
}

async function showPetsForAdoption(){  

let gettingPets = await getAllPetsApi(myToken)
console.log(gettingPets)
let petAvaliabled = gettingPets.filter(pet => pet.available_for_adoption == true)
console.log(petAvaliabled)
petAvaliabled.forEach(renderPet)

}


showPetsForAdoption()
dropdown()