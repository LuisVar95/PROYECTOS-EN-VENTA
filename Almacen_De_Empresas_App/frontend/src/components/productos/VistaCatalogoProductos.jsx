import { useMemo, useState } from "react";
import FiltrosProductos from "./FiltrosProductos";
import TablaProductos from "./TablaProductos";

const VistaCatalogoProductos = ({
  productos,
  totalProductos,
  stockBajo,
  agotados,
  categoriasActivas,
  onEditar,
  onEliminar,
  onVer,
  onEntrada,
  onSalida,
}) => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [estado, setEstado] = useState("Todos");

  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      const texto = busqueda.toLowerCase();

      const coincideBusqueda =
        producto.nombre.toLowerCase().includes(texto) ||
        producto.codigo.toLowerCase().includes(texto) ||
        producto.categoria.toLowerCase().includes(texto);

      const coincideCategoria =
        categoria === "Todas"
          ? true
          : producto.categoria === categoria;

      let coincideEstado = true;

      if (estado === "Disponible") {
        coincideEstado =
          producto.activo &&
          producto.stock > producto.stockMinimo;
      }

      if (estado === "Stock bajo") {
        coincideEstado =
          producto.activo &&
          producto.stock > 0 &&
          producto.stock <= producto.stockMinimo;
      }

      if (estado === "Agotado") {
        coincideEstado = producto.stock === 0;
      }

      if (estado === "Inactivo") {
        coincideEstado = !producto.activo;
      }

      return (
        coincideBusqueda &&
        coincideCategoria &&
        coincideEstado
      );
    });
  }, [productos, busqueda, categoria, estado]);

  return (
    <div className="space-y-6">
      <FiltrosProductos
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoria={categoria}
        setCategoria={setCategoria}
        estado={estado}
        setEstado={setEstado}
      />

      <TablaProductos
        productos={productosFiltrados}
        onEditar={onEditar}
        onEliminar={onEliminar}
        onVer={onVer}
        onEntrada={onEntrada}
        onSalida={onSalida}
      />
    </div>
  );
};

export default VistaCatalogoProductos;