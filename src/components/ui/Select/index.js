import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import OutsideClickHandler from "react-outside-click-handler";

import Input from "../Form/Input";
import ErrorMessage from "../Form/ErrorMessage";

import Dropdown from "./Dropdown";
import { SelectContainer } from "./styles";

const Select = ({
  children,
  options,
  name,
  error,
  errorMessage,
  placeholder,
  onChange,
  label,
  searchable,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [optionsData, setOptionsData] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const data = options.map((option) => ({ id: v4(), ...option }));
    setOptionsData(data);
    setFilteredOptions(data);
  }, []);

  const displayPlaceholder = placeholder ? placeholder : "Select...";

  const handleChange = (value) => {
    onChange(value);
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);
    if (value === "") {
      return setFilteredOptions(optionsData);
    }
    const data = optionsData.filter((option) => {
      const inputValueRegex = new RegExp(value, "gi");
      return option.value.match(inputValueRegex);
    });
    setFilteredOptions(data);
  };

  const handleOnBlur = (event) => {
    const { value } = event.target;
    const hasValue = optionsData.find((option) => option.label === value);
    if (!hasValue) {
      setValue("");
    }
    setFilteredOptions(optionsData);
  };

  const onSetValue = (selectedValue) => {
    setValue(selectedValue.label);
  };

  const onClickDropdown = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const onClickDropdownItem = (option) => {
    handleChange(option.value);
    onSetValue(option);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <SelectContainer {...props} onClick={() => setOpen(true)} error={error}>
        <Input
          name={name}
          placeholder={displayPlaceholder}
          error={error}
          value={value}
          label={label}
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          readOnly={!searchable}
          autoComplete="off"
          iconName="AiOutlineDown"
        />
        <Dropdown
          onClick={onClickDropdown}
          options={filteredOptions}
          onClickItem={onClickDropdownItem}
          open={open}
        />
      </SelectContainer>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </OutsideClickHandler>
  );
};

export default Select;
