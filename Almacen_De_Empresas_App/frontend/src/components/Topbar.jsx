import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineChevronDown
} from 'react-icons/hi2'

const Topbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-[#f4f7f6]/90 backdrop-blur-md border-b border-slate-200/70">
      <div className="h-[84px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Search */}
        <div className="flex-1 max-w-2xl ml-14 lg:ml-0">
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
              <HiOutlineMagnifyingGlass className="text-xl" />
            </span>
            <input
              type="text"
              placeholder="Buscar productos, solicitudes o usuarios..."
              className="w-full h-12 rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#1f7a6b]/30 focus:border-[#1f7a6b] transition"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="relative w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition flex items-center justify-center">
            <HiOutlineBell className="text-xl" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </button>

          <div className="hidden sm:flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-3 py-2 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1f7a6b] to-[#2a9d8f] text-white flex items-center justify-center font-bold">
              JD
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-800">Juan Pérez</p>
              <p className="text-xs text-slate-500">Administrador</p>
            </div>

            <HiOutlineChevronDown className="text-slate-400 text-lg" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar