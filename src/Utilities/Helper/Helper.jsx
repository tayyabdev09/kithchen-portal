import { useState } from "react";

const useFieldFocus = (fields) => {
  const handleFocus = () => {
    for (const fieldName in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
        fields[fieldName]("date");
      }
    }
  };

  const handleBlur = () => {
    for (const fieldName in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
        fields[fieldName]("text");
      }
    }
  };

  return { handleFocus, handleBlur };
};

export default useFieldFocus;
