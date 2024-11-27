import React, { useState, useEffect, useRef, useCallback } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
const SelectInputBorder = ({
  labelName,
  required,
  options,
  name,
  onChange,
  value,
  defaultOption,
  error,
  isPaginated,
  loadMoreOptions,
  pages,
  disabled,
  optional
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionName, setSelectedOptionName] = useState(
      defaultOption || ""
  );
  const observer = useRef(null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
      if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
      ) {
          setIsOpen(false);
      }
  };

  useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, []);

  useEffect(() => {
      if (value) {
          const selectedOption = options.find((option) =>
              typeof option === "object"
                  ? option.id === value
                  : option === value
          );
          setSelectedOptionName(
              selectedOption
                  ? typeof selectedOption === "object"
                      ? selectedOption.name || selectedOption.title
                      : selectedOption
                  : ""
          );
      }
  }, [value, options]);

  const handleDropdownClick = () => {
      if (disabled) {
          setIsOpen(false);
          return;
      }
      setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (optionValue, optionLabel) => {
      setSelectedOptionName(optionLabel);
      setIsOpen(false);
      onChange({ target: { value: optionValue, name: name } });
  };

  const lastOptionRef = useCallback(
      (node) => {
          if (pages?.total >= pages?.current) return;
          if (observer.current) observer.current.disconnect();
          observer.current = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting && isPaginated) {
                  loadMoreOptions();
              }
          });
          if (node) observer.current.observe(node);
      },
      [isPaginated, loadMoreOptions]
  );

  return (
      <div className="SelectInputBorder inputFieldBox" ref={dropdownRef}>
       <label className='inputLabel' htmlFor="">{labelName} {error && <span>{required}</span>} <p className="optional">{optional? optional : ''}</p> </label>

          <div className="custom-dropdown">
              <div className="dropdownHeader" onClick={handleDropdownClick}>
                  {selectedOptionName || "Select an option"}
                  {
                      !disabled && <span className="dropdown-arrow">
                      {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </span>
                  }
              </div>
              {isOpen && (
                  <div className="dropdownOptions">
                      {options?.length === 0 ? (
                          <div className="dropdownOption" key={1}>
                              No Data
                          </div>
                      ) : (
                          options &&
                          options.map((option, index) => {
                              const optionValue =
                                  typeof option === "object"
                                      ? option.id
                                      : option;
                              const optionLabel =
                                  typeof option === "object"
                                      ? option.name || option.title
                                      : option;
                              return (
                                  <div
                                      key={index + 1}
                                      ref={
                                          index === options.length - 1
                                              ? lastOptionRef
                                              : null
                                      }
                                      className="dropdownOption"
                                      onClick={() =>
                                          handleOptionClick(
                                              optionValue,
                                              optionLabel
                                          )
                                      }
                                  >
                                      {optionLabel}
                                  </div>
                              );
                          })
                      )}
                  </div>
              )}
          </div>
          {error && <p className="error">{error}</p>}
      </div>
  );
};

export default SelectInputBorder;
