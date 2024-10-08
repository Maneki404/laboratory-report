import Form from "@/lib/classes/Form";
import SaveForm from "@/utils/SaveForm";

import classes from "@/styles/global.module.css";
import colors from "@/constants/colors";
import itemsArr from "@/constants/itemsArr";

import { useSelector } from "react-redux";
import { getState } from "@/lib/slices/formSlice";

import { motion } from "framer-motion";
import {
  Input,
  Textarea,
  FileButton,
  Button,
  NumberInput,
} from "@mantine/core";

import { MdOutlineUploadFile } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";

function Item({
  id = 0,
  visibleForm = true,
  handleInputChange = (id: keyof Form, value: string | number) => {},
  handleFileUpload = (file: any) => {},
  handleFileDelete = () => {},
  photoExists = false,
  handleBlur = (id: any) => {},
  error = {},
  setError = (value: any) => {},
}) {
  const item = itemsArr[id];
  const form = useSelector(getState);
  const [hasError, setHasError] = useState(true);
  const [validateError, setValidateError] = useState({
    firstName: "",
    secondName: "",
    IDNumber: "",
    diagnosisTitle: "",
    diagnosisDetails: "",
    photoUrl: "",
  });

  useEffect(() => {
    if (
      form.firstName &&
      form.firstName.length >= 3 &&
      form.secondName &&
      form.secondName.length >= 3 &&
      form.IDNumber &&
      form.IDNumber.toString().length == 11 &&
      form.diagnosisTitle &&
      form.diagnosisTitle.length >= 3 &&
      form.diagnosisDetails &&
      form.diagnosisDetails.length >= 3 &&
      form.photoUrl
    ) {
      setHasError(false);
    } else {
      setHasError(true);
    }
    setError(validateError);
  }, [form, validateError]);

  function validateForm() {
    if (!form.firstName || form.firstName.length >= 3) {
      setValidateError((prev) => ({
        ...prev,
        firstName: "First Name must be at least 3 characters long",
      }));
    }
    if (!form.secondName || form.secondName.length >= 3) {
      setValidateError((prev) => ({
        ...prev,
        secondName: "Second Name must be at least 3 characters long",
      }));
    }
    if (!form.IDNumber || form.IDNumber.toString().length == 11) {
      setValidateError((prev) => ({
        ...prev,
        IDNumber: "ID Number must be at least 11 digits long",
      }));
    }
    if (!form.diagnosisTitle || form.diagnosisTitle.length >= 3) {
      setValidateError((prev) => ({
        ...prev,
        diagnosisTitle: "Diagnosis Title must be at least 3 characters long",
      }));
    }
    if (!form.diagnosisDetails || form.diagnosisDetails.length >= 3) {
      setValidateError((prev) => ({
        ...prev,
        diagnosisDetails:
          "Diagnosis Details must be at least 3 characters long",
      }));
    }
    if (!form.photoUrl) {
      setValidateError((prev) => ({
        ...prev,
        photoUrl: "Please provide a report photo.",
      }));
    }
  }
  return (
    <motion.li
      className="w-1/2"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: visibleForm ? 0 : 50, opacity: visibleForm ? 1 : 0 }}
      transition={{
        duration: 0.5,
        delay: item.delay,
      }}
      children={
        item.visible ? (
          item.isText ? (
            <div className="text-[1.7vh] font-[700]">{item.title}</div>
          ) : item.isLong ? (
            <div className="text-[1vw]">
              <Input.Wrapper
                className="mr-[1vw] w-[200%] flex flex-col"
                styles={{
                  label: { fontSize: "1.6vh", paddingBottom: "0.5vh" },
                }}
                label={item.label}
                error={
                  error[item.id as keyof typeof error] ||
                  "" ||
                  validateError[item.id as keyof typeof error]
                }
              >
                {item.isOneLine ? (
                  <Input
                    classNames={{
                      input: error[item.id as keyof typeof error]
                        ? classes.errorInput
                        : classes.input,
                    }}
                    maxLength={100}
                    placeholder={item.placeholder}
                    value={form[item.id as keyof Form] || ""}
                    onChange={(e) =>
                      handleInputChange(item.id as keyof Form, e.target.value)
                    }
                    onBlur={() => handleBlur(item.id)}
                  />
                ) : (
                  <Textarea
                    classNames={{
                      input: error[item.id as keyof typeof error]
                        ? classes.errorInput
                        : classes.textarea,
                    }}
                    maxLength={1000}
                    placeholder={item.placeholder}
                    autosize
                    minRows={3}
                    maxRows={5}
                    value={form[item.id as keyof Form] || ""}
                    onChange={(e) =>
                      handleInputChange(item.id as keyof Form, e.target.value)
                    }
                    onBlur={() => handleBlur(item.id)}
                  />
                )}
              </Input.Wrapper>
            </div>
          ) : item.isFile ? (
            <div className="text-[1.6vh] flex flex-col">
              {item.label}
              <div className="pt-[1vh]">
                {photoExists ? (
                  <Button
                    onClick={handleFileDelete}
                    variant="light"
                    className="h-[4.5vh]"
                    color={colors["_form-button-solid-delete"]}
                    leftSection={<RxCross1 size={"2vh"} />}
                  >
                    <div className="text-[1.4vh]">Delete Photo</div>
                  </Button>
                ) : (
                  <FileButton
                    onChange={handleFileUpload}
                    accept="image/png,image/jpeg"
                  >
                    {(props) => (
                      <Button
                        className="h-[4.5vh]"
                        color={colors["_form-button-solid"]}
                        {...props}
                        leftSection={<MdOutlineUploadFile size={"2vh"} />}
                      >
                        <div className="text-[1.4vh]">{item.placeholder}</div>
                      </Button>
                    )}
                  </FileButton>
                )}
              </div>
            </div>
          ) : item.isSave ? (
            <div className="flex  h-full items-end justify-end">
              <Button
                className="h-[4.5vh]"
                color={colors["_form-button-solid-save"]}
                rightSection={<IoIosSave size={"2vh"} />}
                onClick={hasError ? validateForm : SaveForm}
              >
                <div className="text-[1.4vh]">{item.placeholder}</div>
              </Button>
            </div>
          ) : item.isID ? (
            <div className="text-[1vw]">
              <Input.Wrapper
                styles={{
                  label: { fontSize: "1.6vh", paddingBottom: "0.5vh" },
                }}
                className="mr-[1vw]"
                label={item.label}
                error={
                  error[item.id as keyof typeof error] ||
                  "" ||
                  validateError[item.id as keyof typeof error]
                }
              >
                <NumberInput
                  maxLength={11}
                  allowDecimal={false}
                  allowNegative={false}
                  hideControls
                  placeholder={item.placeholder}
                  classNames={{
                    input: error[item.id as keyof typeof error]
                      ? classes.errorInput
                      : classes.numberInput,
                  }}
                  value={form[item.id as keyof Form] || ""}
                  onChange={(value) =>
                    handleInputChange(item.id as keyof Form, value)
                  }
                  onBlur={() => handleBlur(item.id)}
                />
              </Input.Wrapper>
            </div>
          ) : (
            <div className="text-[1vw]">
              <Input.Wrapper
                styles={{
                  label: { fontSize: "1.6vh", paddingBottom: "0.5vh" },
                }}
                className="mr-[1vw]"
                label={item.label}
                error={
                  error[item.id as keyof typeof error] ||
                  "" ||
                  validateError[item.id as keyof typeof error]
                }
              >
                <Input
                  maxLength={50}
                  placeholder={item.placeholder}
                  classNames={{
                    input: error[item.id as keyof typeof error]
                      ? classes.errorInput
                      : classes.input,
                  }}
                  value={form[item.id as keyof Form] || ""}
                  onChange={(e) =>
                    handleInputChange(item.id as keyof Form, e.target.value)
                  }
                  onBlur={() => handleBlur(item.id)}
                />
              </Input.Wrapper>
            </div>
          )
        ) : (
          <div className="text-[1vw] hidden"></div>
        )
      }
    />
  );
}

export default Item;
