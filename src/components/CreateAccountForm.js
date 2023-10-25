import { useForm } from "react-hook-form"
import styles from "../styles/createForm.module.css"
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import { createUser, editUser, getUserByCn } from "../services/users"
import { useEffect, useRef } from "react"

function CreateAccountForm({ isEdit = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const formRef = useRef(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    if (!isEdit) {
      const res = await createUser(data)

      if (res.ok) {
        alert("Usuario creado exitosamente")

        reset()
      }
    } else {
      try {
        const res = await editUser(id, data)
        console.log(res)
        if (res.ok) {
          alert("Usuario editado exitosamente")
          navigate("/users")
        }
      } catch (error) {
        console.error(error)
        alert("Error al editar usuario")
      }
    }
  }

  useEffect(() => {
    if (isEdit) {
      getUserByCn(id).then((user) => {
        formRef.current.name.value = user.name
        formRef.current.lastname.value = user.lastName
        formRef.current.dni.value = user.dni
        formRef.current.birthDate.value = user.birthDate
        formRef.current.email.value = user.email
      })
    }
  }, [])

  return (
    <div>
      {isEdit && (
        <div className={styles.userInfo}>
          <div>
            <label htmlFor="userId">USERID</label>
            <input id="userId" value={`/${id}`} disabled />
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formContainer}
        ref={formRef}
      >
        <div className={styles.flexContainer}>
          <div className={styles.firstChild}>
            <label htmlFor="name">NOMBRE</label>
            <input
              id="name"
              name="name"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>
          <div>
            <label htmlFor="lastname">APELLIDO</label>
            <input
              id="lastname"
              name="lastname"
              {...register("lastname", { required: true })}
            />
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div>
            <label htmlFor="dni">DNI</label>
            <input
              id="dni"
              name="dni"
              type="number"
              {...register("dni", { required: true })}
            />
          </div>
          <div className={styles.flex1}>
            <label htmlFor="avatar">AVATAR</label>
            <input id="avatar" name="avatar" type="file" />
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.firstChild}>
            <label htmlFor="birthDate">Fecha de nacimiento</label>
            <input
              id="birthDate"
              name="birthDate"
              {...register("birthDate", { required: true })}
              type="date"
            />
          </div>
          <div>
            <label htmlFor="gender">Genero</label>
            <select
              id="gender"
              type="select"
              name="gender"
              {...register("gender", { required: true })}
            >
              <option value="masculino">Masculino</option>
              <option value="femenino" selected>
                Femenino
              </option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="email">CORREO ELECTRÓNICO</label>
          <input
            id="email"
            name="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        {!isEdit && (
          <div>
            <label htmlFor="password">CONTRASEÑA</label>
            <input
              id="password"
              name="password"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
        )}

        {isEdit ? (
          <>
            <div className={styles.btnsContainer}>
              <button>GUARDAR CAMBIOS</button>
              <button type="button" className={styles.cancelBtn}>
                CANCELAR
              </button>
            </div>
            <p className={styles.deleteAcc}>
              Desea eliminar la cuenta?{" "}
              <Link to={`/deleteuser/${id}`} className={styles.linkToDelete}>
                Eliminar
              </Link>
            </p>
          </>
        ) : (
          <button className={styles.submitBtn}>CREAR USUARIO</button>
        )}
      </form>
    </div>
  )
}

export default CreateAccountForm
