import React from "react";
import { Button, Badge } from "aurora-design-system";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 mt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
          <span className="animate-pulse">✨</span>
          Available for Full-Time Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Florence Adikwu
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Senior Frontend Engineer building beautiful, accessible, and
          performant web experiences with React, TypeScript, and modern design
          systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">6+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          <div>
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          <div>
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="gradient"
            size="lg"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              (window.location.href = "mailto:florenceadikwu@gmail.com")
            }
          >
            Get In Touch
          </Button>
        </div>

        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
          <Badge variant="gradient">New</Badge>
          <span className="text-gray-700">
            Just launched{" "}
            <a
              href="https://aurora-ds.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Aurora Design System
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
