import classNames from "classnames";
const Buttons = ({ currentStep, onAdd, onDelete, formIsValid }) => {
  console.log("onAdd function", onAdd);
  const isPrevDisabled = currentStep === 1;
  const isNextDisabled = currentStep === 4;
  return (
    <div className="flex w-full items-center justify-between">
      <button
        id="prev"
        disabled={isPrevDisabled}
        className={classNames(
          "rounded-full border-[1px] border-solid px-[40px] py-[20px] ",
          {
            "border-primary": !isPrevDisabled,
            "text-primary": !isPrevDisabled,
            invisible: isPrevDisabled,
          }
        )}
        onClick={onDelete}
      >
        Previous step
      </button>
      <button
        id="next"
        type="button"
        disabled={!formIsValid}
        onClick={onAdd}
        className={classNames("rounded-full px-[40px] py-[20px] ", {
          " bg-primary": !isNextDisabled,
          "text-white": !isNextDisabled,
          invisible: isNextDisabled,
        })}
      >
        Next step
      </button>
    </div>
  );
};

export default Buttons;
