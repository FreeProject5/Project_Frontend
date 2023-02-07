import React from 'react'
import Landing from './pages/landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthStore } from './store/auth';
import Login from './components/Login';
import MenuPacient from './pages/menuPacient';
import AgendarCita from './pages/agendarCita';
import SignUp from './components/Signup';
import Paginamedico from './medico/medicopag';
import Paginacitas from './citas/citaspag';
import { ProtectedRoute } from './components/ProtectedRoute';


function App() {

  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
          <Route path="/paciente" element={
            <MenuPacient/>
          } />
          <Route path="/paciente/agendar-cita" element={
            <AgendarCita/>
            }/>
        </Route>
        <Route path="/medico" element={<Paginamedico/>}/>
        <Route path="/citas" element={<Paginacitas/>}/>
      </Routes>
    </Router>
   
    
  )
}

export default App
