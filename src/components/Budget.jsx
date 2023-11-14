import selectedCircle from "../public/pictures/selectedcircle.png";
import unSelectedCircle from "../public/pictures/unselectcircle.png";
import { useState } from "react";
import classNames from "classnames";

const Budget = ({ selectBudget }) => {
  const [selectBudget, setSelectBudget] = useState(null);

  const budgets = [
    "5.000 - 10.000",
    "10.000 - 20.000",
    "20.000 - 50.000",
    "50.000 +",
  ];
  const handleSelect = (index) => {
    setSelectBudget(budgets[index]);
  };
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
            onClick={() => handleSelect(index)}
            className={classNames(
              "flex h-[115px] w-[284px] items-center gap-[12px]  rounded-2xl border-[1px] py-[24px] pl-[32px]",
              { "border-primary": selectBudget === budget }
            )}
          >
            <div
              key={index}
              id={budget}
              className="flex items-center justify-center gap-[12.5px] rounded-full py-[45px]"
            >
              <img
                src={
                  selectBudget === budget ? selectedCircle : unSelectedCircle
                }
                alt=""
              />
              <p>{budget}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Budget;
