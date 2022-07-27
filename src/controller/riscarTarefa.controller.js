import Api from "./api.controller.js";

function riscarTarefa() {
  const tr = document.querySelectorAll('tr')

  tr.forEach(element => {
    
    element.addEventListener('change', async function (event) {

      const tarefa = event.path[3]

      if (event.path[0].checked === false) {
        tarefa.style.backgroundColor = "white"
        tarefa.children[1].style.textDecoration = "none"
      } else if (event.path[0].checked === true) {
        tarefa.children[1].style.textDecoration = "line-through"
        tarefa.style.backgroundColor = "rgba(233, 236, 239, 1)"

        await Api.concluirHabito(element.id)
      }
    });

  })

}

export default riscarTarefa