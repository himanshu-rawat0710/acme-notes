"use client";

import { FC } from "react";
import { Transition, Disclosure } from "@headlessui/react";
import CloudSyncIcon from "./Icons/CloudSync";
import PencilAltIcon from "./Icons/PencilAlt";
import DocSearchIcon from "./Icons/DocSeach";
import ChevronDownIcon from "./Icons/ChevronDown";

const Features: FC = () => {
  const mainFeatures = [
    {
      Icon: CloudSyncIcon,
      title: "Seamless Note Synchronization",
      description:
        "Never lose your notes. Acme Note automatically syncs your notes across all your devices in real-time.",
    },
    {
      Icon: DocSearchIcon,
      title: "Advanced Search",
      description:
        "Find any note instantly with our powerful search engine. Filter by date, tags, and more.",
    },
    {
      Icon: PencilAltIcon,
      title: "Rich Text Editing",
      description:
        "Format your notes your way with our rich text editor. Add images, links, lists, and more to organize your thoughts better.",
    },
  ];

  const additionalFeatures = [
    {
      title: "Offline Access",
      description:
        "Access your notes even without an internet connection. Your notes will sync automatically once you're back online.",
    },
    {
      title: "Collaboration",
      description:
        "Work together with colleagues or friends by sharing your notes and collaborating in real-time.",
    },
    {
      title: "Customizable Themes",
      description:
        "Personalize your note-taking experience with a variety of themes and color schemes.",
    },
    // Add more features as needed
  ];

  return (
    <section id="features" className="py-16 bg-background-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-primary-600 mb-12">Features</h2>
        
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {mainFeatures.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="feature group relative p-6 bg-white rounded-lg shadow hover:shadow-lg transform transition-all duration-200"
            >
              <Icon className="h-16 w-16 text-primary-600 mx-auto mb-6 group-hover:text-primary-700 transform transition-transform duration-200 group-hover:scale-110" />
              <h3 className="text-2xl font-semibold text-primary-700">{title}</h3>
              <p className="mt-4 text-secondary-600">{description}</p>
            </div>
          ))}
          {additionalFeatures.map(({ title, description }, index) => (
            <div
              key={index}
              className="feature relative p-6 bg-white rounded-lg shadow hover:shadow-lg transform transition-all duration-200"
            >
              <h3 className="text-2xl font-semibold text-primary-700">{title}</h3>
              <p className="mt-4 text-secondary-600">{description}</p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-6 md:gap-12">
            {mainFeatures.map(({ Icon, title, description }, index) => (
              <div
                key={index}
                className="feature group relative p-6 bg-white rounded-lg shadow hover:shadow-lg transform transition-all duration-200"
              >
                <Icon className="h-16 w-16 text-primary-600 mx-auto mb-6 group-hover:text-primary-700 transform transition-transform duration-200 group-hover:scale-110" />
                <h3 className="text-2xl font-semibold text-primary-700">{title}</h3>
                <p className="mt-4 text-secondary-600">{description}</p>
              </div>
            ))}
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Transition
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Disclosure.Panel>
                    <div className="grid grid-cols-1 gap-6 mt-6">
                      {additionalFeatures.map(({ title, description }, index) => (
                        <div
                          key={index}
                          className="feature relative p-6 bg-white rounded-lg shadow hover:shadow-lg transform transition-all duration-200"
                        >
                          <h3 className="text-2xl font-semibold text-primary-700">{title}</h3>
                          <p className="mt-4 text-secondary-600">{description}</p>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </Transition>
                <Disclosure.Button className="mt-8 text-primary-600 font-semibold flex items-center justify-center w-full">
                  {open ? 'Show Less' : 'See More'}
                  <ChevronDownIcon
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </Disclosure.Button>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
};

export default Features;
