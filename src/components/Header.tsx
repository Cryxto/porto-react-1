import { Navbar } from "./Navbar";

interface Header {}

const Header = () => {
  return (
    <>
      <header className="border-slate-300 border bg-red-400">
        <div className="container">
          <Navbar />
        </div>
      </header>
    </>
  );
};

export { Header };
