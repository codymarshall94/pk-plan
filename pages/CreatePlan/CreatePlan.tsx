"use client";

import { useState } from "react";

interface Questions {
  question: string;
  input: string;
}

const today = new Date();

const questions = [
  { question: "What is the name of your plan?", input: "text" },
  { question: "How many weeks will you be teaching this?", input: "date" },
  {
    question: "What days of the week will you be teaching this?",
    input: "checkbox",
  },
];

const checkboxValues = [
  { name: "day", value: "monday", text: "M" },
  { name: "day", value: "tuesday", text: "T" },
  { name: "day", value: "wednesday", text: "W" },
  { name: "day", value: "thursday", text: "T" },
  { name: "day", value: "friday", text: "F" },
  { name: "day", value: "saturday", text: "S" },
  { name: "day", value: "sunday", text: "S" },
];

const CreatePlan = () => {
  const [inputs, setInputs] = useState({
    planName: "",
    startDate: today.toISOString().substr(0, 10),
    endDate: today.toISOString().substr(0, 10),
    days: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col p-4 w-full">
      {questions.map((question: Questions) => (
        <div className="flex flex-col justify-between items-center bg-[#E8E9EE] p-2">
          <h4 className="font-bold mb-2">{question.question}</h4>
          {question.input === "text" && (
            <input
              placeholder="Example. 5-8yo beginner parkour"
              type="text"
              name="planName"
              value={inputs.planName}
              onChange={handleInputChange}
              className="border-2 border-black p-4 w-1/2"
            />
          )}
          {question.input === "checkbox" && (
            <div className="flex flex-row justify-between bg-white w-1/2 p-2 border-rounded">
              {checkboxValues.map((item) => (
                <div className="flex flex-col">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    className="mr-2"
                  />
                  <label htmlFor={item.value} className="mr-2">
                    {item.text}
                  </label>
                </div>
              ))}
            </div>
          )}
          {question.input === "date" && (
            <div className="flex flex-row justify-between bg-white w-1/2 p-2 border-rounded">
              <label htmlFor="start">Start date:</label>
              <input
                type="date"
                id="start"
                name="startDate"
                value={inputs.startDate}
                onChange={handleInputChange}
                min="2018-01-01"
                max="2027-12-31"
              />
              <label htmlFor="end">End date:</label>
              <input
                type="date"
                id="end"
                name="endDate"
                value={inputs.endDate}
                onChange={handleInputChange}
                min="2018-01-01"
                max="2027-12-31"
              />
            </div>
          )}
        </div>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log(inputs)}
      >
        Create Plan
      </button>
    </div>
  );
};

export default CreatePlan;
