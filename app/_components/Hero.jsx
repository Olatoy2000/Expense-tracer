import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage your Expenses
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Control your Money
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start creating your budget and save your money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
      <Image
        src="/dashboard-image.png"
        width={1000}
        height={700}
        alt="Dashboard image"
        className="border-2xl rounded -mt-9"
      />
    </section>
  );
};

export default Hero;
