import { useState } from "react";
import useInventario from "../../hooks/useInventario";

const FormularioEntradaProducto = () => {
  const {
    productoEntrada,
    registrarEntradaProducto,
    cerrarModalEntrada,
  } = useInventario();

  const [formulario, setFormulario] = useState({
    cantidad: "",
    motivo: "",
    referencia: "",
    observaciones: "",
  });

  if (!productoEntrada) return null;

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    registrarEntradaProducto(productoEntrada, {
      ...formulario,
      cantidad: Number(formulario.cantidad),
    });

    setFormulario({
      cantidad: "",
      motivo: "",
      referencia: "",
      observaciones: "",
    });

    cerrarModalEntrada();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <section className="bg-emerald-50/60 border border-emerald-100 rounded-3xl p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-2">
          Producto seleccionado
        </p>

        <h3 className="text-xl font-bold text-slate-800">
          {productoEntrada.nombre}
        </h3>

        <div className="flex flex-wrap gap-3 mt-4">
          <span className="px-3 py-1 rounded-full bg-white border border-emerald-100 text-sm text-slate-700">
            Código: <span className="font-semibold">{productoEntrada.codigo}</span>
          </span>

          <span className="px-3 py-1 rounded-full bg-white border border-emerald-100 text-sm text-slate-700">
            Stock actual: <span className="font-semibold">{productoEntrada.stock}</span>
          </span>
        </div>
      </section>

      <section className="bg-slate-50/70 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Datos de la entrada
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Captura la información del movimiento de inventario.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-4">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Cantidad ingresada
            </label>
            <input
              type="number"
              name="cantidad"
              value={formulario.cantidad}
              onChange={handleChange}
              placeholder="Ej. 25"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              required
              min="1"
            />
          </div>

          <div className="lg:col-span-4">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Motivo
            </label>
            <select
              name="motivo"
              value={formulario.motivo}
              onChange={handleChange}
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              required
            >
              <option value="">Selecciona</option>
              <option value="Compra">Compra</option>
              <option value="Reposición">Reposición</option>
              <option value="Ajuste positivo">Ajuste positivo</option>
              <option value="Devolución">Devolución</option>
              <option value="Transferencia">Transferencia</option>
            </select>
          </div>

          <div className="lg:col-span-4">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Referencia / Documento
            </label>
            <input
              type="text"
              name="referencia"
              value={formulario.referencia}
              onChange={handleChange}
              placeholder="Ej. OC-2026-015"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
            />
          </div>

          <div className="lg:col-span-12">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Observaciones
            </label>
            <textarea
              name="observaciones"
              value={formulario.observaciones}
              onChange={handleChange}
              rows="3"
              placeholder="Notas adicionales sobre la entrada..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none resize-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-1">
        <button
          type="button"
          onClick={cerrarModalEntrada}
          className="h-11 px-5 rounded-2xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="h-11 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-[0_10px_25px_rgba(16,185,129,0.18)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.24)] transition-all duration-200"
        >
          Registrar entrada
        </button>
      </div>
    </form>
  );
};

export default FormularioEntradaProducto;