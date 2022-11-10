import { readProfile, readAllMyPets } from "../../scritps/requestGET.js";
import { openModal } from "../../scritps/modal.js";
import { dropdown } from "../../scritps/dropdown.js";
import { updateProfileApi, updatePetApi } from "../../scritps/requestPATCH.js";
import { deleteProfileApi } from "../../scritps/requestDELETE.js";
import { createPetApi } from "../../scritps/requestPOST.js";

dropdown();
const token = JSON.parse(localStorage.getItem("@userToken"));

// FUNÇÃO ABAIXO PARA VERIFICAR O LOGIN DO USUÁRIO E REDIRECIONAR PARA A HOMEPAGE CASO ESTEJA SEM LOGIN

async function verifyAuthorization(token) {
  //   // A FUNÇÃO QUE CHAMAR O LOGIN E TROUXER PRA ESTA PAGE PRECISA TRAZER O TOKEN

  if (token) {
    renderMyProfile(token);
  } else {
    localStorage.removeItem("token");
    window.location.replace("../homeUnlogged/index.html");
  }
}
verifyAuthorization(token);

// FUNÇÃO PARA RENDERIZAR O CORPO DA PÁGINA DE PERFIL

async function renderMyProfile(token) {
  const profile = await readProfile(token);

  // Atualizando imagem do usuário logado
  const imgProfile = document.querySelector("#img-profile");
  imgProfile.src = profile.avatar_url;
  imgProfile.alt = profile.name + "foto de perfil";

  // Atualizando informações do usuário logado
  const name = document.querySelector(".personal-info-name");
  const mail = document.querySelector(".personal-info-email");

  name.innerHTML = `<span>Nome:</span> ${profile.name}`;
  mail.innerHTML = `<span>Email:</span> ${profile.email}`;

  // Atualizando botões de atualizar conta e deletar
  const btnUpdate = document.querySelector(".button-profile-update-info");
  const btnDelete = document.querySelector(".button-profile-delete-account");

  btnUpdate.id = profile.id;
  btnDelete.id = profile.id;

  // Chamada de função de renderizar pets passando perfil
  renderMyPets(token, profile);
}

async function renderMyPets(token, profile) {
  const body = document.querySelector("body");

  const boxMyPets = document.querySelector(".box-my-pets");

  const myPets = await readAllMyPets(token);

  myPets.forEach((element) => {
    const available = element.available_for_adoption ? "Sim" : "Não";

    boxMyPets.insertAdjacentHTML(
      "beforeend",
      `<article class="card-my-pet">
        <img src="${element.avatar_url}" alt="${element.name}">
        <div class="div-card-info">
          <p><span>Nome:</span> ${element.name}</p>
          <p><span>Espécie:</span> ${element.bread}</p>
          <p><span>Adotável:</span> ${available}</p>
          <button id="${element.id}" class="buttons-default buttons-brand button-update-my-pet">Atualizar</button>
        </div>
      </article>`
    );
  });

  const buttonsUpdatePet = document.querySelectorAll(".button-update-my-pet");

  buttonsUpdatePet.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      body.insertAdjacentHTML(
        "beforeend",
        `<form class="myForm">
          <h2>Atualizar pet</h2>
          <input required class="input-default" id="name" placeholder="Nome" type="text">
          <input required class="input-default" id="bread" placeholder="Raça" type="text">
          <input required class="input-default" id="species" placeholder="Espécie" type="text">
          <input required class="input-default" id="avatar_url" placeholder="Avatar" type="link">
          <button class="buttons-default buttons-brand next-button" type="submit">Atualizar</button>
      </form>`
      );

      const myForm = document.querySelector(".myForm");
      openModal(myForm);

      myForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const inputs = [...document.querySelectorAll("input")];
        const data = {};

        inputs.forEach((e) => {
          data[e.id] = e.value;
        });

        const responseApiUpdatePet = await updatePetApi(
          token,
          data,
          element.id
        );

        if (responseApiUpdatePet) {
          const myModal = document.querySelector(".modal-background");
          myModal.remove();
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        }
      });
    });
  });
}

async function listenners(token) {
  const body = document.querySelector("body");

  const buttonRegister = document.querySelectorAll(".buttonRegister");
  const buttonLogin = document.querySelectorAll(".buttonLogin");
  const updateProfile = document.querySelector(".button-profile-update-info");
  const deleteProfile = document.querySelector(
    ".button-profile-delete-account"
  );
  const buttonRegisterNewPet = document.querySelector(
    ".button-register-new-pet"
  );
  const buttonsUpdatePet = document.querySelectorAll(".button-update-my-pet");

  buttonRegister.forEach(button=>{
    button.addEventListener("click", (e) => {
      e.preventDefault();
  
      window.location.replace("../homeLogged/index.html");
    });
  })

  buttonLogin.forEach(button=>{
    button.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("@userToken");
      window.location.replace("../homeLogged/index.html");
    });
  })

  updateProfile.addEventListener("click", (e) => {
    e.preventDefault();

    body.insertAdjacentHTML(
      "beforeend",
      `
    <form class="myForm" action="">
    <h2>Atualizar Perfil</h2>
    <input  required class="input-default" id="name" placeholder="Nome" type="text">
    <input  required class="input-default" id="avatar_url" placeholder="Avatar" type="link">
    <button class="buttons-default buttons-brand next-button" type="submit" >Atualizar</button>
  </form>
    `
    );
    const myForm = document.querySelector(".myForm");
    const buttonConfirm = document.querySelector(".next-button");

    openModal(myForm); // WTF CHILDREN

    const data = {};

    myForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const inputs = [...document.querySelectorAll("input")];

      inputs.forEach((e) => {
        data[e.id] = e.value;
      });
      const retornoApiUpdate = await updateProfileApi(token, data);

      if (retornoApiUpdate) {
        const myModal = document.querySelector(".modal-background");
        myModal.remove();
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    });
  });

  deleteProfile.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionDelete = document.createElement("section");
    sectionDelete.classList.add('myForm')
    sectionDelete.insertAdjacentHTML(
      "afterbegin",
      `
      <h2>Deseja mesmo deletar sua conta?</h2>
      <button class="buttons-default buttons-brand" id="cancelDelete">Não desejo deletar minha conta</button>
      <button class="buttons-default buttons-red" id="confirmDelete">Quero deletar minha conta</button>
    `
    );
    openModal(sectionDelete);

    const cancelDelete = document.getElementById("cancelDelete");
    cancelDelete.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(".modal-background").remove();
    });

    const confirmDelete = document.getElementById("confirmDelete");
    confirmDelete.addEventListener("click", async (event) => {
      event.preventDefault();
      await deleteProfileApi(token);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    });
  });

  buttonRegisterNewPet.addEventListener("click", (e) => {
    e.preventDefault();

    body.insertAdjacentHTML(
      "beforeend",
      `
    <form class="myForm" action="">
    <h2>Cadastrar pet</h2>
    <input  required class="input-default" id="name" placeholder="Nome" type="text">
    <input  required class="input-default" id="bread" placeholder="Raça" type="text">
    <input  required class="input-default" id="species" placeholder="Espécie" type="text">
    <input  required class="input-default" id="avatar_url" placeholder="Avatar" type="link">
    <button class="buttons-default buttons-brand next-button" type="submit">Cadastrar</button>
  </form>
    `
    );
    const myForm = document.querySelector(".myForm");
    openModal(myForm);

    myForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const inputs = [...document.querySelectorAll("input")];
      const data = {};

      inputs.forEach((e) => {
        data[e.id] = e.value;
      });

      const retornoApiCreate = await createPetApi(token, data);

      if (retornoApiCreate) {
        const myModal = document.querySelector(".modal-background");
        myModal.remove();
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    });
  });

}

listenners(token);
