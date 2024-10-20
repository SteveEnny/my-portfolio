import Header from "./componets/Header";
import eb from "./assets/images/Code_typing.png";
import AboutMe from "./componets/AboutMe";
import Projects from "./componets/Projects";
function App() {
  return (
    <div className="">
      <div className="  bg-gradient-to-r from-cyan-200 to-blue-400 rounded-[0px_0px_100px_100px]">
        <Header></Header>
        <div className=" px-[6rem] mt-10 flex justify-between">
          <div className="flex flex-col my-auto max-w-[40rem]">
            <p className="font-bold text-[#f0f9ff] text-[2rem]">
              Building the web, one pixel at a time.
            </p>
            <div className="flex gap-2 mt-5">
              <button className="text-stone-400 border rounded-md p-1 px-2">
                See my work
              </button>
              <button className="text-stone-400 border border-blue-00 rounded-md p-1 px-2">
                Download my CV
              </button>
            </div>
          </div>
          <div>
            <img src={eb} alt="" className="w-[23rem] h-[23rem]" />
          </div>
        </div>
      </div>
      <AboutMe />
      <Projects />

      <div>
        <h2>a small section of my recent project</h2>
      </div>
      <div>
        <p>About Me</p>
        <div>....image</div>
        <p></p>
      </div>
    </div>
  );
}

export default App;
