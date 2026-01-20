import { AiOutlineClose } from 'react-icons/ai'

import { Container } from './style'

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <Container isVisible={menuIsVisible}>
      <AiOutlineClose
        className="text-2xl"
        onClick={() => setMenuIsVisible(false)}
      />
      <ul className="flex cursor-pointer flex-col items-center 2xl:hidden">
        <li className="h-6 leading-3">
          <a
            className="text-xs text-purple-600 no-underline hover:text-sky-300 hover:duration-1000"
            href="#início"
          >
            Inicio
          </a>
        </li>
        <li className="h-6 leading-3">
          <a
            className="text-xs text-purple-600 no-underline hover:text-sky-300 hover:duration-1000"
            href="#sobre"
          >
            Sobre Mim
          </a>
        </li>
        <li className="h-6 leading-3">
          <a
            className="text-xs text-purple-600 no-underline hover:text-sky-300 hover:duration-1000"
            href="#serviços"
          >
            Serviços
          </a>
        </li>
        <li className="h-6 leading-3">
          <a
            className="text-xs text-purple-600 no-underline hover:text-sky-300 hover:duration-1000"
            href="#projetos"
          >
            Projetos
          </a>
        </li>
        <li className="h-6 leading-3">
          <a
            className="text-xs text-purple-600 no-underline hover:text-sky-300 hover:duration-1000"
            href="#habilidades"
          >
            Habilidades
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default MenuMobile
