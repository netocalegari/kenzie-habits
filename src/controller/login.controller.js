import Api from "./api.controller.js"

export default function loginDados() {
    const btn_login = document.querySelector(".btn_login")

    const dadosbtn = btn_login.addEventListener("click", async (e) => {
        const form = document.querySelector(".form")
        const arrayForm = Array.from(form)
        let objetoDadosLogin = {}
        arrayForm.forEach((elem, index) => {
            if (index == 0) {
                objetoDadosLogin.email = elem.value
            }
            if (index == 1) {
                objetoDadosLogin.password = elem.value
            }
        })
        if (objetoDadosLogin.email !== "" && objetoDadosLogin.password !== "") {

            const requisicao = await Api.login(objetoDadosLogin)
            const userImg = requisicao.response.usr_image
            localStorage.setItem('@capstone:userImg', JSON.stringify(userImg))

        }
    })


}
