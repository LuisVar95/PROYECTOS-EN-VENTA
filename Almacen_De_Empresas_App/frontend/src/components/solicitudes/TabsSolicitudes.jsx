import {
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";

const tabs = [
  {
    id: "pendientes",
    label: "Pendientes",
    icon: HiOutlineClock,
  },
  {
    id: "historial",
    label: "Historial",
    icon: HiOutlineCheckCircle,
  },
];

const TabsSolicitudes = ({ vistaActiva, setVistaActiva }) => {
  return (
    <div className="border-b border-slate-200">
      <div className="flex items-center gap-6">
        {tabs.map((tab) => {
          const activo = vistaActiva === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setVistaActiva(tab.id)}
              className={`
                relative pb-3 flex items-center gap-2 text-sm font-semibold transition-all duration-200
                ${
                  activo
                    ? "text-[#1d7a6b]"
                    : "text-slate-500 hover:text-slate-800"
                }
              `}
            >
              <Icon
                className={`text-[16px] ${
                  activo ? "text-[#1d7a6b]" : "text-slate-400"
                }`}
              />

              {tab.label}

              {activo && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1d7a6b] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabsSolicitudes;