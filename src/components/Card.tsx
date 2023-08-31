import styles from './card.module.css'
import Image from 'next/image'

export default function Card({ name, image } : { name: string, image: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={image}
          alt="Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardText}>{name}</div>
    </div> 
  )
}