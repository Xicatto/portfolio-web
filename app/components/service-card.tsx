export type ServiceCardProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export default function ServiceCard({
  service,
}: {
  service: ServiceCardProps;
}) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-between gap-8 text-balance break-words rounded-lg border p-8 transition hover:border-white/80 md:flex-row lg:flex-col">
      <div className="flex flex-col items-center gap-6">
        {service.icon}
        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          {service.title}
        </h3>
      </div>
      <p className="w-full text-center md:w-1/2 md:text-start lg:w-full">
        {service.description}
      </p>
    </div>
  );
}
