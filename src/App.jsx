import {
  Binoculars,
  House,
  X,
  Chat,
  Repeat,
  ChartBar,
  Heart,
  Export,
  DotsThree,
} from '@phosphor-icons/react'

import { ProfileSection } from './components/ProfileSection'
import { AutogrowTextarea } from './components/AutogrowTextarea'

import './global.css'

import styles from './App.module.css'

import logo from './assets/logo.svg'

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
              placeholder="Que que tá rolando?"
              maxLength={144}
            />
          </div>
          <div className={styles.formFooter}>
            <button type="submit">Publicar</button>
          </div>
        </form>
        <div className={styles.post}>
          <div className={styles.picture} />
          <main>
            <div className={styles.info}>
              <h4>David Lima</h4>
              <span>@caradebreno</span>
              <span>22 de mar</span>
            </div>
            <p>Meu primeiro post no Bem-te-view!</p>
            <div className={styles.interactions}>
              <button>
                <span>
                  <Chat size={18} weight="bold" />
                </span>
                40
              </button>
              <button>
                <span>
                  <Repeat size={18} weight="bold" />
                </span>
                13
              </button>
              <button>
                <span>
                  <Heart size={18} weight="bold" />
                </span>
                48
              </button>
              <button>
                <span>
                  <ChartBar size={18} weight="bold" />
                </span>
                15.8 mil
              </button>
              <button>
                <span>
                  <Export size={18} weight="bold" />
                </span>
              </button>
            </div>
          </main>
          <button>
            <span>
              <DotsThree size={24} />
            </span>
          </button>
        </div>
      </main>
      <aside>
        <div className={styles.searchBar}>
          <Binoculars size={24} />
          <label htmlFor="search" hidden>
            Campo de busca
          </label>
          <input type="text" id="search" placeholder="Buscar no Bem-te-view" />
        </div>
        <div className={styles.searchResults}>
          <header>
            <h4>Recente</h4>
            <button>Limpar tudo</button>
          </header>
          <main>
            <ul>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
              <li>
                <Binoculars size={40} />
                <p>minha ultima pesquisa</p>
                <button>
                  <X size={16} />
                </button>
              </li>
            </ul>
          </main>
        </div>
      </aside>
    </div>
  )
}
