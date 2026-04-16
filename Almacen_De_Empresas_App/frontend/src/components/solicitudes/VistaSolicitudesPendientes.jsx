import { useState, useMemo } from "react";
import TablaSolicitudes from "./TablaSolicitudes";
import FiltrosSolicitudes from "./FiltrosSolicitudes";

const VistaSolicitudesPendientes = ({ solicitudes }) => {
  const [filtros, setFiltros] = useState({
    estado: "PENDIENTE",
    busqueda: "",
  });

  const solicitudesFiltradas = useMemo(() => {
    return solicitudes
      .filter((s) => s.estado === "PENDIENTE")
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
        tipo="pendientes"
      />
    </div>
  );
};

export default VistaSolicitudesPendientes;