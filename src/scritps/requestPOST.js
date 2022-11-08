export {loginApi, adoptePetApi, registerApi} 

const urlBase = 'https://m2-api-adot-pet.herokuapp.com'

async function adoptePetApi(token, pet){

    let adoption = await fetch(`${urlBase}/adoptions`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token.token}`
        },
        body: JSON.stringify(pet)
    })

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