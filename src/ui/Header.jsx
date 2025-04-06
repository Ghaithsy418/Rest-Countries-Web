import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <nav className="fixed top-0 z-20 flex h-[10vh] w-[100%] items-center justify-between bg-white px-6 py-4 shadow-md sm:px-12 md:px-24 dark:bg-cyan-900">
      <h1 className="text-lg font-extrabold sm:text-xl md:text-2xl">
        Where in the world?
      </h1>
      <ThemeButton />
    </nav>
  );
}

export default Header;
