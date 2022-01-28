import { useState } from "react";

export const useUserForm = () => {
  const initialValue = {
    title: "",
    author: "",
  };

  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (evt) => {
    setInputValue({
      ...inputValue,
      [evt.target.id]: evt.target.value,
    });
  };
  return { setInputValue, handleChange, inputValue, initialValue };
};
