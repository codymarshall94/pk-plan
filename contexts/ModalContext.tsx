"use client";

import { createContext, useState } from "react";

export const ManageModal = createContext(undefined as any);

const ManageModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalName, setModalName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setModalName("");
    setOpenModal(false);
  };

  const handleOpenModal = (name: string) => {
    setModalName(name);
    setOpenModal(true);
  };

  return (
    <ManageModal.Provider
      value={{
        openModal,
        setOpenModal,
        handleOpenModal,
        handleCloseModal,
        modalName,
      }}
    >
      {children}
    </ManageModal.Provider>
  );
};

export default ManageModalProvider;
