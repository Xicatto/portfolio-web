import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-center p-6 backdrop-blur-md bg-background/80 z-10">
      <div className="flex max-w-screen-xl flex-1 flex-row items-center justify-between">
        <p className="cursor-pointer font-semibold transition">
          alexboetto@pm.me
        </p>
        <div className="flex flex-row items-center gap-8 text-sm text-foreground/60">
          <Link href="" className="transition hover:text-foreground/80">
            Serviços
          </Link>
          <Link href="" className="transition hover:text-foreground/80">
            Trabalhos
          </Link>
          <Link href="" className="transition hover:text-foreground/80">
            Currículo
          </Link>
          <Link href="" className="transition hover:text-foreground/80">
            Habilidades
          </Link>
          <Link href="" className="transition hover:text-foreground/80">
            Contato
          </Link>
          <Button variant="default">Me contrate!</Button>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-row items-center justify-center gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/alex-xicatto/"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="cursor-pointer transition hover:text-foreground/80"
                size={20}
              />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Xicatto"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer transition hover:text-foreground/80"
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
