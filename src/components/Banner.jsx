import { useEffect, useState } from "react";
// import headerImg from "../assets/img/header-img.jpg";
import headerImg from "../assets/img/S__257015811.jpg";


function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(120);
  const [views, setViews] = useState(0);

  const toRotate = ["Programmer", "Full Stack Developer", "Software Engineer"];
  const period = 1800;

  // typing effect
  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prev) => prev / 1.5);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(120);
    }
  };

  // ✅ REAL VIEW (CountAPI + กัน refresh spam)
  useEffect(() => {
    const namespace = "chaiwat-portfolio";
    const key = "views";

    const viewed = sessionStorage.getItem("viewed");

    if (!viewed) {
      // เพิ่ม view (เฉพาะครั้งแรกของ session)
      fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then((res) => res.json())
        .then((data) => {
          setViews(data.value);
          sessionStorage.setItem("viewed", "true");
        })
        .catch(() => setViews(0));
    } else {
      // แค่ดึงค่า view
      fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
        .then((res) => res.json())
        .then((data) => setViews(data.value))
        .catch(() => setViews(0));
    }
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
    <section className="min-h-screen flex items-center bg-[#0b0b0f] text-white px-6 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <div>
          <div className="mb-6 text-sm tracking-wide text-gray-400 backdrop-blur-md bg-white/5 inline-block px-4 py-1 rounded-full border border-white/10">
            {views} views • Portfolio
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Hi, I’m Chaiwat
            <br />
            <span className="text-gray-400 font-light">
              {text}
              <span className="border-r border-gray-500 ml-1 animate-pulse"></span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Hello There! Allow me to introduce myself. Chaiwat Sasithonratsame is my name. I work as a Software
            Developer based in Bangkok. If you have any questions or topics about software development or anything else,
            I'd be delighted to share my expertise and experiences with you!
          </p>

          <div className="mt-10">
            <a
              href="https://www.linkedin.com/in/chaiwat-sasithonratsame-614a8826b/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:opacity-80 transition"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* RIGHT - CIRCLE IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* big glow */}
          <div className="absolute w-[320px] h-[320px] bg-white/10 blur-[120px] rounded-full"></div>

          {/* gradient ring */}
          <div className="relative p-[4px] rounded-full bg-gradient-to-tr from-white/20 via-white/5 to-transparent">
            {/* inner glass */}
            <div className="rounded-full bg-[#0b0b0f] p-[6px] backdrop-blur-xl">
              {/* image */}
              <div className="overflow-hidden rounded-full border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <img
                  src={headerImg}
                  alt="profile"
                  className="
                    w-[260px]
                    h-[260px]
                    object-cover
                    scale-[1.02]
                    hover:scale-[1.06]
                    transition duration-700 ease-out
                  "
                />
              </div>
            </div>
          </div>

          {/* small light */}
          <div className="absolute -top-4 right-6 w-20 h-20 bg-white/20 blur-2xl rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
