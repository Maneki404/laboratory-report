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

export default itemsArr;
