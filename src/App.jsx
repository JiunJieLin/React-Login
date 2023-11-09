const App = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="b-[1px] m-auto flex flex-col items-center justify-between gap-[31px]">
        <div className="rounded-md pb-[80px]  pl-[46px] pr-[56px] shadow-md">
          <div>prograss Bar</div>
          <div className="h-[1px] w-[596px] bg-[#D9DBE9]"></div>
          <div className=" mt-[64px] ">123</div>
        </div>
        <div className="flex w-full items-center justify-between">
          <button className="rounded-full border-[1px] border-solid border-primary px-[40px] py-[20px] text-primary">
            Previous step
          </button>
          <button className=" rounded-full bg-primary px-[40px] py-[20px] text-white">
            Next step
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
