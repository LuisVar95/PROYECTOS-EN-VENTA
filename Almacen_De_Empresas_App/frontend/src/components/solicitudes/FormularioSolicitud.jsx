import { useState } from "react";
import useSolicitudes from "../../hooks/useSolicitudes";
import useInventario from "../../hooks/useInventario";

const FormularioSolicitud = () => {
  const { crearSolicitud, cerrarModalSolicitud } = useSolicitudes();
  const { productos } = useInventario();

  const [form, setForm] = useState({
    productoId: "",
    cantidad: "",
    solicitante: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.productoId || !form.cantidad) return;
    crearSolicitud(form);
  };

  const productoSeleccionado = productos.find(
    (p) => p.id === Number(form.productoId)
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* SECCIÓN: INFORMACIÓN */}
      <section className="bg-slate-50/70 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Información de la solicitud
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Selecciona el producto y define la cantidad requerida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* PRODUCTO */}
          <div className="lg:col-span-7">
            <label className="label">Producto</label>

            <select
              name="productoId"
              value={form.productoId}
              onChange={handleChange}
              className="input"
            >
              <option value="">Selecciona un producto</option>

              {productos.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre} · {p.stock} {p.unidad}
                </option>
              ))}
            </select>
          </div>

          {/* UNIDAD */}
          <div className="lg:col-span-5">
            <label className="label">Unidad</label>

            <input
              disabled
              value={productoSeleccionado?.unidad || ""}
              className="input bg-slate-100 text-slate-500"
            />
          </div>

          {/* CANTIDAD */}
          <div className="lg:col-span-4">
            <label className="label">Cantidad</label>

            <div className="relative">
              <input
                type="number"
                name="cantidad"
                value={form.cantidad}
                onChange={handleChange}
                className="input pr-12"
                placeholder="0"
              />

              {productoSeleccionado && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                  {productoSeleccionado.unidad}
                </span>
              )}
            </div>
          </div>

          {/* STOCK */}
          {productoSeleccionado && (
            <div className="lg:col-span-8 flex items-end">
              <p className="text-sm text-slate-500">
                Stock disponible:{" "}
                <span className="font-medium text-slate-800">
                  {productoSeleccionado.stock} {productoSeleccionado.unidad}
                </span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECCIÓN: DETALLES */}
      <section className="bg-slate-50/70 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Detalles adicionales
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Información complementaria de la solicitud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* SOLICITANTE */}
          <div className="lg:col-span-6">
            <label className="label">Solicitante</label>
            <input
              type="text"
              name="solicitante"
              value={form.solicitante}
              onChange={handleChange}
              className="input"
              placeholder="Nombre del solicitante"
            />
          </div>

          {/* MOTIVO */}
          <div className="lg:col-span-12">
            <label className="label">Motivo</label>

            <textarea
              name="motivo"
              value={form.motivo}
              onChange={handleChange}
              rows={5}
              className="input resize-none min-h-[120px] leading-relaxed"
              placeholder="Describe el motivo..."
            />
          </div>
        </div>
      </section>

      {/* BOTONES (MISMO ESTILO QUE PRODUCTO) */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-1">
        <button
          type="button"
          onClick={cerrarModalSolicitud}
          className="h-11 px-5 rounded-2xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="h-11 px-6 rounded-2xl bg-[#1d7a6b] hover:bg-[#17685c] text-white font-semibold shadow-[0_10px_25px_rgba(23,104,92,0.18)] hover:shadow-[0_12px_30px_rgba(23,104,92,0.24)] transition-all duration-200"
        >
          Crear solicitud
        </button>
      </div>

    </form>
  );
};

export default FormularioSolicitud;