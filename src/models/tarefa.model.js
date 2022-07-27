import Api from "../controller/api.controller.js";

class Tarefa {

  static async templateTarefa(arrTarefas) {

    const table = document.querySelector('.table_mobile');
    table.innerHTML = '';

    const cabecalho = document.createElement('tr');
    const cabecalhoStatus = document.createElement('th');
    const cabecalhoTitulo = document.createElement('th');
    const cabecalhoDescricao = document.createElement('th');
    const cabecalhoCategoria = document.createElement('th');
    const cabecalhoEditar = document.createElement('th');

    cabecalho.classList.add('cabecalho');
    cabecalhoDescricao.classList.add('descricao');
    cabecalhoCategoria.classList.add('categoria')

    cabecalhoStatus.innerHTML = 'Status';
    cabecalhoTitulo.innerHTML = 'Título';
    cabecalhoEditar.innerHTML = 'Editar';

    cabecalhoDescricao.innerHTML = 'Descrição';
    cabecalhoCategoria.innerHTML = 'Categoria';

    cabecalho.append(cabecalhoStatus, cabecalhoTitulo, cabecalhoDescricao, cabecalhoCategoria, cabecalhoEditar);
    table.append(cabecalho);


    arrTarefas.forEach((tarefa) => {


      const linha = document.createElement('tr');

      const tableCheck = document.createElement('td');
      const label = document.createElement('label');
      const inputCheck = document.createElement('input');
      const span = document.createElement('span');

      const titulo = document.createElement('td');
      const descricao = document.createElement('td');

      const tableCategoria = document.createElement('td');
      const divCategoria = document.createElement('div');
      const categoria = document.createElement('p');

      const tableEditar = document.createElement('td');
      const botaoEditar = document.createElement('button');
      const botaoImagem1 = document.createElement('img');
      const botaoImagem2 = document.createElement('img');
      const botaoImagem3 = document.createElement('img');

      linha.classList.add('tarefa_card')
      linha.id = `${tarefa.habit_id}`
      tableCheck.classList.add('status');
      label.classList.add('chk');
      inputCheck.classList.add('check');
      inputCheck.setAttribute('type', 'checkbox');
      inputCheck.setAttribute('name', 'checkbox');

      inputCheck.checked = tarefa.habit_status
      if (inputCheck.checked) {
        titulo.style.textDecoration = "line-through"
        linha.style.backgroundColor = "rgba(233, 236, 239, 1)"
      } else {
        linha.style.backgroundColor = "white"
        titulo.style.textDecoration = "none"
      }
      titulo.classList.add('titulo');
      descricao.classList.add('descricao');

      tableCategoria.classList.add('categoria');
      divCategoria.classList.add('categoria_definida');
      categoria.classList.add('categoria_tarefa')

      tableEditar.classList.add('editar');
      botaoEditar.classList.add('buttonEditar');

      titulo.innerHTML = tarefa.habit_title;
      descricao.innerHTML = tarefa.habit_description;
      categoria.innerHTML = tarefa.habit_category;

      botaoImagem1.src = "../assets/img/Ellipse-6.png";
      botaoImagem2.src = "../assets/img/Ellipse-6.png";
      botaoImagem3.src = "../assets/img/Ellipse-6.png";

      label.append(inputCheck, span);
      tableCheck.append(label);

      botaoEditar.append(botaoImagem1, botaoImagem2, botaoImagem3);
      tableEditar.append(botaoEditar);


      divCategoria.append(categoria);
      tableCategoria.append(divCategoria);

      linha.append(tableCheck, titulo, descricao, tableCategoria, tableEditar);
      table.append(linha);

    })
  };
};

export default Tarefa;