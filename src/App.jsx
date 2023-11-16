import { useState } from "react";
import ContactDetails from "./components/ContactDetails";
import OurService from "./components/OurServices";
import Budget from "./components/Budget";
import Summary from "./components/Summary";
import ProgressBar from "./components/ProgressBar";
import Buttons from "./components/Buttons";

const App = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const [selectBudgetState, setSelectBudgetState] = useState(false);
  const [selectCardState, setSelectCardState] = useState(false);
  const [step1Contact, setStep1Contact] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [step2Contact, setStep2Contact] = useState("");
  const [prevSelectedCard, setPrevSelectedCard] = useState("");
  const [step3Contact, setStep3Contact] = useState("");
  const [prevSelectedBudget, setPrevSelectedBudget] = useState("");
  const [formError, setFormError] = useState(false);

  const isFormValid = () => {
    const { name, email, phone, company } = step1Contact;
    const isValidName =
      name.split(" ").length === 2 &&
      name.split(" ").every((part) => part[0] === part[0].toUpperCase());
    const isValidEmail = email.includes("@");
    const isValidPhone = phone.length === 10 && phone.startsWith("09");
    const isValidCompany = company.trim() !== "";

    return isValidName && isValidEmail && isValidPhone && isValidCompany;
  };

  const handleNextStep = () => {
    if (currentActive === 1 && !isFormValid()) {
      console.log("Form validation failed");
      setFormError(true);
      return;
    } else if (currentActive === 1 && isFormValid()) {
      setCurrentActive((prev) => prev + 1);
      setFormError(false);
    } else if (currentActive === 2 && !selectCardState) {
      setFormError(true);
    } else if (currentActive === 2 && selectCardState) {
      setCurrentActive((prev) => prev + 1);
      setSelectCardState(false);
      setFormError(false);
    } else if (currentActive === 3 && !selectBudgetState) {
      setFormError(true);
    } else if (currentActive === 3 && selectBudgetState) {
      setCurrentActive((prev) => prev + 1);
      setSelectBudgetState(false);
      setFormError(false);
    }
  };

  const handlePrevStep = () => {
    setCurrentActive((prev) => prev - 1);
    setPrevSelectedCard(step2Contact);
    setPrevSelectedBudget(step3Contact);
    setFormError(false);
  };

  const updateStep1Contact = (type, value) => {
    setStep1Contact((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <div className="flex w-full items-center justify-center">
      <div className="b-[1px] m-auto flex flex-col items-center justify-between gap-[31px]">
        <div className="relative rounded-md  pb-[80px] pl-[46px] pr-[56px] shadow-md">
          <ProgressBar currentStep={currentActive} />
          <div className="h-[1px] w-[596px] bg-[#D9DBE9]"></div>
          {currentActive === 1 && (
            <ContactDetails
              contactData={step1Contact}
              updateStep1Contact={updateStep1Contact}
            />
          )}
          {currentActive === 2 && (
            <OurService
              setSelectCardState={setSelectCardState}
              setStep2Contact={setStep2Contact}
              prevSelectedCard={prevSelectedCard}
            />
          )}
          {currentActive === 3 && (
            <Budget
              setSelectBudgetState={setSelectBudgetState}
              setStep3Contact={setStep3Contact}
              prevSelectedBudget={prevSelectedBudget}
            />
          )}
          {currentActive === 4 && (
            <Summary
              step1Contact={step1Contact}
              step2Contact={step2Contact}
              step3Contact={step3Contact}
            />
          )}
        </div>
        <Buttons
          currentStep={currentActive}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      </div>
      {formError && (
        <span className="text-md absolute bottom-[290px] right-[200px] text-red-500 ">
          Plaese enter the form correctly!
        </span>
      )}
    </div>
  );
};

export default App;
