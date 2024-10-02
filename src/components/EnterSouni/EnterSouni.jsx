import { motion } from "framer-motion";

const EnterSouni = () => {
  return (
    <div className="text-center py-16 bg-dark text-white">
      <motion.div
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        ENTER THE SOUNI
      </motion.div>
      <motion.p
        className="text-lg mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Souni is a platform that seamlessly blends high-quality gaming with Web3 economics...
      </motion.p>
    </div>
  );
};

export default EnterSouni