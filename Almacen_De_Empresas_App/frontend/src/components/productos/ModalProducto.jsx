import ModalBase from "../ui/ModalBase";
import FormularioProducto from "./FormularioProducto";
import { HiOutlineCube } from "react-icons/hi2";
import useInventario from "../../hooks/useInventario";

const ModalProducto = ({ abierto, cerrarModal }) => {
  const { productoEditar } = useInventario();

  return (
    <ModalBase
      abierto={abierto}
      cerrarModal={cerrarModal}
      icono={<HiOutlineCube className="text-[22px]" />}
      badge="Gestión de inventario"
      titulo={productoEditar ? "Editar producto" : "Nuevo producto"}
      descripcion={
        productoEditar
          ? "Actualiza la información del producto seleccionado."
          : "Agrega un nuevo artículo al catálogo del almacén."
      }
      maxWidth="760px"
    >
      <FormularioProducto />
    </ModalBase>
  );
};

export default ModalProducto;