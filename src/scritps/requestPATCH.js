const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

export async function UpdatePet(token, newDataPet, id) {
    try {
        const response = await fetch(`${baseUrl}pets/${id}`, {
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

export async function UpdateProfile(token, newDataProfile) {
    try {
        const response = await fetch(`${baseUrl}users/profile`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`
            },
            body: JSON.stringify(newDataProfile)
        })
    }
    catch (err) {
        console.log(err);
    }
}