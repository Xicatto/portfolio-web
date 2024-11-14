import { cn } from "@/lib/utils";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export default function ExperienceTime() {
  const now = new Date();
  const degreeDate = new Date(2022, 0, 1, 0, 0, 0);
  const timeDifference: {
    years: number;
    months: number;
    days: number;
  } = {
    years: differenceInYears(now, degreeDate),
    months: differenceInMonths(now, degreeDate) % 12,
    days: differenceInDays(now, degreeDate) % 30,
  };

  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "flex flex-col items-center rounded-lg border p-8 transition-all duration-1000 ease-in-out",
        )}
      >
        <h2 className="text-lg font-semibold">Neste exato momento possuo</h2>
        <div className="flex w-full flex-col items-center">
          <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight">
            {timeDifference?.years} anos, {timeDifference?.months} meses,{" "}
            {timeDifference?.days} dias
          </h2>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            de experiência
          </h4>
        </div>
      </div>
    </div>
  );
}
