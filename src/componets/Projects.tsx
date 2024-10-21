import { CarouselSize } from "./Carousel";

function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="border p-5 rounded rounded-[20rem] font-semibold">
        <h2 className="text-[1.5rem]">Projects</h2>
      </div>
      <h3 className="text-[1rem] font-medium  my-5">
        I have work with many poject but here are my recent project
      </h3>
      <CarouselSize />
    </div>
  );
}

export default Projects;
