import phoneIcon from "../public/pictures/phone.png";
import headIcon from "../public/pictures/head.png";
import companyIcon from "../public/pictures/company.png";
import mailIcon from "../public/pictures/mail.png";
import InputField from "./InputField";

const ContactDetails = ({ contactData, updateStep1Contact }) => {
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
  };
  return (
    <div className=" mt-[64px]">
      <h1 className="mb-[7.5px] text-[24px] font-bold ">Contact details</h1>
      <p className="mb-[39px]">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="grid w-full grid-cols-2 gap-4">
        {inputFields.map((field) => (
          <InputField
            key={field.id}
            id={field.id}
            labelText={field.labelText}
            value={field.value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            icon={field.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
