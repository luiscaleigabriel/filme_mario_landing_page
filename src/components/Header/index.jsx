import styles from './Header.module.css'
import logoCap from '../../../public/assets/logo-cap.png'

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <span className='logo'>
          <img src={ logoCap } alt="Logo" />
        </span>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">STORY</a>
          </li>
          <li>
            <a href="#">WALLPAPERS</a>
          </li>
          <li>
            <a href="#">TRAILLER</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </header>
  )
}

export default Header