import styles from "../styles/deepRacerDashboard.module.css"
import { useNavigate } from "react-router-dom"

function DeepRacerDashboard() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className={styles.background}>
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
      <div className={styles.content}>
        <section className={styles.deepSection}>
          <div>
            <img
              src="/images/camioncito.jpg"
              alt="DeepRacer"
              className={styles.image}
            />
            <div className={styles.globalData}>
              <p>Vehiculo mas rapido: Roman</p>
              <p>Cantidad de giros: 30</p>
              <p>Colisiones 4</p>
            </div>
          </div>
          <div>
            <img
              src="/images/lago.jpg"
              alt="DeepRacer"
              className={styles.image}
            />
            <div className={styles.globalData}>
              <h3>Puertos Lago Escobar</h3>
              <p>Pista de referencia: Speed Raceway</p>
            </div>
          </div>
        </section>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Nombre del vehiculo</th>
              <th>Mejor tiempo</th>
              <th>Giros totales</th>
              <th>Colisiones totales</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Roman</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Carlos</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jose</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Andres</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Andres</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeepRacerDashboard
