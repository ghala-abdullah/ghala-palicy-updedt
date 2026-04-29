import React, { useState } from "react";
import { POLICIES_DATA } from "./PoliciesData";

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
    },
  }[lang];

  return (
    <div style={containerStyle}>
      <div className="stars-overlay"></div>

      <header style={headerStyle}>
        <h1>{t.title}</h1>
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          style={langBtnStyle}
        >
          {lang === "en" ? "العربية" : "English"}
        </button>
      </header>

      <main style={{ position: "relative", zIndex: 2, padding: "20px" }}>
        {/* الخطوة 1: تفاصيل التقرير */}
        {step === 1 && (
          <div style={cardStyle}>
            <h2>
              {lang === "en"
                ? "Step 1: Report Details"
                : "الخطوة 1: تفاصيل التقرير"}
            </h2>
            <input
              type="file"
              accept="image/*"
              style={inputStyle}
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
              style={inputStyle}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Preparer Name / اسم الكاتب"
              style={inputStyle}
              onChange={(e) =>
                setFormData({ ...formData, preparer: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Preparer Role / المنصب"
              style={inputStyle}
              onChange={(e) =>
                setFormData({ ...formData, preparerRole: e.target.value })
              }
            />
            <hr style={{ margin: "20px 0", borderColor: "#444" }} />
            <h3>{lang === "en" ? "Approvers" : "الموافقون"}</h3>
            {approvers.map((app, idx) => (
              <div
                key={idx}
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  style={inputStyle}
                  onChange={(e) => {
                    const newApps = [...approvers];
                    newApps[idx].name = e.target.value;
                    setApprovers(newApps);
                  }}
                />
                <input
                  type="text"
                  placeholder="Role"
                  style={inputStyle}
                  onChange={(e) => {
                    const newApps = [...approvers];
                    newApps[idx].role = e.target.value;
                    setApprovers(newApps);
                  }}
                />
              </div>
            ))}
            <button
              onClick={addApprover}
              style={{
                ...mainBtnStyle,
                background: "#4b4b7a",
                marginBottom: "10px",
              }}
            >
              + Add Another Approver
            </button>
            <input
              type="date"
              style={inputStyle}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <button onClick={() => setStep(2)} style={mainBtnStyle}>
              {t.next}
            </button>
          </div>
        )}

        {/* الخطوة 2: اختيار السياسات */}
        {step === 2 && (
          <div style={cardStyle}>
            <h2>
              {lang === "en"
                ? "Step 2: Choose Policies"
                : "الخطوة 2: اختر السياسات"}
            </h2>
            <div
              style={{
                maxHeight: "400px",
                overflowY: "auto",
                marginBottom: "20px",
              }}
            >
              {Object.keys(POLICIES_DATA).map((key) => (
                <div
                  key={key}
                  onClick={() =>
                    setSelectedKeys((prev) =>
                      prev.includes(key)
                        ? prev.filter((k) => k !== key)
                        : [...prev, key]
                    )
                  }
                  style={{
                    ...itemStyle,
                    border: selectedKeys.includes(key)
                      ? "2px solid #a29bfe"
                      : "1px solid #444",
                    backgroundColor: selectedKeys.includes(key)
                      ? "#2c2c54"
                      : "#1a1a3a",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedKeys.includes(key)}
                    readOnly
                  />
                  {POLICIES_DATA[key][lang].title}
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                {lang === "en" ? "Policy Version" : "رقم نسخة السياسة"}
              </label>
              <input
                type="text"
                value={formData.policyVersion}
                onChange={(e) =>
                  setFormData({ ...formData, policyVersion: e.target.value })
                }
                style={inputStyle}
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setStep(1)} style={backBtnStyle}>
                {t.back}
              </button>
              <button
                onClick={() => setStep(3)}
                style={mainBtnStyle}
                disabled={selectedKeys.length === 0}
              >
                {t.generate}
              </button>
            </div>
          </div>
        )}

        {/* الخطوة 3: التقرير النهائي */}
        {step === 3 && (
          <div id="final-report" style={reportStyle}>
            {/* الترويسة */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "3px solid #1a237e",
                paddingBottom: "15px",
              }}
            >
              {formData.logo && (
                <img
                  src={formData.logo}
                  style={{ height: "80px" }}
                  alt="logo"
                />
              )}
              <div style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                {selectedKeys.length > 0 && (
                  <h1
                    style={{ fontSize: "22px", margin: "0", color: "#1a237e" }}
                  >
                    {POLICIES_DATA[selectedKeys[0]][lang].title.replace(
                      /^\d+\.\s*/,
                      ""
                    )}
                  </h1>
                )}
                <p
                  style={{
                    fontSize: "14px",
                    margin: "5px 0 0 0",
                    color: "#666",
                  }}
                >
                  {lang === "ar" ? "إصدار رقم: " : "Version: "}{" "}
                  {formData.policyVersion}
                </p>
              </div>
            </div>

            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <h2 style={{ margin: 0, color: "#1a237e" }}>
                {formData.company}
              </h2>
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
            </div>

            {/* كاتب السياسة */}
            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                backgroundColor: "#f0f4ff",
                borderRadius: "8px",
                borderRight: "5px solid #6c5ce7",
              }}
            >
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

            {/* جدول الموافقات */}
            <h2
              style={{
                textAlign: "center",
                marginTop: "40px",
                color: "#1a237e",
              }}
            >
              {t.tableTitle}
            </h2>
            <table style={tableStyle}>
              <thead>
                <tr style={{ backgroundColor: "#1a237e", color: "white" }}>
                  <th style={{ padding: "12px" }}>
                    {lang === "en" ? "Full Name" : "الاسم الكامل"}
                  </th>
                  <th style={{ padding: "12px" }}>
                    {lang === "en" ? "Position" : "المنصب/الرتبة"}
                  </th>
                  <th style={{ padding: "12px" }}>
                    {lang === "en" ? "Signature" : "التوقيع"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {approvers.map((app, i) => (
                  <tr key={i}>
                    <td style={{ padding: "15px", border: "1px solid #ddd" }}>
                      {app.name}
                    </td>
                    <td style={{ padding: "15px", border: "1px solid #ddd" }}>
                      {app.role}
                    </td>
                    <td
                      style={{ height: "60px", border: "1px solid #ddd" }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* محتوى السياسات (محدث بإضافة السكوب والسبب) */}
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

                {/* عرض الغرض (Purpose) */}
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

                {/* عرض النطاق (Scope) */}
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

                <p
                  style={{ fontSize: "13px", color: "#888", marginTop: "15px" }}
                >
                  Reference: {POLICIES_DATA[key][lang].ref}
                </p>

                {/* عرض البنود */}
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

            <div
              style={{ marginTop: "60px", textAlign: "center" }}
              className="no-print"
            >
              <button onClick={() => window.print()} style={printBtnStyle}>
                Print Report (PDF)
              </button>
              <button
                onClick={() => setStep(2)}
                style={{
                  marginLeft: "15px",
                  padding: "15px",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </main>

      <style>{`
        .stars-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, #1b2735 0%, #090a0f 100%); z-index: 0; }
        .stars-overlay::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('https://www.transparenttextures.com/patterns/stardust.png'); opacity: 0.4; animation: moveStars 150s linear infinite; }
        @keyframes moveStars { from {background-position: 0 0;} to {background-position: 1000px 1000px;} }
        table { width: 100%; border-collapse: collapse; }
        @media print { .no-print, .stars-overlay, header { display: none !important; } body { background: white !important; } #final-report { border: none !important; box-shadow: none !important; margin: 0 !important; width: 100% !important; padding: 0 !important; } }
      `}</style>
    </div>
  );
}

// الستايلات
const containerStyle = {
  minHeight: "100vh",
  color: "white",
  position: "relative",
  overflowX: "hidden",
};
const headerStyle = {
  background: "linear-gradient(90deg, #1a237e, #4a148c)",
  padding: "25px",
  textAlign: "center",
  position: "relative",
  zIndex: 10,
  boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
};
const cardStyle = {
  maxWidth: "750px",
  margin: "50px auto",
  background: "rgba(20, 20, 45, 0.95)",
  padding: "40px",
  borderRadius: "25px",
  border: "1px solid #5e5e9e",
  boxShadow: "0 0 30px rgba(108, 92, 231, 0.4)",
};
const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  background: "#0d0d26",
  border: "1px solid #444",
  color: "white",
  borderRadius: "10px",
  fontSize: "16px",
};
const mainBtnStyle = {
  width: "100%",
  padding: "16px",
  background: "linear-gradient(45deg, #6c5ce7, #a29bfe)",
  border: "none",
  borderRadius: "10px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "18px",
};
const backBtnStyle = {
  flex: 1,
  padding: "16px",
  background: "#3d3d5c",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};
const langBtnStyle = {
  position: "absolute",
  right: "30px",
  top: "30px",
  padding: "10px 20px",
  borderRadius: "25px",
  background: "#ffffff22",
  color: "white",
  border: "1px solid white",
  cursor: "pointer",
};
const itemStyle = {
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "15px",
};
const reportStyle = {
  maxWidth: "1000px",
  margin: "30px auto",
  background: "white",
  color: "#222",
  padding: "60px",
  borderRadius: "10px",
  boxShadow: "0 0 40px rgba(0,0,0,0.8)",
};
const tableStyle = { width: "100%", marginTop: "20px" };
const printBtnStyle = {
  padding: "18px 40px",
  background: "#1a237e",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "18px",
};
