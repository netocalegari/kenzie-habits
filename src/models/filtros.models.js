import Api from "../controller/api.controller.js";
import Tarefa from "./tarefa.model.js";

const listaDeTarefas = await Api.mostrarTodosHabitos();
class Filtros {
  static async mostrarTodasTarefas() {
    await Tarefa.templateTarefa(listaDeTarefas);
  };

  static async mostrarTarefasConcluidas() {

    const tarefasConcluidas = listaDeTarefas.filter((tarefa) => {
      if (tarefa.habit_status) {
        return tarefa;
      }
    });

    await Tarefa.templateTarefa(tarefasConcluidas);
  };
}

const botaoTodos = document.querySelector("#botaoTodos");
botaoTodos.addEventListener('click', Filtros.mostrarTodasTarefas);

const botaoConcluidos = document.querySelector('#botaoConcluidos');
botaoConcluidos.addEventListener('click', Filtros.mostrarTarefasConcluidas);