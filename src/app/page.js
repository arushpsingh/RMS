import Image from 'next/image'
import styles from './page.module.css'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Typography variant='h4' sx={{ mt: 2 }} gutterBottom>
        Welcome to Resource Manager
      </Typography>
    </main>
  )
}

export const metadata = {
  title: "Home: Resource Manager"
}