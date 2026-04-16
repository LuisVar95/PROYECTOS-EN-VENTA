import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

const LayoutProtegido = () => {
  const [colapsado, setColapsado] = useState(false)

  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      <div className="flex min-h-screen">
        <Sidebar
          colapsado={colapsado}
          setColapsado={setColapsado}
        />

        <div
          className={`flex-1 transition-all duration-300 ${
            colapsado ? 'lg:ml-[88px]' : 'lg:ml-[250px]'
          }`}
        >
          <main className="min-h-screen p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default LayoutProtegido