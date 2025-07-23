import style from './ButtonWhatsapp.module.css'

import { FaWhatsapp } from 'react-icons/fa'

export default function ButtonWhatsapp(){

    return (

        <div className={style.divButton}>

            <a 
                id='btn-whatsapp-fixed'
                href="https://api.whatsapp.com/send?phone=5513998060680" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"

            >

                <button className={style.btnWhatsapp}>

                    <FaWhatsapp />

                </button>

            </a>

        </div>

    )

}