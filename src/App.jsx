import { useState } from "react";
import ContactDetails from "./components/ContactDetails";
import OurService from "./components/OurServices";
import Budget from "./components/Budget";
import Summary from "./components/Summary";
import ProgressBar from "./components/ProgressBar";
import Buttons from "./components/Buttons";
const App = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const [formIsValid, setFormIsValid] = useState(true);

  const handleOnAdd = () => {
    setCurrentActive((prev) => prev + 1);
    // console.log("handleOnAdd called");
    // const isValid =
    //   enteredEmail.includes("@") && enteredPhone.trim().length === 10;
    // setFormIsValid(isValid);
    // if (isValid) {
    //   setCurrentActive((prev) => prev + 1);
    // }
  };

  const handleDelete = () => {
    setCurrentActive((prev) => prev - 1);
  };

  const handleLogin = (
    enteredName,
    enteredEmail,
    enteredPhone,
    enteredCompany
  ) => {
    // setCurrentActive((prev) => prev + 1);
    const personInfo = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      company: enteredCompany,
    };
    console.log(personInfo);
  };
  return (
    <div className="flex w-full items-center justify-center">
      <div className="b-[1px] m-auto flex flex-col items-center justify-between gap-[31px]">
        <div className="rounded-md pb-[80px]  pl-[46px] pr-[56px] shadow-md">
          <ProgressBar currentStep={currentActive} />
          <div className="h-[1px] w-[596px] bg-[#D9DBE9]"></div>
          {currentActive === 1 && <ContactDetails onLogin={handleLogin} />}
          {currentActive === 2 && <OurService />}
          {currentActive === 3 && <Budget />}
          {currentActive === 4 && <Summary />}
        </div>
        <Buttons
          currentStep={currentActive}
          onAdd={handleOnAdd}
          onDelete={handleDelete}
          formIsValid={formIsValid}
        />
      </div>
    </div>
  );
};

export default App;
