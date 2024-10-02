import { motion } from "framer-motion";

const IntegrationSection = () => {
  return (
    <div className="py-20 bg-black text-white">
      <motion.div
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Integration, Value, Connection
      </motion.div>
      {/* Add more animated text or images as per your design */}
    </div>
  );
};

export default IntegrationSection