import {
  HiOutlineCube,
  HiOutlineExclamationTriangle,
  HiOutlineArchiveBoxXMark,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

const IndicadoresProductos = ({
  totalProductos,
  stockBajo,
  agotados,
  categoriasActivas,
}) => {
  const indicadores = [
    {
      label: "Productos",
      value: totalProductos,
      descripcion: "Registrados en catálogo",
      icon: HiOutlineCube,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      valueColor: "text-slate-800",
    },
    {
      label: "Stock bajo",
      value: stockBajo,
      descripcion: "Requieren atención",
      icon: HiOutlineExclamationTriangle,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      valueColor: "text-amber-700",
    },
    {
      label: "Agotados",
      value: agotados,
      descripcion: "Sin existencias",
      icon: HiOutlineArchiveBoxXMark,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      valueColor: "text-rose-700",
    },
    {
      label: "Categorías",
      value: categoriasActivas,
      descripcion: "Activas en sistema",
      icon: HiOutlineSquares2X2,
      iconBg: "bg-emerald-50",
      iconColor: "text-[#1d7a6b]",
      valueColor: "text-[#1d7a6b]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {indicadores.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="group bg-white border border-slate-200 rounded-3xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {item.label}
                </p>

                <h3 className={`text-3xl font-bold mt-2 ${item.valueColor}`}>
                  {item.value}
                </h3>

                <p className="text-xs text-slate-400 mt-2">
                  {item.descripcion}
                </p>
              </div>

              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}
              >
                <Icon className={`text-[20px] ${item.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndicadoresProductos;