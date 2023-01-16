import Header from "./components/Header";
import ProfileBox from "./components/ProfileBox";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen relative bg-dark-bg-main pb-10">
      <Header />
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <ProfileBox />
          </div>
          <div className="w-full lg:w-2/3 ">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
