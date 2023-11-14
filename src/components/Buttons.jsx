const Buttons = ({ currentStep, onNext, onPrev }) => {
  const isPrevDisabled = currentStep === 1;
  const isNextDisabled = currentStep === 4;
  return (
    <div
      className={`flex w-full items-center ${
        currentStep === 1
          ? "justify-end"
          : currentStep === 4
          ? "justify-start"
          : "justify-between"
      }`}
    >
      {currentStep > 1 && (
        <button
          disabled={isPrevDisabled}
          className="rounded-full border-[1px] border-solid border-primary px-[40px] py-[20px] text-primary transition duration-300 ease-in-out hover:bg-opacity-90 disabled:opacity-50"
          onClick={onPrev}
        >
          Previous step
        </button>
      )}
      {currentStep < 4 && (
        <button
          disabled={isNextDisabled}
          onClick={onNext}
          className="rounded-full bg-primary px-[40px] py-[20px] text-white transition duration-300 ease-in-out hover:bg-opacity-90 disabled:opacity-50"
        >
          Next step
        </button>
      )}
    </div>
  );
};

export default Buttons;
