import Image from 'next/image'
import Banner from '../components/Banner'
import styles from './page.module.css'
import Card from '@/components/Card'


export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "flex-start",
        flexWrap: "wrap"
      }}>
        <Card/>
      </div>
    </main>
  )
}
