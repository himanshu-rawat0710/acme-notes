"use client";

import { FC, useState } from "react";
import Image from "next/image";
import ChevronDownIcon from "./Icons/ChevronDown";

const features = [
  {
    title: "Capture Everything",
    description:
      "Easily capture all your ideas, notes, and tasks in one place. With Acme Note, you'll never lose track of important information.",
    image: "/images/note-action-1.png",
  },
  {
    title: "Stay Organized",
    description:
      "Keep your notes and tasks organized with tags, folders, and advanced search. Acme Note helps you stay on top of everything.",
      image: "/images/note-action-2.png",
  },
  {
    title: "Collaborate with Ease",
    description:
      "Share your notes and collaborate with colleagues or friends in real-time. Acme Note makes teamwork seamless and efficient.",
      image: "/images/note-action-3.png",
  },
  {
    title: "Access Anywhere",
    description:
      "Access your notes from any device, anytime, anywhere. With Acme Note, you'll always have your important information at your fingertips.",
      image: "/images/note-action-4.png",
  },
];

const NotesInAction: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="notes-in-action" className="py-16 bg-background-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-primary-600 mb-12 text-center">Acme Note in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr,7fr] gap-12">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => setOpenIndex(index)}
                  className={`${openIndex == index ? "bg-white" : "bg-transparent"} flex justify-between items-center w-full p-4 text-left text-primary-700  hover:bg-white rounded-lg shadow-none hover:shadow-none transition-shadow duration-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75`}
                >
                  <span>{feature.title}</span>
                  <ChevronDownIcon
                    className={`${
                      openIndex === index ? "transform rotate-180" : ""
                    } w-5 h-5 text-primary-500`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pt-4 pb-4 text-secondary-600 bg-white">
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${
                  openIndex === index ? "flex" : "hidden"
                } feature-image transition-opacity duration-200 aspect-video max-h-[400px] w-full justify-end`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="rounded-lg h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesInAction;
