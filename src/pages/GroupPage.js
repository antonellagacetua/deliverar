import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams
import BackgroundLayout from "../layouts/BackgroundLayout";
import styles from "../styles/allGroups.module.css";

function GroupPage() {
  const [miembros, setMiembros] = useState([]);
  const { groupName } = useParams(); // Utiliza useParams para obtener groupName

  useEffect(() => {
    fetch(`http://localhost/api/miembrosGrupo?cn=${groupName}`)
      .then((response) => response.json())
      .then((data) => {
        const miembros = data.miembros;
        setMiembros(miembros);
      })
      .catch((error) => {
        console.error("Error al obtener los miembros del grupo:", error);
      });
  }, [groupName]);

  // Función para eliminar un usuario del grupo
  const eliminarUsuarioDelGrupo = (usuario) => {
    const confirmacion = window.confirm(`¿Seguro que desea eliminar a ${usuario}?`);
    if (confirmacion) {
      fetch(`http://localhost/api/EliminarUsuariosGrupo?grupo=${groupName}&usr=${usuario}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.status === 200) {
            // Actualizar la lista de miembros después de la eliminación
            const nuevosMiembros = miembros.filter((miembro) => miembro !== usuario);
            setMiembros(nuevosMiembros);
          } else {
            console.error("Error al eliminar el usuario del grupo.");
          }
        })
        .catch((error) => {
          console.error("Error al eliminar el usuario del grupo:", error);
        });
    }
  };

  return (
    <BackgroundLayout>
      <div className={styles.container}>
        <h1>Usuarios del grupo {groupName}</h1>

        <div className={styles.groups}>
          <ul>
            <input
              type="search"
              placeholder="Ingrese el nombre del usuario..."
            />
            {miembros.map((miembro, index) => (
              <li key={index}>
                <p>{miembro}</p>
                <div>
                  <button
                     onClick={() => eliminarUsuarioDelGrupo(miembro)}
                  >
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.0..."
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BackgroundLayout>
  );
}

export default GroupPage;
