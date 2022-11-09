import { toast } from "./toast.js"
const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

export async function adoptePetApi(token, pet) {

    let adoption = await fetch(`${baseUrl}adoptions`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.token}`
        },
        body: JSON.stringify(pet)
    })

}


export async function createUser(dataUser) {
    try {
        const response = await fetch(`${baseUrl}users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataUser)
        })
    }
    catch (err) {
        console.log(err);
    }
}


export async function createPetApi(token, dataPet) {
    try {
        const response = await fetch(baseUrl + 'pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(dataPet)
        })

        const responseJson = await response.json()
        if (response.ok) {
            toast('Pet cadastrado com sucesso', 'green')
            return responseJson;
        }
        else {
            toast('Parâmetros inválidos', 'red')
        }
    }
    catch (err) {
        toast('Ocorreu um erro interno', 'red')
        console.log(err);
    }
}


export async function loginApi(body) {

    const response = await fetch(`${baseUrl}session/login`, {
        method: "POST",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (response.ok) {
        const responseJson = await response.json()
        setTimeout(() => {
            window.location.href = "../homeLogged/index.html"
        }, 1000)
        return responseJson
    }
    else {
        console.log('usúario e senha errado')
    }

}

export async function registerApi(body) {
    const response = await fetch(`${baseUrl}users`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    if (response.ok) {
        return 'ok'
    }
    else {
        return 'Usuário já cadastrado'
    }
}