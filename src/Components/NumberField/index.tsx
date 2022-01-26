import React from "react";
import { InputNumber } from "primereact/inputnumber";

// Interface for Number field
interface INumberProps {
  label: any;
  value: number;
  handleOnChange: (e: any) => void;
  disable: boolean;
  spacingClasses: string;
  labelClasses: string;
  placeholder: string;
  elementClasses: string;
}

// Function used to render Number Field
function NumberField({
  label,
  value,
  handleOnChange,
  disable,
  spacingClasses,
  labelClasses,
  placeholder,
  elementClasses,
}: INumberProps) {
  return (
    <div className={`${spacingClasses}`}>
      {label && <label className={`${labelClasses}`}>{label}</label>}
      <InputNumber
        value={value}
        onChange={(e: any) => handleOnChange(e.value)}
        placeholder={placeholder}
        className={`d-block mt-2 ${elementClasses}`}
        disabled={disable}
        min={0}
      />
    </div>
  );
}

const MemoizedNumberField = React.memo(NumberField);
export default MemoizedNumberField;
