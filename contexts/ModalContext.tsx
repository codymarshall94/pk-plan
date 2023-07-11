"use client";

import { createContext, useState } from "react";

export const ManageModal = createContext(undefined as any);

const ManageModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ManageModal.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ManageModal.Provider>
  );
};

export default ManageModalProvider;
