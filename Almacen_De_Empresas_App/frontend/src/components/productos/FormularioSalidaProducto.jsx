import { useState } from "react";
import Swal from "sweetalert2";
import useInventario from "../../hooks/useInventario";

const FormularioSalidaProducto = () => {
  const {
    productoSalida,
    registrarSalidaProducto,
    cerrarModalSalida,
  } = useInventario();

  const [cantidad, setCantidad] = useState("");

  if (!productoSalida) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const cantidadNum = Number(cantidad);

    if (cantidadNum <= 0) {
      return Swal.fire({
        icon: "warning",
        title: "Cantidad inválida",
        text: "Ingresa una cantidad válida",
      });
    }

    if (cantidadNum > productoSalida.stock) {
      return Swal.fire({
        icon: "error",
        title: "Stock insuficiente",
        html: `
          <p>No puedes retirar más de lo disponible</p>
          <strong>Stock actual: ${productoSalida.stock}</strong>
        `,
      });
    }

    registrarSalidaProducto(productoSalida, cantidadNum);
    setCantidad("");
    cerrarModalSalida();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
        <p className="text-sm font-semibold">{productoSalida.nombre}</p>
        <p className="text-xs text-slate-500">
          Stock actual: {productoSalida.stock}
        </p>
      </div>

      <div>
        <label className="block text-sm mb-2">Cantidad a retirar</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="w-full h-11 border rounded-xl px-3"
          min="1"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button type="button" onClick={cerrarModalSalida}>
          Cancelar
        </button>

        <button className="bg-amber-600 text-white px-4 py-2 rounded-xl">
          Registrar salida
        </button>
      </div>
    </form>
  );
};

export default FormularioSalidaProducto;