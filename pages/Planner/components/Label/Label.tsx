import { text } from "stream/consumers";

const labelColors = {
  vault: { background: "#FCE8E8", text: "#F87171" },
  swing: { background: "#CAF4EC", text: "#34D399" },
  jump: { background: "#E6E8FB", text: "#818CF8" },
  climb: { background: "#E1F1FF", text: "#60A5FA" },
};

const Label = ({ name }: { name: string }) => {
  const label = name.toLowerCase();
  const bgColor = labelColors[label as keyof typeof labelColors].background
  const textColor = labelColors[label as keyof typeof labelColors].text

  return (
    <span
      className="rounded px-4 py-1"
      style={{ backgroundColor: bgColor, color: textColor, border: `1px solid ${textColor}`}}
    >
      {name}
    </span>
  );
};
export default Label;
