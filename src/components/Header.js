import { Link } from "react-router-dom"
import styles from "../styles/header.module.css"
import { useUser } from "../context/UserContext"

function Header() {
  const { user } = useUser()
  return (
    <header>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
      </Link>
      <div className={styles.menu}>
        <span>{user && user.name.charAt(0).toUpperCase()}</span>
      </div>
    </header>
  )
}

export default Header
