import type { Card } from "../../types/card";
import { motion } from "framer-motion";

export default function Card({ data }: { data: Card[] }) {
  return (
    <article className=" grid grid-cols-5 gap-5 p-5">
      {data?.map((card) => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-md shadow-lg bg-white w-[10rem] h-[10rem] flex justify-center items-center border-2 border-gray-100"
          key={card.id}
        >
          <h1 className="font-bold text-stone-700">{card?.title}</h1>
        </motion.div>
      ))}
    </article>
  );
}
