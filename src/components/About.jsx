import React from "react";
import { Card, Badge } from "aurora-design-system";

const SectionOne = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <Card
          variant="elevated"
          padding="none"
          hoverable
          className="overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  About me
                </h2>
                <Badge variant="success" dot>
                  Open to Work
                </Badge>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Seasoned Frontend Engineer with a strong affinity for design
                  and a strategic approach to problem-solving. Proficient in
                  JavaScript and TypeScript, specializing in React, Next.js,
                  Redux, and various web performance optimization techniques.
                </p>

                <p>
                  Has a track record of building and maintaining impactful
                  visualization tools, secure transaction solutions, and
                  reusable components. Skilled in Git workflows, Web3, CSS
                  (including Sass), CI/CD, and agile methodologies.
                </p>

                <p>
                  Adept at collaborating with backend engineers and other
                  cross-functional teams, to ensure technically sound designs,
                  and enforcing visual and design integrity to deliver
                  high-quality and diverse projects. Eager to contribute
                  expertise, drive innovation, and optimize user experiences to
                  corporate organizations looking to elevate front-end
                  development initiatives.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="primary">React</Badge>
                <Badge variant="primary">TypeScript</Badge>
                <Badge variant="primary">Next.js</Badge>
                <Badge variant="primary">Redux</Badge>
                <Badge variant="primary">Web3</Badge>
                <Badge variant="primary">CI/CD</Badge>
              </div>
            </div>

            <div className="relative h-64 md:h-auto">
              <img
                src="assets/images/headshot.jpeg"
                alt="Florence Adikwu - Frontend Engineer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent md:from-white/40"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SectionOne;
