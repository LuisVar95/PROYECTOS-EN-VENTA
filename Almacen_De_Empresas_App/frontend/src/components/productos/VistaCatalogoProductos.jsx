import IndicadoresProductos from "./IndicadoresProductos";
import FiltrosProductos from "./FiltrosProductos";
import TablaProductos from "./TablaProductos";

const VistaCatalogoProductos = ({
  productos,
  totalProductos,
  stockBajo,
  agotados,
  categoriasActivas,
  onEditar,
  onEliminar,
  onVer,
  onEntrada,
  onSalida,
}) => {
  return (
    <div className="space-y-6">
      <IndicadoresProductos
        totalProductos={totalProductos}
        stockBajo={stockBajo}
        agotados={agotados}
        categoriasActivas={categoriasActivas}
      />

      <FiltrosProductos />

      <TablaProductos
        productos={productos}
        onEditar={onEditar}
        onEliminar={onEliminar}
        onVer={onVer}
        onEntrada={onEntrada}
        onSalida={onSalida}
      />
    </div>
  );
};

export default VistaCatalogoProductos;