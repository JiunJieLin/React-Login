import { useState } from "react";
import ContactDetails from "./components/ContactDetails";
import OurService from "./components/OurServices";
import Budget from "./components/Budget";
import Summary from "./components/Summary";
import ProgressBar from "./components/ProgressBar";
import Buttons from "./components/Buttons";
const App = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const [formIsValid, setFormIsValid] = useState(false);

  const handleOnAdd = () => {
    const isValid =
      enteredEmail.includes("@") && enteredPhone.trim().length === 10;
    setFormIsValid(isValid);
    if (isValid) {
      console.log("handleOnAdd called");
      setCurrentActive((prev) => prev + 1);
    }
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
    setCurrentActive((prev) => prev + 1);
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

// let currentActive = 1;
// next.addEventListener("click", () => {
//   currentActive++;
//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }
//   update();
// });

// prev.addEventListener("click", () => {
//   currentActive--;
//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });
// function update() {
//   circles.forEach((circle, index) => {
//     if (index < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });

//   //中間的線變換顏色
//   const actives = document.querySelectorAll(".active");
//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
//   //當前進度２／５＝４０％
//   //填色範圍(2-1)/(5-1)=25%
//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }

// const App = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const handlePrev = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div className="p-8">
//       <ProgressBar
//         currentStep={currentStep}
//         onNext={handleNext}
//         onPrev={handlePrev}
//       />

//       {/* Render your components based on the currentStep */}
//       {currentStep === 1 && <div>Component 1 Content</div>}
//       {currentStep === 2 && <div>Component 2 Content</div>}
//       {currentStep === 3 && <div>Component 3 Content</div>}
//       {currentStep === 4 && <div>Component 4 Content</div>}
//     </div>
//   );
// };

// export default App;
