import FormLayout from "../layouts/FormLayout"
import styles from "../styles/changePassword.module.css"

function ChangePassword() {
  return (
    <FormLayout title="Cambiar contraseña">
      <div className={styles.formContainer}>
        <h3>OLVIDASTE TU CONTRASEÑA?</h3>
        <form className={styles.form}>
          <label htmlFor="email">CORREO ELECTRONICO</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">NUEVA CONTRASEÑA</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="password">CONFIRMAR NUEVA CONTRASEÑA</label>
          <input type="password" id="password" name="password" />

          <button type="submit">GUARDAR CAMBIOS</button>
        </form>
      </div>
    </FormLayout>
  )
}

export default ChangePassword
