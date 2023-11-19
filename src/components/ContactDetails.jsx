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
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showCompanyError, setShowCompanyError] = useState(false);
  const [currentError, setCurrentError] = useState("");
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
  const handleInputClick = (type) => {
    if (type === "name") {
      setShowNameError(true);
    }
    if (type === "email") {
      setShowEmailError(true);
    }
    if (type === "phone") {
      setShowPhoneError(true);
    }
    if (type === "company") {
      setShowCompanyError(true);
    }
  };
  const handleInputChange = (type, value) => {
    console.log(type, value);
    updateStep1Contact(type, value);

    if (type === "name") {
      if (value.trim() === "") {
        setShowNameError(true);
      } else {
        const nameValid =
          value.split(" ").length === 2 &&
          value
            .split(" ")
            .every(
              (part) => part.length > 0 && part[0] === part[0].toUpperCase()
            );
        setIsNameValid(nameValid);
        setShowNameError(!nameValid);
      }
    } else if (type === "email") {
      if (value.trim() === "") {
        setShowEmailError(true);
      } else {
        const emailValid = value.includes("@");
        setIsEmailValid(emailValid);
        setShowEmailError(!emailValid);
      }
    } else if (type === "phone") {
      if (value.trim() === "") {
        setShowPhoneError(true);
      } else {
        const phoneValid = value.length === 10 && value.startsWith("09");
        setIsPhoneValid(phoneValid);
        setShowPhoneError(!phoneValid);
      }
    } else if (type === "company") {
      if (value.trim() === "") {
        setShowCompanyError(true);
      } else {
        const companyValid = value.trim() !== "";
        setIsCompanyValid(companyValid);
        setShowCompanyError(!companyValid);
      }
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
              onClick={() => handleInputClick(field.id)}
            />
            {field.id === "name" && showNameError && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                {contactData.name.length === 0
                  ? "名稱是必填項目"
                  : !isNameValid
                  ? "名稱格式不正確（需要兩個文字，每個文字第一個字大寫並用空格隔開)"
                  : ""}
              </span>
            )}
            {field.id === "email" && showEmailError && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                {contactData.email.length === 0
                  ? "電子郵件是必填項目"
                  : !isEmailValid
                  ? "請輸入有效的電子郵件"
                  : ""}
              </span>
            )}
            {field.id === "phone" && showPhoneError && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                {contactData.phone.length === 0
                  ? "電話號碼是必填項目"
                  : !isPhoneValid
                  ? "電話號碼格式不正確(須以09開頭共10位數字)"
                  : ""}
              </span>
            )}
            {field.id === "company" && showCompanyError && (
              <span className="absolute right-0 top-full text-sm text-red-500">
                {contactData.company.length === 0
                  ? "公司名稱是必填項目"
                  : !isCompanyValid
                  ? "請輸入正確的公司名稱"
                  : ""}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
