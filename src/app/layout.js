import NavBar from '@/components/header/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
import "./globals.css"
// -------- context apis --------
import RegistrationStates from "../context/registration/registrationStates"


export const metadata = {
  title: 'igit mca website 2023',
  description: 'This website is designed for junior students of IGIT MCA ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <NavBar/>
        <RegistrationStates> {/*Registration context*/}
          {children}
        </RegistrationStates>
        <Footer/>
      </body>
    </html>
  )
}
