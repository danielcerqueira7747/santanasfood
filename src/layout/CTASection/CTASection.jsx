import style from './CTASection.module.css'

import { Container } from 'react-bootstrap'
import Button from '../../components/Button/Button'

import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { motion } from 'framer-motion'

export default function CTASection() {

  return (
    <section className={style.CTASection}>
      <div className={style.overlay}>
        <div className={style.content}>
          <Container>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              Deu água na boca, né?
            </motion.h2>

            <motion.div
              className={style.CTAButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button 
                url='https://wa.me/5513998060680'
                ariaLabel='Link para Whatsapp'
                id='btn-wpp-cta'
                value='Chame-nos no Whatsapp'
                icon={FaWhatsapp}
              />

              <Button 
                url='https://menu.beefood.com.br/santanasburguerseporcoes/'
                ariaLabel='Link para Cardápio'
                id='btn-menu-cta'
                value='Faça seu pedido'
                icon={MdOutlineRestaurantMenu}
              />
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  )
}
