import { useState, useMemo } from "react";
import TablaSolicitudes from "./TablaSolicitudes";
import FiltrosSolicitudes from "./FiltrosSolicitudes";

const VistaSolicitudesHistorial = ({ solicitudes }) => {
  const [filtros, setFiltros] = useState({
    estado: "TODOS",
    busqueda: "",
  });

  const solicitudesFiltradas = useMemo(() => {
    return solicitudes
      .filter((s) =>
        filtros.estado === "TODOS"
          ? s.estado !== "PENDIENTE"
          : s.estado === filtros.estado
      )
      .filter((s) => {
        const texto = `${s.producto} ${s.solicitante}`.toLowerCase();
        return texto.includes(filtros.busqueda.toLowerCase());
      });
  }, [solicitudes, filtros]);

  return (
    <div className="space-y-4">
      <FiltrosSolicitudes onFiltrar={setFiltros} />

      <TablaSolicitudes
        solicitudes={solicitudesFiltradas}
        tipo="historial"
      />
    </div>
  );
};

export default VistaSolicitudesHistorial;