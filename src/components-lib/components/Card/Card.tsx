import { CardProps } from '../../model/CardModel'
import s from './Card.module.scss'
import clsx from 'clsx'

export const Card: React.FC<CardProps> = ({ onClick, hoverable = false, title, subtitle, children,
  header, footer, photoPosition = 'top', img, classNames
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
      {header &&
        <div className={s.card_header}>
          {header.title &&
            <p className={s.header_title}>{header.title}</p>
          }
          {header.subtitle &&
            <p className={s.header_subtitle}>{header.subtitle}</p>
          }
          {header.children}
        </div>
      }
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

      {footer &&
        <div className={s.card_footer}>
          {footer.title &&
            <p className={s.footer_title}>{footer.title}</p>
          }
          {footer.subtitle &&
            <p className={s.footer_subtitle}>{footer.subtitle}</p>
          }
          {footer.children}
        </div>
      }
    </div>
  )
}

