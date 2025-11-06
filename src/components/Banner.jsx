import { useEffect, useState } from "react";
import headerImg from "../assets/img/header-img.jpg";
import background from "../assets/img/background.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [views, setViews] = useState(0);

  const toRotate = ["Programmer", "Full Stack Developer", "Software Engineer"];
  const period = 2000;

  // Typing effect
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  // Count and store page views in localStorage
  useEffect(() => {
    const storedViews = parseInt(localStorage.getItem("pageViews") || "0");
    const newViews = storedViews + 1;
    localStorage.setItem("pageViews", newViews.toString());
    setViews(newViews);
  }, []);

  useEffect(() => {
    const updateViews = async () => {
      try {
        // เพิ่มจำนวน view +1
        await fetch("https://api.countapi.xyz/hit/chaiwat-portfolio/home");

        // ดึงจำนวน view ปัจจุบัน
        const res = await fetch("https://api.countapi.xyz/get/chaiwat-portfolio/home");
        const data = await res.json();
        setViews(data.value);
      } catch (error) {
        console.error("Error fetching view count:", error);
      }
    };

    updateViews();
  }, []);

  return (
    <section
      id="home"
      className="pt-[260px] pb-[100px] bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto px-5 max-w-7xl flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="text-white md:w-2/3">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi! I'm Chaiwat{" "}
            <span className="txt-rotate border-r-2 border-gray-500 pr-1">{text}</span>
          </h1>
          <span className="inline-block font-bold text-lg mb-4 px-3 py-1 border border-white bg-gradient-to-r from-[#AA367C80] to-[#4A2FBD80]">
            Welcome to my Portfolio {views.toLocaleString()} views
          </span>
          <span className="inline-block font-bold text-lg mb-4 px-3 py-1 border border-white bg-gradient-to-r from-[#AA367C80] to-[#4A2FBD80]">
            Hello There! Allow me to introduce myself. Chaiwat Sasithonratsame is my name.
            I work as a Software Developer based in Bangkok. If you have any questions or
            topics about software development or anything else, I'd be delighted to share
            my expertise and experiences with you!
          </span>
          {/* Button */}
          <div className="mt-10">
            <a
              href="https://www.linkedin.com/in/chaiwat-sasithonratsame-614a8826b/"
              className="inline-flex items-center font-bold text-white text-xl hover:opacity-80 transition"
            >
              Let’s Connect <ArrowRightCircle size={25} className="ml-3 transition-all group-hover:ml-6" />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/3 animate-[updown_3s_linear_infinite]">
          <img src={headerImg} alt="Header" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
