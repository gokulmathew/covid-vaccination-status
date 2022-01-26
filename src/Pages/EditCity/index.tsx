import { useLocation } from "react-router-dom";

export default function EditCity() {
  const { state } = useLocation();
  console.log("state", state);
  return <p>Edit</p>;
}
