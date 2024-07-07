import { FC } from "react";
import Link from "next/link";

const TameYourWork: FC = () => {
  return (
    <section id="tame-your-work" className="py-16 md:py-20 lg:py-28 bg-background-100">
      <div className="container mx-auto px-4 text-center flex flex-col gap-4">
        <h2 className="text-4xl font-extrabold text-primary-600 mb-6">Tame your work, <br /> organize your life</h2>
        <p className="text-xl text-secondary-700 mb-8">
          Remember everything and tackle any project with your notes, tasks, and schedule all in one place.
        </p>
        <Link href="/signup">
          <div className="inline-block bg-primary-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-primary-700 transition duration-300 ease-in-out">
            Start for free
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TameYourWork;
