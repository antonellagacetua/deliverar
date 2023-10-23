import styles from "../styles/backgroundLayout.module.css"

function BackgroundLayout({ children }) {
  return (
    <div className={styles.background}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default BackgroundLayout
