import React from "react";

const InputField = ({
  setFocus,
  focus,
  register,
  errors,
  trigger,
  name,
  label,
  type,
  disabled,
}) => {
  return (
    <div className="relative">
      <label
        disabled={disabled}
        onClick={() => {
          setFocus(true);
          trigger(name);
        }}
        className={`absolute duration-500 ease-in-out left-2    ${
          focus || errors[name]
            ? "bottom-8 text-green font-semibold"
            : "bottom-3 text-sm text-brown"
        }`}
        htmlFor=""
      >
        {label}
      </label>
      <input
        disabled={disabled}
        onFocus={() => {
          setFocus(true);
          trigger(name);
        }}
        onInput={() => {
          setFocus(true);
          trigger(name);
        }}
        className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md `}
        {...register(name)}
        type={type ? type : "text"}
      />

      {errors[name] && (
        <span className="text-red text-xs absolute left-5 -bottom-2 ">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default InputField;
