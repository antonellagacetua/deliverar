import Layout from "./layouts/Layout"
import ChangePassword from "./pages/ChangePassword"
import CreateUserPage from "./pages/CreateUser"
import DeleteUserPage from "./pages/DeleteUser"
import EditUserPage from "./pages/EditUser"
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Users from "./pages/Users"
import Groups from "./pages/Groups"
import UserProvider from "./context/UserContext"
import ProtectedRouter from "./pages/ProtectedRoute"
import DeepRacerDashboard from "./pages/DeepRacerDashboard"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Layout>
          <Routes>
            <Route element={<ProtectedRouter />}>
              <Route path="/" element={<Home />} />
              <Route path="/createuser" element={<CreateUserPage />} />
              <Route path="/deleteuser/:id" element={<DeleteUserPage />} />
              <Route path="/edituser/:id" element={<EditUserPage />} />
              <Route path="/changepassword/:id" element={<ChangePassword />} />
              <Route path="/users" element={<Users />} />
              <Route path="/groups" element={<Groups />} />
              <Route
                path="/deepracerdashboard"
                element={<DeepRacerDashboard />}
              />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
