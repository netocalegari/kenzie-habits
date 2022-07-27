
export default class Api {
    static base_url = "https://habits-kenzie.herokuapp.com/api"

    static token = JSON.parse(localStorage.getItem("@capstone:token"))

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}` 
    }

    static async login(dadosLogin) {
        
        return await fetch(`${this.base_url}/userLogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(dadosLogin)
        })
            .then((response) => {
                
                if (response.status == 200) {
                    window.location.href = './src/views/homepage.views.html'
                } else {
                    const message = document.querySelector(".message")
                    const textMessage = document.querySelector(".h3TituloMsg")
                    const descriptionMessage = document.querySelector(".paragrafoDescription")
                    textMessage.innerText = 'Erro:'
                    descriptionMessage.innerText = 'Verifique os dados e tente novamente'
                    message.style.backgroundColor = '#FA8072'
                    message.style.borderColor = '#7E181E'
                    message.style.display = 'flex'
                    setTimeout(() => {
                        message.style.display = 'none'
                    }, 3000)
                }

                return response.json()
            })
            .then((response) => {

                localStorage.setItem("@capstone:userName", JSON.stringify(response.response.usr_name))
                localStorage.setItem("@capstone:token", JSON.stringify(response.token))

                return response
            })
            .catch(err => console.log(err))
    }

    static async atualizarPerfil(novoDado) {
        return await fetch(`${this.base_url}/user/profile`, {
            method: "PATCH",
            headers: this.headers, 
            body: JSON.stringify(novoDado)
        })
            .then((response) => {
                if (response.status == 200) {
                    const message = document.querySelector(".message")
                    const paragrafoDescription = document.querySelector('.paragrafoDescription')

                    paragrafoDescription.innerText = 'Perfil atualizado com sucesso!'
                    message.style.display = 'flex'
                    setTimeout(() => {
                        message.style.display = 'none'
                    }, 3000)
                    setTimeout(() => {
                        location.reload(true)
                    }, 3500)
                }
                return response.json()
            })
            .catch(err => console.error(err));
    }

    static async criarHabito(novoHabito) {
        return await fetch(`${this.base_url}/habits`, {
            method: "POST",
            headers: this.headers, 
            body: JSON.stringify(novoHabito)
        })

            .then((response) => {
                if (response.status == 200) {
                    const modalHabilitar = document.querySelector('#modalTarefa')
                    const modalEditar = document.querySelector('#containerModalTarefa')
                    modalEditar.style.display = 'none';
                    modalHabilitar.style.display = 'none'
                    const message = document.querySelector(".message")
                    message.style.display = 'flex'
                    setTimeout(() => {
                        message.style.display = 'none'
                    }, 3000)
                    setTimeout(() => {
                        location.reload(true)
                    }, 3500)
                }
                return response.json()
            })
            .catch(err => console.error(err));
    }

    static async mostrarTodosHabitos() {
        return await fetch(`${this.base_url}/habits`, {
            method: "GET",
            headers: this.headers 
        })
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
    }

    static async mostrarHabitoPorCategoria(categoriaDoHabito) {
        return await fetch(`${this.base_url}/habits/category/${categoriaDoHabito}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}` 
            }
        })
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    static async atualizarHabito(habitoParaAtualizar, idHabito) {
        return await fetch(`${this.base_url}/habits/${idHabito}`, {
            method: "PATCH",
            headers: this.headers, 
            body: JSON.stringify(habitoParaAtualizar)
        })
            .then((response) => {
                if (response.status == 200) {
                    const modalHabilitar = document.querySelector('.modal')
                    const modalEditar = document.querySelector('.containerModal')
                    modalEditar.style.display = 'none';
                    modalHabilitar.style.display = 'none'

                    const message = document.querySelector(".message")
                    message.style.display = 'flex'
                    setTimeout(() => {
                        message.style.display = 'none'
                    }, 3000)
                    setTimeout(() => {
                        location.reload(true)
                    }, 3500)
                }
                return response.json()
            })
            .catch(err => console.error(err));
    }

    static async concluirHabito(idHabito) {
        return await fetch(`${this.base_url}/habits/complete/${idHabito}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${this.token}` 
            }
        })
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    static async apagarHabito(idHabito) {
        return await fetch(`${this.base_url}/habits/${idHabito}`, {
            method: "DELETE",
            headers: this.headers 
        })
            .then((response) => {
                if (response.status == 200) {
                    const modalHabilitar = document.querySelector('.modal')
                    const modalEditar = document.querySelector('.containerModal')
                    modalEditar.style.display = 'none';
                    modalHabilitar.style.display = 'none'

                    const message = document.querySelector(".message")
                    const paragrafoDescription = document.querySelector('.paragrafoDescription')

                    paragrafoDescription.innerText = 'Seu hábito foi apagado com sucesso!'
                    message.style.display = 'flex'
                    setTimeout(() => {
                        message.style.display = 'none'
                    }, 3000)
                    setTimeout(() => {
                        location.reload(true)
                    }, 3500)
                }
                return response.json()
            })
            .catch(err => console.error(err));
    }

}