import React, { useState } from "react";
import ContactDetails from "./components/ContactDetails";
import OurService from "./components/OurServices";
import Budget from "./components/Budget";
import Summary from "./components/Summary";
import ProgressBar from "./components/ProgressBar";
import Buttons from "./components/Buttons";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Contact, setStep1Contact] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const isFormValid = () => {
    const { email, phone, name, company } = step1Contact;

    // 驗證 Name
    const isValidName =
      name.split(" ").length === 2 &&
      name.split(" ").every((part) => part[0] === part[0].toUpperCase());

    // 驗證 Email
    const isValidEmail = email.includes("@");

    // 驗證 Phone
    const isValidPhone = phone.length === 10 && phone.startsWith("09");

    // 驗證 Company
    const isValidCompany = company.trim() !== "";

    return isValidName && isValidEmail && isValidPhone && isValidCompany;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !isFormValid()) {
      console.log("Form validation failed");
      return;
    }
    console.log("Form validation passed");
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const updateStep1Contact = (field, value) => {
    setStep1Contact((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-20">
      <ProgressBar currentStep={currentStep} />
      <hr className="h-2 w-full font-bold text-primary" />
      <div className="flex flex-col items-center justify-center gap-8">
        {currentStep === 1 && (
          <ContactDetails
            contactData={step1Contact}
            updateStep1Contact={updateStep1Contact}
          />
        )}
        {currentStep === 2 && <OurService />}
        {currentStep === 3 && <Budget />}
        {currentStep === 4 && <Summary />}
      </div>
      <Buttons
        currentStep={currentStep}
        onNext={handleNextStep}
        onPrev={handlePrevStep}
      />
    </div>
  );
};

export default App;
