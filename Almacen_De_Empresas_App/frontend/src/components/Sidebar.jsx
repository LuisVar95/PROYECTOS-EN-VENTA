import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCube,
  HiOutlineClipboardDocumentList,
  HiOutlineArchiveBox,
  HiOutlineUsers,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";
import { useState } from "react";

const Sidebar = ({ colapsado, setColapsado }) => {
  const [abierto, setAbierto] = useState(false);

  const secciones = [
    { nombre: "Dashboard", icono: HiOutlineHome, ruta: "/dashboard" },
    { nombre: "Productos", icono: HiOutlineCube, ruta: "/dashboard/productos" },
    {
      nombre: "Solicitudes",
      icono: HiOutlineClipboardDocumentList,
      ruta: "/dashboard/solicitudes",
    },
    { nombre: "Stock", icono: HiOutlineArchiveBox, ruta: "/dashboard/stock" },
    {
      nombre: "Auditoría",
      icono: HiOutlineDocumentMagnifyingGlass,
      ruta: "/dashboard/auditoria",
    },
    { nombre: "Usuarios", icono: HiOutlineUsers, ruta: "/dashboard/usuarios" },
    {
      nombre: "Proveedores",
      icono: HiOutlineTruck,
      ruta: "/dashboard/proveedores",
    },
    {
      nombre: "Reportes",
      icono: HiOutlineChartBar,
      ruta: "/dashboard/reportes",
    },
    {
      nombre: "Configuración",
      icono: HiOutlineCog6Tooth,
      ruta: "/dashboard/configuracion",
    },
  ];

  return (
    <>
      {/* Botón mobile */}
      <button
        onClick={() => setAbierto(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-11 h-11 rounded-xl bg-[#1f7a6b] text-white shadow-lg flex items-center justify-center"
      >
        <HiOutlineBars3 className="text-2xl" />
      </button>

      {/* Fondo oscuro mobile */}
      {abierto && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setAbierto(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen
          ${colapsado ? "w-[88px]" : "w-[250px]"}
          bg-gradient-to-b from-[#1d7a6b] to-[#17685c]
          text-white shadow-2xl
          transition-all duration-300
          ${abierto ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          rounded-r-[26px]
          overflow-hidden
        `}
      >
        <div className="flex flex-col h-full">
          {/* Encabezado */}
          <div
            className={`px-4 py-4 border-b border-white/10 flex items-center ${
              colapsado ? "justify-center" : "justify-between"
            }`}
          >
            {!colapsado ? (
              <>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                    <HiOutlineCube className="text-[22px]" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-lg font-bold tracking-tight truncate">
                      StockFlow
                    </h2>
                    <p className="text-[11px] text-white/70 truncate">
                      Sistema de almacén
                    </p>
                  </div>
                </div>

                {/* Cerrar en mobile */}
                <button
                  onClick={() => setAbierto(false)}
                  className="lg:hidden text-white/80 hover:text-white"
                >
                  <HiOutlineXMark className="text-2xl" />
                </button>
              </>
            ) : (
              <div className="flex justify-center w-full">
                <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                  <HiOutlineCube className="text-[22px]" />
                </div>
              </div>
            )}
          </div>

          {/* Navegación */}
          <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto sidebar-scroll">
            {secciones.map((seccion) => {
              const Icono = seccion.icono;

              return (
                <NavLink
                  key={seccion.nombre}
                  to={seccion.ruta}
                  end={seccion.ruta === "/dashboard"}
                  onClick={() => setAbierto(false)}
                  title={colapsado ? seccion.nombre : ""}
                  className={({ isActive }) =>
                    `relative flex items-center ${
                      colapsado ? "justify-center" : "gap-3"
                    } px-4 py-2.5 rounded-2xl transition-all duration-200 group ${
                      isActive
                        ? "bg-[#f4f7f6] text-[#17685c] font-semibold shadow-sm"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <Icono className="text-[20px] shrink-0" />
                  {!colapsado && (
                    <span className="text-[14px]">{seccion.nombre}</span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Footer inferior */}
          <div className="px-4 py-3 border-t border-white/10">
            {colapsado ? (
              <div className="flex justify-center">
                <button
                  onClick={() => setColapsado(false)}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                >
                  <HiOutlineChevronDoubleRight className="text-lg" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-3">
                {/* Usuario */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2bb3a3] to-[#74d3c8] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    JD
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      Juan Pérez
                    </p>
                    <p className="text-[11px] text-white/70 truncate">
                      Administrador
                    </p>
                  </div>
                </div>

                {/* Botón colapsar */}
                <button
                  onClick={() => setColapsado(true)}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center shrink-0"
                >
                  <HiOutlineChevronDoubleLeft className="text-lg" />
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
