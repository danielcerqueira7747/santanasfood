import style from './Location.module.css'

import Button from '../../components/Button/Button'
import { FaMap } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section className={`${style.location} py-5`}>
      <h2 className="text-center mb-4">Nossa Localização</h2>

      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className={`col-lg-7 col-12 mb-4 mb-lg-0 ${style.mapAddress}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="ratio ratio-16x9">
              <iframe
                title="Mapa do endereço"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=R.%20Nelson%20Nunes%20de%20Azevedo%2C%20186%20-%20Jardim%20Caraguat%C3%A1%2C%20Cubat%C3%A3o%20-%20SP%2C%2011535-055&output=embed"
                className="rounded"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className={`col-lg-5 col-12 ${style.textAddress}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h5 className="mb-3">
              Você pode nos encontrar na R. Nelson Nunes de Azevedo, 186 - Jardim Caraguatá, Cubatão - SP
            </h5>

            <Button
              url="https://www.google.com/maps?q=R.%20Nelson%20Nunes%20de%20Azevedo%2C%20186%20-%20Jardim%20Caraguat%C3%A1%2C%20Cubat%C3%A3o%20-%20SP%2C%2011535-055"
              id="btn-address"
              ariaLabel="Abrir endereço em uma nova aba"
              value="Venha nos conhecer"
              icon={FaMap}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
