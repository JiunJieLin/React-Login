import development from "../public/pictures/development.png";
import web from "../public/pictures/web.png";
import marketing from "../public/pictures/marketing.png";
import setting from "../public/pictures/Setting.png";
const OurService = () => {
  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">Our services</h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="grid grid-cols-2 gap-[44px]">
        <button className="py-[24px]border-2 flex h-[115px] w-[284px] items-center  gap-[12px] rounded-2xl border-[1px] pl-[26px]">
          <div className="flex h-[67px] w-[67px] items-center justify-center rounded-full  bg-[#E4E1ff]">
            <img src={development} alt="" />
          </div>
          <p>Development</p>
        </button>
        <button className="py-[24px]border-2 flex h-[115px] w-[284px] items-center  gap-[12px] rounded-2xl border-[1px] pl-[26px]">
          <div className="flex h-[67px] w-[67px] items-center justify-center rounded-full  bg-[#E4E1ff]">
            <img src={web} alt="" />
          </div>
          <p>Web Design</p>
        </button>
        <button className="py-[24px]border-2 flex h-[115px] w-[284px] items-center  gap-[12px] rounded-2xl border-[1px] pl-[26px]">
          <div className="flex h-[67px] w-[67px] items-center justify-center rounded-full  bg-[#E4E1ff]">
            <img src={marketing} alt="" />
          </div>
          <p>Marketing</p>
        </button>
        <button className="py-[24px]border-2 flex h-[115px] w-[284px] items-center  gap-[12px] rounded-2xl border-[1px] pl-[26px]">
          <div className="flex h-[67px] w-[67px] items-center justify-center rounded-full  bg-[#E4E1ff]">
            <img src={setting} alt="" />
          </div>
          <p>Other</p>
        </button>
      </div>
    </div>
  );
};

export default OurService;
