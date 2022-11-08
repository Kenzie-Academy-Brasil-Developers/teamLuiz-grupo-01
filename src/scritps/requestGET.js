export {getAllPetsApi}

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
/*
let myToken ={
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MTc3MjYsImV4cCI6MTY2ODUyMjUyNiwic3ViIjoiOGIxYWRlNmItZGZkZS00NzVjLTliYjktOTUzODM1MTRlNGQwIn0.uOnxbjxkqHkv-aDcyoVgvLYjU0TGCqcyni5ehV1bbnI"
}
*/

