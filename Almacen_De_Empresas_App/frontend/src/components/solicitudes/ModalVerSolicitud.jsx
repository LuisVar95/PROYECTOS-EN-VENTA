// ModalVerSolicitud.jsx

import ModalBase from "../ui/ModalBase";
import useSolicitudes from "../../hooks/useSolicitudes";
import { HiOutlineEye } from "react-icons/hi2";
import ContenidoVerSolicitud from "./ContenidoVerSolicitud";

const ModalVerSolicitud = () => {
  const { modalVerAbierto, cerrarModalVer, solicitudVer } =
    useSolicitudes();

  if (!solicitudVer) return null;

  return (
    <ModalBase
      abierto={modalVerAbierto}
      cerrarModal={cerrarModalVer}
      icono={<HiOutlineEye className="text-[22px]" />}
      badge="Gestión de solicitudes"
      titulo="Detalle de solicitud"
      descripcion="Consulta la información completa de la solicitud"
      maxWidth="920px"
    >
      <ContenidoVerSolicitud />
    </ModalBase>
  );
};

export default ModalVerSolicitud;