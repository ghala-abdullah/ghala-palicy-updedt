export const POLICIES_DATA = {
  isp: {
    ar: {
      title:
        "1. السياسة العامة لأمن المعلومات (Enterprise Information Security Framework)",
      purpose:
        "تحديد التوجه الاستراتيجي والمتطلبات العليا لحماية أصول المعلومات وضمان توافقها مع الأنظمة الوطنية.",
      scope:
        "تطبق هذه السياسة على جميع الموظفين، المتعاقدين، والجهات الخارجية التي تتعامل مع بيانات الجهة.",
      ref: "ECC-1-1 / ISO 27001:2022 (5.1) / NIST CSF (GV.OC)",
      items: [
        "1.1 الحوكمة المؤسسية: يجب أن تُعتمد السياسة من مجلس الإدارة وتُراجع سنوياً لضمان مواءمتها مع التوجهات الاستراتيجية.",
        "1.2 الامتثال التشريعي: الالتزام التام بكافة أنظمة المملكة العربية السعودية، بما في ذلك نظام مكافحة جرائم المعلومات وضوابط NCA.",
        "1.3 الهيكل التنظيمي للأمن: تحديد أدوار ومسؤوليات واضحة (مثل تعيين CISO) وتشكيل لجنة توجيهية للأمن السيبراني.",
        "1.4 نشر السياسة والالتزام: يجب أن تكون السياسة متاحة لجميع الموظفين، ويُعد التوقيع عليها شرطاً أساسياً للوصول للأنظمة.",
        "1.5 إدارة الاستثناءات: أي حياد عن السياسة يتطلب نموذج طلب رسمي، وتقييم مخاطر، وموافقة كتابية من الإدارة العليا لفترة محدودة.",
        "1.6 التحسين المستمر: تطبيق منهجية (PDCA) - خطط، نفذ، تحقق، صحح - لضمان تطور نظام إدارة أمن المعلومات.",
        "1.7 الموارد البشرية: إدراج ضوابط الأمن في عقود العمل، وإجراء الفحص الأمني (Vetting) للموظفين في المناصب الحساسة.",
        "1.8 التوعية والتدريب: تنفيذ برنامج توعوي مستمر يشمل محاكاة هجمات التصيد الاحتيالي واختبارات قياس الوعي الدوري.",
        "1.9 إدارة العلاقات مع الجهات الخارجية: إلزام الموردين والمقاولين بنفس المعايير الأمنية المطبقة داخل الجهة.",
        "1.10 التدقيق والرقابة: خضوع كافة السياسات لتدقيق داخلي مستقل مرتين سنوياً للتأكد من فاعلية الضوابط المطبقة.",
      ],
    },
    en: {
      title: "1. Enterprise Information Security Policy Framework",
      purpose:
        "Defining the strategic direction and high-level requirements for protecting information assets.",
      scope:
        "Applicable to all employees, contractors, and third parties interacting with company data.",
      ref: "ECC-1-1 / ISO 27001:2022 (5.1) / NIST CSF (GV.OC)",
      items: [
        "1.1 Corporate Governance: Policy must be Board-approved and reviewed annually.",
        "1.2 Regulatory Compliance: Strict adherence to KSA laws and NCA mandates.",
        "1.3 Security Structure: Define clear roles (e.g., CISO) and establish a Cybersecurity Steering Committee.",
        "1.4 Communication: Policies must be accessible; signed acknowledgment is mandatory.",
        "1.5 Exception Management: Deviations require a formal request and senior management approval.",
        "1.6 Continuous Improvement: Apply the PDCA cycle for ISMS effectiveness.",
        "1.7 HR Security: Embed security in contracts and conduct vetting for sensitive roles.",
        "1.8 Awareness & Training: Continuous programs including phishing simulations.",
        "1.9 Third-Party Relations: Mandate identical security standards for suppliers.",
        "1.10 Auditing & Oversight: Independent internal audits twice a year.",
      ],
    },
  },
  risk_management: {
    ar: {
      title: "2. إدارة مخاطر الأمن السيبراني (Cybersecurity Risk Framework)",
      purpose:
        "توفير منهجية منظمة لتحديد وتقييم ومعالجة المخاطر السيبرانية قبل تأثيرها على العمليات.",
      scope:
        "يشمل النطاق كافة الأصول التقنية، العمليات الإدارية، والخدمات المشتركة في الجهة.",
      ref: "ECC-1-2 / ISO 27005 / NIST CSF (ID.RA)",
      items: [
        "2.1 منهجية التقييم: اعتماد إطار عمل NIST 800-30 لتقييم المخاطر بناءً على التهديدات والثغرات والأثر.",
        "2.2 سجل المخاطر المركزي: توثيق كافة المخاطر السيبرانية في سجل موحد يشمل خطط المعالجة.",
        "2.3 معايير قبول المخاطر: تحديد مستويات قبول المخاطر (Risk Appetite) من قبل مجلس الإدارة.",
        "2.4 تقييم أثر الأعمال (BIA): ربط مخاطر الأمن السيبراني بالعمليات الحيوية للجهة.",
        "2.5 المراقبة المستمرة للتهديدات: استخدام استخبارات التهديدات لتحديث سجل المخاطر استباقياً.",
        "2.6 إدارة التغيير: إجراء تقييم مخاطر إلزامي لأي تغيير تقني جوهري قبل التنفيذ.",
        "2.7 معالجة المخاطر: تطبيق استراتيجيات (التخفيف، النقل، التجنب، أو القبول).",
        "2.8 تقارير المخاطر: رفع لوحات بيانات دورية للإدارة العليا توضح حالة المخاطر.",
        "2.9 المخاطر الناشئة: تقييم مخاطر التقنيات الحديثة (مثل الذكاء الاصطناعي) قبل تبنيها.",
        "2.10 تكامل المخاطر: دمج مخاطر الأمن السيبراني ضمن إدارة المخاطر المؤسسية (ERM).",
      ],
    },
    en: {
      title: "2. Cybersecurity Risk Management Framework",
      purpose:
        "Providing a structured methodology to identify, assess, and treat cyber risks.",
      scope:
        "Includes all technical assets, administrative processes, and shared services.",
      ref: "ECC-1-2 / ISO 27005 / NIST CSF (ID.RA)",
      items: [
        "2.1 Assessment Methodology: Adopt NIST 800-30 for evaluating risks.",
        "2.2 Centralized Risk Register: Document all cyber risks in a unified log.",
        "2.3 Risk Appetite: Define and annually update risk acceptance levels.",
        "2.4 BIA Integration: Link cybersecurity risks with critical operations.",
        "2.5 Continuous Threat Monitoring: Use Threat Intel to update risks proactively.",
        "2.6 Change Management Risk: Mandatory risk assessment for any major technical change.",
        "2.7 Risk Treatment: Apply strategies (Mitigate, Transfer, Avoid, Accept).",
        "2.8 Executive Reporting: Periodic dashboards to senior management on risk status.",
        "2.9 Emerging Risks: Assess risks of new technologies (e.g., AI) prior to adoption.",
        "2.10 Risk Integration: Incorporate cyber risks into overall ERM.",
      ],
    },
  },
  asset_management: {
    ar: {
      title: "3. إدارة الأصول وحماية البيانات (Asset & Data Security)",
      purpose:
        "ضمان حصر كافة الأصول التقنية وتصنيف البيانات لضمان الحماية المناسبة لكل مستوى.",
      scope:
        "تطبق على كافة البيانات الرقمية والفيزيائية والأجهزة المملوكة أو المدارة من قبل الجهة.",
      ref: "ECC-2-1 / ISO 5.9 / NIST CSF (ID.AM)",
      items: [
        "3.1 الجرد الآلي للأصول: استخدام أدوات تقنية للاكتشاف التلقائي للأصول والبرمجيات.",
        "3.2 ملكية الأصول: تعيين مسؤول (Owner) لكل أصل معلومة لتحديد مستويات الحماية.",
        "3.3 تصنيف البيانات الشامل: تطبيق مستويات التصنيف (سري للغاية، سري، مقيد، عام).",
        "3.4 إدارة دورة حياة الأصول: ضوابط تبدأ من الاستحواذ وحتى الإتلاف الآمن (Sanitization).",
        "3.5 الاستخدام المقبول (AUP): وضع قواعد واضحة لاستخدام الأجهزة، البريد، والإنترنت.",
        "3.6 حماية البيانات في السكون: تشفير كافة البيانات المصنفة كـ 'مقيد' فأعلى.",
        "3.7 التحكم في الوسائط المتنقلة: منع استخدام الـ USB غير المشفرة وتفعيل تقنيات DLP.",
        "3.8 الإتلاف الفيزيائي والتقني: تدمير الوسائط التخزينية وفق معايير NIST 800-88.",
        "3.9 حماية الأصول غير الملموسة: حماية الملكية الفكرية والأكواد البرمجية.",
        "3.10 التدقيق الدوري للأصول: إجراء جرد فيزيائي وتقني مفاجئ لمطابقة السجلات.",
      ],
    },
    en: {
      title: "3. Asset and Data Security Policy",
      purpose:
        "To ensure all technical assets are inventoried and data is classified appropriately.",
      scope:
        "Applies to all digital/physical data and hardware owned or managed by the entity.",
      ref: "ECC-2-1 / ISO 5.9 / NIST CSF (ID.AM)",
      items: [
        "3.1 Automated Asset Inventory: Utilize tools for auto-discovery of hardware/software.",
        "3.2 Asset Ownership: Assign an owner to each information asset.",
        "3.3 Comprehensive Classification: Apply levels (Top Secret, Secret, Restricted, Public).",
        "3.4 Asset Lifecycle: Controls from procurement through usage to secure sanitization.",
        "3.5 Acceptable Use (AUP): Clear rules for using mobile devices and internet.",
        "3.6 Encryption at Rest: Encrypt all data classified as 'Restricted' or higher.",
        "3.7 Media Control: Prohibit unencrypted USBs and implement DLP technologies.",
        "3.8 Physical/Technical Disposal: Physically destroy damaged media per NIST 800-88.",
        "3.9 Intangible Asset Protection: Identify and protect intellectual property.",
        "3.10 Periodic Auditing: Conduct surprise audits to reconcile records.",
      ],
    },
  },

  access_control: {
    ar: {
      title:
        "4. سياسة التحكم في الوصول والتحقق من الهوية (Access Control & IAM)",
      purpose:
        "ضمان وصول الأشخاص المصرح لهم فقط إلى موارد وأنظمة الجهة ومنع الدخول غير المخول.",
      scope:
        "تطبق على جميع أنظمة المعلومات، الشبكات، التطبيقات، والمرافق الفيزيائية التابعة للجهة.",
      ref: "ECC-2-3 / ISO 5.15 / NIST AC-2",
      items: [
        "4.1 مبدأ الصلاحيات الدنيا: منح المستخدم أقل قدر من الصلاحيات اللازمة لأداء مهامه الوظيفية فقط (Least Privilege).",
        "4.2 إدارة دورة حياة الحساب: إجراءات رسمية لطلب، إنشاء، تعديل، وتعطيل الحسابات (Onboarding/Offboarding).",
        "4.3 المصادقة الثنائية (MFA): إلزامية استخدام MFA للوصول عن بُعد، وللأنظمة الحساسة، وحسابات المسؤولين.",
        "4.4 تعقيد كلمة المرور: اشتراط حد أدنى (12 خانة) تحتوي على رموز وأرقام وحروف متنوعة.",
        "4.5 الحسابات المميزة: فصل حسابات الإدارة عن الحسابات العادية، واستخدامها فقط للمهام الإدارية المحددة.",
        "4.6 مراجعة الصلاحيات: مراجعة دورية (كل 6 أشهر) لسحب الصلاحيات غير المستخدمة أو الزائدة.",
        "4.7 سياسة الشاشة المقفلة: قفل الشاشة تلقائياً بعد 5 دقائق من الخمول لضمان أمن المحطة.",
        "4.8 الوصول الفيزيائي: التحكم في الدخول لمراكز البيانات باستخدام البطاقات الذكية والتحقق الحيوي.",
        "4.9 إدارة الجلسات: إنهاء الجلسات تلقائياً عند تسجيل الخروج أو الخمول الطويل.",
        "4.10 سجلات الوصول: تسجيل كافة عمليات الدخول الناجحة والفاشلة ومراقبتها دورياً.",
      ],
    },
    en: {
      title: "4. Access Control and Identity Management (IAM)",
      purpose:
        "To ensure only authorized individuals can access resources and prevent unauthorized entry.",
      scope:
        "Applies to all information systems, networks, applications, and physical facilities.",
      ref: "ECC-2-3 / ISO 5.15 / NIST AC-2",
      items: [
        "4.1 Least Privilege: Users get minimum access levels necessary for their tasks.",
        "4.2 User Lifecycle: Formal procedures for account creation, modification, and deactivation.",
        "4.3 MFA: Mandatory Multi-Factor Authentication for remote and sensitive access.",
        "4.4 Password Complexity: Minimum 12 characters with diverse symbols and cases.",
        "4.5 Privileged Access: Separation of administrative and standard accounts.",
        "4.6 Access Review: Periodic reviews every 6 months to revoke unneeded rights.",
        "4.7 Lock-Screen: Automatic lock after 5 minutes of inactivity.",
        "4.8 Physical Access: Biometric and smart card controls for data centers.",
        "4.9 Session Management: Automatic termination on logout or prolonged inactivity.",
        "4.10 Access Logging: Recording all successful and failed login attempts.",
      ],
    },
  },
  cryptography: {
    ar: {
      title: "5. سياسة التشفير وإدارة المفاتيح (Cryptography & Key Management)",
      purpose:
        "حماية سرية وسلامة البيانات الحساسة باستخدام تقنيات تشفير معتمدة وقوية.",
      scope:
        "تشمل البيانات المخزنة، البيانات المنقولة عبر الشبكة، والأجهزة المتنقلة.",
      ref: "ECC-2-6 / ISO 8.24 / NIST SC-13",
      items: [
        "5.1 الخوارزميات المعتمدة: استخدام خوارزميات تشفير قوية (مثل AES-256) المعتمدة وطنياً.",
        "5.2 تشفير البيانات في السكون: تشفير قواعد البيانات، الملفات الحساسة، والنسخ الاحتياطية.",
        "5.3 تشفير البيانات في النقل: إلزامية استخدام بروتوكولات آمنة (TLS 1.2+) لكافة التبادلات الشبكية.",
        "5.4 إدارة المفاتيح: تخزين مفاتيح التشفير في أجهزة مخصصة (HSM) أو خزائن إلكترونية آمنة.",
        "5.5 دورة حياة المفتاح: سياسات رسمية لتوليد، توزيع، تبديل، وإتلاف مفاتيح التشفير.",
        "5.6 تشفير الأجهزة المتنقلة: تفعيل تشفير القرص الكامل (FDE) لكافة أجهزة اللابتوب والجوال.",
        "5.7 التوقيع الرقمي: استخدام التواقيع الرقمية لضمان سلامة وصحة البيانات الرسمية.",
        "5.8 إدارة الشهادات: مراقبة وتجديد شهادات SSL/TLS قبل انتهائها لضمان استمرار التشفير.",
        "5.9 منع الالتفاف: يحظر تماماً محاولة تعطيل أنظمة التشفير المفروضة من الإدارة.",
        "5.10 الوصول القانوني: الاحتفاظ بنسخ احتياطية من المفاتيح (Key Escrow) لضمان استعادة البيانات.",
      ],
    },
    en: {
      title: "5. Cryptography and Key Management Policy",
      purpose:
        "To protect the confidentiality and integrity of sensitive data using strong encryption.",
      scope:
        "Includes data at rest, data in transit, and all corporate mobile devices.",
      ref: "ECC-2-6 / ISO 8.24 / NIST SC-13",
      items: [
        "5.1 Approved Algorithms: Use strong encryption (e.g., AES-256) compliant with standards.",
        "5.2 Encryption at Rest: Encrypt databases, sensitive files, and stored backups.",
        "5.3 Encryption in Transit: Mandatory use of secure protocols (TLS 1.2+) for network traffic.",
        "5.4 Key Management: Store encryption keys in dedicated HSM or secure vaults.",
        "5.5 Key Lifecycle: Formal policies for generating, rotating, and destroying keys.",
        "5.6 Mobile Encryption: Enable Full Disk Encryption (FDE) for all laptops and smartphones.",
        "5.7 Digital Signatures: Use digital signatures to ensure data integrity and authenticity.",
        "5.8 Certificate Management: Monitor and renew SSL/TLS certificates before expiration.",
        "5.9 Non-Circumvention: Prohibit disabling IT-mandated encryption systems.",
        "5.10 Key Escrow: Maintain secure backups of keys for data recovery purposes.",
      ],
    },
  },
  backup_recovery: {
    ar: {
      title: "6. سياسة النسخ الاحتياطي والتعافي (Backup & Disaster Recovery)",
      purpose:
        "ضمان استعادة البيانات والأنظمة في حال وقوع أعطال تقنية أو كوارث طبيعية.",
      scope:
        "تشمل كافة الأنظمة الحيوية، قواعد البيانات، والملفات الضرورية لاستمرارية العمل.",
      ref: "ECC-3-2 / ISO 8.13 / NIST CP-9",
      items: [
        "6.1 نطاق النسخ: تحديد كافة البيانات الحيوية التي تتطلب نسخاً بناءً على تحليل الأثر (BIA).",
        "6.2 وتيرة النسخ: إجراء نسخ احتياطي يومي (تزايدي) وأسبوعي (كامل) لتقليل فقد البيانات.",
        "6.3 التخزين خارج الموقع: الاحتفاظ بنسخة واحدة على الأقل في موقع جغرافي منفصل وآمن.",
        "6.4 حماية النسخ: تشفير النسخ الاحتياطية وتطبيق قيود وصول لمنع هجمات الفدية.",
        "6.5 اختبار الاستعادة: إجراء اختبارات استعادة دورية للتأكد من سلامة وصلاحية النسخ.",
        "6.6 قاعدة 3-2-1: الاحتفاظ بـ 3 نسخ، على نوعين من الوسائط، مع نسخة واحدة خارج الموقع.",
        "6.7 مدة الاحتفاظ: تحديد مدة الاحتفاظ بالنسخ بناءً على المتطلبات القانونية والتشغيلية.",
        "6.8 توثيق العمليات: الاحتفاظ بسجلات محدثة لنتائج عمليات النسخ (نجاح/فشل).",
        "6.9 التعافي من الكوارث: وضع خطة فنية لاستعادة الأنظمة في حال انهيار المركز الرئيسي.",
        "6.10 الجاهزية البشرية: تدريب الفريق التقني على خطوات الاستعادة الطارئة والسريعة.",
      ],
    },
    en: {
      title: "6. Backup and Disaster Recovery Policy",
      purpose:
        "To ensure data and system recovery in the event of technical failure or disasters.",
      scope:
        "Includes all critical systems, databases, and essential business files.",
      ref: "ECC-3-2 / ISO 8.13 / NIST CP-9",
      items: [
        "6.1 Backup Scope: Identify critical data requiring backup based on BIA.",
        "6.2 Frequency: Daily incremental and weekly full backups to minimize loss.",
        "6.3 Off-site Storage: Keep at least one copy in a separate, secure physical location.",
        "6.4 Protection: Encrypt backups and apply controls to prevent ransomware.",
        "6.5 Restoration Testing: Periodic tests to verify backup integrity and usability.",
        "6.6 3-2-1 Rule: 3 copies, on 2 media types, with 1 copy off-site.",
        "6.7 Retention: Define backup duration based on legal requirements.",
        "6.8 Documentation: Maintain logs of backup outcomes and corrective actions.",
        "6.9 Disaster Recovery: Technical plan for recovery in case of site failure.",
        "6.10 Readiness: Train technical teams on emergency restoration procedures.",
      ],
    },
  },
  incident_management: {
    ar: {
      title:
        "7. إدارة حوادث الأمن السيبراني (Cybersecurity Incident Response Framework)",
      purpose:
        "تحديد إجراءات الاستجابة السريعة والفعالة للحوادث الأمنية لتقليل الأضرار.",
      scope:
        "تطبق عند وقوع أي اختراق أمني، محاولة وصول غير مخولة، أو تعطل متعمد للأنظمة.",
      ref: "ECC-2-9 / ISO 5.24 / NIST CSF (RS.RP)",
      items: [
        "7.1 خطة الاستجابة: وضع خطة طوارئ تحدد الأدوار وفئات التصنيف للحوادث الأمنية.",
        "7.2 فريق الاستجابة (CERT): تشكيل فريق عمل متخصص متاح على مدار الساعة للتعامل مع الاختراقات.",
        "7.3 قنوات الإبلاغ: توفير قنوات اتصال رسمية وآمنة للإبلاغ عن أي نشاط مشبوه فوراً.",
        "7.4 تصنيف الخطورة: فرز الحوادث بناءً على الأثر التشغيلي والقانوني لتحديد سرعة الاستجابة.",
        "7.5 الحفاظ على الأدلة: تطبيق إجراءات التحقيق الجنائي الرقمي لضمان عدم تلف الأدلة.",
        "7.6 الإبلاغ الخارجي: الالتزام بالمدد الزمنية المحددة من NCA عند وقوع حوادث جوهرية.",
        "7.7 التواصل وقت الأزمات: وضع خطة للتواصل مع أصحاب المصلحة، الجهات التنظيمية، والإعلام.",
        "7.8 الدروس المستفادة: عقد اجتماع مراجعة بعد كل حادثة لتحديث الضوابط ومنع التكرار.",
        "7.9 تحليل المسببات: إجراء تحليل للجذور المسببة (RCA) لتحديد الثغرات التقنية أو البشرية.",
        "7.10 اختبارات المحاكاة: إجراء تدريبات فرضية سنوياً لاختبار جاهزية الفريق للتصدي للهجمات.",
      ],
    },
    en: {
      title: "7. Cybersecurity Incident Response Framework",
      purpose:
        "To define rapid and effective response procedures to minimize security incident damage.",
      scope:
        "Applies to all security breaches, unauthorized access attempts, or system disruptions.",
      ref: "ECC-2-9 / ISO 5.24 / NIST CSF (RS.RP)",
      items: [
        "7.1 IR Plan: Contingency plan defining roles and incident classification categories.",
        "7.2 CERT: Dedicated team available 24/7 to handle security breaches.",
        "7.3 Reporting Channels: Secure formal channels to report suspicious activities immediately.",
        "7.4 Severity Grading: Sort incidents based on operational and legal impact.",
        "7.5 Forensics: Apply procedures to preserve evidence for criminal investigations.",
        "7.6 External Notification: Adhere to NCA timelines for significant breach reporting.",
        "7.7 Crisis Communication: Plan for notifying stakeholders and regulators.",
        "7.8 Lessons Learned: Post-incident review meetings to update controls.",
        "7.9 Root Cause Analysis: Conduct RCA to identify technical or human vulnerabilities.",
        "7.10 Simulations: Annual exercises to test team readiness for cyber-attacks.",
      ],
    },
  },
  supplier_security: {
    ar: {
      title: "8. أمن الأطراف الخارجية والموردين (Supply Chain Security)",
      purpose:
        "ضمان عدم تسبب الموردين والأطراف الخارجية في أي مخاطر أمنية على أنظمة الجهة.",
      scope:
        "تشمل كافة الموردين، المقاولين، ومزودي الخدمات السحابية والاستشارية.",
      ref: "ECC-4-1 / ISO 5.19 / NIST CSF (ID.SC)",
      items: [
        "8.1 تقييم المخاطر المسبق: إجراء فحص أمني للمورد قبل توقيع العقد لتقييم نضجه السيبراني.",
        "8.2 المتطلبات الأمنية: إدراج بنود إلزامية تضمن توافق المورد مع ضوابط NCA واتفاقيات NDA.",
        "8.3 الوصول المقيد: منح الموردين أقل صلاحيات ممكنة وللفترة الزمنية اللازمة فقط.",
        "8.4 الحق في التدقيق: تضمين بند يسمح للجهة بإجراء تدقيق أمني على أنظمة المورد دورياً.",
        "8.5 الحوسبة السحابية: التأكد من مكان تخزين البيانات داخل المملكة وتوافق المزود مع الضوابط.",
        "8.6 مراجعة الامتثال: طلب شهادات امتثال محدثة (SOC2 أو ISO) من الموردين سنوياً.",
        "8.7 إنهاء العلاقة: سحب كافة الصلاحيات واستعادة الأصول فور انتهاء العقد مع المورد.",
        "8.8 أمان المكونات: التأكد من سلامة الأجهزة والبرمجيات الموردة من أي أبواب خلفية.",
        "8.9 مراقبة الأداء: مراقبة التزام المورد بمستويات الخدمة الأمنية (Security SLAs).",
        "8.10 إدارة التبعية: تحديد الموردين الحرجين ووضع خطط بديلة في حال توقف خدماتهم.",
      ],
    },
    en: {
      title: "8. Supply Chain and Third-Party Security",
      purpose:
        "To ensure third parties do not introduce security risks to the organization's systems.",
      scope:
        "Includes all suppliers, contractors, cloud providers, and consultants.",
      ref: "ECC-4-1 / ISO 5.19 / NIST CSF (ID.SC)",
      items: [
        "8.1 Due Diligence: Security assessment of suppliers' cyber maturity before engagement.",
        "8.2 Contractual Requirements: Mandate compliance with NCA controls and NDAs.",
        "8.3 Least Privilege Access: Grant suppliers minimal access for the shortest duration.",
        "8.4 Right to Audit: Contractual right to perform security audits on supplier systems.",
        "8.5 Cloud Security: Ensure data residency within KSA and provider compliance.",
        "8.6 Compliance Review: Request updated SOC2/ISO certificates from suppliers annually.",
        "8.7 Secure Offboarding: Revoke all access and reclaim assets upon contract termination.",
        "8.8 Product Integrity: Verify hardware and software for manufacturing vulnerabilities.",
        "8.9 SLA Monitoring: Track supplier adherence to security service levels.",
        "8.10 Dependency Risk: Identify critical suppliers and establish business alternatives.",
      ],
    },
  },
  logging_monitoring: {
    ar: {
      title: "9. المراقبة الأمنية وسجلات الأحداث (Logging and Detection)",
      purpose:
        "مراقبة وتسجيل الأنشطة على الأنظمة لاكتشاف التهديدات والأنشطة المشبوهة في وقتها.",
      scope:
        "تطبق على الخوادم، الأجهزة الشبكية، التطبيقات الحساسة، وقواعد البيانات.",
      ref: "ECC-2-8 / ISO 8.15 / NIST CSF (DE.AE)",
      items: [
        "9.1 تفعيل السجلات: تفعيل الـ Logs لكافة العمليات الحساسة (دخول، تعديل، حذف) على الشبكة.",
        "9.2 حماية السجلات: منع تعديل أو حذف السجلات وتخزينها في خادم مركزي (SIEM) معزول.",
        "9.3 مدة الاحتفاظ: الاحتفاظ بالسجلات لمدة لا تقل عن سنة للتحقيقات المستقبلية.",
        "9.4 المراقبة اللحظية: استخدام أنظمة مراقبة تعمل 24/7 لإرسال تنبيهات عند اكتشاف سلوك مريب.",
        "9.5 مزامنة الوقت: ربط كافة الأجهزة بمصدر توقيت موحد (NTP) لضمان دقة السجلات.",
        "9.6 مراقبة حسابات الأدمن: رقابة مشددة على الحركات التي تتم عبر الحسابات ذات الصلاحيات.",
        "9.7 جودة البيانات: التأكد من أن السجلات تحتوي على هوية المستخدم، التاريخ، والنتيجة.",
        "9.8 تحليل السلوك (UBA): استخدام الذكاء الاصطناعي لاكتشاف الانحرافات عن السلوك الطبيعي.",
        "9.9 مراجعة دورية: تكليف فريق مختص بمراجعة تقارير السجلات يومياً للتحقق من العمليات.",
        "9.10 التكامل مع الاستجابة: ربط المراقبة بنظام الاستجابة للحوادث لبدء التعامل الآلي.",
      ],
    },
    en: {
      title: "9. Logging and Security Detection Framework",
      purpose:
        "To monitor and record system activities to detect threats and suspicious actions.",
      scope:
        "Applies to servers, network devices, sensitive applications, and databases.",
      ref: "ECC-2-8 / ISO 8.15 / NIST CSF (DE.AE)",
      items: [
        "9.1 Comprehensive Logging: Enable logs for sensitive actions on servers and networks.",
        "9.2 Log Integrity: Prohibit modification/deletion and store logs in an isolated SIEM.",
        "9.3 Retention Period: Retain logs for at least one year for future investigations.",
        "9.4 Real-time Monitoring: 24/7 monitoring systems to send alerts upon suspicious behavior.",
        "9.5 Time Sync: Link all devices to a unified NTP source for event sequence accuracy.",
        "9.6 Admin Monitoring: Heightened oversight on actions by high-privilege accounts.",
        "9.7 Data Quality: Ensure logs include User ID, Event Type, and Date/Time.",
        "9.8 Behavior Analytics: Use AI to detect anomalies from normal user patterns.",
        "9.9 Daily Review: Specialized staff to review log reports daily for operational integrity.",
        "9.10 IR Integration: Link monitoring systems with incident response for automation.",
      ],
    },
  },
  vulnerability_management: {
    ar: {
      title:
        "10. إدارة الثغرات والتحديثات الأمنية (Vulnerability & Patch Mgmt)",
      purpose:
        "تحديد ومعالجة الثغرات الأمنية في الأنظمة والبرامج قبل استغلالها من قبل المهاجمين.",
      scope:
        "تشمل كافة أنظمة التشغيل، التطبيقات، قواعد البيانات، والأجهزة الشبكية.",
      ref: "ECC-2-7 / ISO 8.8 / NIST CSF (ID.RA-1)",
      items: [
        "10.1 المسح الدوري: إجراء فحص فني شامل لكافة الأصول شهرياً باستخدام أدوات معتمدة.",
        "10.2 تصنيف الثغرات: استخدام نظام (CVSS) لتقييم خطورة الثغرات وتحديد أولويات المعالجة.",
        "10.3 إدارة التحديثات: تطبيق التحديثات الأمنية 'الحرجة' خلال 48 ساعة من صدورها.",
        "10.4 بيئة الاختبار: تجربة التحديثات في بيئة معزولة (Staging) قبل تطبيقها على البيئة الحية.",
        "10.5 اختبار الاختراق: إجراء اختبار اختراق سنوي لمحاكاة الهجمات الواقعية واكتشاف الثغرات.",
        "10.6 الثغرات الصفرية: وضع خطة عمل للتعامل مع الثغرات المكتشفة حديثاً (Zero-Day).",
        "10.7 تتبع المعالجة: الاحتفاظ بسجل يوضح تاريخ اكتشاف الثغرة، الشخص المسؤول، وتاريخ الإغلاق.",
        "10.8 الأنظمة القديمة: عزل الأنظمة التي لا تدعم التحديثات (Legacy) في شبكات منفصلة.",
        "10.9 مراقبة النشرات: الاشتراك في تنبيهات المركز الوطني للإرشاد الأمني ومصنعي الأجهزة.",
        "10.10 التدقيق على الإغلاق: إجراء مسح تأكيدي بعد عملية التحديث للتأكد من زوال الثغرة.",
      ],
    },
    en: {
      title: "10. Vulnerability and Patch Management Framework",
      purpose:
        "To identify and remediate security vulnerabilities before they are exploited.",
      scope:
        "Includes all operating systems, applications, databases, and network hardware.",
      ref: "ECC-2-7 / ISO 8.8 / NIST CSF (ID.RA-1)",
      items: [
        "10.1 Periodic Scanning: Monthly technical scans of all assets using approved tools.",
        "10.2 Scoring: Use CVSS to evaluate severity and prioritize treatment based on impact.",
        "10.3 Patching Policy: Apply 'Critical' security patches within 48 hours of release.",
        "10.4 Testing: Mandatory patch testing in a staging environment prior to production.",
        "10.5 Pen-Testing: Annual penetration tests to simulate real-world attack scenarios.",
        "10.6 Zero-Day Response: Workaround plans for newly discovered vulnerabilities without patches.",
        "10.7 Remediation Tracking: Maintain logs of discovery date, owner, and final closure.",
        "10.8 Legacy Systems: Isolate non-patchable legacy systems in protected segments.",
        "10.9 Advisory Monitoring: Subscribe to national and vendor security advisories.",
        "10.10 Verification: Perform rescans after patching to confirm vulnerability resolution.",
      ],
    },
  },
  acceptable_use: {
    ar: {
      title: "11. سياسة الاستخدام المقبول للأصول (Acceptable Use Policy - AUP)",
      purpose:
        "توضيح القواعد والمسؤوليات الواجب اتباعها من قبل الموظفين عند استخدام موارد الجهة.",
      scope:
        "تطبق على جميع الموظفين والمتعاقدين الذين يستخدمون أجهزة أو شبكات الجهة.",
      ref: "ECC-1-4 / ISO 5.10 / NIST CSF (PR.AT)",
      items: [
        "11.1 الاستخدام المخصص: أصول الجهة مخصصة حصراً لأداء مهام العمل الموكلة للموظف.",
        "11.2 حماية الحسابات: يمنع مشاركة كلمات المرور أو حسابات الوصول مع أي شخص آخر.",
        "11.3 البرمجيات غير المصرح بها: يحظر تحميل أي برامج دون موافقة مسبقة من قسم التقنية.",
        "11.4 أمن البريد: يحظر فتح الروابط المجهولة ويجب الإبلاغ عن رسائل التصيد فوراً.",
        "11.5 حماية البيانات: يمنع نقل بيانات الجهة إلى حسابات سحابية شخصية أو بريد خارجي.",
        "11.6 السلوك الرقمي: الالتزام بالآداب المهنية والقوانين عند استخدام وسائل التواصل.",
        "11.7 مراقبة الاستخدام: تقر الجهة بحقها في مراقبة استخدام الأصول لضمان الالتزام الأمني.",
        "11.8 الحفاظ على الأجهزة: الموظف مسؤول عن حماية الأجهزة الموكلة إليه من الفقدان.",
        "11.9 الإبلاغ عن الفقدان: في حال فقدان جهاز، يجب إبلاغ الأمن السيبراني خلال 30 دقيقة.",
        "11.10 العواقب التأديبية: أي مخالفة تعرض الموظف لإجراءات تأديبية أو ملاحقة قانونية.",
      ],
    },
    en: {
      title: "11. Acceptable Use Policy (AUP)",
      purpose:
        "To define the rules and responsibilities for employees when using corporate resources.",
      scope:
        "Applies to all employees and contractors using the entity's devices or networks.",
      ref: "ECC-1-4 / ISO 5.10 / NIST CSF (PR.AT)",
      items: [
        "11.1 Business Purpose: Assets are for business use only and assigned tasks.",
        "11.2 Account Protection: Prohibit sharing passwords or credentials under any circumstances.",
        "11.3 Unauthorized Software: Ban installing applications without prior IT approval.",
        "11.4 Email Security: Prohibit opening suspicious links; mandate reporting of phishing.",
        "11.5 Data Handling: Prohibit transferring corporate data to personal cloud storage.",
        "11.6 Digital Etiquette: Adhere to professional ethics and laws when online.",
        "11.7 Monitoring Disclosure: The entity reserves the right to monitor asset usage.",
        "11.8 Physical Care: Employees are responsible for protecting assigned devices.",
        "11.9 Loss Reporting: Report lost devices to Cybersecurity within 30 minutes for remote wipe.",
        "11.10 Disciplinary Action: Violations may lead to disciplinary or legal measures.",
      ],
    },
  },
  physical_security: {
    ar: {
      title:
        "12. الأمن الفيزيائي والبيئي (Physical and Environmental Security)",
      purpose:
        "حماية المرافق والأنظمة من المخاطر الفيزيائية والبيئية لمنع الوصول غير المصرح به.",
      scope: "تشمل مكاتب الجهة، مراكز البيانات، ومستودعات الأجهزة الحساسة.",
      ref: "ECC-2-2 / ISO 7.1 / NIST CSF (PR.PS)",
      items: [
        "12.1 حماية المحيط: تأمين المداخل بأسوار وبوابات أمنية وكاميرات مراقبة (CCTV).",
        "12.2 التحكم في الدخول: استخدام بطاقات ذكية أو بصمة للدخول مع سجل إلكتروني لكل حركة.",
        "12.3 حماية مراكز البيانات: عزل غرف السيرفرات بجدران مضادة للحريق وأنظمة دخول مزدوجة.",
        "12.4 إدارة الزوار: إلزام الزوار بتسجيل بياناتهم وارتداء بطاقة تعريفية ومرافقتهم دائماً.",
        "12.5 الأمن المكتبي: إخلاء المكاتب من الوثائق الحساسة ووسائط التخزين عند مغادرة العمل.",
        "12.6 الحماية البيئية: تركيب أنظمة إنذار وإطفاء حريق تلقائية وحساسات رطوبة.",
        "12.7 استمرارية الطاقة: توفير مولدات احتياطية (UPS) لضمان استمرار عمل الأنظمة الحيوية.",
        "12.8 صيانة المعدات: جدولة صيانة دورية لأنظمة التكييف والكهرباء لضمان بيئة آمنة.",
        "12.9 حماية الأصول الخارجية: وضع ضوابط للأجهزة التي يتم إخراجها خارج المقر للصيانة.",
        "12.10 التخلص الآمن: إتلاف الأقراص الصلبة والوثائق الحساسة فيزيائياً قبل التخلص منها.",
      ],
    },
    en: {
      title: "12. Physical and Environmental Security",
      purpose:
        "To protect facilities and systems from physical and environmental threats.",
      scope:
        "Includes corporate offices, data centers, and sensitive hardware warehouses.",
      ref: "ECC-2-2 / ISO 7.1 / NIST CSF (PR.PS)",
      items: [
        "12.1 Perimeter Security: Secure premises with fences, gates, and CCTV surveillance.",
        "12.2 Access Control: Use smart cards or biometrics for entry with electronic logs.",
        "12.3 Data Center Protection: Isolate server rooms with fire-rated walls and dual authentication.",
        "12.4 Visitor Management: Mandatory registration, ID badges, and escorts in sensitive areas.",
        "12.5 Clean Desk Policy: Staff must clear sensitive documents/media from desks before leaving.",
        "12.6 Environmental Protection: Install automatic fire suppression and humidity sensors.",
        "12.7 Power Continuity: Provide UPS and backup generators for system availability.",
        "12.8 Maintenance: Regular HVAC and power system maintenance for hardware safety.",
        "12.9 External Asset Protection: Controls for hardware taken off-site for maintenance.",
        "12.10 Secure Disposal: Physically destroy hard drives and sensitive documents before disposal.",
      ],
    },
  },
  business_continuity: {
    ar: {
      title: "13. إدارة استمرارية الأعمال (Business Continuity Management)",
      purpose:
        "ضمان استمرار العمليات الحيوية للجهة والتعافي من الانقطاعات الكبرى في أسرع وقت ممكن.",
      scope:
        "تشمل كافة العمليات التشغيلية، الكوادر البشرية، والأنظمة التقنية الأساسية في الجهة.",
      ref: "ECC-3-1 / ISO 22301 / NIST CSF (ID.BE)",
      items: [
        "13.1 تحليل أثر الأعمال (BIA): تحديد العمليات الحيوية والمدد الزمنية المستهدفة للتعافي (RTO/RPO).",
        "13.2 استراتيجية الاستمرارية: وضع خطط بديلة للعمل (مثل العمل عن بُعد أو من موقع بديل) عند تعطل المقر.",
        "13.3 خطة استمرارية التقنية: ضمان توفر الأنظمة والشبكات البديلة الجاهزة للعمل وقت الأزمات.",
        "13.4 الهيكل التنظيمي للأزمات: تحديد فريق إدارة الأزمات وصلاحيات اتخاذ القرار وقت الطوارئ.",
        "13.5 الاتصال وقت الطوارئ: تحديث قائمة أرقام التواصل مع الموظفين والموردين والجهات الحكومية دورياً.",
        "13.6 التدريب والتوعية: إشراك الموظفين في تدريبات دورية على كيفية تنفيذ خطط الاستمرارية.",
        "13.7 مراجعة وتحديث الخطط: مراجعة خطة استمرارية الأعمال سنوياً أو عند حدوث تغييرات جوهرية.",
        "13.8 حماية سلاسل الإمداد: التأكد من قدرة الموردين الحرجين على الاستمرار في تقديم خدماتهم وقت الأزمات.",
        "13.9 الاختبارات الدورية: إجراء تمارين محاكاة (Tabletop) لاختبار كفاءة خطط الاستمرار والتعافي.",
        "13.10 التوثيق والحفظ: الاحتفاظ بنسخ (رقمية وفيزيائية) من خطط الطوارئ في أماكن يسهل الوصول إليها.",
      ],
    },
    en: {
      title: "13. Business Continuity Management (BCM)",
      purpose:
        "To ensure critical operations continue and recover quickly from major disruptions.",
      scope:
        "Covers all operational processes, human resources, and core technical systems.",
      ref: "ECC-3-1 / ISO 22301 / NIST CSF (ID.BE)",
      items: [
        "13.1 Business Impact Analysis (BIA): Identify critical processes and recovery targets (RTO/RPO).",
        "13.2 Continuity Strategy: Establish alternative work methods (e.g., remote work) during site failure.",
        "13.3 Technical Continuity: Ensure availability of redundant systems and networks for crisis periods.",
        "13.4 Crisis Structure: Define the Crisis Management Team and decision-making authorities.",
        "13.5 Emergency Contact: Regularly update contact lists for staff, suppliers, and regulators.",
        "13.6 Training: Engage employees in periodic drills on executing continuity plans.",
        "13.7 Plan Review: Annual review and update of BCM plans or after major organizational changes.",
        "13.8 Supply Chain Resilience: Ensure critical suppliers have their own continuity capabilities.",
        "13.9 Periodic Testing: Conduct tabletop exercises to test continuity and recovery effectiveness.",
        "13.10 Documentation: Maintain accessible digital and physical copies of all emergency plans.",
      ],
    },
  },
};
