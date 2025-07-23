import { useRef, useState } from 'react'
import style from './ProductSection.module.css'

import Button from '../../components/Button/Button'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { motion } from 'framer-motion'

const produtos = [
  {
    nome: 'X-Burguer',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/155508ffb.webp'
  },
  {
    nome: 'Santana Salad',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/51012e69d.webp'
  },
  {
    nome: 'X-Bacon',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/20511bc2e.webp'
  },
  {
    nome: 'Santana Chicken',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/1572784b5.webp'
  },
  {
    nome: 'Smash Duplo Cheddar',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/159069f6e.webp'
  },
  {
    nome: 'Petiscos de Mandioca',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/13420ab9a.webp'
  },
  {
    nome: 'Explosão de Sabores!',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/221338271.webp'
  },
  {
    nome: 'Pastel de Bauru',
    imagem: 'https://beetech-imagens.s3-sa-east-1.amazonaws.com/25696/p/webp/22447db62.webp'
  }
]

export default function ProductSection() {
  const scrollRef = useRef()
  const [btnClicked, setBtnClicked] = useState(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (current) {
      current.scrollBy({
        left: direction === 'next' ? 300 : -300,
        behavior: 'smooth'
      })
    }
    setBtnClicked(direction)
    setTimeout(() => setBtnClicked(null), 200)
  }

  return (
    <section className={`${style.productSection} p-5 text-center`}>
      <h2 className="mb-2">Nosso cardápio quente 🔥</h2>
      <p className="mb-4">Estamos sempre com novidades, confira nosso cardápio AGORA!</p>

      <div className={`${style.carouselWrapper} mt-5`}>
        <motion.button
          className={style.navBtn}
          onClick={() => scroll('prev')}
          whileTap={{ scale: 0.8 }}
          animate={btnClicked === 'prev' ? { scale: 0.9 } : { scale: 1 }}
          aria-label="Scroll Previous"
        >
          <FaChevronLeft />
        </motion.button>

        <div className={style.carousel} ref={scrollRef}>
          {produtos.map((produto, index) => (
            <motion.div
              key={index}
              className={style.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
            >
              <img src={produto.imagem} alt={produto.nome} className={style.cardImage} />
              <h5 className="mt-2">{produto.nome}</h5>
            </motion.div>
          ))}
        </div>

        <motion.button
          className={style.navBtn}
          onClick={() => scroll('next')}
          whileTap={{ scale: 0.8 }}
          animate={btnClicked === 'next' ? { scale: 0.9 } : { scale: 1 }}
          aria-label="Scroll Next"
        >
          <FaChevronRight />
        </motion.button>
      </div>

      <Button
        url="https://menu.beefood.com.br/santanasburguerseporcoes/"
        ariaLabel="Link para Cardápio"
        id="btn-menu-cta"
        value="Ver cardápio"
        icon={MdOutlineRestaurantMenu}
      />
    </section>
  )
}
