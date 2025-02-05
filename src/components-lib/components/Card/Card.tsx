import { CardProps } from '../../model/CardModel'
import { Skeleton } from '../Skeleton/Skeleton'
import s from './Card.module.scss'
import clsx from 'clsx'

export const Card: React.FC<CardProps> = ({ onClick, hoverable = false, title, subtitle, children, classNames, loading = false, style, size = 'md'
}) => {

  const cardStyles = clsx(
    { [s.hoverable]: hoverable },
    { [s.loading]: loading},
    s[`size-${size}`],
    s.card,
    classNames,
  )

  const titleStyles = clsx(
    s[`title-${size}`]
  )

  const subtitleStyles = clsx(
    s[`subtitle-${size}`]
  )

  return (
    <>
      {loading ?
        <Skeleton />
        : (
          <div style={style} className={cardStyles} onClick={onClick}>
          {title &&
            <p className={titleStyles}>{title}</p>
          }
          {subtitle &&
            <p className={subtitleStyles}>{subtitle}</p>
          }
        {children}
        </div>
        )}
      </>
  )
}

