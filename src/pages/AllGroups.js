import BackgroundLayout from "../layouts/BackgroundLayout"
import styles from "../styles/allGroups.module.css"

function AllGroupsPage() {
  return (
    <BackgroundLayout>
      <div className={styles.container}>
        <h1>Grupos</h1>

        <div className={styles.groups}>
          <ul>
            <input
              type="search"
              placeholder="Ingrese el nombre del usuario..."
            />
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
            <li>
              <p>Grupo 1</p>
            </li>
          </ul>
        </div>
      </div>
    </BackgroundLayout>
  )
}

export default AllGroupsPage