import React from "react";

/**
 * 按鈕元件，用於多步驟表單中的導航。
 *
 * @param {Object} props - 元件的屬性。
 * @param {number} props.currentStep - 當前步驟的編號。
 * @param {Function} props.onNext - “下一步”按鈕的點擊事件處理函數。
 * @param {Function} props.onPrev - “上一步”按鈕的點擊事件處理函數。
 * @returns {React.Component} 返回用於導航的按鈕元件。
 */
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
          onClick={onPrev}
          disabled={isPrevDisabled}
          className="rounded-full border border-primary px-10 py-2 text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white disabled:opacity-50"
        >
          上一步
        </button>
      )}
      {currentStep < 4 && (
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="rounded-full bg-primary px-10 py-2 text-white transition duration-300 ease-in-out hover:bg-opacity-90 disabled:opacity-50"
        >
          下一步
        </button>
      )}
    </div>
  );
};

export default Buttons;
