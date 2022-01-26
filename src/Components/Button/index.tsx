import React from "react";
import { Button } from "primereact/button";

// Interface for Button field
interface IButtonProps {
  value: any;
  onClickFunction: (e: any) => void;
  disable: boolean;
  spacingClasses: string;
}

// Function used to render Text Field
function ButtonField({
  value,
  disable,
  onClickFunction,
  spacingClasses,
}: IButtonProps) {
  return (
    <Button
      label={value}
      onClick={onClickFunction}
      className={spacingClasses}
    />
  );
}

const MemoizedButtonField = React.memo(ButtonField);
export default MemoizedButtonField;
