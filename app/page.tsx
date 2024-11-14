import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaDownload,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMicrochip,
  FaMobile,
  FaReact,
} from "react-icons/fa6";
import ExperienceEducationCard, {
  ExperienceEducationCardProps,
} from "./components/experience-education-card";
import ExperienceTime from "./components/experience-time";
import ServiceCard, { ServiceCardProps } from "./components/service-card";
import SkillCard, { SkillCardProps } from "./components/skill-card";
import IconReact from "./icons/icon-react";
import IconNextJS from "./icons/icon-nextjs";
import IconFlutter from "./icons/icon-flutter";

const services: ServiceCardProps[] = [
  {
    title: "Web Design",
    description:
      "Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...",
    icon: (
      <div>
        <FaGlobe size={24} />
      </div>
    ),
  },
  {
    title: "Mobile Apps",
    description:
      "Desenvolvimento de aplicativos móveis intuitivos e de alto desempenho para iOS e Android, com foco em usabilidade e escalabilidade.",
    icon: (
      <div>
        <FaMobile size={24} />
      </div>
    ),
  },
  {
    title: "API Development",
    description:
      "Construção de APIs seguras e escaláveis, que otimizam o fluxo de dados e se integram perfeitamente com suas aplicações.",
    icon: (
      <div>
        <FaMicrochip size={24} />
      </div>
    ),
  },
];

const experiences: ExperienceEducationCardProps[] = [
  {
    startYear: "2023",
    endYear: "Presente",
    title: "ENGENHEIRO DE SOFTWARE",
    location: "Boetto Contabilidade",
  },
  {
    startYear: "2022",
    endYear: "2023",
    title: "ANALISTA DE DESENVOLVIMENTO",
    location: "TOTVS",
  },
  {
    startYear: "2020",
    endYear: "2021",
    title: "ESTAGIÁRIO",
    location: "Techno Software Ltda.",
  },
];

const educations: ExperienceEducationCardProps[] = [
  {
    startYear: "2017",
    endYear: "2021",
    title: "ENGENHARIA DE COMPUTAÇÃO",
    location: "Bacharelado, Universidade de Ribeirão Preto",
  },
  {
    startYear: "2003",
    endYear: "2010",
    title: "CURSO DE INGLÊS",
    location: "Senac",
  },
];

const skills: SkillCardProps[] = [
  {
    skill: "React",
    percentage: "90",
    icon: <IconReact className="text-[#58c4dc]" />,
  },
  {
    skill: "Next.js",
    percentage: "80",
    icon: <IconNextJS className="text-primary" />,
  },
  {
    skill: "Flutter",
    percentage: "80",
    icon: <IconFlutter />,
  },
  {
    skill: "IoT",
    percentage: "70",
    icon: <FaMobile size={24} />,
  },
  {
    skill: "Tailwind",
    percentage: "90",
    icon: <FaMobile size={24} />,
  },
  {
    skill: "Git",
    percentage: "80",
    icon: <FaReact size={24} />,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex w-full justify-center px-3 py-24">
        <div className="flex max-w-screen-xl flex-col items-center justify-between gap-24">
          <div className="flex items-center">
            <div className="flex flex-1 flex-col gap-8">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Meu nome é Alex
              </h2>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Software Engineer +<br />
                Full Stack Developer
              </h1>
              <h2 className="scroll-m-20 text-balance text-xl tracking-tight">
                I break down complex user experience problems to create
                integrity focussed solutions that connect billions of people
              </h2>
              <div className="flex flex-row gap-4">
                <Link target="_blank" href="/Alex-CV.pdf" download>
                  <Button variant="default">
                    <FaDownload /> Download CV
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/alex-xicatto/"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <FaLinkedin className="cursor-pointer transition hover:text-foreground/80" />
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/Xicatto"
                  rel="noopener noreferrer"
                  as="image"
                >
                  <Button variant="outline" size="icon">
                    <FaGithub
                      className="cursor-pointer transition hover:text-foreground/80"
                      size={20}
                    />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="w-[450px]">
                <Image
                  src="/profile.webp"
                  alt="Profile picture"
                  className="rounded-full transition hover:scale-110"
                  width={450}
                  height={450}
                  priority
                />
              </div>
            </div>
          </div>
          <div>
            <ExperienceTime />
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center px-3 py-24">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Meus Serviços
            </h1>
            <p className="w-[450px] text-balance text-center leading-7 [&:not(:first-child)]:mt-6">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex w-full items-center justify-center px-3 py-24">
        <div className="grid w-full max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
              Minha Experiência
            </h1>
            <div className="grid flex-grow grid-cols-1 gap-4">
              {experiences.map((experience, index) => (
                <ExperienceEducationCard key={index} experience={experience} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
              Minha Educação
            </h1>
            <div className="grid flex-grow grid-cols-1 gap-4">
              {educations.map((education, index) => (
                <ExperienceEducationCard key={index} experience={education} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full items-center justify-center px-3 py-24">
        <div className="flex w-full max-w-screen-xl flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Minhas Habilidades
            </h1>
            <p className="w-full max-w-[450px] text-balance text-center leading-7 [&:not(:first-child)]:mt-6">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-10">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
