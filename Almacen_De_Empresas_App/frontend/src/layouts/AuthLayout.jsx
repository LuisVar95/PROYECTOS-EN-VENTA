import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-start md:items-center justify-center px-4 py-4"
      style={{ backgroundImage: "url('/img/login/waves-verdes.png')" }}
    >
      <Outlet />
    </main>
  )
}

export default AuthLayout