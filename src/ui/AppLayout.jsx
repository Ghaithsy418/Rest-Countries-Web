import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto flex pl-6 flex-col items-center justify-center dark:bg-cyan-950">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
