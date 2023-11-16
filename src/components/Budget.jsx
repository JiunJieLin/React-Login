import selectedCircle from "../public/pictures/selectedcircle.png";
import unSelectedCircle from "../public/pictures/unselectcircle.png";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Budget = ({
  setSelectBudgetState,
  prevSelectedBudget,
  setStep3Contact,
}) => {
  const budgets = [
    "5.000 - 10.000",
    "10.000 - 20.000",
    "20.000 - 50.000",
    "50.000 +",
  ];
  const [selectBudget, setSelectBudget] = useState(prevSelectedBudget || "");

  const handleSelect = (index) => {
    const selectedBudget = budgets[index];
    setSelectBudget(selectedBudget);
    setStep3Contact(selectedBudget);
    setSelectBudgetState(true);
  };
  useEffect(() => {
    console.log(selectBudget);
    setSelectBudgetState(true);
  }, [selectBudget]);
  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">
        What's your project budget?
      </h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      <div className="grid grid-cols-2 gap-[44px]">
        {budgets.map((budget, index) => (
          <button
            key={budget}
            onClick={() => handleSelect(index)}
            className={classNames(
              "flex h-[115px] w-[284px] items-center gap-[12px]  rounded-2xl border-[1px] py-[24px] pl-[32px]",
              { "border-primary": selectBudget === budget }
            )}
          >
            <div className="flex items-center justify-center gap-[12.5px] rounded-full py-[45px]">
              <img
                src={
                  selectBudget === budget ? selectedCircle : unSelectedCircle
                }
                alt=""
              />
              <p>${budget}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Budget;
