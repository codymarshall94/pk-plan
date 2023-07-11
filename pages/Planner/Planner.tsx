"use client";

import { useState, useContext } from "react";
import { ManageModal } from "@/contexts/ModalContext";
import Label from "./components/Label/Label";
import MoveDropdown from "./components/MoveDropdown/MoveDropdown";
import DateDropdown from "./components/DateDropdown/DateDropdown";
import MyModal from "@/components/MyModal/MyModal";
import AddMovementForm from "@/components/MyModal/components/AddMovementForm";
import Toolbar from "./components/Toolbar/Toolbar";

interface Plan {
  id: number;
  type: string;
  description: string;
  movement: string;
  style: string;
}

const Planner = () => {
  const [plan, setPlan] = useState<Plan[]>([]);
  const { setOpenModal } = useContext(ManageModal);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddMovement = (movementObj: Plan) => {
    const newPlan = [...plan];
    newPlan.push(movementObj);
    setPlan(newPlan);
    handleCloseModal();
  };

  const handleDeleteMovement = (id: number) => {
    const newPlan = [...plan];
    const index = newPlan.findIndex((item) => item.id === id);
    newPlan.splice(index, 1);
    setPlan(newPlan);
  };

  return (
    <>
      <MyModal>
        <AddMovementForm onAddMovement={handleAddMovement} />
      </MyModal>
      <div className="flex flex-col p-4 w-full">
        <DateDropdown />
        <div className="flex flex-col justify-between items-center bg-[#E8E9EE] p-2">
          {plan.map((item) => (
            <div key={item.id} className="w-full mb-2">
              <div className="flex flex-col justify-between bg-white w-full">
                <div className="flex justify-between p-2">
                  <Label name={item.type} />
                  <Toolbar
                    id={item.id}
                    handleDeleteMovement={handleDeleteMovement}
                    style={item.style}
                    description={item.description}
                  />
                </div>
                <MoveDropdown item={item} />
              </div>
            </div>
          ))}
          <button
            className="border border-[#D5D5DB] p-4 w-full"
            onClick={handleOpenModal}
          >
            + Add new movement
          </button>
        </div>
      </div>
    </>
  );
};

export default Planner;
