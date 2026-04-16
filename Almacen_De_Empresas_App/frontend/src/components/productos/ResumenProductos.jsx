import {
  HiOutlineCube,
  HiOutlineExclamationTriangle,
  HiOutlineXCircle,
  HiOutlineTag
} from 'react-icons/hi2'

const ResumenProductos = ({
  totalProductos,
  stockBajo,
  agotados,
  categoriasActivas
}) => {
  const tarjetas = [
    {
      titulo: 'Total de productos',
      valor: totalProductos,
      descripcion: 'Productos registrados en sistema',
      icono: HiOutlineCube,
      colorIcono: 'text-cyan-600',
      fondoIcono: 'bg-cyan-100'
    },
    {
      titulo: 'Stock bajo',
      valor: stockBajo,
      descripcion: 'Productos por debajo del mínimo',
      icono: HiOutlineExclamationTriangle,
      colorIcono: 'text-amber-600',
      fondoIcono: 'bg-amber-100'
    },
    {
      titulo: 'Sin existencias',
      valor: agotados,
      descripcion: 'Productos actualmente agotados',
      icono: HiOutlineXCircle,
      colorIcono: 'text-red-600',
      fondoIcono: 'bg-red-100'
    },
    {
      titulo: 'Categorías activas',
      valor: categoriasActivas,
      descripcion: 'Clasificaciones activas en almacén',
      icono: HiOutlineTag,
      colorIcono: 'text-violet-600',
      fondoIcono: 'bg-violet-100'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {tarjetas.map((tarjeta) => {
        const Icono = tarjeta.icono

        return (
          <div
            key={tarjeta.titulo}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">{tarjeta.titulo}</p>

              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${tarjeta.fondoIcono}`}
              >
                <Icono className={`text-xl ${tarjeta.colorIcono}`} />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-slate-800 mt-4">
              {tarjeta.valor}
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              {tarjeta.descripcion}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default ResumenProductos