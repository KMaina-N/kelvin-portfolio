"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      href: "mailto:kelvinmaina547@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kelvin-maina-ke-hr/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/KMaina-N", // replace with your GitHub if different
      icon: <FaGithub className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 md:px-28">
      <div className="max-w-3xl mx-auto glass p-10 rounded-3xl text-center">
        <h3 className="text-3xl font-bold mb-6">Let’s build something together</h3>
        <p className="text-gray-300 mb-8">
          Available for freelance & full-time roles. I respond quickly.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-300">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium hover:text-white transition-colors duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span className="text-xl">{c.icon}</span>
              <span>{c.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
