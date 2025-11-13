// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import team1 from "../assets/image/team1.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh] ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [100, 75, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-72 rounded-t-[45px] border-b-4 border-l-4 border-blue-500 rounded-br-[45px] shadow-2xl"
          />
          <motion.img
            src={team1}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-72 rounded-t-[45px] border-b-4 border-l-4 border-blue-500 rounded-br-[45px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            className="text-5xl font-bold"
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeOut",
              repeat: Infinity,
            }}
          >
            Box Office{" "}
            <motion.span
              animate={{ color: ["#66ff66", "#e60000"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              JOB
            </motion.span>{" "}
            News!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
