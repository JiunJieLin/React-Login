import ContactDetails from "./components/ContactDetails";
import StepBar from "./components/StepBar";
const App = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="b-[1px] m-auto flex flex-col items-center justify-between gap-[31px]">
        <div className="rounded-md pb-[80px]  pl-[46px] pr-[56px] shadow-md">
          <div className="flex items-center justify-center gap-[134px] py-[33px] ">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-primary text-white">
              1
            </div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#EFF0F6] text-[#6F6C90]">
              2
            </div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#EFF0F6] text-[#6F6C90]">
              3
            </div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#EFF0F6] text-[#6F6C90]">
              4
            </div>
          </div>
          <div className="h-[1px] w-[596px] bg-[#D9DBE9]"></div>
          <ContactDetails />
        </div>
        <div className="flex w-full items-center justify-between">
          <button
            id="prev"
            className="rounded-full border-[1px] border-solid border-primary px-[40px] py-[20px] text-primary"
          >
            Previous step
          </button>
          <button
            id="next"
            className=" rounded-full bg-primary px-[40px] py-[20px] text-white"
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
