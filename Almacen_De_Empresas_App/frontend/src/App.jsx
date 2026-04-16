import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import LayoutProtegido from "./layouts/LayoutProtegido";

import Login from "./paginas/auth/Login";
import DashboardHome from "./paginas/app/DashboardHome";
import Productos from "./paginas/app/Productos";
import Solicitudes from "./paginas/app/Solicitudes";

import Modal from "react-modal";
import AppProvider from "./context/AppProvider";

Modal.setAppElement("#root");

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <AppProvider>
              <LayoutProtegido />
            </AppProvider>
          }
        >
          <Route index element={<DashboardHome />} />

          {/* Secciones */}
          <Route path="productos" element={<Productos />} />
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="stock" element={<h1>Stock</h1>} />
          <Route path="auditoria" element={<h1>Auditoria</h1>} />
          <Route path="usuarios" element={<h1>Usuarios</h1>} />
          <Route path="proveedores" element={<h1>Proveedores</h1>} />
          <Route path="reportes" element={<h1>Reportes</h1>} />
          <Route path="configuracion" element={<h1>Configuración</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;