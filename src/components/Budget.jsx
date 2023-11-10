import circle from "../public/pictures/circle.png";
const Budget = () => {
  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">
        What's your project budget?
      </h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="grid grid-cols-2 gap-[44px]">
        <div className="flex h-[115px] w-[284px] items-center gap-[12px]  rounded-2xl border-[1px] py-[24px] pl-[32px]">
          <div className="flex items-center justify-center rounded-full py-[45px] ">
            <img src={circle} alt="" />
          </div>
          <p>$5.000 - $10.000</p>
        </div>
        <div className="flex h-[115px] w-[284px] items-center gap-[12px]  rounded-2xl border-[1px] py-[24px] pl-[32px]">
          <div className="flex items-center justify-center rounded-full py-[45px] ">
            <img src={circle} alt="" />
          </div>
          <p>$5.000 - $10.000</p>
        </div>
        <div className="flex h-[115px] w-[284px] items-center gap-[12px]  rounded-2xl border-[1px] py-[24px] pl-[32px]">
          <div className="flex items-center justify-center rounded-full py-[45px] ">
            <img src={circle} alt="" />
          </div>
          <p>$5.000 - $10.000</p>
        </div>
        <div className="flex h-[115px] w-[284px] items-center gap-[12px]  rounded-2xl border-[1px] py-[24px] pl-[32px]">
          <div className="flex items-center justify-center rounded-full py-[45px] ">
            <img src={circle} alt="" />
          </div>
          <p>$5.000 - $10.000</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
