import { useState } from 'react'
import style from './Navbar.module.css'

import { FaMap } from 'react-icons/fa'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import Logo from '../../assets/logo_sem_fundo.png'

import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={style.header}>
            <nav className={style.navbar}>
                <Link to="/">
                    <img src={Logo} width="60" height="60" alt="Logo da Santana's Food" />
                </Link>

                <div
                    className={style.menuToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir ou fechar menu"
                >
                    <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                    <span style={{ opacity: isOpen ? 0 : 1 }}></span>
                    <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
                </div>

                <div className={style.navContent}>
                    <ul>
                        <li>
                            <Button
                                url='https://menu.beefood.com.br/santanasburguerseporcoes/'
                                ariaLabel='Link para Cardápio'
                                id='btn-menu-nav'
                                value='Faça seu pedido'
                                icon={MdOutlineRestaurantMenu}
                            />
                        </li>
                        <li>
                            <Button
                                url="https://www.google.com/maps?q=R.%20Nelson%20Nunes%20de%20Azevedo%2C%20186%20-%20Jardim%20Caraguat%C3%A1%2C%20Cubat%C3%A3o%20-%20SP%2C%2011535-055"
                                id="btn-address-nav"
                                ariaLabel="Abrir endereço em uma nova aba"
                                value="Venha nos conhecer"
                                icon={FaMap}
                            />
                        </li>
                    </ul>
                </div>

                {isOpen && (
                    <div className={style.mobileMenu}>
                        <Button
                            url='https://menu.beefood.com.br/santanasburguerseporcoes/'
                            ariaLabel='Link para Cardápio'
                            id='btn-menu-nav'
                            value='Faça seu pedido'
                            icon={MdOutlineRestaurantMenu}
                        />
                        <Button
                            url="https://www.google.com/maps?q=R.%20Nelson%20Nunes%20de%20Azevedo%2C%20186%20-%20Jardim%20Caraguat%C3%A1%2C%20Cubat%C3%A3o%20-%20SP%2C%2011535-055"
                            id="btn-address-nav"
                            ariaLabel="Abrir endereço em uma nova aba"
                            value="Venha nos conhecer"
                            icon={FaMap}
                        />
                    </div>
                )}
            </nav>
        </header>
    )
}
