import Container from "@/components/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipSetRep from "@/components/serviceTiles/ChipSetRep";
import DataRecovery from "@/components/serviceTiles/DataRecovery";
// import ChipSetReplacement from "@/components/serviceTiles/ChipsetReplacement";

const ServiceSection = () => {
  return (
    <Container className="my-20 ">
      <div className="text-center flex flex-col justify-between items-center">
        <h1 className="mb-7">Services that we provide.</h1>
        <p className="text-[18px] max-w-[80ch] mb-20">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <BatteryReplacement />
        <ChipSetRep></ChipSetRep>
        <DataRecovery></DataRecovery>
        <div className="bg-red-500 col-span-12 h-[415px] rounded-md"></div>
        <div className="bg-red-500 col-span-12 md:col-span-6 lg:col-span-4 h-[415px] rounded-md"></div>
        <div className="bg-red-500 col-span-12 md:col-span-6 lg:col-span-4 h-[415px] rounded-md"></div>
        <div className="bg-red-500 col-span-12 md:col-span-12 lg:col-span-4 h-[415px] rounded-md"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
