import { useEffect, useState } from "react";
import useInventario from "../../hooks/useInventario";

const FormularioProducto = () => {
  const {
    productoEditar,
    agregarProducto,
    actualizarProducto,
    cerrarModalProducto,
  } = useInventario();

  const [formulario, setFormulario] = useState({
    nombre: "",
    codigo: "",
    categoria: "",
    descripcion: "",
    stockInicial: "",
    stockMinimo: "",
    unidadMedida: "",
    ubicacion: "",
    proveedor: "",
    estado: "Activo",
  });

  useEffect(() => {
    if (productoEditar) {
      setFormulario({
        nombre: productoEditar.nombre || "",
        codigo: productoEditar.codigo || "",
        categoria: productoEditar.categoria || "",
        descripcion: productoEditar.descripcion || "",
        stockInicial: productoEditar.stock || "",
        stockMinimo: productoEditar.stockMinimo || "",
        unidadMedida: productoEditar.unidadMedida || "",
        ubicacion: productoEditar.ubicacion || "",
        proveedor: productoEditar.proveedor || "",
        estado: productoEditar.activo ? "Activo" : "Inactivo",
      });
    } else {
      setFormulario({
        nombre: "",
        codigo: "",
        categoria: "",
        descripcion: "",
        stockInicial: "",
        stockMinimo: "",
        unidadMedida: "",
        ubicacion: "",
        proveedor: "",
        estado: "Activo",
      });
    }
  }, [productoEditar]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productoEditar) {
      const productoActualizado = {
        ...productoEditar,
        codigo: formulario.codigo,
        nombre: formulario.nombre,
        categoria: formulario.categoria,
        descripcion: formulario.descripcion,
        stock: Number(formulario.stockInicial) || 0,
        stockMinimo: Number(formulario.stockMinimo) || 0,
        unidadMedida: formulario.unidadMedida,
        ubicacion: formulario.ubicacion,
        proveedor: formulario.proveedor,
        actualizado: new Date().toLocaleDateString("es-MX"),
        activo: formulario.estado === "Activo",
      };

      actualizarProducto(productoActualizado);
    } else {
      const nuevoProducto = {
        id: Date.now(),
        codigo:
          formulario.codigo || `PRD-${Math.floor(Math.random() * 900 + 100)}`,
        nombre: formulario.nombre,
        categoria: formulario.categoria || "Sin categoría",
        descripcion: formulario.descripcion,
        stock: Number(formulario.stockInicial) || 0,
        stockMinimo: Number(formulario.stockMinimo) || 0,
        unidadMedida: formulario.unidadMedida,
        ubicacion: formulario.ubicacion || "Sin ubicación",
        proveedor: formulario.proveedor,
        actualizado: new Date().toLocaleDateString("es-MX"),
        activo: formulario.estado === "Activo",
      };

      agregarProducto(nuevoProducto);
    }

    cerrarModalProducto();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* INFORMACIÓN GENERAL */}
      <section className="bg-slate-50/70 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Información general
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Datos principales del producto dentro del catálogo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Nombre del producto
            </label>
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              placeholder="Ej. Caja de guantes de nitrilo"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>

          <div className="lg:col-span-5">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Código / SKU
            </label>
            <input
              type="text"
              name="codigo"
              value={formulario.codigo}
              onChange={handleChange}
              placeholder="Ej. PRD-007"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>

          <div className="lg:col-span-4">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Categoría
            </label>
            <select
              name="categoria"
              value={formulario.categoria}
              onChange={handleChange}
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            >
              <option value="">Selecciona una categoría</option>
              <option value="Seguridad">Seguridad</option>
              <option value="Limpieza">Limpieza</option>
              <option value="Papelería">Papelería</option>
              <option value="Oficina">Oficina</option>
            </select>
          </div>

          <div className="lg:col-span-4">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Estado
            </label>
            <select
              name="estado"
              value={formulario.estado}
              onChange={handleChange}
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <div className="lg:col-span-4">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Unidad de medida
            </label>
            <select
              name="unidadMedida"
              value={formulario.unidadMedida}
              onChange={handleChange}
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            >
              <option value="">Selecciona</option>
              <option value="Pieza">Pieza</option>
              <option value="Caja">Caja</option>
              <option value="Paquete">Paquete</option>
              <option value="Litro">Litro</option>
              <option value="Kilogramo">Kilogramo</option>
            </select>
          </div>

          <div className="lg:col-span-12">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Descripción
            </label>
            <textarea
              name="descripcion"
              value={formulario.descripcion}
              onChange={handleChange}
              rows="2"
              placeholder="Describe brevemente el producto..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none resize-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>
        </div>
      </section>

      {/* INVENTARIO + CONTROL */}
      <section className="bg-slate-50/70 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Inventario y control
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Define cantidades base y ubicación del producto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Stock inicial
            </label>
            <input
              type="number"
              name="stockInicial"
              value={formulario.stockInicial}
              onChange={handleChange}
              placeholder="Ej. 50"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Stock mínimo
            </label>
            <input
              type="number"
              name="stockMinimo"
              value={formulario.stockMinimo}
              onChange={handleChange}
              placeholder="Ej. 10"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Ubicación
            </label>
            <input
              type="text"
              name="ubicacion"
              value={formulario.ubicacion}
              onChange={handleChange}
              placeholder="Ej. A-04"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Proveedor
            </label>
            <input
              type="text"
              name="proveedor"
              value={formulario.proveedor}
              onChange={handleChange}
              placeholder="Ej. Distribuidora Central"
              className="w-full h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>
        </div>
      </section>

      {/* BOTONES */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-1">
        <button
          type="button"
          onClick={cerrarModalProducto}
          className="h-11 px-5 rounded-2xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="h-11 px-6 rounded-2xl bg-[#1d7a6b] hover:bg-[#17685c] text-white font-semibold shadow-[0_10px_25px_rgba(23,104,92,0.18)] hover:shadow-[0_12px_30px_rgba(23,104,92,0.24)] transition-all duration-200"
        >
          {productoEditar ? "Guardar cambios" : "Guardar producto"}
        </button>
      </div>
    </form>
  );
};

export default FormularioProducto;