import React, { useState } from "react";
import { POLICIES_DATA } from "./PoliciesData";
import "./styles.css";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="shg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff00ff" />
          <stop offset="100%" stopColor="#00ffff" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M32 4L8 14v18c0 14 10 26 24 30 14-4 24-16 24-30V14L32 4z"
        stroke="url(#shg)"
        strokeWidth="2.5"
        fill="rgba(10,12,40,0.85)"
        filter="url(#glow)"
      />
      <path
        d="M22 32l6 6 14-14"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="26" y="22" width="12" height="14" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function SparklineChart() {
  const pts = "4,42 14,28 22,36 30,18 38,24 46,12 54,20 60,8";
  return (
    <svg className="cyber-spark" viewBox="0 0 64 48" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="#00ffff"
        strokeWidth="1.5"
        points={pts}
        style={{ filter: "drop-shadow(0 0 4px #00ffff)" }}
      />
      <polygon fill="url(#sg)" points={`${pts} 60,48 4,48`} />
    </svg>
  );
}

function BarMini() {
  const heights = [40, 72, 55, 88, 48, 65];
  const colors = ["#00ffff", "#ff00ff", "#7a00ff", "#00ffff", "#ff00ff", "#7a00ff"];
  return (
    <div className="cyber-bar-chart" aria-hidden>
      {heights.map((h, i) => (
        <div
          key={i}
          className="cyber-bar"
          style={{
            height: `${h}%`,
            background: `linear-gradient(180deg, ${colors[i]}, transparent)`,
            color: colors[i],
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: "",
    preparer: "",
    preparerRole: "",
    date: "",
    logo: null,
    policyVersion: "1.0.0",
  });
  const [approvers, setApprovers] = useState([{ name: "", role: "" }]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const addApprover = () =>
    setApprovers([...approvers, { name: "", role: "" }]);

  const t = {
    en: {
      title: "Policy Generation Tool",
      next: "Next Step",
      back: "Back",
      generate: "Generate Report",
      preparerText: "This policy was created by",
      tableTitle: "Approval & Signature Table",
      purposeTitle: "Policy Purpose",
      scopeTitle: "Policy Scope",
      statementsTitle: "Policy Statements",
      welcome: "Welcome",
      infoSec: "Information Security Policy",
      isoRef: "ECC-1-2 / ISO 27001",
      analytical: "Analytical framework aligned with NCA · NIST CSF",
      step1: "Details",
      step2: "Policies",
      step3: "Report",
      cyberDash: "CYBER OPS",
    },
    ar: {
      title: "أداة توليد السياسات",
      next: "الخطوة التالية",
      back: "رجوع",
      generate: "توليد التقرير",
      preparerText: "تم إنشاء هذه السياسة بواسطة",
      tableTitle: "جدول الاعتماد والتوقيع الرسمي",
      purposeTitle: "الغرض من السياسة",
      scopeTitle: "نطاق السياسة",
      statementsTitle: "بنود السياسة",
      welcome: "مرحباً",
      infoSec: "سياسة أمن المعلومات",
      isoRef: "ECC-1-2 / ISO 27001",
      analytical: "إطار تحليلي متوافق مع NCA · NIST CSF",
      step1: "البيانات",
      step2: "السياسات",
      step3: "التقرير",
      cyberDash: "لوحة العمليات",
    },
  }[lang];

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div className="cyber-root" dir={dir}>
      <div className="cyber-bg" aria-hidden>
        <div className="cyber-grid" />
        <div className="cyber-circuits" />
      </div>
      <div className="cyber-scanline" aria-hidden />

      <header className="cyber-header no-print">
        <div className="cyber-brand">
          <div className="cyber-brand-mark">
            <ShieldIcon />
          </div>
          <div className="cyber-title-block">
            <h1>{t.infoSec}</h1>
            <p className="subtitle">
              {t.title} · {t.isoRef}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="cyber-lang-btn"
        >
          {lang === "en" ? "العربية" : "English"}
        </button>
      </header>

      <main
        className={`cyber-main ${step !== 3 ? "has-sidebar" : ""}`}
      >
        <div className="cyber-content">
          {step !== 3 && (
            <>
              <section className="cyber-hero no-print">
                <div className="cyber-hero-inner">
                  <div className="cyber-shield-wrap">
                    <ShieldIcon />
                  </div>
                  <p className="cyber-welcome-text">{t.welcome}</p>
                </div>
                <div className="cyber-hero-meta">
                  <span>{t.isoRef}</span>
                  <span>{t.analytical}</span>
                </div>
              </section>

              <nav className="cyber-steps no-print" aria-label="Steps">
                <div className={`cyber-step ${step === 1 ? "active" : ""} ${step > 1 ? "done" : ""}`}>
                  <span className="cyber-step-num">1</span>
                  {t.step1}
                </div>
                <div className={`cyber-step ${step === 2 ? "active" : ""} ${step > 2 ? "done" : ""}`}>
                  <span className="cyber-step-num">2</span>
                  {t.step2}
                </div>
                <div className={`cyber-step ${step === 3 ? "active" : ""}`}>
                  <span className="cyber-step-num">3</span>
                  {t.step3}
                </div>
              </nav>
            </>
          )}

          {step === 1 && (
            <div className="cyber-panel">
              <h2>
                {lang === "en"
                  ? "Step 1: Report Details"
                  : "الخطوة 1: تفاصيل التقرير"}
              </h2>
              <label className="cyber-field-label">
                {lang === "en" ? "Organization logo" : "شعار الجهة"}
              </label>
              <input
                type="file"
                accept="image/*"
                className="cyber-input"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () =>
                      setFormData({ ...formData, logo: reader.result });
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <input
                type="text"
                placeholder="Company Name / اسم الشركة"
                className="cyber-input"
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Preparer Name / اسم الكاتب"
                className="cyber-input"
                onChange={(e) =>
                  setFormData({ ...formData, preparer: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Preparer Role / المنصب"
                className="cyber-input"
                onChange={(e) =>
                  setFormData({ ...formData, preparerRole: e.target.value })
                }
              />
              <hr className="cyber-divider" />
              <h3>{lang === "en" ? "Approvers" : "الموافقون"}</h3>
              {approvers.map((app, idx) => (
                <div key={idx} className="cyber-approver-row">
                  <input
                    type="text"
                    placeholder="Name"
                    className="cyber-input"
                    onChange={(e) => {
                      const newApps = [...approvers];
                      newApps[idx].name = e.target.value;
                      setApprovers(newApps);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    className="cyber-input"
                    onChange={(e) => {
                      const newApps = [...approvers];
                      newApps[idx].role = e.target.value;
                      setApprovers(newApps);
                    }}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addApprover}
                className="cyber-btn cyber-btn-ghost"
              >
                + {lang === "en" ? "Add Another Approver" : "إضافة موافق"}
              </button>
              <label className="cyber-field-label">
                {lang === "en" ? "Effective date" : "التاريخ"}
              </label>
              <input
                type="date"
                className="cyber-input"
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setStep(2)}
                className="cyber-btn cyber-btn-primary"
              >
                {t.next}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="cyber-panel">
              <h2>
                {lang === "en"
                  ? "Step 2: Choose Policies"
                  : "الخطوة 2: اختر السياسات"}
              </h2>
              <div className="cyber-policy-scroll">
                {Object.keys(POLICIES_DATA).map((key) => (
                  <div
                    key={key}
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setSelectedKeys((prev) =>
                        prev.includes(key)
                          ? prev.filter((k) => k !== key)
                          : [...prev, key]
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedKeys((prev) =>
                          prev.includes(key)
                            ? prev.filter((k) => k !== key)
                            : [...prev, key]
                        );
                      }
                    }}
                    className={`cyber-policy-item ${selectedKeys.includes(key) ? "selected" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedKeys.includes(key)}
                      readOnly
                      tabIndex={-1}
                    />
                    <span>{POLICIES_DATA[key][lang].title}</span>
                  </div>
                ))}
              </div>
              <label className="cyber-field-label">
                {lang === "en" ? "Policy Version" : "رقم نسخة السياسة"}
              </label>
              <input
                type="text"
                value={formData.policyVersion}
                onChange={(e) =>
                  setFormData({ ...formData, policyVersion: e.target.value })
                }
                className="cyber-input"
              />
              <div className="cyber-btn-row">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="cyber-btn cyber-btn-secondary"
                >
                  {t.back}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="cyber-btn cyber-btn-primary"
                  disabled={selectedKeys.length === 0}
                >
                  {t.generate}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div id="final-report" className="cyber-report-wrap">
              <div className="report-header-row">
                {formData.logo && (
                  <img
                    src={formData.logo}
                    style={{ height: "80px" }}
                    alt=""
                  />
                )}
                <div style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                  {selectedKeys.length > 0 && (
                    <h1 style={{ fontSize: "22px", margin: "0", color: "#1a237e" }}>
                      {POLICIES_DATA[selectedKeys[0]][lang].title.replace(
                        /^\d+\.\s*/,
                        ""
                      )}
                    </h1>
                  )}
                  <p style={{ fontSize: "14px", margin: "5px 0 0 0", color: "#666" }}>
                    {lang === "ar" ? "إصدار رقم: " : "Version: "}{" "}
                    {formData.policyVersion}
                  </p>
                </div>
              </div>

              <div className="report-company-block">
                <h2 style={{ margin: 0, color: "#1a237e" }}>
                  {formData.company}
                </h2>
                <p>
                  <strong>Date:</strong> {formData.date}
                </p>
              </div>

              <div className="preparer-box">
                <p style={{ fontSize: "18px", margin: 0 }}>
                  <strong>{t.preparerText}: </strong>
                  <span style={{ color: "#6c5ce7", fontWeight: "bold" }}>
                    {formData.preparer}
                  </span>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    {" "}
                    — ({formData.preparerRole})
                  </span>
                </p>
              </div>

              <h2
                style={{
                  textAlign: "center",
                  marginTop: "40px",
                  color: "#1a237e",
                }}
              >
                {t.tableTitle}
              </h2>
              <table>
                <thead>
                  <tr>
                    <th>{lang === "en" ? "Full Name" : "الاسم الكامل"}</th>
                    <th>{lang === "en" ? "Position" : "المنصب/الرتبة"}</th>
                    <th>{lang === "en" ? "Signature" : "التوقيع"}</th>
                  </tr>
                </thead>
                <tbody>
                  {approvers.map((app, i) => (
                    <tr key={i}>
                      <td>{app.name}</td>
                      <td>{app.role}</td>
                      <td style={{ height: "60px" }} />
                    </tr>
                  ))}
                </tbody>
              </table>

              {selectedKeys.map((key) => (
                <div
                  key={key}
                  style={{
                    marginTop: "50px",
                    pageBreakInside: "avoid",
                    textAlign: lang === "ar" ? "right" : "left",
                  }}
                >
                  <h3
                    style={{
                      color: "#1a237e",
                      fontSize: "24px",
                      borderBottom: "1px solid #eee",
                      paddingBottom: "10px",
                    }}
                  >
                    {POLICIES_DATA[key][lang].title.replace(/^\d+\.\s*/, "")}
                  </h3>

                  {POLICIES_DATA[key][lang].purpose && (
                    <div style={{ marginTop: "15px" }}>
                      <h4 style={{ color: "#333", marginBottom: "5px" }}>
                        {t.purposeTitle}:
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#444",
                          lineHeight: "1.6",
                        }}
                      >
                        {POLICIES_DATA[key][lang].purpose}
                      </p>
                    </div>
                  )}

                  {POLICIES_DATA[key][lang].scope && (
                    <div style={{ marginTop: "15px" }}>
                      <h4 style={{ color: "#333", marginBottom: "5px" }}>
                        {t.scopeTitle}:
                      </h4>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#444",
                          lineHeight: "1.6",
                        }}
                      >
                        {POLICIES_DATA[key][lang].scope}
                      </p>
                    </div>
                  )}

                  <p style={{ fontSize: "13px", color: "#888", marginTop: "15px" }}>
                    Reference: {POLICIES_DATA[key][lang].ref}
                  </p>

                  <h4
                    style={{
                      color: "#333",
                      marginTop: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    {t.statementsTitle}:
                  </h4>
                  <ul
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      paddingRight: lang === "ar" ? "20px" : "0",
                      paddingLeft: lang === "en" ? "20px" : "0",
                    }}
                  >
                    {POLICIES_DATA[key][lang].items.map((it, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="cyber-report-actions no-print">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="cyber-btn-print"
                >
                  Print Report (PDF)
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="cyber-btn-back-report"
                >
                  {lang === "en" ? "Go Back" : "رجوع"}
                </button>
              </div>
            </div>
          )}
        </div>

        {step !== 3 && (
          <aside className="cyber-sidebar no-print" aria-hidden>
            <div className="cyber-widget">
              <p className="cyber-widget-title">{t.cyberDash}</p>
              <SparklineChart />
            </div>
            <div className="cyber-widget">
              <p className="cyber-widget-title">Threat trend</p>
              <BarMini />
            </div>
            <div className="cyber-widget">
              <div className="cyber-ai-chip">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="10" width="28" height="18" rx="3" stroke="#00ffff" strokeWidth="1.2" fill="rgba(0,255,255,0.08)" />
                  <path d="M12 16h12M12 20h8" stroke="#ff00ff" strokeWidth="1" />
                  <circle cx="18" cy="7" r="3" fill="#7a00ff" style={{ filter: "drop-shadow(0 0 6px #7a00ff)" }} />
                </svg>
                <span>AI-assisted policy framing · ISO 27001 mapping</span>
              </div>
            </div>
          </aside>
        )}
      </main>
    </div>
  );
}
