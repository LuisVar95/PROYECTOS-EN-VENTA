// TablaProductos.jsx

import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlineArrowDownTray,
  HiOutlineArrowUpTray,
} from "react-icons/hi2";
import EstadoStockBadge from "./EstadoStockBadge";

const TablaProductos = ({
  productos,
  onEditar,
  onEliminar,
  onVer,
  onEntrada,
  onSalida,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Header tabla */}
      <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Lista de productos
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Consulta, administra y revisa el inventario actual
          </p>
        </div>

        <div className="text-sm text-slate-500">
          Mostrando{" "}
          <span className="font-semibold text-slate-700">
            {productos.length}
          </span>{" "}
          productos
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:block overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-slate-50/80">
            <tr className="text-left">
              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                Código
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                Producto
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                Categoría
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                Stock actual
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                Stock mínimo
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                Ubicación
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                Estado
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 text-center">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr
                key={producto.id}
                className="border-t border-slate-100 hover:bg-slate-50/60 transition"
              >
                <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                  {producto.codigo}
                </td>

                <td className="px-6 py-5">
                  <p className="text-sm font-semibold text-slate-800">
                    {producto.nombre}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    ID interno #{producto.id}
                  </p>
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {producto.categoria}
                </td>

                <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                  {producto.stock} {producto.unidadMedida}
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {producto.stockMinimo} {producto.unidadMedida}
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {producto.ubicacion}
                </td>

                <td className="px-6 py-5">
                  <EstadoStockBadge
                    stock={producto.stock}
                    stockMinimo={producto.stockMinimo}
                    activo={producto.activo}
                  />
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onVer(producto)}
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                    >
                      <HiOutlineEye />
                    </button>

                    <button
                      onClick={() => onEditar(producto)}
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                    >
                      <HiOutlinePencilSquare />
                    </button>

                    <button
                      onClick={() => onEntrada(producto)}
                      className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex items-center justify-center"
                    >
                      <HiOutlineArrowDownTray />
                    </button>

                    <button
                      onClick={() => onSalida(producto)}
                      className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 flex items-center justify-center"
                    >
                      <HiOutlineArrowUpTray />
                    </button>

                    <button
                      onClick={() => onEliminar(producto)}
                      className="w-9 h-9 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center"
                    >
                      <HiOutlineTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="xl:hidden p-4 space-y-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="rounded-2xl border border-slate-200 p-4 bg-slate-50/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {producto.codigo}
                </p>

                <h3 className="text-base font-bold text-slate-800 mt-1">
                  {producto.nombre}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {producto.categoria}
                </p>
              </div>

              <EstadoStockBadge
                stock={producto.stock}
                stockMinimo={producto.stockMinimo}
                activo={producto.activo}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <div>
                <p className="text-xs text-slate-500">Stock</p>
                <p className="text-sm font-semibold text-slate-800 mt-1">
                  {producto.stock} {producto.unidadMedida}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Mínimo</p>
                <p className="text-sm font-semibold text-slate-800 mt-1">
                  {producto.stockMinimo} {producto.unidadMedida}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Ubicación</p>
                <p className="text-sm font-semibold text-slate-800 mt-1">
                  {producto.ubicacion}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              <button
                onClick={() => onVer(producto)}
                className="px-3 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center gap-2"
              >
                <HiOutlineEye />
                Ver
              </button>

              <button
                onClick={() => onEditar(producto)}
                className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
              >
                <HiOutlinePencilSquare />
              </button>

              <button
                onClick={() => onEntrada(producto)}
                className="px-3 h-10 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex items-center gap-2"
              >
                <HiOutlineArrowDownTray />
                Entrada
              </button>

              <button
                onClick={() => onSalida(producto)}
                className="px-3 h-10 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 flex items-center gap-2"
              >
                <HiOutlineArrowUpTray />
                Salida
              </button>

              <button
                onClick={() => onEliminar(producto)}
                className="px-3 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 flex items-center gap-2"
              >
                <HiOutlineTrash />
                Baja
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablaProductos;