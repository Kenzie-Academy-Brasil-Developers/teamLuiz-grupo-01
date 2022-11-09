import { toast } from "./toast.js" 

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

export async function deleteProfileApi(token) {
    try {
        const response = await fetch(`${baseUrl}users/profile`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const responseJson = await response.json()
        if(response.ok){
            toast('Usúario deletado com sucesso', 'green')
            localStorage.removeItem("@userToken")
            return responseJson;
        }
    }
    catch (err) {
        toast('Ocorreu um erro interno', 'red')
        console.log(err);
    }
}



export async function deletePet(token, idPet) {
    try {
        const response = await fetch(`${baseUrl}pets/${idPet}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token.token}`
            }
        })
        return response
    }
    catch (err) {
        console.log(err);
    }
}