import classNames from "classnames";
import React from "react";

const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex items-center justify-center gap-[18px] py-[33px] ">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={classNames(
              "flex h-[34px] w-[34px] items-center justify-center rounded-full",
              {
                "bg-primary text-white": step <= currentStep,
                "bg-[#EFF0F6] text-[#6F6C90]": step > currentStep,
              }
            )}
          >
            {step}
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`h-[6px] w-[98px] rounded-md border-2 ${
                step <= currentStep
                  ? "border-primary bg-primary"
                  : "border-[#EFF0F6] bg-[#EFF0F6]"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
export default ProgressBar;
