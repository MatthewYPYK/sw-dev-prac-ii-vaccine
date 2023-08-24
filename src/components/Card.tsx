import styles from './card.module.css'
import Image from 'next/image'

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={"/img/card.jpg"}
          alt="Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardText}>วัคซีน คือ ยาหรือสารชนิดหนึ่งที่ฉีดเข้าไปในร่างกาย และทำให้ร่างกายเพื่อให้ร่างกายเกิดการสร้างภูมิคุ้มกันที่จะไปต่อสู้กับเชื้อโรคได้</div>
    </div> 
  )
}