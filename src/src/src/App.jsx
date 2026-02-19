import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, FileDown } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      profile:
        "Trusted finance advisor for private clients, delivering tailored wealth strategies, retirement planning and financing solutions with Swiss precision, discretion and long-term focus.",
      experience: [
        {
          role: "Finance Advisor",
          company: "Private Banking / Retail Banking",
          period: "2023 – Present",
          description:
            "Holistic advisory for private clients covering investments, pension planning and structured financing solutions.",
        },
        {
          role: "Client Advisor",
          company: "Retail Banking",
          period: "2021 – 2023",
          description:
            "Development of client portfolios, identification of wealth growth opportunities and execution of tailored strategies.",
        },
        {
          role: "Banking Apprentice",
          company: "Swiss Banking Sector",
          period: "2018 – 2021",
          description:
            "Rotations in advisory, contact center and credit office with strong client focus and analytical performance.",
        },
      ],
    },
    DE: {
      profile:
        "Vertrauensvoller Finanzberater für Privatkunden mit Fokus auf Vermögensaufbau, Vorsorgeplanung und strukturierte Finanzierungslösungen – präzise, diskret und langfristig ausgerichtet.",
      experience: [
        {
          role: "Finanzberater",
          company: "Private Banking / Retail Banking",
          period: "2023 – Heute",
          description:
            "Ganzheitliche Beratung für Privatkunden in den Bereichen Anlagen, Vorsorge und Finanzierung.",
        },
        {
          role: "Kundenberater",
          company: "Retail Banking",
          period: "2021 – 2023",
          description:
            "Aufbau und Entwicklung von Kundenportfolios sowie Identifikation von Wachstumspotenzialen.",
        },
        {
          role: "Banklehre",
          company: "Schweizer Bankensektor",
          period: "2018 – 2021",
          description:
            "Einsätze in Beratung, Contact Center und Kreditbereich mit starkem Kundenfokus.",
        },
      ],
    },
  };

  return (
    <div className="bg-white text-gray-900 font-light tracking-wide">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-6 right-6 flex gap-2 text-xs">
          <button
            onClick={() => setLang("EN")}
            className={`px-2 py-1 border ${
              lang === "EN" ? "border-gray-900" : "border-gray-300 text-gray-400"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("DE")}
            className={`px-2 py-1 border ${
              lang === "DE" ? "border-gray-900" : "border-gray-300 text-gray-400"
            }`}
          >
            DE
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6"
        >
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.18em" }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-extralight uppercase"
          >
            Zoran Arsic
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-px bg-gray-900 mx-auto my-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-sm md:text-base text-gray-600"
          >
            Wealth Advisory · Pension Planning · Financing
          </motion.p>
        </motion.div>
      </section>

      {/* PROFILE */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-gray-200">
        <h2 className="text-xs tracking-[0.35em] text-gray-500 mb-10">PROFILE</h2>
        <p className="text-base leading-relaxed text-gray-700">{content[lang].profile}</p>
      </section>

      {/* EXPERIENCE */}
      <section className="border-t border-gray-200 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs tracking-[0.35em] text-gray-500 mb-16">EXPERIENCE</h2>
          <div className="space-y-14">
            {content[lang].experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-3 gap-6"
              >
                <div className="text-xs tracking-[0.25em] text-gray-400">{item.period}</div>
                <div className="md:col-span-2">
                  <h3 className="text-base font-medium text-gray-900">{item.role}</h3>
                  <p className="text-sm text-gray-500">{item.company}</p>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETENCIES */}
      <section className="border-t border-gray-200 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs tracking-[0.35em] text-gray-500 mb-16">COMPETENCIES</h2>
          <div className="grid md:grid-cols-2 gap-y-6 gap-x-16 text-sm text-gray-700">
            {[
              "Wealth Management",
              "Pension Planning",
              "Financing",
              "Investment Advisory",
              "Risk Structuring",
              "Client Relationship Management",
            ].map((skill, index) => (
              <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                <span>{skill}</span>
                <span className="text-gray-400">●●●●○</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-t border-gray-200 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs tracking-[0.35em] text-gray-500 mb-12">EDUCATION & CERTIFICATION</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li>Certified Finance Advisor IAF (in progress)</li>
            <li>Swiss Banking Apprenticeship Diploma</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-gray-200 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs tracking-[0.35em] text-gray-500 mb-12">CONTACT</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-gray-700">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} /> zoran@example.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} /> +41 XX XXX XX XX
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={16} /> linkedin.com/in/zoran-arsic
              </div>
            </div>
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 text-xs tracking-[0.25em] hover:bg-gray-900 hover:text-white transition">
              <FileDown size={16} /> CV PDF
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-400 pb-12">
        © {new Date().getFullYear()} Zoran Arsic · Switzerland
      </footer>
    </div>
  );
}
