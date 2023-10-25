import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/login.module.css"


function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    // Realizar la lógica de inicio de sesión aquí
    // ...
    // Después de que el usuario haya iniciado sesión exitosamente, redirige a la página de inicio
    navigate("/home")
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.loginForm}>
        <div className={styles.titleContainer}>
          <img src="/images/logo.png" alt="Logo" className={styles.logoImg} />
          <h1 className={styles.title}>Bienvenido</h1>
        </div>
        <div className={styles.formInside}>
          <label htmlFor="user">Usuario</label>
          <input
            id="user"
            type="text"
            placeholder="Usuario"
            onChange={handleEmailChange}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handlePasswordChange}
          />
          
          <div className={styles.rememberContainer}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recordar usuario</label>
          </div>
          <button onClick={() => navigate("/home")}>Ingresar</button>
        </div>
      </form>
      <div className={styles.imgForm}>
        <img src="/images/DecoracionDerecha.png" alt="Imagen de decoracion" />
      </div>
    </div>
  )
}

export default LoginPage
