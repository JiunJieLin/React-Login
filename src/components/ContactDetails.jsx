import React from "react";
import InputField from "./InputField";
import headIcon from "../public/pictures/head.png";
import mailIcon from "../public/pictures/mail.png";
import phoneIcon from "../public/pictures/phone.png";
import companyIcon from "../public/pictures/company.png";

/**
 * ContactDetails 元件為聯絡人的資料
 *
 * @param {Object} props - 元件 props
 * @param {Object} props.contactData - 包含聯絡人表單資料的物件
 * @param {function} props.updateStep1Contact - 用來更新聯絡人資料的函数
 */
const ContactDetails = ({ contactData, updateStep1Contact }) => {
  const handleInputChange = (field, e) => {
    console.log(field, e.target.value);
    updateStep1Contact(field, e.target.value);
  };

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
      placeholder: "(123) 456-7890",
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

  return (
    <div className="mt-8">
      <h1 className="mb-4 text-2xl font-bold">Contact Details</h1>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid w-full gap-4 sm:grid-cols-2">
        {inputFields.map((field) => (
          <InputField
            key={field.id}
            id={field.id}
            labelText={field.labelText}
            value={field.value}
            onChange={(e) => handleInputChange(field.id, e)}
            placeholder={field.placeholder}
            icon={field.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
