import phoneIcon from "../public/pictures/phone.png";
import headIcon from "../public/pictures/head.png";
import companyIcon from "../public/pictures/company.png";
import mailIcon from "../public/pictures/mail.png";
import InputField from "./InputField";
import { useState } from "react";
const ContactDetails = ({ contactData, updateStep1Contact }) => {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isCompanyValid, setIsCompanyValid] = useState(true);
  const inputFields = [
    {
      id: "name",
      labelText: "Name",
      value: contactData.name,
      placeholder: "John Carter",
      icon: headIcon,
    },
    {
      id: "email",
      labelText: "Email",
      value: contactData.email,
      placeholder: "email@example.com",
      icon: mailIcon,
    },
    {
      id: "phone",
      labelText: "Phone Number",
      value: contactData.phone,
      placeholder: "0923444444",
      icon: phoneIcon,
    },
    {
      id: "company",
      labelText: "Company",
      value: contactData.company,
      placeholder: "Company Name",
      icon: companyIcon,
    },
  ];
  const handleInputChange = (type, value) => {
    console.log(type, value);
    updateStep1Contact(type, value);
    if (type === "name") {
      const nameValid =
        value.split(" ").length === 2 &&
        value.split(" ").every((part) => part[0] === part[0].toUpperCase());
      setIsNameValid(nameValid);
    } else if (type === "email") {
      const emailValid = value.includes("@");
      setIsEmailValid(emailValid);
    } else if (type === "phone") {
      const phoneValid = value.length === 10 && value.startsWith("09");
      setIsPhoneValid(phoneValid);
    } else if (type === "company") {
      const companyValid = value.trim() !== "";
      setIsCompanyValid(companyValid);
    }
  };

  return (
    <div className=" mt-[64px]  flex-col items-center sm:flex">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">Contact details</h1>
      <p className="mb-[39px] ">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="grid w-full grid-cols-2 flex-col items-center gap-4 sm:flex sm:gap-[32px]">
        {inputFields.map((field) => (
          <div key={field.id} className="relative">
            <InputField
              id={field.id}
              labelText={field.labelText}
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              icon={field.icon}
            />
            {field.id === "name" && !isNameValid && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                Enter a valid name.
              </span>
            )}
            {field.id === "email" && !isEmailValid && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                Incorrect email.
              </span>
            )}
            {field.id === "phone" && !isPhoneValid && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                Incorrect phone.
              </span>
            )}
            {field.id === "company" && !isCompanyValid && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                Cannot be empty.
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
