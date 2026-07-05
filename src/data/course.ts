export type ResourceType = "video" | "audio" | "article";

export interface Resource {
  type: ResourceType;
  title: string;
  description: string;
  url: string;
}

export interface Checkpoint {
  id: string;
  label: string;
}

export interface VocabTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface Scenario {
  patient: string;
  instructions: string;
  answerKey: {
    arabic: string;
    transliteration: string;
    rationale: string;
  };
}

export interface Week {
  id: string;
  number: number;
  title: string;
  timeAllocation: string;
  coreConcepts: string[];
  focusAreas: { title: string; description: string }[];
  vocabTables: VocabTable[];
  resources: Resource[];
  checkpoints: Checkpoint[];
  scenario: Scenario;
}

export const COURSE_TITLE = "Clinical Fluency in Dubai";
export const COURSE_SUBTITLE = "Conversational Medical Arabic for Pharmacists";

export const CAPSTONE = {
  title: "Capstone: New Type 2 Diabetes Diagnosis Roleplay",
  description:
    "A ten-minute simulated consultation with an Arabic-speaking patient. Greet culturally, verify Emirates ID + Thiqa insurance, take a brief history, explain Metformin dosage and GI side effects with non-threatening terminology, give localized lifestyle advice, and close with culturally mandated well-wishes — maintaining dialectal consistency throughout.",
};

export const WEEKS: Week[] = [
  {
    id: "w1",
    number: 1,
    title: "Pharmacy Counter Basics & Culturally Competent Greetings",
    timeAllocation:
      "2h Listening / Video Analysis · 2h Speaking Practice & Phonetic Drills · 2h Weekly Assignment",
    coreConcepts: [
      "Master essential greetings and administrative vocabulary (Emirates ID, Insurance).",
      "Quickly distinguish between Khaleeji and Levantine dialects to build patient trust.",
    ],
    focusAreas: [
      {
        title: "Dialect triage",
        description: "Identify Khaleeji vs. Levantine speakers from opening cues within seconds.",
      },
      {
        title: "Administrative intake",
        description: "Emirates ID, Thiqa/Saada, private insurance networks under DHA/DOH rules.",
      },
      {
        title: "Warm imperatives",
        description: "Direct patients to waiting areas and counters without sounding rigid.",
      },
    ],
    vocabTables: [
      {
        caption: "Greetings & administrative phrases (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["How are you? (m/f)", "كيف حالكَ؟ / كيف حالكِ؟", "Kayfa haluka? / Kayfa haluki?"],
          ["Emirates ID", "بطاقة الهوية", "Bitaqat Al-Hawiya"],
          ["Health Insurance", "تأمين صحي", "Ta'meen Sihhi"],
          ["Please wait here", "من فضلك انتظر هنا", "Min fadlik intadhir huna"],
          ["Medical Prescription", "وصفة طبية", "Wasfa tibbiyya"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "How to say Hello/Hi/Goodbye/Thank you in Levantine Arabic",
        description: "Visual and auditory reinforcement of Shami greeting mechanics.",
        url: "https://www.youtube.com/results?search_query=levantine+arabic+greetings",
      },
      {
        type: "video",
        title: "Levantine & Khaleeji Dialect Overviews",
        description: "Distinguish the phonetic baseline of the Gulf versus the Levant.",
        url: "https://www.youtube.com/results?search_query=khaleeji+vs+levantine+arabic",
      },
    ],
    checkpoints: [
      { id: "w1-c1", label: "Mastered 25 localized administrative and greeting phrases." },
      { id: "w1-c2", label: "Differentiated Khaleeji vs. Levantine audio recordings with ≥90% accuracy." },
      { id: "w1-c3", label: "Roleplayed Emirates ID + insurance intake using localized dialect." },
    ],
    scenario: {
      patient:
        "A local Emirati male in traditional Kandura approaches the pharmacy counter. Welcome him respectfully, ask for his prescription, and request his Emirates ID and insurance card to process his medication.",
      instructions:
        "Write exactly what you would say in Arabic script plus English transliteration. Use a professional Modern Standard Arabic (MSA) tone appropriate for a healthcare setting in the UAE — MSA is understood by patients of every Arab nationality, unlike a single regional dialect.",
      answerKey: {
        arabic:
          "أهلاً بك يا أخي، كيف حالكَ؟ أعطني الوصفة لو سمحت، وهل ممكن بطاقة الهوية وبطاقة التأمين؟ تفضل بالجلوس هنا دقائق وسنعد لك الدواء.",
        transliteration:
          "Ahlan bika ya akhi, kayfa haluka? A'tini al-wasfa law samaht, wa hal mumkin bitaqat al-hawiya wa bitaqat al-ta'meen? Tafaddal bi-l-juloos huna daqaiq wa sanu'idd laka al-dawaa'.",
        rationale:
          "Kayfa haluka is the universally understood Modern Standard Arabic phrase for 'How are you?' — unlike Gulf 'shlonak' or Levantine 'kifak', it is recognized by every Arabic speaker regardless of nationality. 'Ahlan bika' (welcome) followed by 'ya akhi' (my brother) keeps a warm, respectful tone without lapsing into a specific regional dialect. 'Law samaht' (if you please) and 'tafaddal bi-l-juloos huna' (please sit here) are the standard, formally correct ways to make a polite request and offer a seat in a healthcare setting.",
      },
    },
  },
  {
    id: "w2",
    number: 2,
    title: "Symptom Elicitation & Anatomical Terminology",
    timeAllocation: "2h Listening/Video · 2h Speaking Practice · 2h Weekly Assignment",
    coreConcepts: [
      "Accurate symptom elicitation depends on colloquial anatomical vocabulary — patients rarely use MSA body-part names. The pharmacist must recognize and produce Khaleeji and Levantine terms for head, chest, stomach, and throat, and know when a patient's word choice signals dialect and register.",
      "Beyond naming body parts, this week trains open-ended clinical inquiries: 'What are your symptoms?', 'How long has this been going on?', 'Are you taking other medications?', 'Are you pregnant?'. These questions must be phrased with dialect-appropriate softeners to protect patient dignity, especially for reproductive or sensitive topics.",
    ],
    focusAreas: [
      { title: "Colloquial anatomy", description: "Head, chest, stomach, throat in both dialects." },
      { title: "Open-ended inquiry", description: "Elicit symptom onset, duration, and severity." },
      { title: "Sensitive topics", description: "Pregnancy, allergies, concurrent meds — asked with tact." },
    ],
    vocabTables: [
      {
        caption: "Clinical inquiry phrases (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["How old are you?", "كم عمركَ؟ / كم عمركِ؟", "Kam omruka? / Kam omruki?"],
          ["What are your symptoms?", "ما هي الأعراض؟", "Ma hiya al-a'raad?"],
          ["Are you pregnant?", "هل أنتِ حامل؟", "Hal anti hamil?"],
          ["Are you taking other medications?", "هل تأخذ أدوية أخرى؟", "Hal ta'khudh adwiyah ukhra?"],
          ["Do you have allergies?", "هل لديك حساسية؟", "Hal ladayka/ladayki hasasiyah?"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Body Parts Vocabulary — Levantine & MSA",
        description: "Colloquial vs. standard anatomical terms with pronunciation drills.",
        url: "https://www.youtube.com/results?search_query=arabic+body+parts+levantine+MSA",
      },
      {
        type: "video",
        title: "Medical Episodes — Levantine Arabic",
        description: "Native interviews covering symptom description in colloquial Shami.",
        url: "https://www.youtube.com/results?search_query=levantine+arabic+medical+symptoms",
      },
      {
        type: "article",
        title: "Common Arabic Medical Terminology Reference",
        description: "Cross-referenced glossary of anatomical and symptom vocabulary.",
        url: "https://en.wikipedia.org/wiki/Medical_Arabic",
      },
    ],
    checkpoints: [
      { id: "w2-c1", label: "Learned 30 colloquial anatomical terms across both dialects." },
      { id: "w2-c2", label: "Produced 10 open-ended symptom inquiries without MSA scaffolding." },
      { id: "w2-c3", label: "Roleplayed a headache triage in Levantine and a stomach complaint in Khaleeji." },
    ],
    scenario: {
      patient:
        "A Levantine woman in her 30s approaches the counter clutching her stomach. She looks tired and mildly distressed. Elicit her symptoms, onset, and current medications before recommending anything.",
      instructions:
        "Draft a formal Modern Standard Arabic (MSA) dialogue eliciting symptoms. Include Arabic script and transliteration. Use standard empathy markers appropriate for a female patient describing abdominal symptoms.",
      answerKey: {
        arabic:
          "أهلاً بكِ، أتمنى لكِ الشفاء. ما هي الأعراض التي تشعرين بها؟ منذ متى وأنتِ على هذه الحال؟ هل تشعرين بألم أو غثيان؟ وهل تتناولين أي دواء آخر حالياً؟",
        transliteration:
          "Ahlan biki, atamanna laki al-shifaa'. Ma hiya al-a'raad allati tash'urina biha? Mundhu mata wa anti 'ala hadhihi al-haal? Hal tash'urina bi-alam aw ghathayan? Wa hal tatanawalina ay dawaa' aakhar haaliyan?",
        rationale:
          "'Atamanna laki al-shifaa'' (I wish you a swift recovery) is a standard empathetic opener understood across every Arab region — unlike a dialect-specific comfort phrase, it never sounds out of place. 'Mundhu mata' (since when) and 'Ma hiya al-a'raad' use the formal MSA interrogative structure rather than colloquial 'shu al-a'raad' or 'shno a'radhak', so the question is unambiguous to a patient from any Arabic-speaking background. Asking about pain, nausea, and concurrent medications in the same formal register keeps the exchange clinically precise.",
      },
    },
  },
  {
    id: "w3",
    number: 3,
    title: "Explaining Dosage, Frequencies, and Administration Routes",
    timeAllocation: "2h Listening/Video · 2h Speaking Practice & Verbs · 2h Weekly Assignment",
    coreConcepts: [
      "Dosage counseling is where miscommunication becomes dangerous. The pharmacist must articulate numerical dose, frequency, timing relative to food, and route of administration in the patient's dialect. Numbers, time expressions, and imperative verbs must feel native.",
      "Physical formulations — tablet, capsule, syrup, drops, cream, inhaler — carry distinct dialect names. Confusing 'habbah' (tablet) with 'kabsuleh' (capsule) can mean a patient chews a modified-release medication. This week drills the vocabulary of forms plus the verbs of administration: swallow, apply, inhale, dissolve.",
    ],
    focusAreas: [
      { title: "Numerical dosing", description: "Doses, frequencies, and timing relative to meals." },
      { title: "Formulations", description: "Tablet, capsule, syrup, inhaler, drops, cream." },
      { title: "Administration verbs", description: "Swallow, apply, inhale, dissolve — in imperative mood." },
    ],
    vocabTables: [
      {
        caption: "Dosage & administration phrases (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Pill / Tablet", "قرص / حبة", "Qurs / Habbah"],
          ["Capsule", "كبسولة", "Kabsoula"],
          ["Medical Syrup", "شراب", "Sharab"],
          ["Once a day", "مرة في اليوم", "Marrah fi al-yawm"],
          ["Three times a day", "ثلاث مرات في اليوم", "Thalath marrat fi al-yawm"],
          ["Before food", "قبل الأكل", "Qabla al-akl"],
          ["After food", "بعد الأكل", "Ba'da al-akl"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Medical Vocabulary in Levantine Arabic (Beginners)",
        description: "Dense vocabulary builder for physical formulations.",
        url: "https://www.youtube.com/results?search_query=levantine+arabic+pharmacy+vocabulary",
      },
      {
        type: "video",
        title: "Levantine Arabic — Medical Episodes",
        description: "Native interviews across a range of medical topics.",
        url: "https://www.youtube.com/results?search_query=levantine+arabic+doctor+visit",
      },
      {
        type: "article",
        title: "Prescription Instructions Reference (Arabic)",
        description: "Standardized prescription phrasing across dialects.",
        url: "https://www.who.int/publications/i/item/9789241511810",
      },
    ],
    checkpoints: [
      { id: "w3-c1", label: "Mastered numbers 1–100 and time expressions for dosing." },
      { id: "w3-c2", label: "Named 12 formulations and their administration verbs in both dialects." },
      { id: "w3-c3", label: "Roleplayed a 3-drug regimen handoff with clear food-timing instructions." },
    ],
    scenario: {
      patient:
        "A Levantine patient is picking up amoxicillin 500mg capsules — one capsule every 8 hours for 7 days. Counsel on dose, spacing, food timing, and stress the importance of completing the entire antibiotic course even after symptoms resolve.",
      instructions:
        "Draft the full Arabic counseling dialogue in formal Modern Standard Arabic (MSA). Include Arabic script and transliteration. Instructions must be unambiguous to prevent antibiotic resistance — MSA avoids any dialect-specific term for 'capsule' or 'course of treatment' that a patient from a different nationality might not recognize.",
      answerKey: {
        arabic:
          "هذا مضاد حيوي. يجب أن تأخذ حبة واحدة، ثلاث مرات في اليوم، بعد الأكل، لمدة سبعة أيام. من المهم جداً أن تكمل الدواء كله حتى لو شعرت بتحسن، لكي لا تعود العدوى.",
        transliteration:
          "Hadha mudadd hayawi. Yajibu an ta'khudh habbah wahida, thalath marrat fi al-yawm, ba'da al-akl, li-muddat sab'at ayyam. Min al-muhim jiddan an tukmil al-dawaa' kullahu hatta law sha'arta bi-tahassun, li-kay la ta'ood al-adwa.",
        rationale:
          "Hadha mudadd hayawi (this is an antibiotic) uses proper MSA demonstrative pronouns to name the drug class plainly, which anchors why completion matters. Yajibu an ta'khudh (you must take) is the formal subjunctive construction required after yajibu an (must) — grammatically correct and unambiguous. Min al-muhim jiddan an tukmil (it is very important that you complete) is the standard, professional way to mandate adherence without sounding aggressive, and reads identically whether the patient is Emirati, Levantine, or of any other Arab nationality.",
      },
    },
  },
  {
    id: "w4",
    number: 4,
    title: "Side Effects, Adverse Reactions & High-Risk Medications",
    timeAllocation: "2h Listening/Video · 2h Speaking Practice · 2h Weekly Assignment",
    coreConcepts: [
      "Disclosing side effects without inducing non-compliance requires linguistic finesse. The pharmacist frames adverse reactions as monitored possibilities rather than looming threats, using conditional structures ('if you notice…, then…') and reassurance markers.",
      "High-risk medications — anticoagulants, first-generation antihistamines, opioids — demand explicit red-flag language. This week builds vocabulary for anaphylaxis, bleeding, drowsiness, and drug interactions, plus the imperative phrasing that tells a patient exactly when to seek emergency care.",
    ],
    focusAreas: [
      { title: "Empathetic disclosure", description: "Frame side effects as monitored, not feared." },
      { title: "Red-flag language", description: "Anaphylaxis, bleeding, dizziness — when to call 999." },
      { title: "Conditional structures", description: "'If X, then Y' — the grammar of safety-netting." },
    ],
    vocabTables: [
      {
        caption: "Side-effect & emergency vocabulary (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Side effects", "آثار جانبية", "Athaar janibiyya"],
          ["Severe drowsiness", "نعاس شديد", "Nu'aas shadeed"],
          ["Rash / Allergic reaction", "طفح جلدي / حساسية", "Tafah jildi / Hasasiyah"],
          ["Swelling", "تورم", "Tawarrum"],
          ["Shortness of breath", "ضيق التنفس", "Deeq al-tanaffus"],
          ["Go to emergency immediately", "اذهب إلى الطوارئ فوراً", "Idhhab ila al-tawari' fawran"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Learn Arabic Vocabulary for Diseases",
        description: "Visual reinforcement of adverse-reaction terminology.",
        url: "https://www.youtube.com/results?search_query=arabic+vocabulary+diseases+symptoms",
      },
      {
        type: "video",
        title: "Arabic Medical Vocabulary — Adverse Drug Reactions",
        description: "Native pharmacist walkthroughs of high-risk counseling.",
        url: "https://www.youtube.com/results?search_query=arabic+pharmacist+counseling",
      },
      {
        type: "article",
        title: "WHO — Communicating Medicine Safety Information",
        description: "Framework for disclosing risks without eroding compliance.",
        url: "https://www.who.int/teams/regulation-prequalification/regulation-and-safety",
      },
    ],
    checkpoints: [
      { id: "w4-c1", label: "Mastered 15 common side-effect and adverse-reaction terms." },
      { id: "w4-c2", label: "Constructed 5 conditional sentences outlining anaphylaxis emergency response." },
      { id: "w4-c3", label: "Roleplayed counseling for a high-risk medication (e.g., Warfarin) with an AI voice bot." },
    ],
    scenario: {
      patient:
        "A Khaleeji patient is starting Warfarin. Explain the two most important warning signs (unusual bleeding, bruising), the food/drug interaction with leafy greens and NSAIDs, and precisely when to seek emergency care.",
      instructions:
        "Write a formal Modern Standard Arabic (MSA) counseling script. Include Arabic script and transliteration. Emphasize red-flag signs clearly and professionally, in language understood by patients of any Arab nationality.",
      answerKey: {
        arabic:
          "هذا الدواء يُخفف من تجلط الدم، لذلك يجب أن تنتبه جيداً. إذا لاحظتَ نزيفاً من الأنف أو اللثة، أو ظهرت كدمات دون سبب واضح، يجب أن تتصل بنا فوراً أو تذهب إلى الطوارئ. تجنّب الإكثار من الخضروات الورقية، ولا تتناول إيبوبروفين أو أسبرين إلا بإذن الطبيب.",
        transliteration:
          "Hadha al-dawaa' yukhaffif min tajallut al-dam, lidhalika yajibu an tantabih jayyidan. Idha lahazta nazeefan min al-anf aw al-litha, aw zaharat kadamat duna sabab wadih, yajibu an tattasil bina fawran aw tadh-hab ila al-tawari'. Tajannab al-ikthar min al-khudrawat al-waraqiyya, wa la tatanawal ibuprofen aw aspirin illa bi-idhn al-tabib.",
        rationale:
          "Framing Warfarin as thinning the blood (yukhaffif min tajallut al-dam) in plain MSA is intuitive and avoids relying on a colloquial idiom for anticoagulation. Repeating 'yajibu an' constructions makes each safety instruction sound equally authoritative regardless of the patient's dialect background. Naming the interaction generically (khudrawat waraqiyya — leafy greens) rather than a dialect-specific food word ensures the warning is understood by any Arabic speaker in the UAE.",
      },
    },
  },
  {
    id: "w5",
    number: 5,
    title: "Pain Assessment & OTC Triage",
    timeAllocation: "2h Listening/Video · 2h Speaking Practice · 2h Weekly Assignment",
    coreConcepts: [
      "Pain assessment in colloquial Arabic hinges on the pain scale (Miqyas al-alam) and descriptive vocabulary — sharp, dull, throbbing, burning. The pharmacist must elicit character, location, radiation, and timing without leading the patient.",
      "OTC triage requires quick decision-making: when to sell paracetamol, when to escalate to a physician, when to counsel on red flags. This week builds the culturally attuned phrases for validating discomfort (Salamtak, ma tshoof shar) and directing patients appropriately.",
    ],
    focusAreas: [
      { title: "Pain scale", description: "Miqyas al-alam 0–10 and descriptive character words." },
      { title: "OTC red flags", description: "When to escalate: chest pain, severe abdominal pain, neuro signs." },
      { title: "Validating comfort", description: "'Salamtak' and other empathy phrases that build trust." },
    ],
    vocabTables: [
      {
        caption: "Pain descriptors (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Pain / Ache", "ألم / وجع", "Alam / Waja'"],
          ["Cough", "سعال / كحة", "Su'aal / Kahha"],
          ["Nausea", "غثيان", "Ghathayan"],
          ["Constipation", "إمساك", "Imsak"],
          ["Diarrhea", "إسهال", "Ishaal"],
          ["Stomach cramps", "مغص", "Maghas"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Pain Assessment in Arabic — Clinical Vocabulary",
        description: "Character, location, and severity descriptors.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+pain+assessment",
      },
      {
        type: "video",
        title: "Levantine Medical Arabic — Pain Episodes",
        description: "Real dialogues around pain description and OTC triage.",
        url: "https://www.youtube.com/results?search_query=levantine+arabic+pain+description",
      },
      {
        type: "article",
        title: "OTC Triage Guidelines — Community Pharmacy",
        description: "Structured framework for pain triage in the pharmacy setting.",
        url: "https://www.pharmaceutical-journal.com/",
      },
    ],
    checkpoints: [
      { id: "w5-c1", label: "Used the Miqyas al-alam scale in both dialects." },
      { id: "w5-c2", label: "Identified 10 red-flag pain patterns requiring physician referral." },
      { id: "w5-c3", label: "Completed OTC triage roleplay for headache, abdominal pain, and menstrual cramps." },
    ],
    scenario: {
      patient:
        "A Levantine woman requests something for her daughter's stomach cramps and diarrhea. The child is 6, has had symptoms for one day, no fever. Counsel with empathy and provide clear red-flag guidance.",
      instructions:
        "Write a supportive dialogue in formal Modern Standard Arabic (MSA), directed at the mother. Include Arabic script and transliteration. Use standard empathy phrases and clearly state when to see a doctor.",
      answerKey: {
        arabic:
          "أتمنى لها الشفاء. هل لديها حمى الآن؟ سأعطيكِ محلول جفاف لتعويض السوائل، بالإضافة إلى دواء للإسهال. إذا استمر المغص والإسهال أكثر من يومين، يجب أن تري طبيباً.",
        transliteration:
          "Atamanna laha al-shifaa'. Hal ladayha humma al-aan? Sa-u'tiki mahloul jafaf li-ta'weed al-sawa'il, bil-idafa ila dawaa'in lil-ishaal. Idha istamarra al-maghas wa-l-ishaal akthar min yawmayn, yajibu an tarayi tabeeban.",
        rationale:
          "Atamanna laha al-shifaa' (I wish her a recovery) is the standard MSA empathy marker for a caregiver — it works whether the mother is Emirati, Levantine, or of any other nationality, unlike a dialect-specific comfort phrase. Mahloul jafaf (rehydration solution) and yajibu an tarayi tabeeban (you must see a doctor) are precise clinical MSA terms that leave no room to misjudge the urgency of the two-day red flag.",
      },
    },
  },
  {
    id: "w6",
    number: 6,
    title: "Chronic Disease Counseling: Diabetes & Hypertension",
    timeAllocation: "2h Listening/Video · 2h Speaking Practice · 2h Weekly Assignment",
    coreConcepts: [
      "Chronic disease counseling requires long-arc communication: explaining a lifetime medication, teaching self-monitoring, and negotiating lifestyle change. Diabetes and hypertension are the two most common counseling encounters in Dubai community pharmacy.",
      "Ramadan fasting adds a layer of clinical negotiation. The pharmacist must know how to adjust dosing schedules for Suhoor and Iftar, when to counsel a patient against fasting, and how to frame the conversation with religious sensitivity.",
    ],
    focusAreas: [
      { title: "Self-monitoring", description: "Blood glucose and BP measurement in colloquial terms." },
      { title: "Lifestyle negotiation", description: "Diet, exercise, and adherence conversations." },
      { title: "Ramadan dosing", description: "Suhoor/Iftar adjustments and fasting risk assessment." },
    ],
    vocabTables: [
      {
        caption: "Chronic disease vocabulary (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Diabetes / Blood Sugar", "السكري / سكر الدم", "Al-sukkari / Sukkar al-dam"],
          ["Blood Pressure", "ضغط الدم", "Daghut al-dam"],
          ["Fasting (e.g., Ramadan)", "الصيام", "Al-siyam"],
          ["Diet / Nutrition", "نظام غذائي", "Nidham ghidha'i"],
          ["Measurement / Testing", "قياس / فحص", "Qiyas / Fahs"],
          ["Suhoor / Iftar", "سحور / إفطار", "Suhoor / Iftar"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Vocabulary for Diseases & Chronic Conditions",
        description: "Visual reinforcement of chronic disease terminology.",
        url: "https://www.youtube.com/results?search_query=arabic+diabetes+hypertension+vocabulary",
      },
      {
        type: "video",
        title: "Ramadan & Medication — Arabic Pharmacist Guide",
        description: "Real cases on dose timing during fasting.",
        url: "https://www.youtube.com/results?search_query=arabic+pharmacist+ramadan+medication",
      },
      {
        type: "article",
        title: "IDF-DAR Practical Guidelines: Diabetes and Ramadan",
        description: "International consensus on fasting risk stratification.",
        url: "https://www.idf.org/our-activities/education/diabetes-and-ramadan.html",
      },
    ],
    checkpoints: [
      { id: "w6-c1", label: "Explained Metformin mechanism and titration in both dialects." },
      { id: "w6-c2", label: "Negotiated a Ramadan dosing plan with a Type 2 diabetic patient." },
      { id: "w6-c3", label: "Taught home BP monitoring using colloquial imperatives." },
    ],
    scenario: {
      patient:
        "A newly-diagnosed Type 2 diabetic Emirati male is starting Metformin 500mg twice daily. He plans to fast during Ramadan next month. Explain the medication, GI side effects, and open the conversation about fasting safely.",
      instructions:
        "Write a formal Modern Standard Arabic (MSA) counseling dialogue. Include Arabic script and transliteration. Approach Ramadan with religious sensitivity — negotiate, do not forbid.",
      answerKey: {
        arabic:
          "أهلاً بك يا أخي، أتمنى لك الشفاء. هذا دواء السكري (ميتفورمين). يجب أن تتناول حبة في الصباح وحبة في المساء، ويُفضّل تناوله مع الطعام حتى لا يُزعج معدتك. قد تشعر بمغص خفيف في الأسبوع الأول، لكنه سيزول. أما بخصوص الصيام في رمضان، فسنتحدث مع الطبيب لتعديل الجرعات على السحور والإفطار، حتى تصوم بأمان إن شاء الله.",
        transliteration:
          "Ahlan bika ya akhi, atamanna laka al-shifaa'. Hadha dawaa' al-sukkari (Metformin). Yajibu an tatanawal habbah fi al-sabah wa habbah fi al-masaa', wa yufaddal tanawuluhu ma'a al-ta'aam hatta la yuz'ij mi'datak. Qad tash'ur bi-maghas khafif fi al-usbu' al-awwal, lakinnahu sayazoul. Amma bikhusoos al-siyam fi Ramadan, fasanatahaddath ma'a al-tabib li-ta'deel al-jur'aat 'ala al-suhoor wa-l-iftar, hatta tasoom bi-aman insha'Allah.",
        rationale:
          "Yajibu an tatanawal (you must take) uses the formal MSA construction consistently, so the dosing schedule reads with the same authority as the safety warning. 'Fasanatahaddath ma'a al-tabib' (we will speak with the doctor) invites collaboration on Ramadan dosing rather than issuing a blanket rule — a standard, respectful MSA framing that works regardless of the patient's specific background. Closing with 'insha'Allah' respects the religious dimension while the rest of the sentence stays in precise clinical register.",
      },
    },
  },
  {
    id: "w7",
    number: 7,
    title: "Pediatric & Geriatric Counseling",
    timeAllocation: "2h Listening/Video · 2h Speaking Practice · 2h Weekly Assignment",
    coreConcepts: [
      "Pediatric counseling in Dubai is almost always mediated through a caregiver — most often the mother. The pharmacist speaks to both: giving clinical instructions to the parent while validating the child's experience. Weight-based dosing calculations must be explained in accessible terms.",
      "Geriatric counseling demands slower pace, respectful address (Ammu/Khaltu — uncle/aunt), and awareness of polypharmacy. Many elderly patients in Dubai are visiting from surrounding countries and may hold prescriptions in different naming conventions.",
    ],
    focusAreas: [
      { title: "Weight-based dosing", description: "Explaining mg/kg to caregivers in plain Arabic." },
      { title: "Respectful address", description: "Ammu, Khaltu, Haj/Hajjeh — cultural age markers." },
      { title: "Polypharmacy review", description: "Reconciling multiple medications with an elderly patient." },
    ],
    vocabTables: [
      {
        caption: "Pediatric & geriatric vocabulary (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Child / Children", "طفل / أطفال", "Tifl / Atfaal"],
          ["Weight", "وزن", "Wazn"],
          ["Uncle (respectful address)", "عمّي", "Ammi"],
          ["Aunt (respectful address)", "خالتي", "Khalti"],
          ["Pilgrim (elder honorific)", "حاج / حجة", "Haj / Hajjah"],
          ["Syringe / Dropper", "حقنة / قطارة", "Huqnah / Qattarah"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Talking to Kids in Arabic — Caregiver Communication",
        description: "Bridging parent-child conversation in the clinical setting.",
        url: "https://www.youtube.com/results?search_query=arabic+pediatric+vocabulary",
      },
      {
        type: "video",
        title: "Geriatric Pharmacy — Arabic Case Discussions",
        description: "Polypharmacy and adherence challenges in older patients.",
        url: "https://www.youtube.com/results?search_query=arabic+elderly+care+medical",
      },
      {
        type: "article",
        title: "Pediatric Weight-Based Dosing Reference",
        description: "Practical mg/kg calculations for community pharmacy.",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
    ],
    checkpoints: [
      { id: "w7-c1", label: "Calculated and communicated weight-based pediatric doses in Arabic." },
      { id: "w7-c2", label: "Used respectful geriatric address (Ammu/Khaltu/Haj) in 5 roleplays." },
      { id: "w7-c3", label: "Reconciled a polypharmacy list of ≥5 medications with an elderly patient." },
    ],
    scenario: {
      patient:
        "A mother brings her 4-year-old (16 kg) with fever. You are dispensing paracetamol syrup 120mg/5ml, dose 15 mg/kg every 6 hours. Counsel the mother clearly: dose, frequency, max/day, and when to see a doctor.",
      instructions:
        "Write a warm, formal Modern Standard Arabic (MSA) dialogue directed at the mother, with soft reassurance for the child. Include Arabic script and transliteration.",
      answerKey: {
        arabic:
          "أتمنى لها الشفاء. وزنها ١٦ كيلوغراماً، فالجرعة المناسبة هي ١٠ مل من الشراب كل ٦ ساعات، أي أربع مرات كحد أقصى في اليوم. يجب أن تُرجّي القارورة جيداً قبل إعطائها الدواء. وإذا لم تنخفض الحرارة بعد يومين، أو ارتفعت إلى أكثر من ٣٩ درجة، يجب أن تراجعي طبيباً.",
        transliteration:
          "Atamanna laha al-shifaa'. Waznuha sittata 'ashara kilughraman, fal-jur'ah al-munasibah hiya 'ashara millilitrat min al-sharaab kulla sitta sa'aat, ay arba' marrat ka-hadd aqsa fi al-yawm. Yajibu an turajji al-qarurah jayyidan qabla i'taiha al-dawaa'. Wa idha lam tankhafid al-harara ba'da yawmayn, aw irtafa'at ila akthar min tis'a wa thalathin darajah, yajibu an turaji'i tabeeban.",
        rationale:
          "Anchoring the dose in the child's exact weight (waznuha sittata 'ashara kilughraman) in formal MSA teaches the underlying mg/kg logic clearly, without relying on a dialect-specific number system. Ka-hadd aqsa (as a maximum) is stated plainly — paracetamol overdose is a leading pediatric safety concern, so this phrase must be unambiguous to any caregiver. The temperature threshold and two-day rule give the mother two concrete, standard escalation triggers regardless of her own dialect background.",
      },
    },
  },
  {
    id: "w8",
    number: 8,
    title: "Empathy, De-escalation, and Handling Confused Patients",
    timeAllocation: "2h Listening/Video · 2h Speaking Practice · 2h Weekly Assignment",
    coreConcepts: [
      "The culmination of clinical fluency is navigating conflict and emotional distress at the counter. This module equips the pharmacist with de-escalation vocabulary to calm agitated patients — phrases like 'Tawwil balak' (stay calm/be patient) and 'Ana fahim a'layk' (I understand you) that lower emotional temperature.",
      "A common friction point in Dubai pharmacies involves insurance and administrative denials. The pharmacist must acknowledge the frustration, position themselves alongside the patient rather than as an administrative barrier, and offer concrete next steps — often escalation to the insurance line or a partial dispense.",
    ],
    focusAreas: [
      { title: "Lowering temperature", description: "Tawwil balak, Ihda', Ana fahim a'layk." },
      { title: "Aligning with patient", description: "Language that puts you on the same team." },
      { title: "Concrete next steps", description: "Always offer a path forward — never a flat 'no'." },
    ],
    vocabTables: [
      {
        caption: "De-escalation phrases (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Please calm down", "أرجو الهدوء", "Arju al-hudoo'"],
          ["I understand your situation", "أنا أتفهم وضعك", "Ana atafahham wad'ak"],
          ["Pre-authorization required", "موافقة مسبقة من التأمين", "Muwafaqa musabbaqa min al-ta'meen"],
          ["Claim rejected", "مطالبة مرفوضة", "Mutalaba marfouda"],
          ["Alternative (Generic)", "بديل", "Badeel"],
          ["Do not worry", "لا تقلق", "La taqlaq"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic De-escalation Phrases for Healthcare",
        description: "Practical calming vocabulary in both dialects.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+de-escalation",
      },
      {
        type: "video",
        title: "Difficult Conversations — Arabic Pharmacy Cases",
        description: "Real anonymized cases of counter conflict resolution.",
        url: "https://www.youtube.com/results?search_query=arabic+conflict+resolution+pharmacy",
      },
      {
        type: "article",
        title: "Cultural Competency in Gulf Healthcare Communication",
        description: "Framework for empathetic patient interaction in UAE settings.",
        url: "https://www.dha.gov.ae/",
      },
    ],
    checkpoints: [
      { id: "w8-c1", label: "Deployed 10 de-escalation phrases in stress roleplay without hesitation." },
      { id: "w8-c2", label: "Handled an insurance denial with an agitated patient in ≤3 minutes." },
      { id: "w8-c3", label: "Completed the capstone Type 2 diabetes counseling roleplay." },
    ],
    scenario: {
      patient:
        "A Levantine woman is visibly upset — her chronic medication has been denied by insurance and she cannot afford the full price. She raises her voice at the counter. De-escalate, align with her, and offer concrete next steps.",
      instructions:
        "Write a deeply empathetic response in formal Modern Standard Arabic (MSA). Include Arabic script and transliteration. Show you are on her side, actively solving the problem — never acting as an administrative barrier.",
      answerKey: {
        arabic:
          "أعتذر منك يا أختي، ولا تقلقي، أنا أقدر وضعك. للأسف التأمين رفض تغطية هذا الدواء لأنه غالي الثمن. لكن لا تقلقي، سأتصل بالطبيب الآن وأطلب منه أن يكتب بديلاً له نفس المفعول ويغطيه التأمين. اجلسي دقائق فقط.",
        transliteration:
          "A'tadhir minki ya ukhti, wa la taqlaqi, ana uqaddir wad'aki. Li-l-asaf al-ta'meen rafada taghtiyat hadha al-dawaa' li-annahu ghali al-thaman. Lakin la taqlaqi, sa-uttasil bi-l-tabeeb al-aan wa atlub minhu an yaktuba badeelan lahu nafs al-maf'oul wa yughatteehi al-ta'meen. Ijlisi daqaiq faqat.",
        rationale:
          "A'tadhir minki (I apologize to you) and la taqlaqi (do not worry) are standard, formal markers for defusing anxiety that read as sincere without leaning on any single dialect's comfort phrase. Ana uqaddir wad'aki (I understand/appreciate your situation) is a direct MSA rendering of professional empathy. Proposing to call the doctor and offering a covered generic alternative (badeel) moves the pharmacist from gatekeeper to active advocate, using clear, standard syntax any patient in the UAE would immediately understand.",
      },
    },
  },
];

export interface VocabEntry {
  id: string;
  arabic: string;
  transliteration: string;
  note?: string;
  nextReviewDate?: number;
  interval?: number;
}

export const LEVELS = [
  { level: 1, title: "Student", min: 0 },
  { level: 2, title: "Clinical Novice", min: 100 },
  { level: 3, title: "Bedside Communicator", min: 250 },
  { level: 4, title: "Fluent Clinician", min: 450 },
  { level: 5, title: "Clinical Communicator", min: 700 },
];

export const XP_PER_QUIZ = 25;
export const XP_PER_FLASHCARD = 5;
export const XP_PER_WEEK = 50;

export function levelForXp(xp: number) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.min) current = l;
  }
  const idx = LEVELS.indexOf(current);
  const next = LEVELS[idx + 1] ?? null;
  return { ...current, next };
}
