export {adoptePetApi}
async function adoptePetApi(token, pet){

    let adoption = fetch("https://m2-api-adot-pet.herokuapp.com/adoptions",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token.token}`
        },
        body: JSON.stringify(pet)
    })

}