import React from "react";
import "./formInput.scss";
const FormInput = ({ labelName, ...inputOptions }) => {
  // 如果 input.value 有輸入字, 新增 shrink 動畫 
  const switchLabelClassName = inputOptions.value.length ? "shrink" : "";
  return (
    <div className="group">
      <input className="form-input" {...inputOptions}></input>
      {labelName && (
        <label className={`form-input-label ${switchLabelClassName}`}>
          {labelName}
        </label>
      )}
    </div>
  );
};

export default FormInput;
