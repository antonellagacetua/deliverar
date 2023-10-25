import { useNavigate } from "react-router-dom"
import FormLayout from "../layouts/FormLayout"
import styles from "../styles/deleteForm.module.css"

function DeleteUserPage() {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate("/users")
  }

  return (
    <FormLayout title="Eliminar cuenta">
      <div className={styles.formContainer}>
        <h3>
          Hola!
          <br />
          Lamentamos que tengas que eliminar la cuenta.
        </h3>
        <form className={styles.form}>
          <label htmlFor="why">¿Por qué quieres eliminar la cuenta?</label>
          <textarea name="why" id="why"></textarea>

          <label htmlFor="password">
            Para continuar, introduce tu contraseña
          </label>
          <input type="password" name="password" id="password" />

          <div className={styles.btnsContainer}>
            <button type="submit" className={styles.deleteBtn}>
              ELIMINAR DEFINITIVAMENTE
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={handleCancel}
            >
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </FormLayout>
  )
}

export default DeleteUserPage
