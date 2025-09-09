"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    setIsDark(savedTheme !== "light")
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const handlePrint = () => window.print()

  const copyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Enlace copiado: " + window.location.href))
      .catch(() => alert("No se pudo copiar el enlace."))
  }

  const skills = [
    { name: "Automatización (Apps Script / Zapier)", level: 85 },
    { name: "Google Workspace (Sheets/Docs/Drive)", level: 90 },
    { name: "ERP (exposición SAP)", level: 60 },
    { name: "SQL (reportería básica)", level: 55 },
    { name: "HTML • CSS • JavaScript", level: 70 },
    { name: "Ciberseguridad / Networking (bases)", level: 40 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills-section")
    if (skillsSection) observer.observe(skillsSection)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100"
          : "bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
          isDark ? "bg-black/20 border-white/10" : "bg-white/20 border-black/10"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3">
            {/* Brand */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg shadow-teal-500/25 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-semibold tracking-wide truncate">Ezra Tawachi</h1>
                <p className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Gerencia IT | Automatización | Retail
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 sm:gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="flex-1 sm:flex-none text-xs sm:text-sm"
              >
                🌗 Tema
              </Button>
              <Button
                size="sm"
                onClick={handlePrint}
                className="flex-1 sm:flex-none bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-xs sm:text-sm"
              >
                ⬇️ PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 sm:flex-none text-xs sm:text-sm bg-transparent"
              >
                <a href="https://wa.me/50764931573" target="_blank" rel="noreferrer noopener">
                  💬 WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 pb-24">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 text-balance">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Ezra Tawachi
                </span>{" "}
                — construyo sistemas prácticos que ordenan la operación y mejoran la visibilidad del negocio.
              </h2>

              <p
                className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 text-pretty ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Foco en retail y distribución: inventarios, pedidos, reportería e integraciones ligeras en la nube.
                <br className="hidden sm:block" />
                En mi tiempo libre creo{" "}
                <a
                  href="https://www.etsy.com/shop/sheetsbrewery/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  plantillas de Google Sheets en Etsy
                </a>{" "}
                (automatizaciones y dashboards).
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Automatización (Apps Script / Zapier)",
                  "ERP (exposición SAP)",
                  "SQL básico",
                  "HTML • CSS • JS",
                  "Etsy: productos digitales",
                ].map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-black/5 border-black/10 text-slate-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "3+ años", label: "aplicando tecnología al negocio" },
                { value: "10+ flujos", label: "automatizados y documentados" },
                { value: "2 sectores", label: "retail & farmacia" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className={`${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"}`}
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="text-lg sm:text-xl font-bold">{stat.value}</div>
                    <div className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-2">
            <Card
              className={`${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-2">Contacto</h3>
                <p className={`text-sm mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Panamá · disponible híbrido/remoto
                </p>

                <div className="space-y-3">
                  {[
                    { icon: "📧", text: "ezrawachi@gmail.com", href: "mailto:ezrawachi@gmail.com" },
                    { icon: "📱", text: "+507 64931573", href: "tel:+50764931573" },
                    { icon: "💼", text: "LinkedIn", href: "https://www.linkedin.com/in/ezra-tawachi-494ab01ab/" },
                    { icon: "🛒", text: "Etsy: Sheets Brewery", href: "https://www.etsy.com/shop/sheetsbrewery/" },
                    { icon: "🗎", text: "Copiar enlace del CV", href: "#", onClick: copyLink },
                    { icon: "💬", text: "Contactar por WhatsApp", href: "https://wa.me/50764931573" },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <span className="text-base">{contact.icon}</span>
                      {contact.onClick ? (
                        <button
                          onClick={contact.onClick}
                          className="text-teal-400 hover:text-teal-300 transition-colors"
                        >
                          {contact.text}
                        </button>
                      ) : (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener" : undefined}
                          className="text-teal-400 hover:text-teal-300 transition-colors"
                        >
                          {contact.text}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Grid Sections */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Experience */}
          <Card
            className={`xl:col-span-2 ${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}
          >
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-6">Experiencia</h3>

              <div className="relative">
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-teal-400 to-transparent" />

                <div className="space-y-8">
                  {[
                    {
                      title: "Empresa familiar · Retail/Distribución",
                      period: "Noviembre 2021 – Diciembre 2023 · Panamá",
                      achievements: [
                        "Pasé procesos manuales a digitales (pedidos, inventario, cobros) para reducir errores y ahorrar tiempo.",
                        "Inventario en tiempo real con mínimos y alertas para bodega (Zona Libre).",
                        "Sistema de estados por WhatsApp (stickers + registro) para informar a clientes y controlar avisos.",
                      ],
                    },
                    {
                      title: "Farmacia D. Azran · Implementación SAP",
                      period: "2023 – 2024 · Panamá",
                      achievements: [
                        "Participación en reuniones de implementación y soporte a compras y contabilidad.",
                        "Reportes básicos en SQL para visibilidad de notas de crédito y operaciones clave.",
                        "Carga masiva de productos y flujo OCR para subir órdenes de compra en minutos.",
                      ],
                    },
                    {
                      title: "Empresa familiar · Retorno (Operación y automatización)",
                      period: "2025 – Presente · Panamá",
                      achievements: [
                        "Retorno tras cierre de la farmacia para continuar la mejora de procesos.",
                        "Catálogo 1-click para clientes mayoristas (PDF/Excel con fotos y precios).",
                        "Mantenimiento y mejoras de inventario, pedidos y comunicación con clientes.",
                      ],
                    },
                  ].map((job, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg shadow-teal-500/25" />

                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{job.title}</h4>
                        <p className={`text-xs sm:text-sm mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          {job.period}
                        </p>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm leading-relaxed pl-4 relative">
                              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-teal-400" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card
            id="skills-section"
            className={`${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}
          >
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-6">Habilidades</h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className={`h-2.5 rounded-full overflow-hidden ${isDark ? "bg-slate-700" : "bg-slate-200"}`}>
                      <div
                        className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className={`${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4">Logros Destacados</h3>
              <ul className="space-y-3">
                {[
                  "Reducción de entregas incompletas al ordenar inventario y estados de pedido.",
                  "Conciliación de cobros (ATH/transferencias) conectada a estados de pedido.",
                  "Implementación de cargas masivas + OCR en SAP para compras y productos.",
                ].map((achievement, index) => (
                  <li key={index} className="text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {achievement}
                  </li>
                ))}
              </ul>
              <p className={`text-xs mt-4 italic ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                *Agregar métricas cuando las tengas (p. ej., "−30% errores", "procesos en 1/5 del tiempo").
              </p>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card
            className={`xl:col-span-2 ${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}
          >
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-6">Proyectos</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Inventario en la nube",
                    description:
                      "Inventario multi-bodega con mínimos, alertas y pedidos automáticos. Interfaz en Sheets, automatización con Apps Script.",
                    tags: ["Sheets", "Apps Script", "QR"],
                  },
                  {
                    title: "Pedidos + Estados por WhatsApp",
                    description:
                      "Flujo de estados y notificaciones para clientes, con registro interno para trazabilidad.",
                    tags: ["Zapier", "Web", "WhatsApp"],
                  },
                  {
                    title: "Catálogo 1-click para mayoristas",
                    description:
                      "Generación automática de catálogos personalizados (PDF/Excel) con fotos y precios por cliente.",
                    tags: ["Sheets", "Apps Script", "PDF"],
                  },
                  {
                    title: "Productos digitales (Etsy)",
                    description:
                      "Plantillas avanzadas de Google Sheets con automatizaciones para tareas, clientes e inventarios.",
                    tags: ["Sheets", "Apps Script", "Zapier"],
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className={`${isDark ? "bg-slate-700/50 border-slate-600" : "bg-slate-50 border-slate-200"}`}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{project.title}</h4>
                      <p className={`text-sm mb-3 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 text-xs rounded-md ${
                              isDark ? "bg-slate-600/50 text-slate-300" : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className={`${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4">Formación</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Cursos de programación (HTML, CSS, JS, PHP básico). Inicio 2020.",
                  "SQL orientado a reportería (nivel básico/intermedio).",
                  "Fundamentos de ciberseguridad y networking.",
                ].map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-3">Idiomas</h4>
              <ul className="space-y-2">
                {["Español (nativo)", "Inglés (intermedio/avanzado)"].map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* About Me */}
          <Card className={`${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4">Sobre mí</h3>
              <p className="text-sm leading-relaxed mb-4">
                Soy una persona práctica. Me gusta resolver problemas con tecnología que la empresa pueda usar de
                inmediato. Disfruto aprender rápido, documentar lo que hago y trabajar con equipos de ventas, compras y
                bodega para que todo fluya.
              </p>

              <h4 className="font-semibold mb-2">Lo que busco</h4>
              <p className="text-sm leading-relaxed">
                Un rol de Gerencia IT u Operaciones Tech donde pueda ordenar procesos, automatizar y construir tableros
                con datos claros para decidir mejor.
              </p>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className={`${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white/50 border-slate-200"} shadow-xl`}>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4">Disponibilidad</h3>
              <ul className="space-y-2">
                {[
                  "Inicio: inmediato",
                  "Modalidad: híbrido o remoto (Panamá)",
                  "Entrevistas: coordinación por WhatsApp o email",
                ].map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer
          className={`mt-12 pt-8 border-t text-center text-sm ${
            isDark ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-600"
          }`}
        >
          <p>© {new Date().getFullYear()} Ezra Tawachi. Hecho con Next.js + TailwindCSS.</p>
        </footer>
      </main>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/50764931573"
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-teal-500/25 transition-all duration-200 hover:scale-110 z-40"
        aria-label="Contactar por WhatsApp"
      >
        💬
      </a>
    </div>
  )
}
