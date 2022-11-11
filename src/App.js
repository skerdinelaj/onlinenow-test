import { useState } from "react";
import "./App.css";
import React from "react";
import { InputFields } from "./InputFields";
import { InputResults } from "./InputResults";

function App() {
  const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });

  const defaultOptions = [
    createOption("Gym"),
    createOption("Netflix"),
    createOption("Cars"),
  ];
  
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState();

  const handleCreate = (inputValue) => {
    const newOption = createOption(inputValue);
    setOptions((prev) => [...prev, newOption]);
    setValue(newOption);
  };

  const useEmailValidation = (email) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      email
    );
    return isEmailValid;
  };
  const isEmailValid = useEmailValidation(state.email);

  const handleChange = (e) =>
    setState((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]:
          name === "name" || name === "lastName"
            ? value.replace(/[^a-zA-Z ]/gi, "")
            : value,
      };
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit((prev) => !prev);
  };

  return (
    <div className="container-fluid">
      <div className="row my-4">
        <InputFields
          handleSubmit={handleSubmit}
          state={state}
          handleChange={handleChange}
          submit={submit}
          isEmailValid={isEmailValid}
          options={options}
          setValue={setValue}
          handleCreate={handleCreate}
        />
        <InputResults submit={submit} state={state} value={value} />
      </div>
    </div>
  );
}

export default App;
