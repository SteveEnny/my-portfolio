import Header from "./componets/Header";
import AboutMe from "./componets/AboutMe";
import Projects from "./componets/Projects";
import { HiMail, HiPhone } from "react-icons/hi";
import Main from "./componets/Main";
function App() {
  return (
    <div className="">
      <div className="  bg-gradient-to-r from-cyan-200 to-blue-400 rounded-[0px_0px_100px_100px]">
        <Header></Header>
        <Main />
      </div>
      <AboutMe />
      <Projects />

      <div className="w-full flex flex-col items-center gap-3">
        <h2>Contact me</h2>
        <p>Have a project in mnd?</p>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex items-center gap-3">
            <HiPhone />
            <span>09015310055</span>
          </div>
          <div className="flex items-center gap-3">
            <HiMail />
            <a
              href="mailto:omotosoeniola2@gmail.com"
              className="text-blue-400 hover:text-blue-600"
            >
              Send a mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
