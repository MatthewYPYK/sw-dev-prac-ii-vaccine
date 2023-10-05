"use client"
import React from 'react';
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Banner() {

  const [cover, setCover] = React.useState(0);

  const router = useRouter();

  return (
    <div className={styles.banner} onClick={() => setCover((cover + 1) % 4)}>
      <Image
        src={`/img/cover-${cover}.jpg`}
        alt="cover"
        fill={true}
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1>Vaccine</h1>
        <h3>วัคซีนฟรี เพียง 1500 บาท</h3>
      </div>
      <button
        className='bg-white text-grey-600 font-semibold py-2 px-2 rounded z-30 absolute bottom-1 right-2'
        onClick={(e) => { e.preventDefault; router.push("/hospital") }}
      >
        เลือกโรงพยาบาล
      </button>
    </div>
  )
}