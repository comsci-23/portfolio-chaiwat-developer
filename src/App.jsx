import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import DevSkills from "./components/DevSkills";
import Education from "./components/Education";
import SoftwareSkills from "./components/SoftwareSkills";
// import Contact from "./components/Contact";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Education />
      <DevSkills />
      <SoftwareSkills />
      {/* <Contact /> */}
      {/* <Portfolio /> */}

      <Footer />
    </>
  );
}

export default App;
