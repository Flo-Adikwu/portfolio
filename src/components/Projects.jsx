import React from "react";
import { Card, Button, Badge } from "aurora-design-system";

const Projects = () => {
  const projects = [
    {
      title: "Aurora Design System",
      description:
        "A modern React component library with 10 production-ready components, full TypeScript support, and comprehensive Storybook documentation.",
      tags: ["React", "TypeScript", "Storybook", "Tailwind"],
      link: "https://aurora-ds.vercel.app",
      github: "https://github.com/Flo-Adikwu/aurora-design-system",
      status: "Live",
      featured: true,
    },
    {
      title: "Esusu Financial Platform",
      description:
        "Built and maintained financial inclusion applications serving immigrant communities with secure transaction solutions.",
      tags: ["React", "Next.js", "Redux", "Web3"],
      status: "Previous Work",
      featured: false,
    },
    {
      title: "Venture Garden Fintech",
      description:
        "Developed impactful visualization tools and reusable components for fintech platforms with focus on performance optimization.",
      tags: ["React", "JavaScript", "D3.js", "Sass"],
      status: "Previous Work",
      featured: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in frontend
            development and design systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              variant={project.featured ? "gradient" : "elevated"}
              padding="none"
              hoverable
              className="h-full flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className={`text-xl font-bold ${
                      project.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <Badge
                    variant={project.status === "Live" ? "success" : "default"}
                    size="sm"
                  >
                    {project.status}
                  </Badge>
                </div>

                <p
                  className={`mb-4 flex-1 ${
                    project.featured ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant={project.featured ? "default" : "primary"}
                      size="sm"
                      shape="pill"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.link && (
                    <Button
                      variant={project.featured ? "outline" : "gradient"}
                      size="sm"
                      onClick={() => window.open(project.link, "_blank")}
                      className="flex-1"
                    >
                      View Project
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open("https://github.com/Flo-Adikwu", "_blank")
            }
          >
            View More on GitHub →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
