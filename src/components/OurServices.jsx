import developmentIcon from "../public/pictures/development.png";
import webIcon from "../public/pictures/web.png";
import marketingIcon from "../public/pictures/marketing.png";
import settingIcon from "../public/pictures/Setting.png";
import classNames from "classnames";
import { useState, useEffect } from "react";

const OurService = ({
  setSelectCardState,
  setStep2Contact,
  prevSelectedCard,
}) => {
  const cards = [
    {
      img: developmentIcon,
      text: "Development",
    },
    {
      img: webIcon,
      text: "Web Design",
    },
    {
      img: marketingIcon,
      text: "Marketing",
    },
    {
      img: settingIcon,
      text: "Other",
    },
  ];
  const [selectCard, setSelectCard] = useState(prevSelectedCard || "");
  const handleCardSelect = (index) => {
    const selectedCardText = cards[index].text;
    setSelectCard(selectedCardText);
    setStep2Contact(selectedCardText);
    setSelectCardState(true);
  };
  useEffect(() => {
    if (selectCard !== "") {
      setSelectCardState(true);
    }
  }, [selectCard]);

  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">Our services</h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="grid grid-cols-2 gap-[44px]">
        {cards.map((card, index) => (
          <button
            key={card.text}
            onClick={() => handleCardSelect(index)}
            className={classNames(
              "py-[24px]border-2 flex h-[115px] w-[284px] items-center  gap-[12px] rounded-2xl border-[1px] pl-[26px]",
              { "border-primary": selectCard === card.text }
            )}
          >
            <div className="flex h-[67px] w-[67px] items-center justify-center rounded-full  bg-[#E4E1ff]">
              <img src={card.img} alt="" />
            </div>
            <p>{card.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OurService;
