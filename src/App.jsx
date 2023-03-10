import { House } from '@phosphor-icons/react'

import { ProfileSection } from './components/ProfileSection'
import { AutogrowTextarea } from './components/AutogrowTextarea'

import './global.css'

import styles from './App.module.css'

import logo from './assets/logo.svg';

export function App() {
  return (
    <div className={styles.container}>
      <div />
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
      <main>
        <header>
          <h2>Página inicial</h2>
        </header>
        <form>
          <div className={styles.formHeader}>
            <div className={styles.picture} />
            <AutogrowTextarea
              placeholder='Que que tá rolando?'
              maxLength={144}
            />
          </div>
          <div className={styles.formFooter}>
            <button type='submit'>Publicar</button>
          </div>
        </form>
      </main>
      <aside>Aside</aside>
    </div>
  )
}
