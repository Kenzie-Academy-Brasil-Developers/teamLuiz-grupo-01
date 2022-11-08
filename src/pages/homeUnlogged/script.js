import { dropdown } from "../../scritps/dropdown.js"
import { openModal } from "../../scritps/modal.js"
import { loginApi, registerApi } from "../../scritps/requestPOST.js"



let buttonLogin = document.querySelector('.login')
let buttonRegister = document.querySelector('.register')
let body = document.querySelector('body')

buttonLogin.addEventListener('click', () => {
    openModalLogin()
})
buttonRegister.addEventListener('click', () => {
    openModalRegister()
})

function openModalLogin (){

    
        body.insertAdjacentHTML('beforeend', `
    
        <form class="myForm" action="">
        <h2>Login</h2>
        <input id="email" required placeholder="E-mail" type="email">
        <input id="password" required placeholder="Senha" type="password">
        <button>Entrar</button>
        <p>Não tem cadastro? <a class="link-click" href="">Clique aqui </a>para se cadastrar.</p>
    </form>
        
        `)
        let myForm = document.querySelector('.myForm')
        openModal(myForm)
    
        const bodyApi = {}
    
        myForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            let inputForm = [...document.querySelectorAll('input')]
    
            inputForm.forEach((e) => {
                bodyApi[e.id] = e.value
            })
    
            const returnApi = await loginApi(bodyApi)
            if(returnApi){
                localStorage.setItem('@userToken', JSON.stringify(returnApi.token))
            }
        })
        let linkClick = document.querySelector('.link-click')
        linkClick.addEventListener('click', (e) => {
            e.preventDefault()
            let myModal = document.querySelector('.modal-background')
            myModal.remove()
            openModalRegister()
        })
}


function openModalRegister(){
        body.insertAdjacentHTML('beforeend', `
    
        <form class="myForm" action="">
        <h2>Cadastrar</h2>
        <input id="name" required placeholder="Nome" type="text">
        <input id="email" required placeholder="E-mail" type="email">
        <input id="password" required placeholder="Senha" type="password">
        <input id="avatar_url" required placeholder="Avatar?" type="link">
        <button>Cadastrar</button>
        <p>Já tem cadastro? <a class="link-click" href="">Clique aqui </a>para se logar.</p>
    </form>
        
        `)
    
        let myForm = document.querySelector('.myForm')
        openModal(myForm)
    
        const bodyApi = {}
    
        myForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            let inputForm = [...document.querySelectorAll('input')]
    
            inputForm.forEach((e) => {
                bodyApi[e.id] = e.value
            })
            
            const responseApi = await registerApi(bodyApi)
            console.log(responseApi)
            if(responseApi === 'ok'){
                let myModal = document.querySelector('.modal-background')
            myModal.remove()
            openModalLogin()
            }
            
    
        })


        let linkClick = document.querySelector('.link-click')
        linkClick.addEventListener('click', (e) => {
            e.preventDefault()
            let myModal = document.querySelector('.modal-background')
            myModal.remove()
            openModalLogin()
        })
}




dropdown()