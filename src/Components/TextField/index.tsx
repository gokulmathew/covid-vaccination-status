import React from "react";
import { InputText } from "primereact/inputtext";

// Interface for Text field
interface ITextProps {
  label: string;
  value: any;
  handleOnChange: (e: any) => void;
  disable: boolean;
  spacingClasses: string;
  labelClasses: string;
  placeholder: string;
  elementClasses: string;
}

// Function used to render Text Field
function TextField({
  label,
  value,
  handleOnChange,
  disable,
  spacingClasses,
  labelClasses,
  placeholder,
  elementClasses,
}: ITextProps) {
  return (
    <div className={`${spacingClasses}`}>
      {label && <label className={`${labelClasses}`}>{label}</label>}
      <InputText
        value={value}
        onChange={(e: any) => handleOnChange(e.value)}
        placeholder={placeholder}
        className={`d-block mt-2 ${elementClasses}`}
        disabled={disable}
      />
    </div>
  );
}

const MemoizedTextField = React.memo(TextField);
export default MemoizedTextField;
