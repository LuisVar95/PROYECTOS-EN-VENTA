import {
  HiOutlineCube,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";
import ModalBase from "../ui/ModalBase";
import useInventario from "../../hooks/useInventario";

const Item = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
      {label}
    </p>
    <p className="text-sm font-semibold text-slate-800">{value || "—"}</p>
  </div>
);

const ModalVerProducto = ({ abierto, cerrarModal }) => {
  const { productoVer } = useInventario();

  if (!productoVer) return null;

  return (
    <ModalBase
      abierto={abierto}
      cerrarModal={cerrarModal}
      icono={<HiOutlineCube className="text-[22px]" />}
      badge="Detalle de producto"
      titulo={productoVer.nombre}
      descripcion={`Código: ${productoVer.codigo}`}
      maxWidth="920px"
    >
      <div className="space-y-6">
        {/* HEADER RESUMEN */}
        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Producto
            </p>
            <h3 className="text-xl font-bold text-slate-800">
              {productoVer.nombre}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {productoVer.categoria}
            </p>
          </div>

          {/* Estado */}
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${
              productoVer.activo
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {productoVer.activo ? (
              <HiOutlineCheckCircle />
            ) : (
              <HiOutlineXCircle />
            )}
            {productoVer.activo ? "Activo" : "Inactivo"}
          </div>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* INVENTARIO DESTACADO */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase mb-2">
                Stock actual
              </p>
              <h2 className="text-3xl font-bold text-slate-800">
                {productoVer.stock}
              </h2>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Mínimo requerido:{" "}
              <span className="font-semibold text-slate-700">
                {productoVer.stockMinimo}
              </span>
            </div>

            {/* Indicador */}
            <div className="mt-3">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    productoVer.stock <= productoVer.stockMinimo
                      ? "bg-red-500"
                      : "bg-emerald-500"
                  }`}
                  style={{
                    width: `${Math.min(
                      (productoVer.stock / productoVer.stockMinimo) * 100,
                      100,
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* INFO GENERAL */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5">
            <h3 className="text-sm font-semibold text-slate-700">
              Información general
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-sm">
              <Item label="Código" value={productoVer.codigo} />
              <Item label="Ubicación" value={productoVer.ubicacion} />
              <Item label="Proveedor" value={productoVer.proveedor} />
              <Item label="Unidad" value={productoVer.unidadMedida} />
              <Item label="Categoría" value={productoVer.categoria} />
              <Item label="Actualizado" value={productoVer.actualizado} />
            </div>
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs text-slate-400 uppercase mb-2">Descripción</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            {productoVer.descripcion || "Sin descripción registrada."}
          </p>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalVerProducto;
