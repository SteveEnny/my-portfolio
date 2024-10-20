// import * as React from "react";
// import uppcorn from "@/assets/images/uppcorn.png";
// import wildO from "@/assets/images/wildO.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AboutProject } from "./AboutProject";

type projectsType = {
  name: string;
  link: string;
  description: string;
  img: string;
};

const projects: projectsType[] = [
  {
    name: "Wild oasis",
    link: "https://unepopcorn.vercel.app/",
    description:
      "Uppcoen applicaton is site where you can search for movies of various types",
    img: "/public/wildO.png",
  },
  {
    name: "HR Management",
    link: "https://hrms-dashboard.netlify.app",
    description:
      "Uppcoen applicaton is site where you can search for movies of various types",
    img: "/public/HRMS.png",
  },
  {
    name: "The wild Oasis",
    link: "https://unepopcorn.vercel.app/",
    description:
      "Uppcoen applicaton is site where you can search for movies of various types",
    img: "/public/The wild oasis.png",
  },
  {
    name: "Uppcorn",
    link: "https://unepopcorn.vercel.app/",
    description:
      "Uppcoen applicaton is site where you can search for movies of various types",
    img: "/public/usepopcorn.png",
  },
  // {
  //   name: "Uppcorn",
  //   link: "https://unepopcorn.vercel.app/",
  //   description:
  //     "Uppcoen applicaton is site where you can search for movies of various types",
  // },
  // {
  //   name: "Uppcorn",
  //   link: "https://unepopcorn.vercel.app/",
  //   description:
  //     "Uppcoen applicaton is site where you can search for movies of various types",
  // },
];

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-[10rem]"
    >
      <CarouselContent className="w-full flex">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/2 w-[20rem]"
          >
            <div className="p-1">
              <Card className="w-[30rem]">
                <CardContent className="flex aspect-square items-center justify-center p-6 pt-1">
                  <div>
                    <img src={project.img} alt="" />
                    <div className="flex justify-between p-5">
                      <p>Fast react pizza</p>
                      <div>
                        <AboutProject
                          description={project.description}
                          link={project.link}
                          key={index}
                        />
                      </div>
                      {/* <a href="https://unepopcorn.vercel.app/">About pro</a> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-[8rem]" />
      <CarouselNext className="mr-[8rem]" />
    </Carousel>
  );
}
