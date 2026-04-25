import useSolicitudes from "../../hooks/useSolicitudes";
import EstadoSolicitudBadge from "./EstadoSolicitudBadge";
import {
  HiOutlineCube,
  HiOutlineUser,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentList,
  HiOutlineCheck,
  HiOutlineXMark,
} from "react-icons/hi2";

const ContenidoVerSolicitud = () => {
  const {
    solicitudVer,
    aprobarSolicitud,
    rechazarSolicitud,
    cerrarModalVer,
  } = useSolicitudes();

  if (!solicitudVer) return null;

  const pendiente = solicitudVer.estado === "PENDIENTE";

  return (
    <div className="space-y-6">
      {/* HERO SUPERIOR */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 sm:p-7">
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#1d7a6b]/5 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Info principal */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                Solicitud #{solicitudVer.id}
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
                {solicitudVer.producto}
              </h2>

              <p className="text-slate-500 mt-2">
                Movimiento interno de inventario solicitado por un usuario del
                sistema.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500">Cantidad</p>
                <p className="font-semibold text-slate-800">
                  {solicitudVer.cantidad} {solicitudVer.unidad}
                </p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500">Fecha</p>
                <p className="font-semibold text-slate-800">
                  {solicitudVer.fecha}
                </p>
              </div>
            </div>
          </div>

          {/* Estado */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 min-w-[260px] shadow-sm">
            <p className="text-sm text-slate-500">Estado actual</p>

            <div className="mt-3">
              <EstadoSolicitudBadge estado={solicitudVer.estado} />
            </div>

            <div className="mt-5 pt-5 border-t border-slate-100">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Registro
              </p>

              <p className="text-sm text-slate-600 mt-2">
                ID interno: #{solicitudVer.id}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID PRINCIPAL */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* IZQUIERDA */}
        <div className="lg:col-span-8 space-y-6">
          {/* Información general */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                <HiOutlineCube className="text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  Información general
                </h3>

                <p className="text-sm text-slate-500">
                  Datos del producto solicitado
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="text-sm text-slate-500">Producto</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {solicitudVer.producto}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Unidad</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {solicitudVer.unidad}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Cantidad</p>
                <p className="font-semibold text-slate-800 mt-1">
                  {solicitudVer.cantidad}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Tipo</p>
                <p className="font-semibold text-slate-800 mt-1">
                  Salida interna
                </p>
              </div>
            </div>
          </div>

          {/* Motivo */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                <HiOutlineClipboardDocumentList className="text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  Motivo de solicitud
                </h3>

                <p className="text-sm text-slate-500">
                  Justificación registrada por el usuario
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <p className="text-slate-700 leading-relaxed">
                {solicitudVer.motivo}
              </p>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div className="lg:col-span-4 space-y-6">
          {/* Solicitante */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                <HiOutlineUser className="text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  Solicitante
                </h3>

                <p className="text-sm text-slate-500">
                  Usuario responsable
                </p>
              </div>
            </div>

            <p className="font-semibold text-slate-800 text-lg">
              {solicitudVer.solicitante}
            </p>
          </div>

          {/* Fecha */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                <HiOutlineCalendarDays className="text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  Fecha
                </h3>

                <p className="text-sm text-slate-500">
                  Registro en sistema
                </p>
              </div>
            </div>

            <p className="font-semibold text-slate-800 text-lg">
              {solicitudVer.fecha}
            </p>
          </div>

          {/* Acciones */}
          {pendiente && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-800">
                Acciones rápidas
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Gestiona esta solicitud directamente.
              </p>

              <div className="space-y-3 mt-5">
                <button
                  onClick={() => aprobarSolicitud(solicitudVer)}
                  className="w-full h-11 rounded-2xl bg-[#1d7a6b] hover:bg-[#17685c] text-white font-semibold transition flex items-center justify-center gap-2"
                >
                  <HiOutlineCheck />
                  Aprobar solicitud
                </button>

                <button
                  onClick={() => rechazarSolicitud(solicitudVer)}
                  className="w-full h-11 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold transition flex items-center justify-center gap-2"
                >
                  <HiOutlineXMark />
                  Rechazar solicitud
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <div className="flex justify-end pt-1">
        <button
          onClick={cerrarModalVer}
          className="h-11 px-6 rounded-2xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ContenidoVerSolicitud;