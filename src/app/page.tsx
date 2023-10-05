import Image from 'next/image'
import Banner from '../components/Banner'
import styles from './page.module.css'
import Card from '@/components/Card'
import CardPanel from '@/components/CardPanel'
import PromoteCard from '@/components/promoteCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <PromoteCard/>
    </main>
  )
}
