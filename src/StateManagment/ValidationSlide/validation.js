import * as yup from "yup";

export const inputFieldValidation = yup
  .object()
  .shape({
    firstName: yup
      .string("name should be in string")
      .required("This field is required")
      .max(20, "Name should not exceed 20 characters")
      .matches(/^[^0-9][^0-9]*$/, "Name should not contain numbers"), //Name should not start with a number or contain numbers
    age: yup
      .mixed()
      .test("is-valid-age", "Age must be a valid number", function (value) {
        if (typeof value === "number" && value > -1 && value <= 200) {
          return true;
        }
        if (
          typeof value === "string" &&
          !isNaN(parseInt(value)) &&
          parseInt(value) > -1 &&
          parseInt(value) <= 200
        ) {
          return true;
        }
        return false;
      })
      .required("This field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        "Please enter a valid email address"
      ),
    createPass: yup
      .string()
      .required("This field is required")
      .min(8, "Minimumt 8 characters")
      .max(100, "not more than 100 chars")
      .matches(/^(?=.*[A-Z]).*$/, "at least 1 uppercase letter")
      .matches(/^(?=.*\d.*\d).*$/, "at least 2 numbers"),
    matchPass: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("createPass")], "Passwords doesn't match"),
    phone: yup.string().required("This field is required"),
    address: yup
      .string()
      .required("This field is required")
      .max(400, "Address should not exceed 400 characters"),
  })
  .required();
