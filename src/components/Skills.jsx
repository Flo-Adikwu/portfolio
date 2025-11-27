import React from "react";
import { Card, Badge } from "aurora-design-system";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Redux",
        "HTML/CSS",
      ],
      icon: "⚛️",
    },
    {
      category: "Styling",
      skills: [
        "Tailwind CSS",
        "Sass/SCSS",
        "CSS-in-JS",
        "Material-UI",
        "Styled Components",
      ],
      icon: "🎨",
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "CI/CD", "Webpack", "Vite", "npm/yarn"],
      icon: "🛠️",
    },
    {
      category: "Design Systems",
      skills: [
        "Storybook",
        "Component Libraries",
        "Design Tokens",
        "Accessibility",
        "Figma",
      ],
      icon: "📐",
    },
    {
      category: "Testing",
      skills: [
        "Vitest",
        "Jest",
        "React Testing Library",
        "jest-axe",
        "Unit Tests",
      ],
      icon: "🧪",
    },
    {
      category: "Other",
      skills: [
        "Web3",
        "Performance Optimization",
        "Agile",
        "REST APIs",
        "GraphQL",
      ],
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              variant="elevated"
              padding="lg"
              hoverable
              className="h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="primary" size="md" shape="pill">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card variant="gradient" padding="lg" className="mt-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">6+ Years</h3>
            <p className="text-white/90 text-lg">
              of professional frontend development experience across fintech,
              Web3, and enterprise applications
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
