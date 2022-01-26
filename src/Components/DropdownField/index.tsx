import React from "react";
import Select from "react-select";

// Dropdown placeholder CSS
const placeholderStyles = {
  placeholder: (provided: any, state: any) => ({
    ...provided,
    fontSize: 12,
  }),
};

// Interface for Dropdown field
interface IDropdownProps {
  label: string;
  value: any;
  handleOnChange: (e: any) => void;
  disable: boolean;
  spacingClasses: string;
  labelClasses: string;
  placeholder: string;
  elementClasses: string;
  options: any;
}

// Function used to render Dropdown Field
function DropdownField({
  value,
  handleOnChange,
  disable,
  spacingClasses,
  labelClasses,
  placeholder,
  elementClasses,
  label,
  options,
}: IDropdownProps): any {
  const unSelectedOptions: any = [];

  // Info: filterting unselected options
  options &&
    options.map((opt: any) => {
      if (!(value && value.value === opt.value)) {
        unSelectedOptions.push({ label: opt.label, value: opt.value });
      } else if (!value) {
        unSelectedOptions.push({ label: opt.label, value: opt.value });
      }
    });

  // Function to change dropdown option based on select
  const changeState = (sourceTypeOption: any) =>
    handleOnChange(sourceTypeOption);

  return (
    <div className={`${spacingClasses}`}>
      {label && <label className={`${labelClasses}`}>{label}</label>}
      <Select
        value={value}
        onChange={changeState}
        options={unSelectedOptions}
        placeholder={placeholder}
        styles={placeholderStyles}
        className={elementClasses}
        isDisabled={disable}
      />
    </div>
  );
}

const MemoizedDropdownField = React.memo(DropdownField);
export default MemoizedDropdownField;
