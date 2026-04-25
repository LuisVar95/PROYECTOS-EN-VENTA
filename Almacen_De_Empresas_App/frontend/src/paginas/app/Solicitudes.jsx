import { useState } from "react";
import useSolicitudes from "../../hooks/useSolicitudes";
import TabsSolicitudes from "../../components/solicitudes/TabsSolicitudes";
import VistaSolicitudesPendientes from "../../components/solicitudes/VistaSolicitudesPendientes";
import VistaSolicitudesHistorial from "../../components/solicitudes/VistaSolicitudesHistorial";
import ModalSolicitud from "../../components/solicitudes/ModalSolicitud";
import ModalVerSolicitud from "../../components/solicitudes/ModalVerSolicitud";

const Solicitudes = () => {
  const [vistaActiva, setVistaActiva] = useState("pendientes");

  const {
    solicitudes,
    pendientes,
    aprobadas,
    rechazadas,
    abrirNuevaSolicitud,
    modalSolicitudAbierto,
    cerrarModalSolicitud,
  } = useSolicitudes();

  const encabezados = {
    pendientes: {
      titulo: "Solicitudes pendientes",
      descripcion: "Gestiona las solicitudes en espera de aprobación",
    },
    historial: {
      titulo: "Historial de solicitudes",
      descripcion: "Consulta solicitudes aprobadas y rechazadas",
    },
  };

  const encabezadoActual = encabezados[vistaActiva];

  return (
    <>
      <div className="space-y-6">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              {encabezadoActual.titulo}
            </h1>
            <p className="text-slate-500 mt-1">
              {encabezadoActual.descripcion}
            </p>
          </div>

          <button
            onClick={abrirNuevaSolicitud}
            className="h-12 px-5 rounded-2xl bg-[#1d7a6b] text-white font-semibold"
          >
            + Nueva solicitud
          </button>
        </div>

        {/* Tabs */}
        <TabsSolicitudes
          vistaActiva={vistaActiva}
          setVistaActiva={setVistaActiva}
          pendientes={pendientes}
          aprobadas={aprobadas}
          rechazadas={rechazadas}
        />

        {/* Vistas */}
        {vistaActiva === "pendientes" && (
          <VistaSolicitudesPendientes solicitudes={solicitudes} />
        )}

        {vistaActiva === "historial" && (
          <VistaSolicitudesHistorial solicitudes={solicitudes} />
        )}
      </div>
      <ModalSolicitud
        abierto={modalSolicitudAbierto}
        cerrarModal={cerrarModalSolicitud}
      />

      <ModalVerSolicitud />
    </>
  );
};

export default Solicitudes;
