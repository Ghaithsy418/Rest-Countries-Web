import { useCountries } from "./useCountries";
import MainHeader from "./MainHeader";
import CountryItem from "./CountryItem";
import Loader from "../../ui/Loader";
import { useScrollToTop } from "./useScrollToTop";
import { HiArrowUp } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const containerMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8 },
};

function CountriesList() {
  const { data, isLoading } = useCountries();
  const { visible, scrollToTop } = useScrollToTop();
  if (isLoading) return <Loader />;

  return (
    <motion.article
      variants={containerMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-light mt-18 md:mt-24 sm:mr-4 md:mr-8 mr-12 flex h-[100vh] max-w-[85%] flex-col gap-12 py-6"
    >
      <MainHeader />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-6 sm:gap-12 md:gap-16">
        {data.map((country, i) => (
          <CountryItem country={country} key={i} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.button
            initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{
              opacity: 0,
              rotate: -180,
              scale: 0.5,
              transition: {
                damping: 20,
              },
            }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 240,
              damping: 15,
            }}
            className="fixed right-8 md:right-20 bottom-20 z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-xl text-white shadow-md dark:bg-indigo-200 dark:text-black"
            onClick={scrollToTop}
          >
            <HiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default CountriesList;
