import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerMotion = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

function CountryItem({ country }) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/countries/${country.cca3}`)}
      variants={containerMotion}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className="flex h-70 w-55  lg:h-80 lg:w-65 cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-cyan-900"
    >
      <img
        className="h-40 w-[100%]"
        src={country.flags.png}
        alt={`image of ${country.name}`}
      />
      <div className="px-6 py-4">
        <h2 className="mb-2 text-md lg:text-lg font-extrabold">{country.name.common}</h2>
        <p className="text-sm lg:text-md font-semibold">
          Population:{" "}
          <span className="text-xs lg:text-sm font-normal">{country.population}</span>
        </p>
        <p className="text-sm lg:text-md font-semibold">
          Region:
          <span className="text-xs lg:text-sm font-normal"> {country.region}</span>
        </p>
        <p className="text-sm lg:text-md font-semibold">
          Capital:
          <span className="text-xs lg:text-sm font-normal"> {country.capital}</span>
        </p>
      </div>
    </motion.div>
  );
}

export default CountryItem;
