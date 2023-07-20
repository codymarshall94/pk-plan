"use client";

import { createContext, useState } from "react";

interface Day {
  day: string;
  movements: Movement[];
}

interface Movement {
  id: number;
  type: string;
  description: string;
  movement: string;
  style: string;
}

interface Plan {
  id: number;
  startDay: string;
  endDay: string;
  dates: Day[];
}

interface PlansContextValue {
  plans: Plan[];
  setPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
  selectedPlan: Plan | null;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan | null>>;
}

export const PlansContext = createContext<PlansContextValue>({
  plans: [],
  setPlans: () => {},
  selectedPlan: null,
  setSelectedPlan: () => {},
});

const PlansContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <PlansContext.Provider
      value={{
        plans,
        setPlans,
        selectedPlan,
        setSelectedPlan,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export default PlansContextProvider;
