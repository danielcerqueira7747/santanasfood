import style from './HeroSection.module.css'

import Button from '../../components/Button/Button'

import { FaMap } from 'react-icons/fa'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import Logo from '../../assets/logo_sem_fundo.png'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className={`${style.hero} position-relative overflow-hidden`}>
      <div className={style.overlay}>
        <div className="container py-5">
          <div className="row align-items-center">

            <motion.div
              className="col-lg-6 col-md-8 text-center text-lg-start mb-4 mb-lg-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 className="mb-4">
                Que tal deixar sua noite <br /> BEM MAIS DELICIOSA?
              </motion.h1>

              <motion.div
                className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                  hidden: {},
                }}
              >
                {[{
                  url: "https://www.google.com/maps?q=R.%20Nelson%20Nunes%20de%20Azevedo%2C%20186%20-%20Jardim%20Caraguat%C3%A1%2C%20Cubat%C3%A3o%20-%20SP%2C%2011535-055",
                  id: "btn-address",
                  ariaLabel: "Abrir endereço em uma nova aba",
                  value: "Venha nos conhecer",
                  icon: FaMap,
                  classname: "btn btn-primary"
                }, {
                  url: "https://menu.beefood.com.br/santanasburguerseporcoes/",
                  id: "btn-menu-hero",
                  ariaLabel: "Link para Cardápio",
                  value: "Faça seu pedido",
                  icon: MdOutlineRestaurantMenu,
                  classname: "btn btn-outline-light"
                }].map(({ url, id, ariaLabel, value, icon, classname }, i) => (
                  <motion.div
                    key={id}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.5, delay: i * 0.3 }}
                  >
                    <Button
                      url={url}
                      id={id}
                      ariaLabel={ariaLabel}
                      value={value}
                      icon={icon}
                      classname={classname}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="col-lg-6 d-lg-block position-relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={Logo}
                alt="Logo da Santana's food"
                className={style.heroLogo}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
