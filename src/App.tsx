// import "./App.css";
// import "./index.css"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen w-screen bg-slate-950 text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <div className="background-full-screen"></div>
          <div className="relative z-10 px-5 mx-5 flex flex-col flex-wrap h-full">
            <Header />
            <main className="flex flex-wrap flex-col my-4 mx-auto flex-grow">
              <Hero />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
