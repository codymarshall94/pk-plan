import Image from "next/image";

const Toolbar = ({
  description,
  style,
  id,
  handleDeleteMovement,
}: {
  description: string;
  style: string;
  id: number;
  handleDeleteMovement: any;
}) => {
  return (
    <div className="flex w-full justify-end">
      {style === "line" && (
        <Image
          src="/icons/link.png"
          className="w-auto h-auto"
          width={25}
          height={10}
          alt="link"
        />
      )}
      {description.length > 0 && (
        <Image
          src="/icons/description.png"
          className="w-auto h-auto"
          width={25}
          height={10}
          alt="description"
        />
      )}
      <Image
        src="/icons/deleteblack.png"
        className="w-auto h-auto cursor-pointer"
        width={25}
        height={10}
        onClick={() => handleDeleteMovement(id)}
        alt="delete"
      />
    </div>
  );
};

export default Toolbar;
