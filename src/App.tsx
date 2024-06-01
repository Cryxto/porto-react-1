// import "./App.css";
// import "./index.css"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="relative h-screen w-screen bg-slate-950 text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <div className="background-full-screen"></div>
          <div className="relative z-10 px-5 mx-5">
            <Header />
            <main className="flex flex-wrap flex-col my-4 mx-5">
              <h1 className="italic">Cek TW1</h1>
              <h2 className="italic">Cek TW2</h2>
              <h3 className="italic">Cek TW3</h3>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
