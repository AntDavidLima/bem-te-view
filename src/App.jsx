import { House } from '@phosphor-icons/react'

import { ProfileSection } from './components/ProfileSection'

import './global.css'
import styles from './App.module.css'

import logo from './assets/logo.svg';

export function App() {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <a href="#">
            <img src={logo} alt="Logotipo do Bem-te-view" />
            <h1>Bem-te-view</h1>
          </a>
          <nav>
            <ul>
              <li>
                <House size={32} weight="fill" />
                <h3>Página inicial</h3>
              </li>
            </ul>
          </nav>
        </div>
        <ProfileSection />
      </header>
      <main>Main</main>
      <aside>Aside</aside>
    </div>
  )
}
