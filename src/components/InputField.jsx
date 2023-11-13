import React from "react";

/**
 * 一個通用的輸入欄位元件，包含標籤、輸入框以及（可選的）圖標。
 *
 * @param {Object} props - 元件的屬性。
 * @param {string} props.id - 輸入欄位的唯一標識符，用於關聯標籤和輸入框。
 * @param {string} props.labelText - 輸入欄位的標籤文本。
 * @param {string} props.value - 輸入欄位的當前值。
 * @param {function} props.onChange - 輸入值變化時的回調函數。
 * @param {string} props.placeholder - 輸入欄位的占位符文本。
 * @param {string} [props.icon] - 輸入欄位的圖標路徑（可選）。
 * @returns {React.Component} 返回一個 React 輸入欄位元件。
 */
const InputField = ({ id, labelText, value, onChange, placeholder, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{labelText}</label>
      <div className="relative flex h-[66px] items-center rounded-full border border-[#EFF0F6] pl-5 pr-10 shadow-md">
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          className="w-full focus:outline-none"
          placeholder={placeholder}
        />
        {icon && (
          <img
            src={icon}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
            alt={`${labelText} Icon`}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
