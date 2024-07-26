import "@/styles/globals.css";
import classes from "@/styles/global.module.css";
import colors from "@/constants/colors";

import { motion } from "framer-motion";
import { Input, Textarea, FileButton, Button } from "@mantine/core";

import { MdOutlineUploadFile } from "react-icons/md";

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
    delay: 0.4,
    label: "First Name:",
    placeholder: "e.g. Jane",
    visible: true,
    isLong: false,
  },
  {
    delay: 0.5,
    label: "Second Name:",
    placeholder: "e.g. Doe",
    visible: true,
    isLong: false,
  },
  {
    delay: 0.6,
    label: "ID Number:",
    placeholder: "e.g. 12345678912",
    visible: true,
    isLong: false,
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
    delay: 0.8,
    label: "Diagnosis Title:",
    placeholder: "e.g. Social Anxiety Disorder",
    visible: true,
    isLong: false,
  },
  {
    delay: 0.8,
    visible: false,
  },
  {
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
    delay: 1,
    label: "Photo of the Physical Report:",
    placeholder: "Upload",
    visible: true,
    isLong: false,
    isFile: true,
  },
];

function FormItems() {
  return (
    <motion.ul className="w-full flex flex-row flex-wrap gap-y-[2vh]">
      <Items />
    </motion.ul>
  );
}

function Item({ id = 0 }) {
  return (
    <motion.li
      className="w-1/2"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: itemsArr[id].delay,
      }}
      children={
        itemsArr[id].visible ? (
          itemsArr[id].isText ? (
            <div className="text-[1vw] font-[700]">{itemsArr[id].title}</div>
          ) : itemsArr[id].isLong ? (
            <div className="text-[1vw]">
              <Input.Wrapper
                className="mr-[1vw] w-[200%]"
                label={itemsArr[id].label}
                error=""
              >
                <Textarea
                  placeholder={itemsArr[id].placeholder}
                  classNames={classes}
                  autosize
                  minRows={3}
                  maxRows={5}
                />
              </Input.Wrapper>
            </div>
          ) : itemsArr[id].isFile ? (
            <div className="text-[2vh] flex flex-col">
              {itemsArr[id].label}
              <div className="pt-[1vh]">
                <FileButton onChange={() => {}} accept="image/png,image/jpeg">
                  {(props) => (
                    <Button
                      color={colors["_form-button-solid"]}
                      {...props}
                      leftSection={<MdOutlineUploadFile size={"1.3vw"} />}
                    >
                      {itemsArr[id].placeholder}
                    </Button>
                  )}
                </FileButton>
              </div>
            </div>
          ) : (
            <div className="text-[1vw]">
              <Input.Wrapper
                className="mr-[1vw]"
                label={itemsArr[id].label}
                error=""
              >
                <Input
                  placeholder={itemsArr[id].placeholder}
                  classNames={classes}
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

function Items() {
  var items = [];
  for (let i = 0; i < itemsArr.length; i++) {
    items.push(<Item id={i} />);
  }
  return items;
}

export default FormItems;
