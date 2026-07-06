import { Week } from "../course";

export const week4: Week = {
  id: "pharmacy-week-4",
  number: 4,
  title: "Medication Delivery: Routes of Administration",
  timeAllocation: "45-60 minutes",
  coreConcepts: ["Administration routes", "Injection types"],
  focusAreas: [{ title: "Delivery", description: "How medication enters the body." }],
  vocabTables: [
    {
      caption: "Routes of Administration",
      headers: ["English", "Arabic", "Transliteration"],
      rows: [
        ["Orally", "بالفم", "Bil-fam"],
        ["Sublingual", "تحت اللسان", "Taht allesaan"],
        ["Rectally", "شرجي", "Shargee"],
        ["Vaginally", "مهبلي", "Mehbalee"],
        ["Intramuscular Injection", "حقنة بالعضل", "Huqnah bel 'adal"],
        ["Intravenous", "حقنة بالوريد", "Huqnah bel wareed"],
        ["Intradermal Injection", "حقنة في الأدمة", "Huqnah fi al-adamah"],
        ["Subcutaneous Injection", "حقنة تحت الجلد", "Huqnah taht al-geld"],
        ["Inhalation", "استنشاق", "Estenshaaq"],
        ["Drops Topically", "نقط موضعية", "Nuqat mawde'yyah"],
        ["Oral Route", "عَنْ طَرِيق الفَم", "'An ṭarīq al-fam"],
        ["Topical / External", "مَوْضِعِي / خَارِجِي", "Mawḍi'ī / Khārijī"],
        ["Intravenous (IV)", "فِي الوَرِيد (حُقْنَة وَرِيدِيَّة)", "Fil-warīd (Ḥuqnah warīdiyyah)"],
        ["Intramuscular (IM)", "فِي العَضَل (حُقْنَة عَضَلِيَّة)", "Fil-'aḍal (Ḥuqnah 'aḍaliyyah)"],
        ["Subcutaneous (SC)", "تَحْتَ الجِلْد", "Taḥta al-jild"],
        ["Rectal", "عَنْ طَرِيق المُسْتَقِيم (شَرَجِي)", "'An ṭarīq al-mustaqīm (Sharajī)"],
        ["Apply / Rub (Imperative)", "إِدْهَنْ / ضَعْ", "Idhan / Ḍa'"],

      ],
    },
  ],
  resources: [
    {
      type: "video",
      title: "Pharmacist Guide: Pharmacology, Pharmacokinetics & Routes of Administration",
      description: "Presented by a clinical pharmacist, this video seamlessly blends English medical terms with clear, educated Arabic explanations of drug administration routes, mirroring the exact linguistic environment of the GCC27.",
      url: "https://www.youtube.com/watch?v=10_PvPqm0Ow",
    },
    {
      type: "docs",
      title: "Guidelines for Patient Information Leaflets (Bilingual)",
      description: "An official regulatory document from the Egyptian Drug Authority that provides the highest standard of formal, standardized Arabic translations for routes of administration as mandated for pharmaceutical packaging28.",
      url: "https://www.edaegypt.gov.eg/media/z1tjvegp/inserts-guidelines-draft-v-2_phcare-tech-edaegypt.pdf",
    },
    {
      type: "video",
      title: "طرق إعطاء الدواء (Methods of Administering Medicine)",
      description: "An educational video providing visual and linguistic clarity on the differences between intramuscular, intravenous, and enteral routes using highly accessible Fusha29.",
      url: "https://www.youtube.com/watch?v=CeA66751eA8",
    },
  ],
  checkpoints: [{ id: "pharmacy-wk4-cp1", label: "Routes Quiz" }],
  scenario: {
    patient: "You must give the medication by mouth.",
    instructions: "Translate: 'Orally'",
    answerKey: { arabic: "بالفم", transliteration: "Bil-fam", rationale: "Oral administration." },
  },
};
