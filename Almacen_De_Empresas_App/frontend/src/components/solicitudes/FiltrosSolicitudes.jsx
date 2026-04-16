// components/solicitudes/FiltrosSolicitudes.jsx
import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const FiltrosSolicitudes = ({ onFiltrar }) => {
  const [busqueda, setBusqueda] = useState("");
  const [estado, setEstado] = useState("TODOS");

  const handleChange = (nuevoEstado, nuevaBusqueda) => {
    onFiltrar({
      estado: nuevoEstado ?? estado,
      busqueda: nuevaBusqueda ?? busqueda,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      
      {/* Buscador */}
      <div className="relative w-full md:max-w-sm">
        <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
        <input
          type="text"
          placeholder="Buscar producto o solicitante..."
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            handleChange(null, e.target.value);
          }}
          className="w-full pl-10 pr-4 h-11 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1d7a6b]/20 text-sm"
        />
      </div>

      {/* Filtro estado */}
      <select
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
          handleChange(e.target.value, null);
        }}
        className="h-11 px-4 rounded-xl border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1d7a6b]/20"
      >
        <option value="TODOS">Todos</option>
        <option value="PENDIENTE">Pendientes</option>
        <option value="APROBADA">Aprobadas</option>
        <option value="RECHAZADA">Rechazadas</option>
      </select>
    </div>
  );
};

export default FiltrosSolicitudes;