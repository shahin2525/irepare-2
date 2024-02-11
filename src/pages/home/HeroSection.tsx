import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import mackbook from "/src/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.25, delayChildren: 1 },
  },
};
const introChildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2  place-content-center ">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          variants={introChildren}
          className="text-[30px] lg:text-[96px] font-bold text-nowrap"
        >
          <span className="text-gray">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="text-lg text-dark-gray mt-3 lg:mt-10 mb-2 lg:mb-6 max-w-[50ch]"
        >
          Welcome to <span className="font-semibold">iRepair</span> , your
          one-stop place for all kinds of{" "}
          <span className="font-semibold">Macbook repairs</span> and
          diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button className="mb-5">Book a service</Button>
        </motion.div>
      </motion.div>
      <div className=" lg:relative">
        <img
          className="-rotate-[30deg] w-[60%] md:w-[60%] lg:w-3/4  object-contain mx-auto h-[90%] lg:mt-2 lg:absolute lg:right-6"
          src={mackbook}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
