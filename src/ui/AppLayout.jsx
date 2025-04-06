import Header from "./Header";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto flex flex-col items-center justify-center pl-6 dark:bg-cyan-950">
          {children}
        </div>
      </main>
    </>
  );
}

export default AppLayout;
