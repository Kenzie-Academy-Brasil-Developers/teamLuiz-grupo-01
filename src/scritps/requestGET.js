const baseUrl = 'https://m2-api-adot-pet.herokuapp.com/'

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