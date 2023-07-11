"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Questions {
  question: string;
  input: string;
}

const today = new Date();
const initialFormState = {
  planName: "",
  startDate: today.toISOString().substr(0, 10),
  endDate: today.toISOString().substr(0, 10),
  days: [],
};

const questions = [
  { question: "What is the name of your plan?", input: "text" },
  { question: "How many weeks will you be teaching this?", input: "date" },
  {
    question: "What days of the week will you be teaching this?",
    input: "checkbox",
  },
];

const checkboxValues = [
  { name: "days", value: "monday", text: "M" },
  { name: "days", value: "tuesday", text: "T" },
  { name: "days", value: "wednesday", text: "W" },
  { name: "days", value: "thursday", text: "T" },
  { name: "days", value: "friday", text: "F" },
  { name: "days", value: "saturday", text: "S" },
  { name: "days", value: "sunday", text: "S" },
];

const CreatePlan = () => {
  const [inputs, setInputs] = useState(initialFormState);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDays = [...inputs.days];
    if (newDays.includes(value as never)) {
      const index = newDays.findIndex((item) => item === value);
      newDays.splice(index, 1);
    } else {
      newDays.push(value as never);
    }
    setInputs({ ...inputs, [name]: newDays });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputs(initialFormState);
    router.push("/planner");
  };

  return (
    <div className="flex flex-col p-4 w-full">
      <form onSubmit={handleSubmit}>
        {questions.map((question: Questions) => (
          <div
            key={question.input}
            className="flex flex-col justify-between items-center bg-[#E8E9EE] p-2"
          >
            <h4 className="font-bold mb-2">{question.question}</h4>
            {question.input === "text" && (
              <input
                placeholder="Example. 5-8yo beginner parkour"
                type="text"
                name="planName"
                value={inputs.planName}
                onChange={handleInputChange}
                className="border-2 border-black p-4 w-1/2"
                required
              />
            )}
            {question.input === "checkbox" && (
              <div className="flex flex-row justify-between bg-white w-1/2 p-2 border-rounded">
                {checkboxValues.map((item) => (
                  <div className="flex flex-col" key={item.value}>
                    <input
                      type="checkbox"
                      name={item.name}
                      value={item.value}
                      checked={inputs.days.includes(item.value as never)}
                      className="mr-2"
                      onChange={handleCheckboxChange}
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
                  className="mr-2"
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
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => console.log(inputs)}
        >
          Create Plan
        </button>
      </form>
    </div>
  );
};

export default CreatePlan;
