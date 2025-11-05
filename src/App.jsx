import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import DevSkills from "./components/DevSkills";
import SoftwareSkills from "./components/SoftwareSkills";
import TechIntroSection from "./components/TechIntroSection";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <DevSkills />
      <SoftwareSkills />
      <Portfolio />
      {/* <TechIntroSection /> */}
      <Footer />
    </>
  );
}

export default App;
