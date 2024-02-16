import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

export const useGetService = () => {
  const serviceInfo = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => {
      const services = data.data.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
    staleTime: 30000,
  });
  return serviceInfo;
};
