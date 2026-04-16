import { useMemo, useState } from "react";
import {
  HiOutlineArrowDownTray,
  HiOutlineArrowUpTray,
  HiOutlineArrowsRightLeft,
} from "react-icons/hi2";

const VistaMovimientosProductos = ({ movimientos }) => {
  const [filtroActivo, setFiltroActivo] = useState("TODOS");

  const movimientosFiltrados = useMemo(() => {
    if (filtroActivo === "TODOS") return movimientos;
    return movimientos.filter((mov) => mov.tipo === filtroActivo);
  }, [movimientos, filtroActivo]);

  const movimientosAgrupados = useMemo(() => {
    return movimientosFiltrados.reduce((acc, mov) => {
      const fecha = mov.fecha;
      if (!acc[fecha]) acc[fecha] = [];
      acc[fecha].push(mov);
      return acc;
    }, {});
  }, [movimientosFiltrados]);

  const obtenerEtiquetaFecha = (fecha) => {
    const hoy = new Date().toLocaleDateString("es-MX");
    const ayerDate = new Date();
    ayerDate.setDate(ayerDate.getDate() - 1);
    const ayer = ayerDate.toLocaleDateString("es-MX");

    if (fecha === hoy) return "Hoy";
    if (fecha === ayer) return "Ayer";
    return fecha;
  };

  const filtros = [
    { id: "TODOS", label: "Todos", icon: HiOutlineArrowsRightLeft },
    { id: "ENTRADA", label: "Entradas", icon: HiOutlineArrowDownTray },
    { id: "SALIDA", label: "Salidas", icon: HiOutlineArrowUpTray },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Movimientos de inventario
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Consulta el historial reciente de entradas y salidas del almacén.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {filtros.map((filtro) => {
            const activo = filtroActivo === filtro.id;
            const Icon = filtro.icon;

            return (
              <button
                key={filtro.id}
                onClick={() => setFiltroActivo(filtro.id)}
                className={`h-10 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activo
                    ? "bg-[#1d7a6b] text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon className="text-[16px]" />
                {filtro.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Estado vacío */}
      {movimientosFiltrados.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl py-14 text-center shadow-sm">
          <p className="text-base font-semibold text-slate-700">
            No hay movimientos registrados
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Aún no existen movimientos para este filtro.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(movimientosAgrupados).map(([fecha, items]) => (
            <div key={fecha} className="space-y-3">
              {/* Fecha agrupada */}
              <div className="flex items-center gap-3">
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                  {obtenerEtiquetaFecha(fecha)}
                </h4>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Lista de movimientos */}
              <div className="space-y-3">
                {items.map((mov) => {
                  const esEntrada = mov.tipo === "ENTRADA";

                  return (
                    <div
                      key={mov.id}
                      className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between gap-4">
                        {/* Izquierda */}
                        <div className="flex items-start gap-4 min-w-0">
                          {/* Icono */}
                          <div
                            className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                              esEntrada
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-rose-50 text-rose-600"
                            }`}
                          >
                            {esEntrada ? (
                              <HiOutlineArrowDownTray className="text-[20px]" />
                            ) : (
                              <HiOutlineArrowUpTray className="text-[20px]" />
                            )}
                          </div>

                          {/* Info */}
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-800 truncate">
                              {mov.producto}
                            </p>

                            <p className="text-sm text-slate-500 mt-0.5 truncate">
                              {mov.motivo}
                            </p>

                            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 flex-wrap">
                              <span>{mov.usuario}</span>
                              <span>•</span>
                              <span>{mov.fecha}</span>
                            </div>
                          </div>
                        </div>

                        {/* Derecha */}
                        <div className="flex flex-col items-end shrink-0">
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              esEntrada
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-rose-50 text-rose-700"
                            }`}
                          >
                            {mov.tipo}
                          </span>

                          <span
                            className={`mt-2 text-lg font-bold ${
                              esEntrada ? "text-emerald-600" : "text-rose-600"
                            }`}
                          >
                            {esEntrada ? `+${mov.cantidad}` : `-${mov.cantidad}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VistaMovimientosProductos;