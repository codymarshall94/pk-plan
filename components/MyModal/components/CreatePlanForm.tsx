"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ManageModal } from "@/contexts/ModalContext";
import { PlansContext } from "@/contexts/PlansContext";

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
  const { setOpenModal } = useContext(ManageModal);
  const { setPlans } = useContext(PlansContext);

  //Form Handlers

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

  //Logic to generate dates based on start and end date

  const generateDates = () => {
    const dates = [];
    const start = new Date(inputs.startDate);
    const end = new Date(inputs.endDate);

    for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
      if (
        inputs.days.includes(
          day
            .toLocaleString("en-us", { weekday: "long" })
            .toLowerCase() as never
        )
      ) {
        dates.push(new Date(day));
      }
    }

    return dates;
  };

  //Logic to create plan object

  const handleCreatePlanObj = () => {
    const dates = generateDates();
    const planObj = {
      id: Math.floor(Math.random() * 10000),
      planName: inputs.planName,
      startDate: dates[0],
      endDate: dates[dates.length - 1],
      dates: dates.map((date) => ({ date, movements: [] })),
    };
    return planObj;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const planObj = handleCreatePlanObj();
    setPlans((prevPlans: any) => [...prevPlans, planObj]);
    setInputs(initialFormState);
    setOpenModal(false);
    router.push(`/plans/edit/${planObj.id}`);
  };

  return (
    <div className="flex flex-col p-4 w-full">
      <form onSubmit={handleSubmit}>
        {questions.map((question: Questions) => (
          <div key={question.input} className="flex flex-col justify-between">
            <h4 className="font-bold mb-2">{question.question}</h4>
            {question.input === "text" && (
              <input
                placeholder="Example. 5-8yo beginner parkour"
                type="text"
                name="planName"
                value={inputs.planName}
                onChange={handleInputChange}
                className="border-2 border-black p-4 rounded-md"
                required
              />
            )}
            {question.input === "checkbox" && (
              <div className="flex flex-row justify-between bg-white p-2 border-rounded">
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
              <div className="flex flex-row justify-between bg-white p-2 border-rounded">
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
        >
          Create Plan
        </button>
      </form>
    </div>
  );
};

export default CreatePlan;
