const VistaAlertasProductos = ({ productos }) => {
  const agotados = productos.filter((p) => p.stock === 0);

  const stockBajo = productos.filter(
    (p) => p.stock > 0 && p.stock <= p.stockMinimo
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Stock bajo */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h4 className="text-lg font-bold text-slate-800">
            Productos con stock bajo
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Productos que ya alcanzaron su nivel mínimo.
          </p>
        </div>

        <div className="p-4 space-y-3">
          {stockBajo.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-10 text-center">
              <p className="text-sm font-semibold text-slate-700">
                Sin productos en riesgo
              </p>
              <p className="text-sm text-slate-500 mt-1">
                No hay productos con stock bajo actualmente.
              </p>
            </div>
          ) : (
            stockBajo.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                      <p className="font-semibold text-slate-800 truncate">
                        {p.nombre}
                      </p>
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Requiere reabastecimiento pronto.
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 shrink-0">
                    Bajo stock
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Stock actual
                    </p>
                    <p className="text-lg font-bold text-amber-700 mt-1">
                      {p.stock}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Stock mínimo
                    </p>
                    <p className="text-lg font-bold text-slate-800 mt-1">
                      {p.stockMinimo}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Agotados */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h4 className="text-lg font-bold text-slate-800">
            Productos agotados
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Productos sin existencias disponibles en almacén.
          </p>
        </div>

        <div className="p-4 space-y-3">
          {agotados.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-10 text-center">
              <p className="text-sm font-semibold text-slate-700">
                Sin productos agotados
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Todos los productos tienen existencias disponibles.
              </p>
            </div>
          ) : (
            agotados.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                      <p className="font-semibold text-slate-800 truncate">
                        {p.nombre}
                      </p>
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Se requiere reposición inmediata.
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100 shrink-0">
                    Agotado
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Stock actual
                    </p>
                    <p className="text-lg font-bold text-rose-700 mt-1">0</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Stock mínimo
                    </p>
                    <p className="text-lg font-bold text-slate-800 mt-1">
                      {p.stockMinimo}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VistaAlertasProductos;