const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

export async function deleteProfile(token) {
    try {
        const response = await fetch(`${baseUrl}users/profile`, {
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

