"use client";

import { useEffect, useMemo, useState } from "react";
import { CONFIG, mapSrc, type Lang } from "@/lib/config";
import { getDict } from "@/lib/i18n";
import {
  IconBriefcase,
  IconClose,
  IconDoc,
  IconHelp,
  IconHome,
  IconList,
  IconMail,
  IconMenu,
  IconPhone,
  IconRecv,
  IconSend,
  IconWhatsApp,
} from "./Icons";

const STORAGE_KEY = "kavi-lang";

const NAV = [
  { href: "#ust", key: "navHome", Icon: IconHome },
  { href: "#hizmetler", key: "navServices", Icon: IconBriefcase },
  { href: "#nasil", key: "navHow", Icon: IconList },
  { href: "#yazilar", key: "navArticles", Icon: IconDoc },
  { href: "#sss", key: "navFaq", Icon: IconHelp },
  { href: "#iletisim", key: "navContact", Icon: IconMail },
] as const;

function Wordmark({ sub }: { sub: string }) {
  return (
    <a className="wordmark" href="#ust">
      <span className="wordmark-script">Kavi</span>
      <span className="wordmark-text">
        <span className="wordmark-name">KAVİ İLETİŞİM</span>
        <span className="wordmark-sub">{sub}</span>
      </span>
    </a>
  );
}

function Curves() {
  return (
    <div className="curves" aria-hidden="true">
      <svg viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice">
        <circle cx="620" cy="220" r="220" fill="none" stroke="#e4e0d6" strokeWidth="1.2" />
        <circle cx="620" cy="220" r="280" fill="none" stroke="#ece8e0" strokeWidth="1" />
        <circle cx="80" cy="760" r="200" fill="none" stroke="#e6e2d8" strokeWidth="1" />
        <path d="M-20 520 C 180 420, 300 680, 820 540" fill="none" stroke="#e8e4dc" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function Site() {
  const [lang, setLang] = useState<Lang>("tr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useMemo(() => getDict(lang), [lang]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "tr" || saved === "ru" || saved === "en") setLang(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const telHref = `tel:${CONFIG.phoneTel}`;

  const LangSwitch = () => (
    <div className="lang-row" role="group" aria-label="Language">
      {(["tr", "ru", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          data-lang={code}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <a className="skip" href="#icerik">
        {t.skip}
      </a>

      <header className="mobile-header">
        <Wordmark sub={t.brandSub} />
        <button
          className="icon-btn"
          type="button"
          aria-label={t.menuToggle}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <IconMenu />
        </button>
      </header>

      {menuOpen && (
        <div className="backdrop" onClick={closeMenu} aria-hidden="true" />
      )}

      <aside className={`sidebar${menuOpen ? " open" : ""}`} aria-label={t.menu}>
        <div className="sidebar-brand">
          <Wordmark sub={t.brandSub} />
        </div>
        <nav>
          <ul className="nav-list">
            {NAV.map(({ href, key, Icon }) => (
              <li key={key}>
                <a href={href} onClick={closeMenu}>
                  <Icon />
                  {t[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="social-row">
          <a className="icon-btn" href={CONFIG.whatsappUrl} aria-label="WhatsApp">
            <IconWhatsApp />
          </a>
          <a className="icon-btn" href={telHref} aria-label={t.labelPhone}>
            <IconPhone />
          </a>
        </div>
        <LangSwitch />
        <p className="sidebar-foot">{t.copyright}</p>
      </aside>

      {menuOpen && (
        <button
          className="icon-btn menu-close"
          type="button"
          aria-label={t.menuClose}
          onClick={closeMenu}
        >
          <IconClose />
        </button>
      )}

      <main className="main" id="icerik">
        <section className="hero" id="ust">
          <Curves />
          <div className="hero-inner">
            <h1 className="hero-name">KAVİ İLETİŞİM</h1>
            <p className="hero-role">{t.heroRole}</p>
            <p className="hero-lede">{t.heroLede}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={telHref}>
                {t.ctaCall}
              </a>
              <a className="btn btn-ghost" href={CONFIG.whatsappUrl}>
                {t.ctaWhatsapp}
              </a>
              <a className="btn btn-ghost" href="#iletisim">
                {t.ctaMap}
              </a>
            </div>
            <div className="meta">
              <span>
                <strong>{t.labelAddress}:</strong> {CONFIG.address}
              </span>
              <span>
                <strong>{t.labelHours}:</strong> {t.hours}
              </span>
            </div>
          </div>
          <a className="scroll-hint" href="#hizmetler">
            <span className="scroll-pill" />
            {t.scrollDown}
          </a>
        </section>

        <section className="section" id="hizmetler">
          <div className="wrap">
            <p className="eyebrow">{t.eyebrowServices}</p>
            <h2>{t.servicesTitle}</h2>
            <hr className="title-rule" />
            <p className="lead">{t.servicesIntro}</p>
            <div className="grid-2">
              <article className="card">
                <div className="icon-badge">
                  <IconSend />
                </div>
                <h3>{t.sendTitle}</h3>
                <p>{t.sendText}</p>
              </article>
              <article className="card">
                <div className="icon-badge">
                  <IconRecv />
                </div>
                <h3>{t.recvTitle}</h3>
                <p>{t.recvText}</p>
              </article>
            </div>

            <p className="eyebrow" style={{ marginTop: 56 }}>
              {t.badgePartner}
            </p>
            <h2>{t.companiesTitle}</h2>
            <hr className="title-rule" />
            <p className="lead">{t.companiesIntro}</p>
            <div className="grid-cos">
              {[
                ["KoronaPay", t.koronapayNote],
                ["Ria", t.companyGeneric],
                ["UPT", t.companyGeneric],
                ["Kwikpay", t.companyGeneric],
                ["MoneyGram", t.companyGeneric],
                ["Intel Express", t.companyGeneric],
              ].map(([name, note]) => (
                <article className="co-card" key={name}>
                  <span className="badge">{t.badgePartner}</span>
                  <h3>{name}</h3>
                  <p>{note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="nasil">
          <div className="wrap split">
            <div>
              <p className="eyebrow">{t.eyebrowHow}</p>
              <h2>{t.howTitle}</h2>
              <hr className="title-rule" />
              <p className="lead">{t.howIntro}</p>
              <div className="steps">
                {[
                  ["01", t.step1Title, t.step1Text],
                  ["02", t.step2Title, t.step2Text],
                  ["03", t.step3Title, t.step3Text],
                ].map(([n, title, text]) => (
                  <div className="step" key={n}>
                    <div className="step-num">{n}</div>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">{t.docsTitle}</p>
              <h2>{t.docsTitle}</h2>
              <hr className="title-rule" />
              <p className="lead">{t.docsIntro}</p>
              <ul className="doc-list">
                <li>
                  <strong>{t.doc1Title}</strong>
                  {t.doc1Text}
                </li>
                <li>
                  <strong>{t.doc2Title}</strong>
                  {t.doc2Text}
                </li>
                <li>
                  <strong>{t.doc3Title}</strong>
                  {t.doc3Text}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="yazilar">
          <div className="wrap">
            <p className="eyebrow">{t.eyebrowArticles}</p>
            <h2>{t.articlesTitle}</h2>
            <hr className="title-rule" />
            <p className="lead">{t.articlesIntro}</p>
            <div className="grid-3">
              {[
                ["a1", t.art1Title, t.art1Text],
                ["a2", t.art2Title, t.art2Text],
                ["a3", t.art3Title, t.art3Text],
              ].map(([cls, title, text]) => (
                <article className="card article-card" key={cls}>
                  <div className={`article-art ${cls}`} />
                  <div className="article-body">
                    <p className="article-kicker">{t.articleLabel}</p>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="sss">
          <div className="wrap">
            <p className="eyebrow">{t.eyebrowFaq}</p>
            <h2>{t.faqTitle}</h2>
            <hr className="title-rule" />
            <p className="lead">{t.faqIntro}</p>
            <div className="faq">
              {[
                [t.faq1Q, t.faq1A, true],
                [t.faq2Q, t.faq2A, false],
                [t.faq3Q, t.faq3A, false],
                [t.faq4Q, t.faq4A, false],
                [t.faq5Q, t.faq5A, false],
              ].map(([q, a, open], i) => (
                <details key={i} open={Boolean(open)}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="iletisim">
          <div className="wrap">
            <p className="eyebrow">{t.eyebrowContact}</p>
            <h2>{t.contactTitle}</h2>
            <hr className="title-rule" />
            <p className="lead">{t.contactIntro}</p>
            <div className="contact-grid">
              <div className="card contact-list">
                <div className="contact-item">
                  <h3>{t.labelPhone}</h3>
                  <p>
                    <a href={telHref}>{CONFIG.phoneDisplay}</a>
                  </p>
                </div>
                <div className="contact-item">
                  <h3>WhatsApp</h3>
                  <p>
                    <a href={CONFIG.whatsappUrl}>{t.ctaWhatsappWrite}</a>
                  </p>
                </div>
                <div className="contact-item">
                  <h3>{t.labelHours}</h3>
                  <p>{t.hours}</p>
                </div>
                <div className="contact-item">
                  <h3>{t.labelAddress}</h3>
                  <p>{CONFIG.address}</p>
                  <p>{t.directions}</p>
                </div>
              </div>
              <div className="map-wrap">
                <iframe
                  title="KAVİ İLETİŞİM haritası"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapSrc(lang)}
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="page-foot">
          <span>{t.copyright}</span>
          <span>{t.footerNote}</span>
        </footer>
      </main>
    </>
  );
}
