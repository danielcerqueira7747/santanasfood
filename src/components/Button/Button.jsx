import style from './Button.module.css'

export default function Button({ url, ariaLabel, value, id, icon: Icon }){

    return (

        <a href={url} id={id} aria-label={ariaLabel} target='_blank' rel="noopener noreferrer">

            <button className={`${style.btn}`}>

                {value} {Icon && <Icon />}

            </button>

        </a>

    )

}