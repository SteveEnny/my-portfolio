import Header from "./componets/Header";
import AboutMe from "./componets/AboutMe";
import Projects from "./componets/Projects";
import { HiMail, HiPhone } from "react-icons/hi";
import Main from "./componets/Main";
import { useRef } from "react";
function App() {
  const about = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <div className="  bg-gradient-to-r from-cyan-200 to-blue-400 rounded-[0px_0px_100px_100px]">
        <Header about={about} contact={contact} project={project}></Header>
        <Main project={project} />
      </div>
      <AboutMe about={about} />
      <Projects project={project} />

      <div
        ref={contact}
        className="w-full flex flex-col items-center gap-3 mt-[10rem]"
      >
        <div className="border p-[2rem] rounded-[20rem] font-semibold">
          <h2 className="text-[1.5rem]">Contact me</h2>
        </div>
        <p className="font-medium">Have a project in mind?</p>
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
