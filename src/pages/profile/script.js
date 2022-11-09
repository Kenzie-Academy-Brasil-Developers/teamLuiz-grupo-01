import { readProfile, readAllMyPets } from "../../scritps/requestGET.js";
import { openModal } from "../../scritps/modal.js";
import { dropdown } from "../../scritps/dropdown.js";

dropdown();

// FUNÇÃO ABAIXO PARA VERIFICAR O LOGIN DO USUÁRIO E REDIRECIONAR PARA A HOMEPAGE CASO ESTEJA SEM LOGIN

// async function verifyAuthorization() {
//   // A FUNÇÃO QUE CHAMAR O LOGIN E TROUXER PRA ESTA PAGE PRECISA TRAZER O TOKEN

//   if (token) {
//     renderMyProfile(token);
//   } else {
//     localStorage.removeItem("token");
//     window.location.replace("../homeUnlogged/index.html");
//   }
// }
// verifyAuthorization();

// FUNÇÃO PARA RENDERIZAR O CORPO DA PÁGINA DE PERFIL

async function renderMyProfile(token) {
  const profile = await readProfile(token);
  console.log(profile);

  // Atualizando imagem do usuário logado
  const imgProfile = document.querySelector("#img-profile");
  imgProfile.src = profile.avatar_url;
  imgProfile.alt = profile.name + "foto de perfil";

  // Atualizando informações do usuário logado
  const name = document.querySelector(".personal-info-name");
  const mail = document.querySelector(".personal-info-email");
  const bday = document.querySelector(".personal-info-bday");

  name.innerHTML = `Nome: ${profile.name}`;
  mail.innerHTML = `E-mail: ${profile.email}`;
  // bday.innerHTML = `Data de nascimento: ${profile.bday}`
  // ONDE FICA A INFORMAÇÃO DE DATA DE NASCIMENTO????

  // Atualizando botões de atualizar conta e deletar
  const btnUpdate = document.querySelector(".button-profile-update-info");
  const btnDelete = document.querySelector(".button-profile-delete-account");

  btnUpdate.id = profile.id;
  btnDelete.id = profile.id;

  // Chamada de função de renderizar pets passando perfil
  renderMyPets(token, profile);
}

const myTokenTesting =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5NDAzNDUsImV4cCI6MTY2ODU0NTE0NSwic3ViIjoiNzUxZWYxNzMtZDBkMi00ZmI5LTg3MzQtMTBkN2NlODBlYzViIn0.3I78mS-XXLGkywGC6g5HG08Z8HkmWY8ZL3S8jh9lguI";
renderMyProfile(myTokenTesting);

async function renderMyPets(token, profile) {
  const boxMyPets = document.querySelector(".box-my-pets");

  const myPets = await readAllMyPets(token);
  console.log(myPets);

  myPets.forEach((element) => {
    const available = element.available_for_adoption ? "Sim" : "Não";

    boxMyPets.insertAdjacentHTML(
      "beforeend",
      `<article class="card-my-pet">
		<img src="${element.avatar_url}" alt="${element.name}">
		<div class="div-card-info">
			<h3>Nome: ${element.name}</h3>
			<h3>Espécie: ${element.bread}</h3>
			<h3>Adotável: ${available}</h3>
			<button id="${element.id}" class="button-update-my-pet">Atualizar</button>
		</div>
	</article>`
    );
  });
}

async function listenners() {
  const buttonRegister = document.querySelector(".buttonRegister");
  const buttonLogin = document.querySelector(".buttonLogin");
  const updateProfile = document.querySelector(".button-profile-update-info");
  const deleteProfile = document.querySelector(
    ".button-profile-delete-account"
  );
  const buttonRegisterNewPet = document.querySelector(
    ".button-register-new-pet"
  );
  const buttonsUpdatePet = document.querySelectorAll(".button-update-my-pet");

  buttonRegister.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.replace("../homeUnlogged/index.html");
  });

  buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.replace("../homeUnlogged/index.html");
  });

  updateProfile.addEventListener("click", (e) => {
    e.preventDefault();

    openModal(children); // WTF CHILDREN
  });

  deleteProfile.addEventListener("click", (e) => {
    e.preventDefault();

    openModal(children); // WTF CHILDREN
  });

  buttonRegisterNewPet.addEventListener("click", (e) => {
    e.preventDefault();

    openModal(children); // WTF CHILDREN
  });

  buttonsUpdatePet.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      openModal(children); //WTF CHILDREN?
    });
  });
}

listenners();
