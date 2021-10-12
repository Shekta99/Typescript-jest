import React, { useState } from "react";

export interface CheckboxWithLabelProps {
  labelOn: string;
  labelOff: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  labelOn,
  labelOff,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};

export default CheckboxWithLabel;
