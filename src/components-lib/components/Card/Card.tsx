import { CardProps } from '../../model/CardModel'
import s from './Card.module.scss'
import clsx from 'clsx'

export const Card: React.FC<CardProps> = ({ onClick, hoverable = false, title, subtitle, children, photoPosition = 'top', img, classNames
}) => {

  const photoStyles = clsx(
    s[`img_${photoPosition}`],
    s.card_img
  )

  const cardStyles = clsx(
    { [s.hoverable]: hoverable },
    s.card,
    classNames
  )
  return (
    <div className={cardStyles} onClick={onClick}>
      <div className={s.card_content}>
        {img &&
          <div className={photoStyles}>
            <img src={img.src} alt={img.alt} />
          </div>
        }
        {title &&
          <p className={s.title}>{title}</p>
        }
        {subtitle &&
          <p className={s.subtitle}>{subtitle}</p>
        }
      </div>
      {children}
    </div>
  )
}

