import React from "react";
import { Badge } from "aurora-design-system";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="text-xl font-bold">
                &lt;/&gt; Florence Adikwu
              </span>
              <Badge variant="gradient" size="sm">
                Built with Aurora
              </Badge>
            </div>
            <p className="text-gray-400">
              Frontend Engineer • Design Systems • Web3
            </p>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <a
              href="https://github.com/Flo-Adikwu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/florenceadikwu1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://aurora-ds.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Aurora Docs
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Florence Adikwu. All rights reserved.</p>
          <p className="mt-2">
            Built with{" "}
            <a
              href="https://aurora-ds.vercel.app"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aurora Design System
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
