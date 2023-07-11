interface MovementOption {
  id: string;
  value: string;
  name: string;
}

interface Plan {
  id: number;
  type: string;
  movement: string;
}

const dropdown = {
  vault: {
    options: [
      { id: "kong", value: "kong", name: "Kong Vault" },
      { id: "step", value: "step", name: "Step Vault" },
      { id: "speed", value: "speed", name: "Speed Vault" },
      { id: "lazy", value: "lazy", name: "Lazy Vault" },
    ],
  },
  swing: {
    options: [
      { id: "lache", value: "lache", name: "Lache" },
      { id: "underbar", value: "underbar", name: "Underbar" },
    ],
  },
  jump: {
    options: [
      { id: "precision", value: "precision", name: "Precision" },
      { id: "drop", value: "drop", name: "Drop" },
    ],
  },
  climb: {
    options: [{ id: "cat", value: "cat", name: "Cat" }],
  },
};

const MoveDropdown = ({ item }: { item: Plan }) => {
  return (
    <select className="p-2 border-2 rounded m-2 border-[#D9A8B2]">
      {dropdown[item.type as keyof typeof dropdown].options.map(
        (option: MovementOption) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        )
      )}
    </select>
  );
};

export default MoveDropdown;
