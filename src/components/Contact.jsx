import React, { useState } from "react";
import { Card, Input, Button, Badge } from "aurora-design-system";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:florenceadikwu@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Flo-Adikwu",
      icon: "💻",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/florenceadikwu1",
      icon: "💼",
    },
    {
      name: "Email",
      url: "mailto:florenceadikwu@gmail.com",
      icon: "📧",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="gradient" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600">
            I'm currently available for full-time opportunities and freelance
            projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated" padding="lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card variant="gradient" padding="lg">
              <h3 className="text-2xl font-bold mb-2">Quick Contact</h3>
              <p className="text-white/90 mb-4">
                Prefer to reach out directly? Drop me an email!
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  (window.location.href = "mailto:florenceadikwu@gmail.com")
                }
                className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                florenceadikwu@gmail.com
              </Button>
            </Card>

            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(link.url, "_blank")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="font-medium text-gray-900">
                      {link.name}
                    </span>
                    <span className="ml-auto text-gray-400">→</span>
                  </button>
                ))}
              </div>
            </Card>

            <Card variant="outlined" padding="md">
              <div className="flex items-center gap-3">
                <Badge variant="success" dot size="lg">
                  Available
                </Badge>
                <div>
                  <div className="font-semibold text-gray-900">
                    Open to Opportunities
                  </div>
                  <div className="text-sm text-gray-600">
                    Full-time roles & freelance projects
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
