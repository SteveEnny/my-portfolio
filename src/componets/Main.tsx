import eb from "../assets/images/Code_typing.png";

function Main() {
  return (
    <div className="px-[2rem] py-4 sm:px-[6rem] mt-7 sm:mt-10 flex justify-between">
      <div className="flex flex-col my-auto max-w-[40rem]">
        <p className="font-bold text-center sm:text-balance text-[#f0f9ff] text-[2rem]">
          Building the web, one pixel at a time.
        </p>
        <div className="flex mx-auto sm:mx-0 gap-2 mt-5">
          <button className="hidden md:block text-stone-400 border rounded-md p-1 px-2">
            See my work
          </button>
          <button className="text-stone-400  border border-blue-00 rounded-md p-1 px-2">
            Download my CV
          </button>
        </div>
      </div>
      <div>
        <img src={eb} alt="" className="hidden md:block w-[23rem] h-[23rem]" />
      </div>
    </div>
  );
}

export default Main;
