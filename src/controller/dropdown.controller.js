import Api from "./api.controller.js"

export default class Dropdown {

    static figuraClick = document.querySelector('.figure-header')
    static dropDownContent = document.querySelector('.dropdown-content')
    static editPerfil = document.querySelector('.dropdown-editar')
    static logout = document.querySelector('.dropdown-sair')

    static exibirDropdown() {
        this.figuraClick.addEventListener('click', (event) => {
            
            if (this.dropDownContent.style.display === 'none') {
                this.dropDownContent.style.display = 'flex'
                this.dropDownContent.style.gap = '15px'
                this.dropDownContent.style.flexDirection = 'column'
                this.dropDownContent.style.alignItems = 'flex-start'
                this.dropDownContent.style.justifyContent = 'space-between'
            } else {
                this.dropDownContent.style.display = 'none'
            }
        })
    }

    static editarPerfil() {

        const buttonEditarPerfil = document.querySelector('.modalEditarPerfil__btn-Salvar')
        buttonEditarPerfil.addEventListener('click', async (event) => {
            const form = event.path[1]
            const nome = form[0].value
            const urlImagem = form[1].value
            const objetoImg = {}
            if (urlImagem.includes("https://")) {
                objetoImg.usr_image = urlImagem
            }

            const requisicao = await Api.atualizarPerfil(objetoImg)

            const imgPerfil = document.querySelector('.perfil')
            const imgPerfil2 = document.querySelector('.foto-usuario')
            const nomeUsuario = document.querySelector('.nome-usuario')
            imgPerfil.src = `${objetoImg.usr_image}`
            imgPerfil2.src = `${objetoImg.usr_image}`
            nomeUsuario.innerText = `${requisicao.usr_name}`

            const modalPerfil = document.querySelector('.modalEditarPerfilContainer')
            modalPerfil.style.display = 'none'

        })

        const modalPerfilFechar = document.querySelector('.modalEditarPerfil__btn-Fechar')
        modalPerfilFechar.addEventListener('click', () => {
            const modalEditarPerfil = document.querySelector('.modalEditarPerfil')
            modalEditarPerfil.style.display = 'none'
            const modalPerfil = document.querySelector('.modalEditarPerfilContainer')
            modalPerfil.style.display = 'none'
        })

        

    }

    static deslogar() {
        this.logout.addEventListener('click', (event) => {
            localStorage.clear()
            location.href = '../../index.html'
        })
    }

}

