type headerType = {
  about: React.MutableRefObject<HTMLDivElement | null>;
  project: React.MutableRefObject<HTMLDivElement | null>;
  contact: React.MutableRefObject<HTMLDivElement | null>;
};
// type headerType
function Header({ about, project, contact }: headerType) {
  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between sm:px-20 text-[1.5rem] py-16">
      <div className="hidden md:block text-stone-500 from-cyan-200 to-blue-400 ">
        Stpehen Eniola
      </div>
      <ul className="px-3 flex justify-end gap-4 md:justify-between w-full md:w-[25rem] items-center text-white">
        <li onClick={() => scrollToSection(about)}>About</li>
        <li onClick={() => scrollToSection(project)}>Project</li>
        <li onClick={() => scrollToSection(contact)}>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
