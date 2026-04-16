import { HiOutlineArrowDownTray } from "react-icons/hi2";
import FormularioEntradaProducto from "./FormularioEntradaProducto";
import ModalBase from "../ui/ModalBase";
import useInventario from "../../hooks/useInventario";

const ModalEntradaProducto = ({ abierto, cerrarModal }) => {
  const { productoEntrada } = useInventario();

  if (!productoEntrada) return null;

  return (
    <ModalBase
      abierto={abierto}
      cerrarModal={cerrarModal}
      icono={<HiOutlineArrowDownTray className="text-[22px]" />}
      badge="Movimiento de inventario"
      titulo="Entrada de inventario"
      descripcion="Registra el ingreso de existencias del producto seleccionado."
      maxWidth="680px"
    >
      <FormularioEntradaProducto />
    </ModalBase>
  );
};

export default ModalEntradaProducto;