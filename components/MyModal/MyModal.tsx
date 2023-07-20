"use client";

import React, { Fragment, useContext, useEffect, useRef } from "react";
import { ManageModal } from "@/contexts/ModalContext";
import { Dialog, Transition } from "@headlessui/react";
import { createPortal } from "react-dom";

const MyModal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = React.useState(false);
  const { handleCloseModal, setOpenModal, openModal } = useContext(ManageModal);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const modalRef = useRef();

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
      handleCloseModal();
    }
  };

  return mounted
    ? createPortal(
        <>
          <Transition appear show={openModal} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={(e) => {
                closeModal(e);
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add your movement
                      </Dialog.Title>
                      {children}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>,
        document.body
      )
    : null;
};

export default MyModal;
