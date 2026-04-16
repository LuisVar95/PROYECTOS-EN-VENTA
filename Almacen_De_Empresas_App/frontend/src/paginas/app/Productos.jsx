import { useState } from "react";
import ModalProducto from "../../components/productos/ModalProducto";
import ModalVerProducto from "../../components/productos/ModalVerProducto";
import ModalEntradaProducto from "../../components/productos/ModalEntradaProductos";
import ModalSalidaProducto from "../../components/productos/ModalSalidaProducto";
import TabsProductos from "../../components/productos/TabsProductos";
import VistaCatalogoProductos from "../../components/productos/VistaCatalogoProductos";
import VistaMovimientosProductos from "../../components/productos/VistaMovimientosProductos";
import VistaAlertasProductos from "../../components/productos/VistaAlertasProductos";
import useInventario from "../../hooks/useInventario";

const Productos = () => {
  const [vistaActiva, setVistaActiva] = useState("catalogo");

  const {
    productos,
    movimientos,
    totalProductos,
    stockBajo,
    agotados,
    categoriasActivas,
    modalProductoAbierto,
    modalVerAbierto,
    modalEntradaAbierto,
    modalSalidaAbierto,
    abrirNuevoProducto,
    abrirEditarProducto,
    abrirVerProducto,
    abrirEntradaProducto,
    abrirSalidaProducto,
    cerrarModalProducto,
    cerrarModalVer,
    cerrarModalEntrada,
    cerrarModalSalida,
    eliminarProducto,
  } = useInventario();

  const encabezados = {
    catalogo: {
      titulo: "Catálogo de productos",
      descripcion: "Gestiona el catálogo general del almacén",
    },
    movimientos: {
      titulo: "Movimientos de inventario",
      descripcion: "Consulta entradas y salidas registradas en el sistema",
    },
    alertas: {
      titulo: "Alertas de inventario",
      descripcion: "Supervisa productos con stock bajo o sin existencias",
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

          {vistaActiva === "catalogo" && (
            <button
              onClick={abrirNuevoProducto}
              className="h-12 px-5 rounded-2xl bg-[#1d7a6b] hover:bg-[#17685c] text-white font-semibold shadow-[0_10px_25px_rgba(23,104,92,0.18)] hover:shadow-[0_12px_30px_rgba(23,104,92,0.24)] hover:scale-[1.01] transition-all duration-200"
            >
              + Nuevo producto
            </button>
          )}
        </div>

        {/* Tabs internas */}
        <TabsProductos
          vistaActiva={vistaActiva}
          setVistaActiva={setVistaActiva}
        />

        {/* Vistas */}
        {vistaActiva === "catalogo" && (
          <VistaCatalogoProductos
            productos={productos}
            totalProductos={totalProductos}
            stockBajo={stockBajo}
            agotados={agotados}
            categoriasActivas={categoriasActivas}
            onEditar={abrirEditarProducto}
            onEliminar={eliminarProducto}
            onVer={abrirVerProducto}
            onEntrada={abrirEntradaProducto}
            onSalida={abrirSalidaProducto}
          />
        )}

        {vistaActiva === "movimientos" && (
          <VistaMovimientosProductos movimientos={movimientos} />
        )}

        {vistaActiva === "alertas" && (
          <VistaAlertasProductos productos={productos} />
        )}
      </div>

      {/* Modales */}
      <ModalProducto
        abierto={modalProductoAbierto}
        cerrarModal={cerrarModalProducto}
      />

      <ModalVerProducto
        abierto={modalVerAbierto}
        cerrarModal={cerrarModalVer}
      />

      <ModalEntradaProducto
        abierto={modalEntradaAbierto}
        cerrarModal={cerrarModalEntrada}
      />

      <ModalSalidaProducto
        abierto={modalSalidaAbierto}
        cerrarModal={cerrarModalSalida}
      />
    </>
  );
};

export default Productos;