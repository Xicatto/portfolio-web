import { cn } from "@/lib/utils";

export type SkillCardProps = {
  icon: JSX.Element;
  skill: string;
  percentage: string;
};

export default function SkillCard({ skill }: { skill: SkillCardProps }) {
  return (
    <div className="group flex w-[150px] flex-col items-center gap-4">
      <div className="flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-2xl border p-4">
        <div className="flex h-full w-12 items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-125">
          <div className="saturate-[.25] transition-all duration-300 ease-in-out group-hover:saturate-100">
            {skill.icon}
          </div>
        </div>
        <p>{skill.percentage}%</p>
      </div>
      <p>{skill.skill}</p>
    </div>
  );
}
