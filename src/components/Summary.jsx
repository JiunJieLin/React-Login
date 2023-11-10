const Summary = () => {
  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">Summary</h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="flex flex-col items-center border-2">
        <div>
          <p>Name:</p>
          <p>Phone:</p>
          <p>Email:</p>
          <p>Company:</p>
          <p>Our Service:</p>
          <p>Budget:</p>
        </div>

        <button className="rounded-full bg-primary px-[40px] py-[20px] text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
