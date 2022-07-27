import abrirEFecharModal from "../controller/abrirEFecharModal.controller.js";
import riscarTarefa from "../controller/riscarTarefa.controller.js";
import Tarefa from "../models/tarefa.model.js";
import Api from "../controller/api.controller.js";
import Dropdown from "../controller/dropdown.controller.js";

const listaDeTarefas = await Api.mostrarTodosHabitos();
const tarefasOrdenadas = listaDeTarefas.sort((a, b) => b.habit_id - a.habit_id);
await Tarefa.templateTarefa(tarefasOrdenadas);

const userImg = document.querySelector('.perfil')
const userPerfil = document.querySelector('.foto-usuario')
const username = document.querySelector('.nome-usuario')

userImg.src = `${JSON.parse(localStorage.getItem('@capstone:userImg'))}`
userPerfil.src = `${JSON.parse(localStorage.getItem('@capstone:userImg'))}`
username.innerText = `${JSON.parse(localStorage.getItem('@capstone:userName'))}`

riscarTarefa();
abrirEFecharModal();
Dropdown.exibirDropdown()
Dropdown.deslogar()







