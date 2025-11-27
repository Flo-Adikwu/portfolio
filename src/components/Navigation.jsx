import React from "react";
import { Button, Badge } from "aurora-design-system";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-white text-xl font-bold">
                &lt;/&gt; FLORENCE ADIKWU
              </span>
              <Badge variant="gradient" size="sm">
                Available
              </Badge>
            </div>
            <span className="text-gray-400 text-sm">Frontend Engineer</span>
          </div>

          <Button
            variant="gradient"
            size="md"
            onClick={() =>
              (window.location.href = "mailto:florenceadikwu@gmail.com")
            }
          >
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
