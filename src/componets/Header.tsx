function Header() {
  return (
    <div className="flex justify-between sm:px-20 text-[1.5rem] py-16">
      <div className="hidden md:block text-stone-500 from-cyan-200 to-blue-400 ">
        Stpehen Eniola
      </div>
      <ul className="px-3 flex justify-end gap-4 md:justify-between w-full md:w-[25rem] items-center text-white">
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
