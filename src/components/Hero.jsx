import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m
            <span className="text-electric-purple"> {personalInfo.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            A passionate {personalInfo.role} crafting seamless digital
            experiences. <br className="sm:block hidden" />I specialize in
            React, Node.js, and building high-performance modern web apps.
          </p>
        </div>
      </div>
      <div style={{ position: "absolute", top: 100, left: 0, width: "100%", height: "100%", zIndex: 100 }}>
  <ComputersCanvas />
</div>
    </section>
  );
};

export default Hero;
