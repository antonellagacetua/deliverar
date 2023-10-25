import { useNavigate } from "react-router-dom"
import styles from "../styles/formLayout.module.css"

function FormLayout({ children, title }) {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className={styles.formLayout}>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <h1>{title}</h1>
        <div className={styles.backBtn} onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>Volver</span>
        </div>
      </div>
      <div className={styles.formContent}>{children}</div>
    </div>
  )
}

export default FormLayout
