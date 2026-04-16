import { HiOutlineArrowUpTray } from "react-icons/hi2";
import FormularioSalidaProducto from "./FormularioSalidaProducto";
import ModalBase from "../ui/ModalBase";
import useInventario from "../../hooks/useInventario";

const ModalSalidaProducto = ({ abierto, cerrarModal }) => {
  const { productoSalida } = useInventario();

  if (!productoSalida) return null;

  return (
    <ModalBase
      abierto={abierto}
      cerrarModal={cerrarModal}
      icono={<HiOutlineArrowUpTray className="text-[22px]" />}
      badge="Movimiento de inventario"
      titulo="Salida de inventario"
      descripcion="Registra la salida de existencias del producto seleccionado."
      maxWidth="680px"
    >
      <FormularioSalidaProducto />
    </ModalBase>
  );
};

export default ModalSalidaProducto;