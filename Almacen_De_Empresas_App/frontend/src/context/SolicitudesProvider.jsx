import { useState, createContext, useMemo } from "react";
import Swal from "sweetalert2";
import solicitudesMock from "./../data/solicitudesMock"
import useInventario from "../hooks/useInventario";

const SolicitudesContext = createContext();

const SolicitudesProvider = ({ children }) => {
  const { registrarSalidaProducto, productos } = useInventario();

  const [solicitudes, setSolicitudes] = useState(solicitudesMock);

  // Modales
  const [modalSolicitudAbierto, setModalSolicitudAbierto] =
    useState(false);
  const [modalVerAbierto, setModalVerAbierto] = useState(false);

  // Selección
  const [solicitudEditar, setSolicitudEditar] = useState(null);
  const [solicitudVer, setSolicitudVer] = useState(null);

  /*********** CRUD *********** */

  const crearSolicitud = (datos) => {
    const producto = productos.find(
      (p) => p.id === Number(datos.productoId)
    );

    const nuevaSolicitud = {
      id: Date.now(),
      productoId: producto.id,
      producto: producto.nombre,
      cantidad: Number(datos.cantidad),
      solicitante: datos.solicitante || "Usuario",
      motivo: datos.motivo || "Solicitud de inventario",
      estado: "PENDIENTE",
      fecha: new Date().toLocaleDateString("es-MX"),
    };

    setSolicitudes((prev) => [nuevaSolicitud, ...prev]);

    cerrarModalSolicitud();
  };

  const aprobarSolicitud = (solicitud) => {
    Swal.fire({
      title: "¿Aprobar solicitud?",
      text: `Se dará salida al inventario del producto "${solicitud.producto}"`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1d7a6b",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Sí, aprobar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Impacto en inventario
        registrarSalidaProducto(
          { id: solicitud.productoId, nombre: solicitud.producto },
          { cantidad: solicitud.cantidad, motivo: "Salida por solicitud" }
        );

        const actualizadas = solicitudes.map((s) =>
          s.id === solicitud.id
            ? { ...s, estado: "APROBADA" }
            : s
        );

        setSolicitudes(actualizadas);

        Swal.fire({
          title: "Solicitud aprobada",
          icon: "success",
          confirmButtonColor: "#1d7a6b",
        });
      }
    });
  };

  const rechazarSolicitud = (solicitud) => {
    Swal.fire({
      title: "¿Rechazar solicitud?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Sí, rechazar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const actualizadas = solicitudes.map((s) =>
          s.id === solicitud.id
            ? { ...s, estado: "RECHAZADA" }
            : s
        );

        setSolicitudes(actualizadas);

        Swal.fire({
          title: "Solicitud rechazada",
          icon: "success",
          confirmButtonColor: "#1d7a6b",
        });
      }
    });
  };

  /*********** MODALES *********** */

  const abrirNuevaSolicitud = () => {
    setSolicitudEditar(null);
    setModalSolicitudAbierto(true);
  };

  const cerrarModalSolicitud = () => {
    setModalSolicitudAbierto(false);
    setSolicitudEditar(null);
  };

  const abrirVerSolicitud = (solicitud) => {
    setSolicitudVer(solicitud);
    setModalVerAbierto(true);
  };

  const cerrarModalVer = () => {
    setModalVerAbierto(false);
    setSolicitudVer(null);
  };

  /*********** MÉTRICAS *********** */

  const totalSolicitudes = solicitudes.length;

  const pendientes = solicitudes.filter(
    (s) => s.estado === "PENDIENTE"
  ).length;

  const aprobadas = solicitudes.filter(
    (s) => s.estado === "APROBADA"
  ).length;

  const rechazadas = solicitudes.filter(
    (s) => s.estado === "RECHAZADA"
  ).length;

  const value = useMemo(
    () => ({
      solicitudes,
      totalSolicitudes,
      pendientes,
      aprobadas,
      rechazadas,
      solicitudEditar,
      solicitudVer,
      modalSolicitudAbierto,
      modalVerAbierto,
      crearSolicitud,
      aprobarSolicitud,
      rechazarSolicitud,
      abrirNuevaSolicitud,
      cerrarModalSolicitud,
      abrirVerSolicitud,
      cerrarModalVer,
    }),
    [
      solicitudes,
      solicitudEditar,
      solicitudVer,
      modalSolicitudAbierto,
      modalVerAbierto,
    ]
  );

  return (
    <SolicitudesContext.Provider value={value}>
      {children}
    </SolicitudesContext.Provider>
  );
};

export { SolicitudesProvider };

export default SolicitudesContext;