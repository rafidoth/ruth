import {client, database, account,ID} from './appwrite-config'
import {Navbar} from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Dark } from './components/DarkMode/Dark'
export default function Home() {

  return (
    <main>
      <Hero/>
    </main>
  )
}
