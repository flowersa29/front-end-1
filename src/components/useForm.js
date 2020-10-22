import { useState, useEffect } from "react";
import Validateform from "./Validateform";

const useForm = (callback, Validateform) => {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    console.log(
      e.target.name,
      ":",
      e.target.value,
      "handleCHANGE in FormSignup"
    );
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validateform(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, values, errors };
};
export default useForm;
