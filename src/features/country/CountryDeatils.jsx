import { HiArrowLeft } from "react-icons/hi";
import Loader from "../../ui/Loader";
import { useCountry } from "./useCountry";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const containerMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.8 },
};

const childrenLeftMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { x: "-150%", transition: { duration: 0.35 } },
};

const childrenRightMotion = {
  ...childrenLeftMotion,
  exit: { x: "150%", transition: { duration: 0.35 } },
};

function CountryDeatils() {
  const navigate = useNavigate();
  const { data = { 0: "title" }, isLoading } = useCountry();
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = data[0];

  if (isLoading) return <Loader />;

  return (
    <motion.article
      variants={containerMotion}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 mt-30 mb-12 flex h-auto max-w-[90rem] flex-col justify-center gap-10 xl:gap-20"
    >
      <div>
        <motion.button
          onClick={() => navigate("/countries")}
          className="flex cursor-pointer items-center justify-between gap-2 rounded-md border-1 border-gray-300 px-8 py-2 shadow-md transition-all duration-300 hover:font-bold hover:shadow-xl active:shadow-lg dark:border-gray-900"
        >
          <HiArrowLeft /> Back
        </motion.button>
      </div>
      <div className="flex flex-col items-center justify-between gap-12 xl:flex-row xl:items-start xl:gap-24">
        <motion.img
          variants={childrenLeftMotion}
          exit="exit"
          className="h-[12rem] w-[20rem] md:h-[20rem] md:w-[30rem]"
          src={flags.png}
          alt={`image of ${name.common}`}
        />
        <motion.div className="mt-6" variants={childrenRightMotion} exit="exit">
          <h3 className="mb-6 text-2xl font-extrabold xl:text-3xl">
            {name.official}
          </h3>
          <div className="text-md mb-10 flex w-[20rem] flex-col items-start gap-2 font-bold md:w-[45rem] md:flex-row md:gap-30">
            <div className="flex flex-col gap-2">
              <p>
                Native Name:{" "}
                <span className="text-md font-light">
                  {name.nativeName?.eng?.official ||
                    name.nativeName?.fra?.official ||
                    name.nativeName?.ara?.official ||
                    "---"}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className="text-md font-light">{population}</span>
              </p>
              <p>
                Region: <span className="text-md font-light">{region}</span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="text-md font-light">{subregion}</span>
              </p>
              <p>
                Capital: <span className="text-md font-light">{capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Top Level Domain:{" "}
                <span className="text-md font-light">{tld}</span>
              </p>
              <p>
                Currencies:{" "}
                <span className="text-md font-light">
                  {Object.entries(currencies).map((item) => item.at(1).name)}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span className="text-md font-light">
                  {Object.values(languages).join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-md font-bold">Border Countries:</p>
            {borders
              ? borders.map((border) => (
                  <button
                    className="cursor-pointer rounded-sm border-1 border-gray-200 px-4 py-1 text-sm text-gray-600 transition-all duration-300 not-last:mr-2 hover:font-bold hover:shadow-md active:shadow-sm"
                    key={border}
                    onClick={() => navigate(`/countries/${border}`)}
                  >
                    {border}
                  </button>
                ))
              : "---"}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default CountryDeatils;
