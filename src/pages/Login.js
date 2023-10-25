import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/login.module.css"
import { login } from "../services/users"; 


function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
  
      if (result.status === 200) {
        // Redirige al usuario después de una autenticación exitosa
        navigate("/home");
        console.log("logueo exitoso");
      } else {
        // Muestra mensajes de error
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  };

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
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
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
