import { useState, createContext, useMemo } from "react";
import Swal from "sweetalert2";
import productosMock from "../data/productosMock";
import movimientosMock from "../data/movimientosMock";

const InventarioContext = createContext();

const InventarioProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosMock);
  const [movimientos, setMovimientos] = useState(movimientosMock);

  // Modales
  const [modalProductoAbierto, setModalProductoAbierto] = useState(false);
  const [modalVerAbierto, setModalVerAbierto] = useState(false);
  const [modalEntradaAbierto, setModalEntradaAbierto] = useState(false);
  const [modalSalidaAbierto, setModalSalidaAbierto] = useState(false);

  // Producto seleccionado
  const [productoEditar, setProductoEditar] = useState(null);
  const [productoVer, setProductoVer] = useState(null);
  const [productoEntrada, setProductoEntrada] = useState(null);
  const [productoSalida, setProductoSalida] = useState(null);

  /*********** PRODUCTOS *********** */

  const agregarProducto = (nuevoProducto) => {
    setProductos((prev) => [nuevoProducto, ...prev]);
  };

  const actualizarProducto = (productoActualizado) => {
    const productosActualizados = productos.map((productoState) =>
      productoState.id === productoActualizado.id
        ? productoActualizado
        : productoState,
    );

    setProductos(productosActualizados);
  };

  const eliminarProducto = (producto) => {
    Swal.fire({
      title: "¿Dar de baja producto?",
      html: `
        <div style="display:flex; flex-direction:column; align-items:center; text-align:center; gap:10px; margin-top:6px;">
          <div style="
            background:#f8fafc;
            border:1px solid #e2e8f0;
            border-radius:16px;
            padding:12px 16px;
            width:100%;
            max-width:320px;
          ">
            <p style="
              margin:0;
              font-size:16px;
              font-weight:700;
              color:#0f172a;
            ">
              ${producto.nombre}
            </p>
          </div>

          <p style="
            margin:0;
            font-size:14px;
            color:#64748b;
            line-height:1.5;
          ">
            Esta acción no se puede deshacer.
          </p>
        </div>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      focusCancel: true,
      customClass: {
        popup: "rounded-[28px]",
        title: "text-slate-800 font-bold",
        confirmButton: "rounded-xl px-5 py-3 font-semibold",
        cancelButton: "rounded-xl px-5 py-3 font-semibold",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const productosActualizados = productos.filter(
          (productoState) => productoState.id !== producto.id,
        );

        setProductos(productosActualizados);

        Swal.fire({
          title: "Producto eliminado",
          text: "El producto fue eliminado correctamente.",
          icon: "success",
          confirmButtonColor: "#1d7a6b",
          customClass: {
            popup: "rounded-[28px]",
            confirmButton: "rounded-xl px-5 py-3 font-semibold",
          },
        });
      }
    });
  };

  /*********** MOVIMIENTOS *********** */

  const registrarEntradaProducto = (producto, datosEntrada) => {
    const cantidad = Number(datosEntrada.cantidad);

    const productosActualizados = productos.map((item) =>
      item.id === producto.id
        ? {
            ...item,
            stock: item.stock + cantidad,
            actualizado: new Date().toLocaleDateString("es-MX"),
          }
        : item,
    );

    setProductos(productosActualizados);

    const nuevoMovimiento = {
      id: Date.now(),
      productoId: producto.id,
      producto: producto.nombre,
      tipo: "ENTRADA",
      cantidad,
      motivo: datosEntrada.motivo || "Entrada de inventario",
      usuario: "Administrador",
      fecha: new Date().toLocaleDateString("es-MX"),
    };

    setMovimientos((prev) => [nuevoMovimiento, ...prev]);

    cerrarModalEntrada();
  };

  const registrarSalidaProducto = (producto, datosSalida) => {
    const cantidad = Number(datosSalida.cantidad);

    const productosActualizados = productos.map((item) =>
      item.id === producto.id
        ? {
            ...item,
            stock: item.stock - cantidad,
            actualizado: new Date().toLocaleDateString("es-MX"),
          }
        : item,
    );

    setProductos(productosActualizados);

    const nuevoMovimiento = {
      id: Date.now(),
      productoId: producto.id,
      producto: producto.nombre,
      tipo: "SALIDA",
      cantidad,
      motivo: datosSalida.motivo || "Salida de inventario",
      usuario: "Administrador",
      fecha: new Date().toLocaleDateString("es-MX"),
    };

    setMovimientos((prev) => [nuevoMovimiento, ...prev]);

    cerrarModalSalida();
  };

  /*********** MODALES *********** */

  const abrirNuevoProducto = () => {
    setProductoEditar(null);
    setModalProductoAbierto(true);
  };

  const abrirEditarProducto = (producto) => {
    setProductoEditar(producto);
    setModalProductoAbierto(true);
  };

  const cerrarModalProducto = () => {
    setModalProductoAbierto(false);
    setProductoEditar(null);
  };

  const abrirVerProducto = (producto) => {
    setProductoVer(producto);
    setModalVerAbierto(true);
  };

  const cerrarModalVer = () => {
    setModalVerAbierto(false);
    setProductoVer(null);
  };

  const abrirEntradaProducto = (producto) => {
    setProductoEntrada(producto);
    setModalEntradaAbierto(true);
  };

  const cerrarModalEntrada = () => {
    setModalEntradaAbierto(false);
    setProductoEntrada(null);
  };

  const abrirSalidaProducto = (producto) => {
    setProductoSalida(producto);
    setModalSalidaAbierto(true);
  };

  const cerrarModalSalida = () => {
    setModalSalidaAbierto(false);
    setProductoSalida(null);
  };

  /*********** MÉTRICAS *********** */

  const totalProductos = productos.length;

  const stockBajo = productos.filter(
    (producto) => producto.stock > 0 && producto.stock <= producto.stockMinimo,
  ).length;

  const agotados = productos.filter((producto) => producto.stock === 0).length;

  const categoriasActivas = [
    ...new Set(productos.map((producto) => producto.categoria)),
  ].length;

  const value = useMemo(
    () => ({
      productos,
      movimientos,
      totalProductos,
      stockBajo,
      agotados,
      categoriasActivas,
      productoEditar,
      productoVer,
      productoEntrada,
      productoSalida,
      modalProductoAbierto,
      modalVerAbierto,
      modalEntradaAbierto,
      modalSalidaAbierto,
      agregarProducto,
      actualizarProducto,
      eliminarProducto,
      registrarEntradaProducto,
      registrarSalidaProducto,
      abrirNuevoProducto,
      abrirEditarProducto,
      cerrarModalProducto,
      abrirVerProducto,
      cerrarModalVer,
      abrirEntradaProducto,
      cerrarModalEntrada,
      abrirSalidaProducto,
      cerrarModalSalida,
    }),
    [
      productos,
      movimientos,
      productoEditar,
      productoVer,
      productoEntrada,
      productoSalida,
      modalProductoAbierto,
      modalVerAbierto,
      modalEntradaAbierto,
      modalSalidaAbierto,
    ],
  );

  return (
    <InventarioContext.Provider value={value}>
      {children}
    </InventarioContext.Provider>
  );
};

export { InventarioProvider };

export default InventarioContext;
