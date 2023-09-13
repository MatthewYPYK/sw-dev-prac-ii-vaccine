import InteractiveCard from './InteractiveCard'
import styles from './card.module.css'
import Image from 'next/image'

export default function Card({ name, image } : { name: string, image: string }) {
  return (
    <InteractiveCard contentName={name}>
      <div className={styles.cardImg}>
        <Image
          src={image}
          alt="Picture"
          fill={true}
          objectFit="cover"
          className='object-cover rounded-t-lg'
        />
      </div>
      <div className={styles.cardText}>{name}</div>
    </InteractiveCard>
  )
}