import "@/styles/globals.css";

import { motion } from "framer-motion";

import Form from "@/lib/classes/Form";
import itemsArr from "@/constants/itemsArr";

import { useDispatch, useSelector } from "react-redux";
import { getState, setForm } from "@/lib/slices/formSlice";

import { useEffect, useState } from "react";
import Item from "./Item";

function FormItems({ visibleForm = true }) {
  const dispatch = useDispatch();
  const form = useSelector(getState);
  const [photoExists, setPhotoExists] = useState(false);

  const [touched, setTouched] = useState({
    firstName: false,
    secondName: false,
    IDNumber: false,
    diagnosisTitle: false,
    diagnosisDetails: false,
    photoUrl: false,
  });
  const [error, setError] = useState({
    firstName: "",
    secondName: "",
    IDNumber: "",
    diagnosisTitle: "",
    diagnosisDetails: "",
    photoUrl: "",
  });

  useEffect(() => {
    console.log(typeof setError);
    if (touched.firstName) {
      setError((prev) => ({
        ...prev,
        firstName:
          form.firstName && form.firstName.length < 3
            ? "First Name must be at least 3 characters long"
            : "",
      }));
    }

    if (touched.secondName) {
      setError((prev) => ({
        ...prev,
        secondName:
          form.secondName && form.secondName.length < 3
            ? "Second Name must be at least 3 characters long"
            : "",
      }));
    }

    if (touched.IDNumber) {
      setError((prev) => ({
        ...prev,
        IDNumber:
          form.IDNumber && form.IDNumber.toString().length < 11
            ? "ID Number must be at least 11 digits long"
            : "",
      }));
    }

    if (touched.diagnosisTitle) {
      setError((prev) => ({
        ...prev,
        diagnosisTitle:
          form.diagnosisTitle && form.diagnosisTitle.length < 3
            ? "Diagnosis Title must be at least 3 characters long"
            : "",
      }));
    }

    if (touched.diagnosisDetails) {
      setError((prev) => ({
        ...prev,
        diagnosisDetails:
          form.diagnosisDetails && form.diagnosisDetails.length < 3
            ? "Diagnosis Details must be at least 3 characters long"
            : "",
      }));
    }
  }, [form, touched]);

  function handleBlur(id: string) {
    setTouched((prev) => ({
      ...prev,
      [id]: true,
    }));
  }

  function handleInputChange(id: keyof Form, value: string | number) {
    const updatedForm = { ...form, [id]: value };
    dispatch(setForm(updatedForm));
  }

  function handleFileUpload(file: File) {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target?.result as string;
      const updatedForm = { ...form, photoUrl: fileContent };
      dispatch(setForm(updatedForm));
      setPhotoExists(true);
    };
    reader.readAsDataURL(file);
  }
  function handleFileDelete() {
    const updatedForm = { ...form, photoUrl: "" };
    dispatch(setForm(updatedForm));
    setPhotoExists(false);
  }
  return (
    <motion.ul className="w-full flex flex-row flex-wrap gap-y-[2vh]">
      {itemsArr.map((item, index) => (
        <Item
          key={index}
          id={index}
          visibleForm={visibleForm}
          handleInputChange={handleInputChange}
          handleFileUpload={handleFileUpload}
          handleFileDelete={handleFileDelete}
          photoExists={photoExists}
          handleBlur={handleBlur}
          error={error}
          setError={setError}
        />
      ))}
    </motion.ul>
  );
}

export default FormItems;
