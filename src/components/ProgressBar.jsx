import classNames from "classnames";

const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex items-center justify-center gap-10">
      {steps.map((step) => (
        <div
          key={step}
          className={classNames(
            "flex h-[34px] w-[34px] items-center justify-center rounded-full",
            {
              "bg-primary text-white": step === currentStep,
              "bg-[#EFF0F6] text-[#6F6C90]": step !== currentStep,
            }
          )}
        >
          {step}
        </div>
      ))}
    </div>
  );
};
export default ProgressBar;
