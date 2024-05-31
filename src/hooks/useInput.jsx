import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState();
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onchange: (event) => {
      setValue(event.target.value);
    },
  };
  return [value, bind, reset];
};

export default useInput;
