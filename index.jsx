import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight, Globe } from "lucide-react";

const casinos = [
  {
    name: "Stake",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Stake.com_logo.svg/512px-Stake.com_logo.svg.png",
    bonusDe: "Willkommensbonus bis 1000€",
    bonusEn: "Welcome bonus up to €1000",
    tagDe: "Crypto Casino",
    tagEn: "Crypto casino",
    link: "https://stake.com",
  },
  {
    name: "BitStarz",
    logo: "https://bitstarz.com/wp-content/themes/bitstarz/assets/img/logo.svg",
    bonusDe: "Bonus bis 500€ + Freispiele",
    bonusEn: "Bonus up to €500 + free spins",
    tagDe: "MGA Lizenz",
    tagEn: "MGA license",
    link: "https://bitstarz.com",
  },
  {
    name: "PlayOJO",
    logo: "https://www.playojo.com/assets/img/logo.svg",
    bonusDe: "Freispiele ohne Umsatzbedingungen",
    bonusEn: "Free spins with no wagering",
    tagDe: "MGA Lizenz",
    tagEn: "MGA license",
    link: "https://playojo.com",
  },
  {
    name: "Wildz",
    logo: "https://www.wildz.com/assets/logo.svg",
    bonusDe: "Bonus bis 500€",
    bonusEn: "Bonus up to €500",
    tagDe: "MGA Lizenz",
    tagEn: "MGA license",
    link: "https://wildz.com",
  },
];

export default function CasinoComparisonPage() {
  const [lang, setLang] = useState<"de" | "en">("de");

  const t = {
    de: {
      title: "Online Casino Vergleich 2026",
      subtitle: "Vergleiche internationale Online Casinos nach Bonus, Auszahlung und Bewertung.",
      pill1: "Bonus Angebote",
      pill2: "Schnelle Auszahlung",
      pill3: "Malta Lizenz (MGA)",
      bonus: "Bonus",
      benefits: "Vorteile",
      fast: "✓ Schnelle Auszahlung",
      popular: "✓ Beliebt bei Spielern",
      cta: "Jetzt spielen",
      sectionTitle: "Internationale Online Casinos vergleichen",
      sectionText: "Nur für Personen ab 18 Jahren. Glücksspiel kann süchtig machen. Bitte verantwortungsvoll spielen.",
      notice: "Hinweis:",
      noticeText: "Diese Vergleichsseite richtet sich an internationale Nutzer. Glücksspiel ist erst ab 18 Jahren erlaubt. Bitte spiele verantwortungsvoll.",
      help: "Informationen zu Hilfe bei Spielsucht unter:",
      imprint: "Impressum",
      privacy: "Datenschutz",
      disclaimer: "Disclaimer",
    },
    en: {
      title: "Online Casino Comparison 2026",
      subtitle: "Compare international online casinos by bonus, payouts and rating.",
      pill1: "Bonus offers",
      pill2: "Fast payouts",
      pill3: "Malta license (MGA)",
      bonus: "Bonus",
      benefits: "Benefits",
      fast: "✓ Fast payouts",
      popular: "✓ Popular with players",
      cta: "Play now",
      sectionTitle: "Compare international online casinos",
      sectionText: "18+ only. Gambling can be addictive. Please play responsibly.",
      notice: "Notice:",
      noticeText: "This comparison page is intended for international users. Gambling is allowed for adults only. Please play responsibly.",
      help: "Information on gambling support:",
      imprint: "Imprint",
      privacy: "Privacy",
      disclaimer: "Disclaimer",
    },
  }[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-b from-white to-slate-100 py-16 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-end mb-6">
            <div className="inline-flex items-center gap-2 bg-white border rounded-2xl p-1 shadow-sm">
              <Globe className="w-4 h-4 ml-2 text-slate-500" />
              <button
                onClick={() => setLang("de")}
                className={`px-3 py-1.5 rounded-xl text-sm ${lang === "de" ? "bg-slate-900 text-white" : "text-slate-600"}`}
              >
                DE
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-xl text-sm ${lang === "en" ? "bg-slate-900 text-white" : "text-slate-600"}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              {t.title}
            </motion.h1>

            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <div className="bg-white border rounded-full px-4 py-2 text-sm">✓ {t.pill1}</div>
              <div className="bg-white border rounded-full px-4 py-2 text-sm">✓ {t.pill2}</div>
              <div className="bg-white border rounded-full px-4 py-2 text-sm">✓ {t.pill3}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-6">
          {casinos.map((casino, i) => (
            <Card key={i} className="rounded-3xl border-0 shadow-lg">
              <CardContent className="p-6 md:p-8 grid md:grid-cols-4 gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border flex items-center justify-center overflow-hidden shrink-0">
                    <img src={casino.logo} alt={casino.name} className="max-w-[42px] max-h-[42px] object-contain" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{casino.name}</div>
                  <div className="flex items-center gap-1 mt-2 text-yellow-500">
                      <Star /> <Star /> <Star /> <Star /> <Star />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-500">{t.bonus}</div>
                  <div className="font-semibold">{lang === "de" ? casino.bonusDe : casino.bonusEn}</div>
                </div>

                <div>
                  <div className="text-sm text-slate-500">{t.benefits}</div>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>{t.fast}</li>
                    <li>✓ {lang === "de" ? casino.tagDe : casino.tagEn}</li>
                    <li>{t.popular}</li>
                  </ul>
                </div>

                <div className="text-right">
                  <Button className="rounded-2xl" asChild>
                    <a href={casino.link} target="_blank" rel="noreferrer">
                      {t.cta}
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <Card className="rounded-3xl bg-slate-900 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold">{t.sectionTitle}</h3>
            <p className="text-slate-300 mt-2">{t.sectionText}</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="text-sm text-slate-500 leading-6 bg-white border rounded-2xl p-6">
          <strong>{t.notice}</strong> {t.noticeText} {t.help}{" "}
          <a href="https://www.bzga.de" className="underline">
            bzga.de
          </a>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 flex justify-between flex-wrap gap-4">
          <span>© 2026 Casino Comparison</span>
          <div className="flex gap-4">
            <a href="#">{t.imprint}</a>
            <a href="#">{t.privacy}</a>
            <a href="#">{t.disclaimer}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
