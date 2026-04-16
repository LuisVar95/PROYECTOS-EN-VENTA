import { HiOutlineEye, HiOutlineCheck, HiOutlineXMark } from "react-icons/hi2";
import useSolicitudes from "../../hooks/useSolicitudes";
import EstadoSolicitudBadge from "./EstadoSolicitudBadge";

const TablaSolicitudes = ({ solicitudes, tipo }) => {
  const { aprobarSolicitud, rechazarSolicitud, abrirVerSolicitud } =
    useSolicitudes();

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Solicitudes</h2>
          <p className="text-sm text-slate-500 mt-1">
            Gestiona las solicitudes del almacén
          </p>
        </div>

        <div className="text-sm text-slate-500">
          Mostrando{" "}
          <span className="font-semibold text-slate-700">
            {solicitudes.length}
          </span>{" "}
          solicitudes
        </div>
      </div>

      {/* Tabla */}
      <div className="hidden xl:block overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-slate-50/80">
            <tr className="text-left">
              <th className="px-6 py-4 text-xs text-slate-500 uppercase">
                Producto
              </th>
              <th className="px-6 py-4 text-xs text-slate-500 uppercase">
                Cantidad
              </th>
              <th className="px-6 py-4 text-xs text-slate-500 uppercase">
                Solicitante
              </th>
              <th className="px-6 py-4 text-xs text-slate-500 uppercase">
                Estado
              </th>
              <th className="px-6 py-4 text-xs text-slate-500 uppercase">
                Fecha
              </th>
              <th className="px-6 py-4 text-xs text-slate-500 uppercase text-center">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {solicitudes.map((s) => (
              <tr
                key={s.id}
                className="border-t border-slate-100 hover:bg-slate-50/60 transition"
              >
                <td className="px-6 py-5">
                  <p className="text-sm font-semibold text-slate-800">
                    {s.producto}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">ID: #{s.id}</p>
                </td>

                <td className="px-6 py-5 font-semibold">{s.cantidad}</td>

                <td className="px-6 py-5 text-slate-600">{s.solicitante}</td>

                <td className="px-6 py-5">
                  <EstadoSolicitudBadge estado={s.estado} />
                </td>

                <td className="px-6 py-5 text-slate-600">{s.fecha}</td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => abrirVerSolicitud(s)}
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                    >
                      <HiOutlineEye />
                    </button>

                    {tipo === "pendientes" && (
                      <>
                        <button
                          onClick={() => aprobarSolicitud(s)}
                          className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex items-center justify-center"
                        >
                          <HiOutlineCheck />
                        </button>

                        <button
                          onClick={() => rechazarSolicitud(s)}
                          className="w-9 h-9 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center"
                        >
                          <HiOutlineXMark />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile / Tablet cards */}
      <div className="xl:hidden p-4 space-y-4">
        {solicitudes.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl border border-slate-200 p-4 bg-slate-50/40"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  ID #{s.id}
                </p>

                <h3 className="text-base font-bold text-slate-800 mt-1">
                  {s.producto}
                </h3>

                <p className="text-sm text-slate-500 mt-1">{s.solicitante}</p>
              </div>

              <EstadoSolicitudBadge estado={s.estado} />
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div>
                <p className="text-xs text-slate-500">Cantidad</p>
                <p className="text-sm font-semibold text-slate-800 mt-1">
                  {s.cantidad}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Fecha</p>
                <p className="text-sm font-semibold text-slate-800 mt-1">
                  {s.fecha}
                </p>
              </div>
            </div>

            {/* Motivo */}
            {s.motivo && (
              <div className="mt-4">
                <p className="text-xs text-slate-500">Motivo</p>
                <p className="text-sm text-slate-700 mt-1 line-clamp-2">
                  {s.motivo}
                </p>
              </div>
            )}

            {/* Acciones */}
            <div className="flex flex-wrap gap-2 mt-5">
              <button
                onClick={() => abrirVerSolicitud(s)}
                className="px-3 h-10 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition flex items-center gap-2 text-sm"
              >
                <HiOutlineEye className="text-lg" />
                Ver
              </button>

              {tipo === "pendientes" && (
                <>
                  <button
                    onClick={() => aprobarSolicitud(s)}
                    className="px-3 h-10 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition flex items-center gap-2 text-sm"
                  >
                    <HiOutlineCheck className="text-lg" />
                    Aprobar
                  </button>

                  <button
                    onClick={() => rechazarSolicitud(s)}
                    className="px-3 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center gap-2 text-sm"
                  >
                    <HiOutlineXMark className="text-lg" />
                    Rechazar
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {solicitudes.length === 0 && (
        <div className="py-16 text-center text-slate-500">
          No hay solicitudes registradas
        </div>
      )}
    </div>
  );
};

export default TablaSolicitudes;
