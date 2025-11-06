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
    <main className="bg-black dark:bg-white transition-colors duration-300">
      <Element name="Home" className="w-full ss:mt-[100px] mt-[70px] pl-[20px] || lg:mt-[180px] lg:px-[100px] lg:pb-[130px] overflow-hidden ">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <h1 className="font-semibold text-[30px] lg:text-[40px] mb-6 text-white dark:text-black">
              Mohamed EDDAHMANI...
            </h1>
            <div className="relative text-[20px] lg:text-[24px] flex items-center mb-8">
              <span className="text-white dark:text-black">Je suis</span>
              <span className="ml-4 text-accent">
                <Typewriter
                  options={{
                    strings: [
                      'Développeur Web',
                      'Designer UI/UX',
                      'Développeur Next.js'
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <p className="text-base lg:text-lg leading-relaxed mb-10 text-white dark:text-black">
              Bienvenue dans mon univers ! Je suis développeur web passionné avec une solide expertise en développement front-end et back-end. Je me spécialise dans la création d&apos;applications web intuitives et responsives en utilisant React et son écosystème technologique.
            </p>
            <a href="/CV_Mohamed_EDDAHMANI.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-accent bg-transparent hover:bg-accent hover:text-white dark:hover:text-black border border-accent rounded-full transition-colors duration-300"
              >
                <span>Télécharger CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
          </div>

          {/* Profile Picture Section */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <div className="flex items-center justify-center">
              <div className="absolute z-10">
                <img
                  className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
                  src="/my-pic-removebg-preview.png"
                  alt="Mohamed Eddahmani"
                />
              </div>
              <div className="relative rounded-full border-[3px] border-accent h-[320px] w-[320px] lg:h-[370px] lg:w-[370px] flex items-center justify-center animate-spin-slow">
                <div className="absolute w-[350px] h-[250px] lg:w-[400px] lg:h-[280px] bg-black dark:bg-white rounded-full"></div>
                <div className="relative rounded-full border-[5px] border-accent h-[290px] w-[290px] lg:h-[340px] lg:w-[340px] flex items-center justify-center animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
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
