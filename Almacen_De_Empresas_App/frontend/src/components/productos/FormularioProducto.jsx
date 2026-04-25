// FormularioProducto.jsx

import { useEffect, useState } from "react";
import useInventario from "../../hooks/useInventario";

const FormularioProducto = () => {
  const {
    productoEditar,
    agregarProducto,
    actualizarProducto,
    cerrarModalProducto,
  } = useInventario();

  const stateInicial = {
    nombre: "",
    codigo: "",
    categoria: "",
    descripcion: "",
    stockInicial: "",
    stockMinimo: "",
    unidadMedida: "",
    permiteDecimales: "false",
    ubicacion: "",
    proveedor: "",
    estado: "Activo",
  };

  const [formulario, setFormulario] = useState(stateInicial);

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
        permiteDecimales: String(
          productoEditar.permiteDecimales || false
        ),
        ubicacion: productoEditar.ubicacion || "",
        proveedor: productoEditar.proveedor || "",
        estado: productoEditar.activo ? "Activo" : "Inactivo",
      });
    } else {
      setFormulario(stateInicial);
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

    const payload = {
      codigo:
        formulario.codigo ||
        `PRD-${Math.floor(Math.random() * 900 + 100)}`,
      nombre: formulario.nombre,
      categoria: formulario.categoria || "Sin categoría",
      descripcion: formulario.descripcion,
      stock: Number(formulario.stockInicial) || 0,
      stockMinimo: Number(formulario.stockMinimo) || 0,
      unidadMedida: formulario.unidadMedida,
      permiteDecimales:
        formulario.permiteDecimales === "true",
      ubicacion: formulario.ubicacion || "Sin ubicación",
      proveedor: formulario.proveedor,
      actualizado: new Date().toLocaleDateString("es-MX"),
      activo: formulario.estado === "Activo",
    };

    if (productoEditar) {
      actualizarProducto({
        ...productoEditar,
        ...payload,
      });
    } else {
      agregarProducto({
        id: Date.now(),
        ...payload,
      });
    }

    cerrarModalProducto();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <section className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Información general
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Datos principales del producto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8">
            <label className="label">Nombre</label>
            <input
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="lg:col-span-4">
            <label className="label">Código</label>
            <input
              name="codigo"
              value={formulario.codigo}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="lg:col-span-4">
            <label className="label">Categoría</label>
            <input
              name="categoria"
              value={formulario.categoria}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="lg:col-span-4">
            <label className="label">Unidad</label>
            <select
              name="unidadMedida"
              value={formulario.unidadMedida}
              onChange={handleChange}
              className="input"
            >
              <option value="">Selecciona</option>
              <option value="Pieza">Pieza</option>
              <option value="Caja">Caja</option>
              <option value="Litro">Litro</option>
              <option value="Kg">Kg</option>
              <option value="Gramo">Gramo</option>
              <option value="Rollo">Rollo</option>
            </select>
          </div>

          <div className="lg:col-span-4">
            <label className="label">Cantidad</label>
            <select
              name="permiteDecimales"
              value={formulario.permiteDecimales}
              onChange={handleChange}
              className="input"
            >
              <option value="false">Solo enteros</option>
              <option value="true">Permite decimales</option>
            </select>
          </div>

          <div className="lg:col-span-6">
            <label className="label">Stock inicial</label>
            <input
              type="number"
              name="stockInicial"
              value={formulario.stockInicial}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="lg:col-span-6">
            <label className="label">Stock mínimo</label>
            <input
              type="number"
              name="stockMinimo"
              value={formulario.stockMinimo}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="lg:col-span-6">
            <label className="label">Ubicación</label>
            <input
              name="ubicacion"
              value={formulario.ubicacion}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="lg:col-span-6">
            <label className="label">Proveedor</label>
            <input
              name="proveedor"
              value={formulario.proveedor}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="lg:col-span-12">
            <label className="label">Descripción</label>
            <textarea
              rows="3"
              name="descripcion"
              value={formulario.descripcion}
              onChange={handleChange}
              className="input resize-none min-h-[110px]"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={cerrarModalProducto}
          className="h-11 px-5 rounded-2xl border border-slate-200"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="h-11 px-6 rounded-2xl bg-[#1d7a6b] text-white"
        >
          {productoEditar
            ? "Guardar cambios"
            : "Guardar producto"}
        </button>
      </div>
    </form>
  );
};

export default FormularioProducto;