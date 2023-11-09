import phone from "../public/pictures/phone.png";
import head from "../public/pictures/head.png";
import company from "../public/pictures/company.png";
import mail from "../public/pictures/mail.png";
import { useState } from "react";

const ContactDetails = ({ onLogin }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(enteredName, enteredEmail, enteredPhone, enteredCompany);
  };
  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">Contact details</h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-[44px]">
          <div className="flex flex-col gap-[18px]">
            <label htmlFor="Name">Name</label>
            <div className="w=[284px] relative flex h-[66px] items-center rounded-full border-[1px] border-solid border-[#EFF0F6] pl-[20px] shadow-md">
              <input
                value={enteredName}
                type="text"
                placeholder="John Carter"
                className="focus:outline-none"
                onChange={nameChangeHandler}
                required
              />
              <img
                src={head}
                className="absolute right-[22px] top-[20px]"
              ></img>
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            <label htmlFor="Email">Email</label>
            <div className="w=[284px] relative flex h-[66px] items-center rounded-full border-[1px] border-solid border-[#EFF0F6] pl-[20px] shadow-md">
              <input
                type="text"
                value={enteredEmail}
                placeholder="Email address"
                className="focus:outline-none"
                onChange={emailChangeHandler}
                required
              />
              <img
                src={mail}
                className="absolute right-[24px] top-[25px]"
              ></img>
            </div>
          </div>
          <div className="flex flex-col gap-[18px]">
            <label htmlFor="Phone Number">Phone Number</label>
            <div className="w=[284px] relative flex h-[66px] items-center rounded-full border-[1px] border-solid border-[#EFF0F6] pl-[20px] shadow-md">
              <input
                type="number"
                value={enteredPhone}
                placeholder="(123)456-7890"
                className="focus:outline-none"
                onChange={phoneChangeHandler}
                required
              />
              <img
                src={phone}
                className="absolute right-[20px] top-[20px]"
              ></img>
            </div>
          </div>
          <div className="flex flex-col gap-[18px]">
            <label htmlFor="Company">Company</label>
            <div className="w=[284px] relative flex h-[66px] items-center rounded-full border-[1px] border-solid border-[#EFF0F6] pl-[20px] shadow-md">
              <input
                type="text"
                value={enteredCompany}
                placeholder="Company name"
                className="focus:outline-none"
                onChange={companyChangeHandler}
                required
              />
              <img
                src={company}
                className="absolute right-[25px] top-[17px]"
              ></img>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactDetails;
