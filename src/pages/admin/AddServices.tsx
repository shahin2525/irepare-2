import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddServices = () => {
  const [serviceName, setServiceName] = useState("");
  const { mutateAsync, isSuccess, isError } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
  console.log({ isError, isSuccess });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: "Description",
      devices: ["Device1", "Device2", "Device3"],
      price: 20,
    };

    await mutateAsync(serviceData);

    console.log("done");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          type="text"
          onChange={(e) => setServiceName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddServices;
