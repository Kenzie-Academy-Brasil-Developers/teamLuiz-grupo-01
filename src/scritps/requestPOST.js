

export {loginApi, adoptePetApi, registerApi,adoptePetApi} 
const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

async function adoptePetApi(token, pet) {

    let adoption = await fetch(`${urlBase}/adoptions`,{

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


export async function createPet(token, dataPet) {
    try {
        const response = await fetch(`${baseUrl}pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`
            },
            body: JSON.stringify(dataPet)
        })
    }
    catch (err) {
        console.log(err);
    }
}


async function loginApi (body){
  
    const response = await fetch(`${urlBase}/session/login`, {
        method: "POST",
        headers: {
            "Content-type" : 'application/json'
        },
        body: JSON.stringify(body)
    })
    if(response.ok){
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

async function registerApi (body){
    const response = await fetch(`${urlBase}/users`, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(body)
    })
    if(response.ok){
        return 'ok'
    }
    else {
        return 'Usuário já cadastrado'
    }
}

