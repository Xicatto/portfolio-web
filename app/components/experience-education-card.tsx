export type ExperienceEducationCardProps = {
  startYear: string;
  endYear: string;
  title: string;
  location: string;
};

export default function ExperienceEducationCard({
  experience,
}: {
  experience: ExperienceEducationCardProps;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-6 transition hover:border-white/80">
      <p className="scroll-m-20 text-xl font-semibold tracking-tight">
        {experience.startYear} - {experience.endYear}
      </p>
      <p className="scroll-m-20 break-words text-3xl font-semibold tracking-tight">
        {experience.title}
      </p>
      <p className="text-sm font-medium">{experience.location}</p>
    </div>
  );
}
