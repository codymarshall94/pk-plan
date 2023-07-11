"use client";

import { useState } from "react";

const AddMovementForm = ({ onAddMovement }: { onAddMovement: any }) => {
  const [inputs, setInputs] = useState({
    type: "vault",
    moveDescription: "",
    style: "line",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const movementObj = {
      id: Math.floor(Math.random() * 10000),
      type: inputs.type,
      description: inputs.moveDescription,
      movement: "",
      style: inputs.style,
    };
    onAddMovement(movementObj);
    setInputs({
      type: "",
      moveDescription: "",
      style: "",
    });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs({ ...inputs, type: e.target.value });
  };

  const handleMoveDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputs({ ...inputs, moveDescription: e.target.value });
  };

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs({ ...inputs, style: e.target.value });
  };

  return (
    <form className="mt-2" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-2">
        <label htmlFor="type">What movement category would you like to teach?</label>
        <select
          name="type"
          id="type"
          value={inputs.type}
          className="border-black border-2 p-4"
          onChange={handleTypeChange}
        >
          <option value="vault">Vault</option>
          <option value="swing">Swing</option>
          <option value="jump">Jump</option>
          <option value="climb">Climb</option>
        </select>
      </div>

      <div className="mb-2">
        <label htmlFor="moveDescription">
          What details would you like to provide?
        </label>
        <input
          type="text"
          className="border-2 border-black p-4 w-full"
          placeholder="How will you teach this?"
          id="moveDescription"
          onChange={handleMoveDescriptionChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="style">Will this be a line or a single skill?</label>
        <select
          name="style"
          id="style"
          className="border-black border-2 p-4"
          onChange={handleStyleChange}
        >
          <option value="line">Line</option>
          <option value="single">Single</option>
        </select>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Add to plan!
        </button>
      </div>
    </form>
  );
};

export default AddMovementForm;
