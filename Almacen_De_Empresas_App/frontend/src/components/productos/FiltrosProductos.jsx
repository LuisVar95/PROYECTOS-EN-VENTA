import { HiOutlineMagnifyingGlass, HiOutlineFunnel } from 'react-icons/hi2'

const FiltrosProductos = () => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Buscador */}
        <div className="lg:col-span-5">
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Buscar producto
          </label>

          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
              <HiOutlineMagnifyingGlass className="text-xl" />
            </span>

            <input
              type="text"
              placeholder="Buscar por nombre, código o categoría..."
              className="w-full h-12 rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Categoría */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Categoría
          </label>

          <select className="w-full h-12 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition">
            <option>Todas</option>
            <option>Seguridad</option>
            <option>Limpieza</option>
            <option>Papelería</option>
            <option>Oficina</option>
          </select>
        </div>

        {/* Estado */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Estado
          </label>

          <select className="w-full h-12 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition">
            <option>Todos</option>
            <option>Disponible</option>
            <option>Stock bajo</option>
            <option>Agotado</option>
            <option>Inactivo</option>
          </select>
        </div>

        {/* Botón */}
        <div className="lg:col-span-1 flex items-end">
          <button className="w-full h-12 rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition flex items-center justify-center">
            <HiOutlineFunnel className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FiltrosProductos