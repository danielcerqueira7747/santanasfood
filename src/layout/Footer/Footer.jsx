import style from './Footer.module.css'

import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function Footer() {

  return (
    <motion.footer
      className={style.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={style.about}>
        <div className={style.company}>
          <div className={style.logo}>
            <Link to='/' aria-label="Santana's Burguer e Porções">
              <img src={Logo} alt="logo da Santana's Burguer e Porções" />
            </Link>
          </div>

          <div className={style.socialMedia}>
            <motion.a
              href="https://wa.me/5513997227991"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2}}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className={style.icon} />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/santanas.food/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2}}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Instagram"
            >
              <FaInstagram className={style.icon} />
            </motion.a>
          </div>
        </div>
      </div>

      <hr className={style.hr} />

      <div className={style.copyright}>
        <p>
          Site desenvolvido por{' '}
          <span>
            <a href='https://agenciabrazu.com.br' target="_blank" rel="noopener noreferrer">Agência Brazu</a>
          </span>{' '}
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </motion.footer>
  )
}
