import { motion } from "framer-motion";

const Section = ({
  title,
  subtitle,
  content,
}: {
  title: string;
  subtitle?: string;
  content: string;
}) => (
  <section
    className="
      h-screen w-full snap-start flex items-center justify-center
      px-6
    "
  >
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl text-center"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
        {title}
      </h2>

      {subtitle && <p className="mt-4 text-xl text-slate-300">{subtitle}</p>}

      <p className="mt-8 text-slate-400 text-lg leading-relaxed">{content}</p>
    </motion.div>
  </section>
);

export default function MainPage() {
  return (
    <div
      className="
        h-screen overflow-y-scroll snap-y snap-mandatory
        bg-gradient-to-br from-[#050510] via-[#0b1225] to-[#020617]
      "
    >
      {/* ===== HERO ===== */}
      <section
        className="
          h-screen snap-start flex items-center justify-center text-center px-6
          relative overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute -top-40 left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-200px] right-20 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            Sasipha Noodang
          </h1>

          <p className="mt-6 text-2xl text-slate-300">Frontend Developer</p>

          <p className="mt-2 text-slate-400">React • Tailwind • FastAPI</p>

          <p className="mt-16 text-slate-500 animate-bounce">Scroll ↓</p>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <Section
        title="About Me"
        content="I am a frontend developer who loves building modern, clean, and high-performance web applications. I focus on smooth user experience, beautiful UI, and scalable architecture."
      />

      {/* ===== EXPERIENCE ===== */}
      <Section
        title="Experience"
        subtitle="Real-world projects & systems"
        content="Worked on dashboards, automation tools, full-stack systems, and data-driven applications using React, FastAPI, and modern web technologies."
      />

      {/* ===== PROJECTS ===== */}
      <Section
        title="Projects"
        subtitle="Things I've built"
        content="Interactive Resume Website, Analytics Dashboard, Selenium Automation Bot, and several modern web applications."
      />

      {/* ===== END ===== */}
      <section className="h-screen snap-start flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Let's Work Together 🚀
          </h2>

          <p className="mt-6 text-slate-400">
            Thank you for scrolling through my resume.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
