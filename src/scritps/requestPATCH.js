import { toast } from "./toast.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

export async function UpdatePet(token, newDataPet, idPet) {
    try {
        const response = await fetch(`${baseUrl}pets/${idPet}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`
            },
            body: JSON.stringify(newDataPet)
        })
    }
    catch (err) {
        console.log(err);
    }
}



export async function updateProfileApi(token, newDataProfile) {
    try {
        const response = await fetch(`${baseUrl}users/profile`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(newDataProfile)
        })
        const responseJson = await response.json()
        if(response.ok){
            toast('Usúario alterado com sucesso', 'green')
            return responseJson
        }
    }
    catch (err) {
        toast('Ocorreu um erro interno', 'red')
        console.log(err);
    }
}