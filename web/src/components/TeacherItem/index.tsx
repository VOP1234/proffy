import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (

    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/47868559?s=460&u=a6d28589d16dc8fcefac11bc926c206a56842ad9&v=4" alt="Vitor Pereira" />
        <div>
          <strong>Vitor Pereira</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de Física avançada.
  <br /><br />
  Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
</p>

      <footer>
        <p>
          Preço/Hora
    <strong>R$ 120,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="Whatsapp" />
    Entrar em contato
  </button>
      </footer>
    </article>
  )
}

export default TeacherItem