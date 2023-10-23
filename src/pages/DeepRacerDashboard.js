import styles from "../styles/deepRacerDashboard.module.css"
import BackgroundLayout from "../layouts/BackgroundLayout"

function DeepRacerDashboard() {
  return (
    <div className={styles.background}>
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
