import React from "react";

const classNames = {
  container: "max-w-7xl mx-auto",
  header: "text-center",
  grid: "grid max-w-md mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none",
  card: "bg-gray-100 rounded-2xl p-8",
  footer:
    "flex items-center justify-between pt-5 mt-5 border-t border-gray-200",
};

const testimonials = [
  {
    quote:
      '"SimpleUI has streamlined our entire design process, with GSAP animations adding a level of polish we never had before. The components are incredibly user-friendly and customizable."',
    name: "Bessie Cooper",
    role: "Co-Founder, CEO",
    logoSrc: "https://www.simpleui.com/logo-light.png",
    avatarSrc: "https://www.simpleui.com/images/avatar-man1.jpg",
  },
  {
    quote:
      '"SimpleUI, paired with GSAP animations, has made our UI feel alive. It’s so easy to integrate, and the animation options bring our designs to the next level."',
    name: "Albert Flores",
    role: "Senior Product Manager",
    logoSrc: "https://www.simpleui.com/logo-light.png",
    avatarSrc: "https://www.simpleui.com/images/avatar-woman1.jpg",
  },
  {
    quote:
      '"The interactive experience SimpleUI provides is unmatched, especially with the built-in GSAP animations. It’s transformed our brand’s aesthetic entirely."',
    name: "Jenny Wilson",
    role: "Head of Marketing",
    logoSrc: "https://www.simpleui.com/logo-light.png",
    avatarSrc: "https://www.simpleui.com/images/avatar-woman2.jpg",
  },
];

function Testimonial() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className={`px-4 sm:px-6 lg:px-8 ${classNames.container}`}>
        <div className={`max-w-3xl mx-auto ${classNames.header}`}>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            See Why 1000+ Teams Trust SimpleUI with GSAP Animations.
          </h2>
        </div>

        <div className={`grid-cols-1 gap-5 ${classNames.grid}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${classNames.card} ${
                index % 2 === 0 ? "xl:-rotate-2" : "xl:rotate-2"
              }`}
            >
              <blockquote>
                <p className="text-xl font-medium leading-9 text-gray-900">
                  {testimonial.quote}
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="mt-1 text-base font-normal text-gray-600">
                {testimonial.role}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
