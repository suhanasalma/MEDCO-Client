import React from 'react';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import chroma from "chroma-js";

const SelectOptions = ({isMulti=false,closeMenuOnSelect=true,options}) => {
    const animatedComponents = makeAnimated();
    const dot = (color = "transparent") => ({
        alignItems: "center",
        display: "flex",
    
        ":before": {
          backgroundColor: color,
          borderRadius: 10,
          content: '" "',
          display: "block",
          marginRight: 8,
          height: 10,
          width: 10,
        },
    });

    const customeStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = data.color || "#2c4c3b"; // Default color if not specified
            const chromaColor = chroma(color);

            return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                ? "#2c4c3b"
                : isFocused
                ? chromaColor.alpha(0.1).css()
                : undefined,
            color: isDisabled
                ? "#ccc"
                : isSelected
                ? "white"
                : isFocused
                ? "#2c4c3b"
                : color,
            cursor: isDisabled ? "not-allowed" : "default",
            ":active": {
                ...styles[":active"],
                backgroundColor: "!isDisabled"
                ? isSelected
                    ? "#2c4c3b"
                    : chromaColor.alpha(0.3).css()
                : undefined,
            },
            };
        },
        input: (styles) => ({ ...styles, ...dot(), color: "" }),
        placeholder: (styles) => ({ ...styles, ...dot("#E5F6DF") }),
        singleValue: (styles, { data }) => ({
            ...styles,
            ...dot(data.color || "#2c4c3b"),
            color: "#2c4c3b",
            fontWeight: "500",
        }),
    };
    return (
        <div>
             <Select
                theme={(theme) => ({
                ...theme,
                borderRadius: 0,

                colors: {
                    ...theme.colors,
                    primary: "#2c4c3b",
                },
                })}
                styles={customeStyles}
                closeMenuOnSelect={closeMenuOnSelect}
                components={animatedComponents}
                isMulti = {isMulti}
                isClearable
                options={options}
            />
        </div>
    );
};

export default SelectOptions;