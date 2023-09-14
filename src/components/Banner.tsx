"use client"
import React from 'react';
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {

  const [cover, setCover] = React.useState(0);

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
    </div>
  )
}