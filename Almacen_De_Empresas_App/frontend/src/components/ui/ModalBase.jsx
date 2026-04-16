import Modal from "react-modal";
import { HiOutlineXMark } from "react-icons/hi2";

const ModalBase = ({
  abierto,
  cerrarModal,
  icono,
  badge,
  titulo,
  descripcion,
  children,
  maxWidth = "720px",
}) => {
  const estilosModal = {
    overlay: {
      backgroundColor: "rgba(15, 23, 42, 0.45)",
      backdropFilter: "blur(4px)",
      zIndex: 100,
      padding: "16px",
    },
    content: {
      inset: "50% auto auto 50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "transparent",
      padding: 0,
      overflow: "visible",
      width: `min(${maxWidth}, calc(100vw - 24px))`,
      maxHeight: "calc(100vh - 32px)",
    },
  };

  return (
    <Modal
      isOpen={abierto}
      onRequestClose={cerrarModal}
      style={estilosModal}
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
    >
      <div className="w-full bg-white rounded-[24px] shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-slate-200 overflow-hidden">
        
        {/* HEADER */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-100/60 via-slate-50 to-transparent">
          <div className="flex items-start justify-between gap-4">
            
            {/* Lado izquierdo */}
            <div className="flex items-start gap-3 min-w-0">
              
              {icono && (
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 text-white shadow-md flex items-center justify-center shrink-0">
                  {icono}
                </div>
              )}

              <div className="min-w-0">
                {badge && (
                  <span className="inline-flex items-center rounded-full bg-slate-200 text-slate-700 text-[11px] font-semibold px-2.5 py-1 mb-2">
                    {badge}
                  </span>
                )}

                <h2 className="text-xl sm:text-[22px] font-bold text-slate-800 leading-tight">
                  {titulo}
                </h2>

                {descripcion && (
                  <p className="text-slate-500 mt-1 text-sm sm:text-[15px] max-w-lg">
                    {descripcion}
                  </p>
                )}
              </div>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={cerrarModal}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 shadow-sm transition flex items-center justify-center shrink-0"
            >
              <HiOutlineXMark className="text-[22px]" />
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="px-4 sm:px-5 md:px-6 py-4 max-h-[calc(100vh-180px)] overflow-y-auto sidebar-scroll">
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default ModalBase;