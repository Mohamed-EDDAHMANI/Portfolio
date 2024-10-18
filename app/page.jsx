'use client'
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Element } from 'react-scroll';



export default function Home() {
  return (
    <main>
      <Element name="Home" className="w-full ss:mt-[100px] mt-[70px] pl-[20px] || lg:mt-[140px] lg:px-[100px] lg:pb-[80px]">
        <h1 className="font-semibold text-[30px] || ">
          Mohamed EDDAHMANI...
        </h1>
        <div className="relative text-[20px] flex items-center ||">I&apos;m a
          <span className=" ml-16 text-accent absolute">
            <Typewriter
              options={{
                strings: [
                  ' Web Developer',
                  ' UI/UX Researcher',
                  ' Next js Developer'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p>
          Welcome to my world ,I am a web developer, I have a strong foundation in front-end &amp; back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem.
        </p>
        <a href="/CV_Mohamed_EDDAHMANI.pdf" download>
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2 text-accent bg-gray hover:bg-gray-300 border border-accent rounded-full mt-10 mb-4"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </a>
      </Element>

      <Element name="about">
        <About /> 
      </Element>
      <Element name="project">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

    </main>

  );
}
