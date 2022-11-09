const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

export { getAllPetsApi }

async function getAllPetsApi(token) {
    let allPets = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token.token}`
        }
    })

    return await allPets.json()
}

let myToken ={
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MTc3MjYsImV4cCI6MTY2ODUyMjUyNiwic3ViIjoiOGIxYWRlNmItZGZkZS00NzVjLTliYjktOTUzODM1MTRlNGQwIn0.uOnxbjxkqHkv-aDcyoVgvLYjU0TGCqcyni5ehV1bbnI"
}



export async function getReadAllPets() {
    try {
        const response = await fetch(`${baseUrl}pets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
      const responseJson = response.json()
      return responseJson
    }
    catch (err) {
        console.log(err);
    }
}





export async function readProfile(token) {
    try {
        const response = await fetch(`${baseUrl}users/profile`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token.token}`
            }
        })
        
        return await response.json()
    }
    catch (err) {
        console.log(err);
    }

}

export async function readAllMyPets(token) {
    try {
        const response = await fetch(`${baseUrl}pets/my_pets`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token.token}`
            }
        })

        return await response.json()
    }
    catch (err) {
        console.log(err);
    }

}

