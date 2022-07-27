import Modal from "../models/modal.models.js"
import Dropdown from "./dropdown.controller.js"

function abrirEFecharModal() {
  const editar = document.querySelectorAll('.editar')

  editar.forEach(element => {

    element.lastElementChild.addEventListener('click', function (event) {
      const modalHabilitar = document.querySelector('.modal')
      const modalEditar = document.querySelector('.containerModal')
      modalHabilitar.style.display = 'flex';
      modalEditar.style.display = 'flex';
      const form = document.querySelector('#formEditar')
      const botaoExcluir = form[4]
      botaoExcluir.addEventListener('click', (event) => {
        event.preventDefault()

        const modalD = document.querySelector('.modalD')
        const modalDeleteContainer = document.querySelector('.modalDeleteContainer')

        modalD.style.display = 'flex'
        modalDeleteContainer.style.display = 'flex'
        modalHabilitar.style.display = 'none';
        modalEditar.style.display = 'none';

        const buttonCancelar = document.querySelector('#buttonCancelDelete')
        const buttonExcluir = document.querySelector('#buttonConfirmDelete')

        buttonCancelar.addEventListener('click', () => {

          modalD.style.display = 'none'
          modalDeleteContainer.style.display = 'none'
        })

        buttonExcluir.addEventListener('click', (event) => {
          event.preventDefault()
          Modal.deletarTarefa(element)
          modalD.style.display = 'none'
          modalDeleteContainer.style.display = 'none'
        })

        // 
      })

      const botaoSalvar = document.getElementById('salvar')
      botaoSalvar.addEventListener('click', (event) => {
        event.preventDefault()
        Modal.editarTarefa(element)

      })
    })
  })

  const editarPerfil = document.querySelector('.dropdown-text')

  editarPerfil.addEventListener('click', () => {
    const modalEditarPerfilContainer = document.querySelector('.modalEditarPerfilContainer')
    modalEditarPerfilContainer.style.display = 'flex'
    const modalEditarPerfil = document.querySelector('.modalEditarPerfil')
    modalEditarPerfil.style.display = 'flex'

    Dropdown.editarPerfil()

  })


  const botaoFechar = document.querySelector('#fecharModal')

  botaoFechar.addEventListener('click', () => {
    const modalHabilitar = document.querySelector('.modal')
    const modalEditar = document.querySelector('.containerModal')
    modalEditar.style.display = 'none';
    modalHabilitar.style.display = 'none'
  })

  const botaoCriar = document.querySelector('#botaoCriar');
  botaoCriar.addEventListener('click', () => {
    const modalHabilitar = document.querySelector('#modalTarefa')
    const modalEditar = document.querySelector('#containerModalTarefa')
    modalHabilitar.style.display = 'flex';
    modalEditar.style.display = 'flex';
  })

  const botaoFecharTarefa = document.querySelector('#fecharModalTarefa');
  botaoFecharTarefa.addEventListener('click', () => {
    const modalHabilitar = document.querySelector('#modalTarefa')
    const modalEditar = document.querySelector('#containerModalTarefa')
    modalHabilitar.style.display = 'none';
    modalEditar.style.display = 'none';
  })
}

export default abrirEFecharModal
