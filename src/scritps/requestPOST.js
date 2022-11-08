const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

export { adoptePetApi }
async function adoptePetApi(token, pet) {

    let adoption = fetch("https://m2-api-adot-pet.herokuapp.com/adoptions", {
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
        const response = await fetch(`${baseUrl}pets`, {
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

