import React, { useState } from 'react'
import {
  HiOutlineCube,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff
} from 'react-icons/hi'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="w-full max-w-6xl rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm flex flex-col md:flex-row bg-transparent md:min-h-[640px] lg:min-h-[680px]">
      
      {/* PANEL IZQUIERDO */}
      <aside className="hidden md:flex md:w-[46%] lg:w-1/2 relative overflow-hidden bg-white/5 backdrop-blur-xl border-r border-white/10">
        {/* Glow decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-teal-400/5 to-emerald-400/10" />
        <div className="absolute -bottom-16 -left-10 w-[380px] h-[380px] bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute top-20 right-10 w-[220px] h-[220px] bg-emerald-400/10 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col justify-between h-full w-full px-8 py-10 lg:px-10 lg:py-12 text-white">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <HiOutlineCube className="text-white text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">Logotipo</h3>
              <p className="text-sm text-white/70">
                Sistema de gestión de almacén
              </p>
            </div>
          </div>

          {/* Texto principal */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Controla tu almacén
              <br />
              con precisión
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Gestiona inventario, stock y movimientos desde un solo lugar.
            </p>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-white/10 text-sm text-white/50">
            © {new Date().getFullYear()} Tu empresa · Todos los derechos reservados
          </div>
        </div>
      </aside>

      {/* PANEL DERECHO */}
      <section className="w-full md:w-[54%] lg:w-1/2 bg-white px-5 py-8 sm:px-8 sm:py-9 md:px-10 md:py-12 lg:px-14 xl:px-16">
        <div className="w-full max-w-md mx-auto">
          
          {/* Header mobile */}
          <div className="md:hidden flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 shadow-lg flex items-center justify-center">
              <HiOutlineCube className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Logotipo</h3>
              <p className="text-xs text-slate-500">Sistema de almacén</p>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-700 text-center">
            Bienvenido(a)
          </h2>

          <p className="mt-3 text-center text-slate-500 text-sm sm:text-base">
            Inicia sesión para acceder al panel de control
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Correo electrónico
              </label>

              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                  <HiOutlineMail className="text-xl" />
                </span>
                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Contraseña
              </label>

              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                  <HiOutlineLockClosed className="text-xl" />
                </span>

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 sm:h-14 pl-12 pr-12 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition"
                >
                  {showPassword ? (
                    <HiOutlineEyeOff className="text-xl" />
                  ) : (
                    <HiOutlineEye className="text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Extra actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 rounded border-slate-300 text-teal-500 focus:ring-teal-400"
                />
                Recordarme
              </label>

              <button
                type="button"
                className="text-teal-600 hover:text-teal-700 font-medium transition text-left sm:text-right"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 sm:h-14 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all duration-200"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login