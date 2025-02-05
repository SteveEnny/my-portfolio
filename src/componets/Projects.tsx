import { Ref } from "react";
import { CarouselSize } from "./Carousel";

function Projects({ project }: { project: Ref<HTMLDivElement> }) {
  return (
    <div className="flex flex-col items-center" ref={project}>
      <div className="border p-[2rem] rounded-[20rem] font-semibold">
        <h2 className="text-[1.5rem]">Projects</h2>
      </div>
      <h3 className="text-[1rem] font-medium px-3 my-5">
        I have worked on some few pojects but here are my recent projects
      </h3>
      <CarouselSize />
    </div>
  );
}

export default Projects;
