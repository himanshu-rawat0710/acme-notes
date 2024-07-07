import { FC } from "react";
import GliderCarousel from "./unitComponents/GliderCarousel";

const testimonials = [
  {
    text: "Acme Note has revolutionized the way I manage my tasks and notes. It's incredibly intuitive and has all the features I need to stay organized and productive. Highly recommend!",
    user: "Alex Johnson",
    designation: "Product Manager",
    avatar: "/avatars/user-a.jpg",
  },
  {
    text: "A fantastic tool for organizing my thoughts and ideas. The synchronization across devices is seamless, ensuring I have access to my notes no matter where I am. Acme Note is a game-changer.",
    user: "Brianna Lee",
    designation: "Software Engineer",
    avatar: "/avatars/user-b.jpg",
  },
  {
    text: "Simple, intuitive, and effective. The rich text editing feature allows me to format my notes exactly how I want. Acme Note has become an essential part of my daily workflow.",
    user: "Carlos Martinez",
    designation: "Designer",
    avatar: "/avatars/user-c.jpg",
  },
  {
    text: "The best note-taking app I've ever used. It perfectly meets my needs with its advanced search and collaboration features. It's a must-have tool for anyone who values productivity.",
    user: "Dana Kim",
    designation: "Content Writer",
    avatar: "/avatars/user-d.jpg",
  },
  {
    text: "Excellent features and easy to use. The customizable themes and offline access make Acme Note the perfect tool for my daily tasks. It's highly efficient and reliable.",
    user: "Ethan Davis",
    designation: "Project Manager",
    avatar: "/avatars/user-e.jpg",
  },
];

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="pt-16 pb-28 md:pt-28 md:pb-36 bg-background-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-primary-600 mb-12">What Our Users Say</h2>
        <GliderCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
