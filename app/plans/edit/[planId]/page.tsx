import Plans from "@/pages/EditPlan";

const EditPlanPage = ({
  params: { planId },
}: {
  params: {
    planId: string;
  };
}) => {
  return (
    <>
      <h1>{planId}</h1>
      <Plans />;
    </>
  );
};

export default EditPlanPage;
