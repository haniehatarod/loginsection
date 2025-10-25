import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="p-6 bg-white rounded-2xl shadow-md"
    >
      <h1 className="text-xl font-bold">خوش آمدید</h1>
    </motion.div>
  );
}
