import React, { useState, useEffect } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";
import styles from "../styles/allGroups.module.css";
import { useNavigate } from "react-router-dom";


function AllGroupsPage() {
  const [groups, setGroups] = useState([]);

  const navigate = useNavigate();

  const handleGroupClick = (groupName) => {
    navigate(`/group/${groupName}`); // Redirige a la página de detalles del grupo
  };

  useEffect(() => {
    // Realiza una solicitud GET al endpoint /api/grupos-ldap
    fetch("http://localhost/api/grupos-ldap")
      .then((response) => response.json())
      .then((data) => {
        // Mapea la respuesta para obtener los nombres de los grupos
        const groupNames = data.map((group) => group.attributes.find(attr => attr.type === 'cn').values[0]);

        // Actualiza el estado con los nombres de los grupos obtenidos del servidor
        setGroups(groupNames);
      })
      .catch((error) => {
        console.error("Error al obtener los grupos:", error);
      });
  }, []);

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
            {groups.map((groupName, index) => (
              <li key={index}>
                <p onClick={() => handleGroupClick(groupName)}>{groupName}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default AllGroupsPage;
