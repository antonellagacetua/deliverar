import { Link } from "react-router-dom"
import styles from "../styles/redirect.module.css"

function Redirect({ to, title, image }) {
  return (
    <Link to={to} className={styles.container}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </Link>
  )
}

export default Redirect
