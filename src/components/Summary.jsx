const Summary = ({ step1Contact, step2Contact, step3Contact }) => {
  const summaryDatas = [
    ["Name:", step1Contact.name],
    ["Cell Phone:", step1Contact.phone],
    ["Email:", step1Contact.email],
    ["Company:", step1Contact.company],
    ["Our Service:", step2Contact],
    ["Budget:", step3Contact],
  ];
  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">Summary</h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="flex flex-col items-center gap-8 border-2 p-3 ">
        <div className="flex flex-col gap-2 sm:gap-[30px] ">
          {summaryDatas.map((data, index) => (
            <p key={index} className="flex items-start text-lg ">
              <span className="w-[120px] font-bold">{data[0]}</span>
              {data[1]}
            </p>
          ))}
        </div>

        <button className="rounded-full bg-primary px-[40px] py-[20px] text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
