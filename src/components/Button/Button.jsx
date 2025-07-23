import style from './Button.module.css'

export default function Button({ url, ariaLabel, value, id, icon: Icon }){

    return (

        <a href={url} aria-label={ariaLabel} target='_blank' rel="noopener noreferrer">

            <button id={id} className={`${style.btn}`}>

                {value} {Icon && <Icon />}

            </button>

        </a>

    )

}