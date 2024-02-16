export const getServices = async () => {
  const res = await fetch("http://localhost:5000/api/v1/services").then((res) =>
    res.json()
  );
  if (!res.success) {
    throw new Error("something went wrong");
  }
  return res;
};

// import axios from "axios";

// export const getServices = async () => {
//   await axios.get("http://localhost:5000/api/v1/servicesr");
// };
