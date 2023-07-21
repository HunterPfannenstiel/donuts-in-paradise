import { useState } from "react";

type InputState<T> = { value: T; isValid: boolean };

const useInputState = <T>(initialValue: T, initialValidity: boolean = true) => {
  const [inputState, setInputState] = useState<InputState<T>>({
    value: initialValue,
    isValid: initialValidity,
  });

  const setValue = (value: T) => {
    setInputState((prevState) => ({ ...prevState, value }));
    setIsValid(true);
  };

  const setIsValid = (isValid: boolean) => {
    setInputState((prevState) => ({ ...prevState, isValid }));
  };

  return [inputState, { setValue, setIsValid }] as [
    InputState<T>,
    { setValue: (value: T) => void; setIsValid: (isValid: boolean) => void }
  ];
};

export default useInputState;
