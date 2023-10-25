import React from "react";

function UserSelector({ usuarios, selectedUser, handleUserSelect }) {
  return (
    <div>
      <h2>Usuarios</h2>
      <select onChange={(e) => handleUserSelect(e.target.value)} value={selectedUser}>
        <option value="">Selecciona un usuario</option>
        {usuarios.map((usuario) => (
          <option key={usuario} value={usuario}>
            {usuario}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSelector;
