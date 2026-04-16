// components/solicitudes/EstadoSolicitudBadge.jsx
const EstadoSolicitudBadge = ({ estado }) => {
  const estilos = {
    PENDIENTE: "bg-yellow-100 text-yellow-700",
    APROBADA: "bg-emerald-100 text-emerald-700",
    RECHAZADA: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${estilos[estado]}`}
    >
      {estado}
    </span>
  );
};

export default EstadoSolicitudBadge;