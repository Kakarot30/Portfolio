import Image from "next/image";
import { techStack } from "@/data";

const TechStack = () => (
  <section className="w-full py-10 flex flex-col items-center">
    <h1 className="text-4xl font-bold mb-10 text-purple">My Tech Stack</h1>
    <div className="flex flex-wrap gap-8 justify-center items-end">
      {techStack.map((icon) => (
        <div key={icon.src} className="flex flex-col items-center w-24">
          <Image
            src={icon.src}
            alt={icon.name}
            width={64}
            height={64}
            className="mb-2"
          />
          <span className="text-sm text-white-200 text-center w-full">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
