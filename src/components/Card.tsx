import InteractiveCard from './InteractiveCard'
import styles from './card.module.css'
import Image from 'next/image'
import { Rating } from '@mui/material'

export default function Card({ name, image, score, dispatch } : { name: string, image: string, score: Map<string, number>, dispatch: Function }) {
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
      <div>
        <div className={styles.cardText}>
          {name}
        </div>
        { !score ? null :
          <Rating
            className='mt-0'
            name="simple-controlled"
            value={score.get(name) ?? 0}
            onChange={(event: any, newValue: number | null) => {
              dispatch({ type: "CHANGE", hospital: name, score: newValue });
            }}
            onClick={(e) => e.stopPropagation()}
          />
        }
      </div>
    </InteractiveCard>
  )
}