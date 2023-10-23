import BackgroundLayout from "../layouts/BackgroundLayout"
import styles from "../styles/groups.module.css"
import React, { useState, useEffect } from "react"
import { getAllGroups, getAllUsers, addUserToGroupAPI } from "../services/users"

function Groups() {
  const [grupos, setGrupos] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [selectedGroup, setSelectedGroup] = useState("")
  const [selectedUser, setSelectedUser] = useState("")
  console.log(usuarios)

  useEffect(() => {
    // Obtén la lista de grupos utilizando la función getAllGroups
    getAllGroups()
      .then((data) => {
        setGrupos(data)
      })
      .catch((error) => {
        console.error("Error al obtener la lista de grupos:", error)
      })

    // Obtén la lista de usuarios utilizando la función getAllUsers
    getAllUsers()
      .then((data) => {
        setUsuarios(data)
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error)
      })
  }, [])

  const handleGroupSelect = (group) => {
    setSelectedGroup(group)
  }

  const handleUserSelect = (user) => {
    setSelectedUser(user)
  }

  const addUserToGroup = () => {
    if (selectedGroup && selectedUser) {
      console.log("selectedGroup:", selectedGroup)
      console.log("selectedUser:", selectedUser)
      addUserToGroupAPI(selectedGroup, selectedUser)
    }
  }

  return (
    <BackgroundLayout>
      <div className={styles.container}>
        <h1>Asignar a grupo</h1>
        <div className={styles.tablesContainer}>
          <div className={styles.groups}>
            <h2>Grupos</h2>
            <select
              onChange={(e) => handleGroupSelect(e.target.value)}
              value={selectedGroup}
            >
              <option value="">Selecciona un grupo</option>
              {grupos.map((group) => (
                <option key={group.gidNumber} value={group.cn}>
                  {group.cn}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.groups}>
            <h2>Usuarios</h2>
            <select
              onChange={(e) => handleUserSelect(e.target.value)}
              value={selectedUser}
            >
              <option value="">Selecciona un usuario</option>
              {usuarios.map((user) => (
                <option key={user.uid} value={user.uid}>
                  {user.cn}
                </option>
              ))}
            </select>
            <div className={styles.centerButton}>
              <button onClick={addUserToGroup}>Agregar al grupo</button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  )
}

export default Groups
