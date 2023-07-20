"use client";

import Link from "next/link";
import { useContext } from "react";
import { ManageModal } from "../../contexts/ModalContext";
import { UserAuth } from "../../contexts/AuthContext";
import MyModal from "../MyModal/MyModal";
import CreatePlan from "../MyModal/components/CreatePlanForm";

const Sidebar = () => {
  const { handleOpenModal, modalName } = useContext(ManageModal);
  const { user, userSignOut } = UserAuth();
  return (
    <>
      {modalName === "createPlan" && (
        <MyModal>
          <CreatePlan />
        </MyModal>
      )}
      <div className="flex-row">
        <div className="flex flex-col justify-between w-full bg-[#121624] text-white font-bold shadow h-screen w-96">
          <div className="space-y-3 p-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">PkPlan</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-3 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link
                    href="/"
                    className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span>Current Day</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    href="/plans"
                    className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span>Plans</span>
                  </Link>
                </li>
                <li
                  className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                  onClick={() => handleOpenModal("createPlan")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Create a new plan</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button onClick={userSignOut}>Sign Out</button>
            <p className="text-lg bg-[#2F3646] p-4">
              {user?.displayName.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
