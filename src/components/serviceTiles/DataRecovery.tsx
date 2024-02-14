import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
const DataRecovery = () => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 col-span-12 lg:col-span-7 h-[415px] rounded-md"
    ></motion.div>
  );
};

export default DataRecovery;
