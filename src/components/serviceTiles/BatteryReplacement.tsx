import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 col-span-12 h-[415px] w-full rounded-md"
    ></motion.div>
  );
};

export default BatteryReplacement;
