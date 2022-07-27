import Api from "../controller/api.controller.js";
import Tarefa from "./tarefa.model.js";


export default class Modal {

  static criarNovaTarefa(event) {
    event.preventDefault();

    const form = [...event.path[1]];
    let body = {};

    form.forEach((input) => {
      if (input.value !== '') {
        body[input.name] = input.value;
      }
    });

    Api.criarHabito(body);
    
  };

  static async editarTarefa(element) {

    const form = document.querySelector('#formEditar')
    const botaoSalvar = form[5]

    let body = {};
    const titulo = element.parentElement.children[1]
    const categoria = element.parentElement.children[3]
    const descricao = element.parentElement.children[2]
    const idTr = parseInt(element.parentElement.id)
    const statusTr = element.parentElement.children[0].checked
    let statusForm = form[3]

    body = {
      habit_title: form[0].value,
      habit_description: form[1].value,
      habit_category: form[2].value
    }

    await Api.atualizarHabito(body, idTr)

  }

  static async deletarTarefa(element) {

    const idTr = Number(element.parentElement.id)
    await Api.apagarHabito(idTr)

  }

};

const botaoInserir = document.querySelector("#botaoInserir");
botaoInserir.addEventListener('click', Modal.criarNovaTarefa);