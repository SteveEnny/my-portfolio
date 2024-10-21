// import profile from "../assets/images/profile.jpg";
function AboutMe() {
  return (
    <div className="flex items-center justify-between my-[5rem] text-stone-700 px-[10rem]">
      <div className="mb-9">
        <img
          src="/Profile pics.jpg"
          alt=""
          className="w-[15rem] h-[20rem] rounded-[100px]"
        />
      </div>
      <div className="">
        <h2 className="font-bold text-3xl text-stone-700 mb-6 ">
          Hi, I'm Stephen Eniola
        </h2>
        <p className="text-lg text-balance font-medium mb-5 w-[45rem] text-center">
          I'm a web developer, Specialize in creating user solution. I've
          experirnce working with various front end developemt tools. to build
          variou applicatons. my goal as a develpeor is to develpo, solve and
          build applications to it's best and well optimized.
        </p>
        <div>
          {/* <a className="my-10 px-16 py-3 text-base rounded-md md:text-xl group dark:bg-stone-900 dark:text-stone-100 bg-stone-100 text-stone-900 dark:hover:bg-stone-950 hover:bg-stone-200">
            Learn more about me
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
