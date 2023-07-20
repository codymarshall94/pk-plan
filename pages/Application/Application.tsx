import { AuthContextProvider } from "@/contexts/AuthContext";
import ManageModalProvider from "@/contexts/ModalContext";
import PlansContextProvider from "@/contexts/PlansContext";

type Props = {
  children: React.ReactNode;
};

const Application = async ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <PlansContextProvider>
        <ManageModalProvider>{children}</ManageModalProvider>
      </PlansContextProvider>
    </AuthContextProvider>
  );
};

export default Application;
