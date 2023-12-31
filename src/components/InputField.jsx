const InputField = ({
  id,
  labelText,
  value,
  onChange,
  placeholder,
  icon,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-[18px]">
      <label htmlFor={id}>{labelText}</label>
      <div className="relative flex h-[66px] w-[284px] items-center rounded-full border-[1px] border-solid border-[#EFF0F6] pl-[20px] shadow-md">
        <input
          id={id}
          value={value}
          type={id}
          placeholder={placeholder}
          className="focus:outline-none"
          onChange={onChange}
          onClick={onClick}
        />
        <img src={icon} className="absolute right-[22px] top-[20px]"></img>
      </div>
    </div>
  );
};

export default InputField;
// {
//   icon && (
//     <img
//       src={icon}
//       className="absolute right-[22px] top-[20px]"
//       alt={`${labelText} Icon`}
//     />
//   );
// }
