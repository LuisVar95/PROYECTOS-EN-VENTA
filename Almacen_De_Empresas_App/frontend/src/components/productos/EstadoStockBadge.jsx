const EstadoStockBadge = ({ stock, stockMinimo, activo }) => {
  let texto = 'Disponible'
  let clases = 'bg-emerald-100 text-emerald-700'

  if (!activo) {
    texto = 'Inactivo'
    clases = 'bg-slate-200 text-slate-600'
  } else if (stock === 0) {
    texto = 'Agotado'
    clases = 'bg-red-100 text-red-700'
  } else if (stock <= stockMinimo) {
    texto = 'Stock bajo'
    clases = 'bg-amber-100 text-amber-700'
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${clases}`}
    >
      {texto}
    </span>
  )
}

export default EstadoStockBadge