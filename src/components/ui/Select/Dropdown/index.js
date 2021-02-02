import React from "react";
import { AnimatePresence } from "framer-motion";

import { dropdownfadeSlideIn } from "../../../../animation";
import { SelectDropdown, SelectDropdownItem } from "./styles";

const Dropdown = ({ options, open, onClick, onClickItem, ...props }) => {
  return (
    <AnimatePresence>
      {open && (
        <SelectDropdown
          variants={dropdownfadeSlideIn}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClick}
        >
          {Array.isArray(options) && options.length > 0 ? (
            options.map((option) => (
              <SelectDropdownItem
                key={option.id}
                onClick={() => onClickItem(option)}
                {...props}
                open={open}
              >
                {option.label}
              </SelectDropdownItem>
            ))
          ) : (
            <SelectDropdownItem center>No options found</SelectDropdownItem>
          )}
        </SelectDropdown>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
