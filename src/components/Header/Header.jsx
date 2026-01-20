import { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { HiMenuAlt4 } from 'react-icons/hi'

import MenuMobile from '../MenuMobile/MenuMobile'
import { Nav } from './style'

function Header({ theme, themeToggler }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <header className="fixed z-10 flex h-32 w-full justify-between p-2 md:p-3">
      <div className="flex items-start pt-1 md:pt-0">
        <h2 className="text-base md:text-2xl">
          Diego <span className="text-purple-600">Fagundes</span>
        </h2>
        <button onClick={themeToggler}>
          {theme === 'light' ? (
            <BiMoon className="h-3 md:h-5" />
          ) : (
            <BiSun className="h-3 md:h-5" />
          )}
        </button>
      </div>
      <Nav className="h-8" isVisible={menuIsVisible}>
        <div className="mr-4 flex flex-col items-end md:hidden">
          <HiMenuAlt4
            className="menu text-2xl"
            onClick={() => setMenuIsVisible(true)}
          />
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </div>

        <ul className="hidden gap-4 md:flex">
          <li className="h-3 leading-normal">
            <a
              className="cursor-pointer text-2xl text-purple-400 no-underline hover:text-sky-300 hover:duration-1000"
              href="#início"
            >
              Início
            </a>
          </li>
          <li className="h-3 leading-normal">
            <a
              className="cursor-pointer text-2xl text-purple-400 no-underline hover:text-sky-300 hover:duration-1000"
              href="#sobre"
            >
              Sobre Mim
            </a>
          </li>
          <li className="h-3 leading-normal">
            <a
              className="cursor-pointer text-2xl text-purple-400 no-underline hover:text-sky-300 hover:duration-1000"
              href="#serviços"
            >
              Serviços
            </a>
          </li>
          <li className="h-3 leading-normal">
            <a
              className="cursor-pointer text-2xl text-purple-400 no-underline hover:text-sky-300 hover:duration-1000"
              href="#projetos"
            >
              Projetos
            </a>
          </li>
          <li className="h-3 leading-normal">
            <a
              className="cursor-pointer text-2xl text-purple-400 no-underline hover:text-sky-300 hover:duration-1000"
              href="#habilidades"
            >
              Habilidades
            </a>
          </li>
        </ul>
      </Nav>
    </header>
  )
}
export default Header
