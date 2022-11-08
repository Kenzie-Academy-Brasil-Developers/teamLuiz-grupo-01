async function getAllPetsApi(token){
    let allPets = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets`,{
        method: "GET",
        headers:{
            "content-type":"application/json",
            "Authorization": `Bearer ${token.token}`
        }
    })

    return await allPets.json()
}