import { Link } from "react-router-dom"
import styles from "../styles/header.module.css"

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
      </Link>
    </header>
  )
}

export default Header
