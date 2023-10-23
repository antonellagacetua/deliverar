import { createContext, useContext, useState, useEffect } from "react"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Martin",
    email: "Luka",
    photo: "dsjbdgjkb",
  })

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

export default UserProvider
