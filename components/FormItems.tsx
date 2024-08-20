import "@/styles/globals.css";
import classes from "@/styles/global.module.css";
import colors from "@/constants/colors";

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

import Form from "@/lib/classes/Form";
import { useDispatch, useSelector } from "react-redux";
import { getState, set } from "@/lib/slices/formSlice";
import { useState } from "react";

const itemsArr = [
  {
    delay: 0.3,
    title: "PATIENT INFORMATION",
    isText: true,
    visible: true,
    isLong: false,
  },
  {
    delay: 0.3,
    visible: false,
  },
  {
    id: "firstName",
    delay: 0.4,
    label: "First Name:",
    placeholder: "e.g. Jane",
    visible: true,
    isLong: false,
  },
  {
    id: "secondName",
    delay: 0.5,
    label: "Second Name:",
    placeholder: "e.g. Doe",
    visible: true,
    isLong: false,
  },
  {
    id: "IDNumber",
    delay: 0.6,
    label: "ID Number:",
    placeholder: "e.g. 12345678912",
    visible: true,
    isLong: false,
    isID: true,
  },
  {
    delay: 0.6,
    visible: false,
  },
  {
    delay: 0.7,
    title: "DIAGNOSIS INFORMATION",
    isText: true,
    visible: true,
    isLong: false,
  },
  {
    delay: 0.7,
    visible: false,
  },
  {
    id: "diagnosisTitle",
    delay: 0.8,
    label: "Diagnosis Title:",
    placeholder: "e.g. Social Anxiety Disorder",
    visible: true,
    isLong: true,
    isOneLine: true,
  },
  {
    delay: 0.8,
    visible: false,
  },
  {
    id: "diagnosisDetails",
    delay: 0.9,
    label: "Diagnosis Details:",
    placeholder:
      "e.g.  Intense, persistent fear of being watched and judged by others.",
    visible: true,
    isLong: true,
  },
  {
    delay: 0.9,
    visible: false,
  },
  {
    id: "photoUrl",
    delay: 1,
    label: "Photo of the Physical Report:",
    placeholder: "Upload",
    visible: true,
    isLong: false,
    isFile: true,
  },
  {
    delay: 1.1,
    placeholder: "SAVE",
    visible: true,
    isLong: false,
    isSave: true,
  },
];

function FormItems({ visibleForm = true }) {
  const [photoExists, setPhotoExists] = useState(false);
  const dispatch = useDispatch();
  const form = useSelector(getState);

  const handleInputChange = (id: keyof Form, value: any) => {
    const updatedForm = { ...form, [id]: value };
    dispatch(set({ form: updatedForm }));
  };

  const handleFileUpload = (file: File | null) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target?.result as string | null;
      const updatedForm = { ...form, photoUrl: fileContent };
      dispatch(set({ form: updatedForm }));
      setPhotoExists(true);
    };
    reader.readAsDataURL(file);
  };
  const handleFileDelete = () => {
    const updatedForm = { ...form, photoUrl: null };
    dispatch(set({ form: updatedForm }));
    setPhotoExists(false);
  };

  return (
    <motion.ul className="w-full flex flex-row flex-wrap gap-y-[2vh]">
      {itemsArr.map((item, index) => (
        <Item
          key={index}
          id={index}
          visibleForm={visibleForm}
          form={form}
          handleInputChange={handleInputChange}
          handleFileUpload={handleFileUpload}
          handleFileDelete={handleFileDelete}
          photoExists={photoExists}
        />
      ))}
    </motion.ul>
  );
}

function Item({
  id = 0,
  visibleForm = true,
  form = new Form(null, null, null, null, null, null),
  handleInputChange = (id: any, value: any) => {},
  handleFileUpload = (file: any) => {},
  handleFileDelete = () => {},
  photoExists = false,
}) {
  const item = itemsArr[id];

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
                className="mr-[1vw] w-[200%]"
                styles={{
                  label: { fontSize: "1.6vh", paddingBottom: "0.5vh" },
                }}
                label={item.label}
                error=""
              >
                {item.isOneLine ? (
                  <Input
                    maxLength={100}
                    placeholder={item.placeholder}
                    classNames={classes}
                    value={form[item.id as keyof Form] || ""}
                    onChange={(e) =>
                      handleInputChange(item.id as keyof Form, e.target.value)
                    }
                  />
                ) : (
                  <Textarea
                    maxLength={1000}
                    placeholder={item.placeholder}
                    classNames={classes}
                    autosize
                    minRows={3}
                    maxRows={5}
                    value={form[item.id as keyof Form] || ""}
                    onChange={(e) =>
                      handleInputChange(item.id as keyof Form, e.target.value)
                    }
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
                error=""
              >
                <NumberInput
                  maxLength={11}
                  allowDecimal={false}
                  allowNegative={false}
                  hideControls
                  placeholder={item.placeholder}
                  classNames={classes}
                  value={form[item.id as keyof Form] || ""}
                  onChange={(e) =>
                    handleInputChange(item.id as keyof Form, e.valueOf())
                  }
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
                error=""
              >
                <Input
                  maxLength={50}
                  placeholder={item.placeholder}
                  classNames={classes}
                  value={form[item.id as keyof Form] || ""}
                  onChange={(e) =>
                    handleInputChange(item.id as keyof Form, e.target.value)
                  }
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

export default FormItems;
