import ModalBase from "../ui/ModalBase";
import FormularioSolicitud from "./FormularioSolicitud";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const ModalSolicitud = ({ abierto, cerrarModal }) => {
  return (
    <ModalBase
      abierto={abierto}
      cerrarModal={cerrarModal}
      icono={<HiOutlineClipboardDocumentList className="text-[22px]" />}
      badge="Gestión de solicitudes"
      titulo="Nueva solicitud"
      descripcion="Registra una nueva solicitud de inventario"
      maxWidth="760px" // 👈 igual que productos
    >
      <FormularioSolicitud />
    </ModalBase>
  );
};

export default ModalSolicitud;