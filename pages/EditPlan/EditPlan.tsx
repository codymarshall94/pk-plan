"use client"

import React, { useState, useContext } from "react";
import { ManageModal } from "@/contexts/ModalContext";
import { PlansContext } from "@/contexts/PlansContext";
import Label from "./components/Label/Label";
import MoveDropdown from "./components/MoveDropdown/MoveDropdown";
import DateDropdown from "./components/DateDropdown/DateDropdown";
import MyModal from "@/components/MyModal/MyModal";
import Toolbar from "./components/Toolbar/Toolbar";
import AddMovementForm from "@/components/MyModal/components/AddMovementForm";

interface Movement {
  id: number;
  type: string;
  description: string;
  movement: string;
  style: string;
}

const Planner = () => {
  const { handleOpenModal, handleCloseModal, modalName } = useContext(
    ManageModal
  );
  const { plans, setPlans } = useContext(PlansContext);
  const [selectedDay, setSelectedDay] = useState<any>(null);

  const handleSelectDay = (day: any) => {
    setSelectedDay(day);
  };

  const handleAddMovement = (movementObj: Movement) => {
    const newPlans = [...plans];
    const selectedDayIndex = newPlans[0].dates.findIndex(
      (date: any) => date.date === selectedDay.date
    );
    newPlans[0].dates[selectedDayIndex].movements.push(movementObj);
    setPlans(newPlans);
    handleCloseModal();
  };

  const handleDeleteMovement = (id: number) => {
    const newPlans = [...plans];
    const selectedDayIndex = newPlans[0].dates.findIndex(
      (date: any) => date.date === selectedDay.date
    );
    newPlans[0].dates[selectedDayIndex].movements = newPlans[0].dates[
      selectedDayIndex
    ].movements.filter((movement: Movement) => movement.id !== id);
    setPlans(newPlans);
  };

  return (
    <>
      {modalName === "addMovement" && (
        <MyModal>
          <AddMovementForm onAddMovement={handleAddMovement} />
        </MyModal>
      )}
      <div className="flex flex-col p-4 w-full">
        {plans.length > 0 && (
          <DateDropdown dates={plans[0].dates} selectDay={handleSelectDay} />
        )}
        <div className="flex flex-col justify-between items-center bg-[#E8E9EE] p-2">
          {selectedDay?.movements.map((movement: Movement) => (
            <div key={movement.id} className="w-full mb-2">
              <div className="flex flex-col justify-between bg-white w-full">
                <div className="flex justify-between p-2">
                  <Label name={movement.type} />
                  <Toolbar
                    id={movement.id}
                    handleDeleteMovement={handleDeleteMovement}
                    style={movement.style}
                    description={movement.description}
                  />
                </div>
                <MoveDropdown item={movement} />
              </div>
            </div>
          ))}
          <button
            className="border border-[#D5D5DB] p-4 w-full"
            onClick={() => handleOpenModal("addMovement")}
          >
            + Add new movement
          </button>
        </div>
      </div>
    </>
  );
};

export default Planner;
