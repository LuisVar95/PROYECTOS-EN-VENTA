import { InventarioProvider } from "./InventarioProvider";
import { SolicitudesProvider } from "./SolicitudesProvider";

const AppProvider = ({ children }) => {
  return (
    <InventarioProvider>
      <SolicitudesProvider>
        {children}
      </SolicitudesProvider>
    </InventarioProvider>
  );
};

export default AppProvider;