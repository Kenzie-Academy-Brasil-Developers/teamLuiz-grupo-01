import { getReadAllPets } from "../../scritps/requestGET.js"

async function renderCardPet() {
    const tagUl = document.querySelector('.listAllPets')
    const arrayPets = await getReadAllPets()
    
    arrayPets.forEach(pet => {
        const tagLi = document.createElement('li')
        const divImg = document.createElement('div')
        divImg.className = 'containerImgPet'
        const imgPet = document.createElement('img')
        imgPet.src = pet.avatar_url
        const divData = document.createElement('div')
        divData.className = 'dataPet'
        const tagNamePet = document.createElement('h2')
        tagNamePet.innerText = pet.name
        const tagSpecies = document.createElement('p')
        tagSpecies.innerText = pet.species
        
        divImg.appendChild(imgPet)
        divData.append(tagNamePet, tagSpecies)
        tagLi.append(divImg, divData)
        
        tagUl.appendChild(tagLi)
    })
}
renderCardPet()