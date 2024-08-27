import { useSelector } from "react-redux";
import { getState } from "@/lib/slices/formSlice";
import Form from "@/lib/classes/Form";

const SaveForm = () => {
  const form = useSelector(getState);
};

export default SaveForm;
