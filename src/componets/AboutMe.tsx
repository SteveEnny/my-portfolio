import profile from "../assets/images/profile.jpg";
function AboutMe() {
  return (
    <div className="flex  items-center mt-[5rem] text-stone-700 px-[10rem] justify-between">
      <div className="mb-9">
        <img
          src={profile}
          alt=""
          className="w-[15rem] h-[20rem] rounded-[100px]"
        />
      </div>
      <div className="">
        <h2 className="font-bold text-3xl text-stone-700 mb-6">
          Hi, I'm Stephen Eniola
        </h2>
        <p className="text-lg text-balance font-medium mb-5">
          I'm a web developer, Specialize in creating user solution
        </p>
        <div>
          <a className="my-10 px-16 py-3 text-base rounded-md md:text-xl group dark:bg-stone-900 dark:text-stone-100 bg-stone-100 text-stone-900 dark:hover:bg-stone-950 hover:bg-stone-200">
            Learn more about me
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
