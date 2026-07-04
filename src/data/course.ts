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
      "Dubai's healthcare environment splits between Emirati nationals (Khaleeji dialect) and a large Levantine-speaking expatriate population. Rapidly identifying which dialect framework to employ — often from visual cues like the Kandura or Abaya, or the patient's first greeting — is critical for building the trust that drives medication compliance.",
      "Initial greetings diverge phonetically and morphologically. Khaleeji greetings lean on hospitality and tribal respect; Levantine greetings are more casual and urbane. This week also establishes administrative intake vocabulary: requesting the Emirates ID (Bitaqat Al Hawiya), verifying Thiqa/Saada/private networks, and directing patients using culturally warm imperatives instead of rigid textbook translations.",
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
        caption: "Greetings & administrative phrases",
        headers: ["English", "Khaleeji (Gulf)", "Levantine (Shami)", "MSA"],
        rows: [
          ["How are you? (m/f)", "Shlonak? / Shlonich?", "Kifak? / Kifik?", "Kayfa haluka? / Kayfa haluki?"],
          ["Emirates ID", "Bitaqat Al Hawiya", "Hawiyyeh", "Bitaqat Al Hawiya"],
          ["Health Insurance", "Ta'meen", "Ta'meen", "Ta'meen"],
          ["Please wait here", "Istareeh hni / Irtah hni", "Ntor hon / Mnel fadlak ntor hon", "Intadhir huna"],
          ["Medical Prescription", "Wasfa / Rawshetta", "Rawshetta / Wasfeh", "Wasfa tibbiyya"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "How to say Hello/Hi/Goodbye/Thank you in Levantine Arabic",
        description: "Visual and auditory reinforcement of Shami greeting mechanics.",
        url: "https://www.youtube.com/watch?v=X-4FyfL-Xdg",
      },
      {
        type: "audio",
        title: "Talk In Arabic — Levantine & Khaleeji Dialect Overviews",
        description: "Distinguish the phonetic baseline of the Gulf versus the Levant.",
        url: "https://talkinarabic.com/arabic-youtube/",
      },
      {
        type: "article",
        title: "Health Insurance in the United Arab Emirates",
        description: "Structural differences between Thiqa, Saada, and private networks.",
        url: "https://www.expatica.com/ae/healthcare/healthcare-basics/health-insurance-in-the-united-arab-emirates-71483/",
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
        "Write exactly what you would say in Arabic script plus English transliteration. Use a respectful Khaleeji tone appropriate to Dubai — avoid stiff MSA that sounds cold.",
      answerKey: {
        arabic:
          "السلام عليكم، حياك الله. لو سمحت، عطني الوصفة والهوية وبطاقة التأمين عشان أجهز لك الدواء.",
        transliteration:
          "As-salamu alaykum, hayyak Allah. Law samaht, a'teeni al-wasfa wal-hawiya wa bitaqat at-ta'meen ashan ajahhiz lak ad-dawa.",
        rationale:
          "Opening with 'As-salamu alaykum' followed by 'Hayyak Allah' is the culturally mandated Khaleeji welcome — it signals respect and hospitality before any transactional request. 'Ashan' (so that) is a warm Gulf connector; the MSA equivalent 'li-ajli an' would feel clinical. Requesting the wasfa first (versus insurance) mirrors local pharmacy etiquette: clinical need before administrative gatekeeping.",
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
        caption: "Symptom & inquiry phrases",
        headers: ["English", "Khaleeji", "Levantine", "MSA"],
        rows: [
          ["What are your symptoms?", "Shno a'radhak?", "Shu al-a'raad?", "Ma hiya al-a'raad?"],
          ["Are you pregnant?", "Enti hamil?", "Inti hamel?", "Hal anti hamil?"],
          ["Are you taking other medications?", "Takhith adwiyah thanyah?", "Btekhod adwiyeh tenyeh?", "Hal ta'khudh adwiyah ukhra?"],
          ["Do you have allergies?", "Endak hasasiyah?", "Fi endak hasasiyeh?", "Hal ladayka hasasiyah?"],
          ["Since when?", "Min mata?", "Min emta?", "Mundhu mata?"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Body Parts Vocabulary — Levantine & MSA",
        description: "Colloquial vs. standard anatomical terms with pronunciation drills.",
        url: "https://www.youtube.com/results?search_query=arabic+body+parts+levantine",
      },
      {
        type: "audio",
        title: "Learn Levantine Arabic with Livi — Medical Episodes",
        description: "Native interviews covering symptom description in colloquial Shami.",
        url: "https://podcasts.apple.com/us/podcast/learn-levantine-arabic-with-livi/id1515598585",
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
        "Draft a natural Levantine (Shami) dialogue eliciting symptoms. Include Arabic script and transliteration. Use softeners appropriate for a female patient describing abdominal symptoms.",
      answerKey: {
        arabic:
          "أهلين، شو الأعراض يلي عم تحسي فيها؟ من إمتا هيك؟ في وجع أو غثيان؟ عم تاخدي أي دوا هلق؟",
        transliteration:
          "Ahlain, shu al-a'raad yalli am tehessi feeha? Min emta hayk? Fi waja' aw ghathayan? Am takhdi ay dawa halla'?",
        rationale:
          "'Ahlain' is a warmer Levantine opener than 'Marhaba' for a distressed patient. 'Yalli am tehessi feeha' (that you're feeling) uses the continuous 'am' particle typical of Shami and softens the inquiry. Asking symptoms, onset, and current medications in one flowing turn — rather than a rigid checklist — matches how Levantine patients expect a caring provider to speak.",
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
        caption: "Dosage & administration phrases",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Take one tablet twice daily", "خذ حبة مرتين باليوم", "Khodh habbah marratayn bil-yom"],
          ["Before food / After food", "قبل الأكل / بعد الأكل", "Qabl al-akel / Ba'd al-akel"],
          ["On an empty stomach", "على معدة فاضية", "'Ala mi'deh fadyeh"],
          ["Apply to the skin", "دهنه على الجلد", "Duhno 'ala al-jild"],
          ["Discard / Throw away", "ارميه / كبه", "Irmeeh (Gulf/MSA) / Kibbo (Shami)"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Medical Vocabulary in Levantine Arabic (Beginners)",
        description: "Dense vocabulary builder for physical formulations.",
        url: "https://www.youtube.com/watch?v=vQNyqvy3iDQ",
      },
      {
        type: "audio",
        title: "Learn Levantine Arabic with Livi — Medical Episodes",
        description: "Native interviews across a range of medical topics.",
        url: "https://podcasts.apple.com/us/podcast/learn-levantine-arabic-with-livi/id1515598585",
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
        "Draft the full Arabic counseling dialogue in Levantine phrasing. Include Arabic script and transliteration. Instructions must be unambiguous to prevent antibiotic resistance.",
      answerKey: {
        arabic:
          "هاد المضاد الحيوي، خود كبسولة كل ٨ ساعات، يعني ٣ مرات باليوم، مع أو بعد الأكل. لازم تكمل العلاج ٧ أيام كاملة حتى لو حسيت إنك تحسنت، لأنو إذا وقفت بدري البكتيريا بترجع أقوى.",
        transliteration:
          "Had al-mudad al-hayawi, khod kabsuleh kul 8 sa'aat, ya'ni 3 marraat bil-yom, ma' aw ba'd al-akel. Lazim tkammel al-'ilaj 7 ayyam kamleh hatta law hasseit innak thassant, la'anno iza waqqaft badri al-bakteria btirja' aqwa.",
        rationale:
          "Naming the drug class ('al-mudad al-hayawi') anchors why completion matters. Restating '8 hours' as '3 times a day' reduces misinterpretation. The conditional 'hatta law hasseit innak thassant' (even if you feel better) directly addresses the #1 reason patients stop antibiotics early. Closing with the consequence ('bakteria btirja' aqwa' — bacteria come back stronger) uses concrete Levantine phrasing that resonates emotionally.",
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
        caption: "Side-effect & emergency vocabulary",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Side effect", "أثر جانبي", "Athar janibi"],
          ["Allergy / Allergic reaction", "حساسية", "Hasasiyah"],
          ["Drowsiness", "نعاس", "Nu'aas"],
          ["Bleeding", "نزيف", "Nazeef"],
          ["Difficulty breathing", "ضيق تنفس", "Deeq tanaffus"],
          ["Go to emergency immediately", "روح الطوارئ فوراً", "Rooh at-tawari' fawran"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Learn Arabic Vocabulary for Diseases",
        description: "Visual reinforcement of adverse-reaction terminology.",
        url: "https://www.youtube.com/hashtag/medicalarabic",
      },
      {
        type: "audio",
        title: "Arabic Medical Podcast — Adverse Drug Reactions",
        description: "Native pharmacist walkthroughs of high-risk counseling.",
        url: "https://talkinarabic.com/arabic-youtube/",
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
        "Write a Khaleeji-dialect counseling script. Include Arabic script and transliteration. Emphasize red-flag signs without frightening the patient into non-adherence.",
      answerKey: {
        arabic:
          "هذا الدواء يخفف تجلط الدم، فلازم تنتبه. إذا شفت نزيف من الأنف أو اللثة، أو كدمات بدون سبب، رد لنا أو روح الطوارئ. تجنب الأكل الأخضر بكثرة، ولا تاخذ بروفين أو أسبرين إلا بإذن الدكتور.",
        transliteration:
          "Hatha ad-dawa yikhaffif tajallut ad-dam, falaazim tintibih. Itha shift nazeef min al-anf aw al-litha, aw kadamat bidoon sabab, rid lena aw rooh at-tawari'. Tajannab al-akel al-akhdar bikithra, wala takhith Brufen aw Aspirin illa bi-ithn ad-doktor.",
        rationale:
          "Framing Warfarin as thinning the blood ('yikhaffif tajallut ad-dam') is more intuitive than clinical MSA. The imperative 'tintibih' (pay attention) primes without alarming. Naming brand names ('Brufen') rather than 'NSAIDs' matches how Gulf patients recognize drugs. The safety net 'rid lena aw rooh at-tawari'' gives the patient two clear escalation paths.",
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
        caption: "Pain descriptors",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Sharp pain", "وجع حاد", "Waja' hadd"],
          ["Dull ache", "وجع خفيف", "Waja' khafeef"],
          ["Throbbing", "نبض", "Nabd"],
          ["Nausea", "لعيان / غثيان", "La'ayan (Shami) / Ghathayan (MSA)"],
          ["Diarrhea", "إسهال", "Ishaal"],
          ["May you see no harm", "سلامتك ما تشوف شر", "Salamtak, ma tshoof shar"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Pain Assessment in Arabic — Clinical Vocabulary",
        description: "Character, location, and severity descriptors.",
        url: "https://www.youtube.com/results?search_query=pain+assessment+arabic",
      },
      {
        type: "audio",
        title: "Levantine Medical Arabic — Pain Episodes",
        description: "Real dialogues around pain description and OTC triage.",
        url: "https://podcasts.apple.com/us/podcast/learn-levantine-arabic-with-livi/id1515598585",
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
        "Write a supportive Levantine dialogue. Include Arabic script and transliteration. Use empathy phrases and clearly state when to see a doctor.",
      answerKey: {
        arabic:
          "سلامتها، ما تشوفي شر. في عندها حرارة أو لعيان؟ رح أعطيكي دوا للإسهال ومحلول جفاف عشان تعوّضي السوائل. إذا ضل المغص والإسهال أكتر من يومين، لازم تشوفي حكيم.",
        transliteration:
          "Salamtha, ma tshoofi shar. Fi endha harara aw la'ayan? Rah a'teeki dawa lal-ishaal wa mahlool jafaf a'shan t'awdi al-sawa'il. Itha dall al-maghas wal-ishaal aktar min yomayn, lazim tshoofi hakeem.",
        rationale:
          "'Ma tshoofi shar' (May you see no harm) is a deeply comforting phrase across the Middle East that validates the caregiver's worry. 'La'ayan' is the natural Levantine word for nausea — 'Ghathayan' (MSA) would sound stiff. Coupling ORS with anti-diarrheal is standard pediatric OTC practice, and the 2-day rule is a clean, memorable red flag.",
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
        caption: "Chronic disease vocabulary",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Diabetes", "السكري", "As-sukkari"],
          ["Blood Pressure", "ضغط الدم", "Daghut al-dam"],
          ["Fasting (Ramadan)", "الصيام", "As-siyam"],
          ["Diet / Food intake", "نظام غذائي / أكل", "Nidham ghitha'i / Akel"],
          ["Measurement / Testing", "قياس / فحص", "Qiyas / Fahis"],
          ["Suhoor / Iftar", "سحور / إفطار", "Suhoor / Iftar"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Vocabulary for Diseases & Chronic Conditions",
        description: "Visual reinforcement of chronic disease terminology.",
        url: "https://www.youtube.com/hashtag/medicalarabic",
      },
      {
        type: "audio",
        title: "Ramadan & Medication — Arabic Pharmacist Podcast",
        description: "Real cases on dose timing during fasting.",
        url: "https://talkinarabic.com/arabic-youtube/",
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
        "Write a Khaleeji-dialect counseling dialogue. Include Arabic script and transliteration. Broach Ramadan with religious sensitivity — do not forbid, negotiate.",
      answerKey: {
        arabic:
          "هذا الميتفورمين يساعد يظبط السكر بالدم. خذ حبة الصبح وحبة بالليل، ويفضل مع الأكل عشان ما يزعج المعدة. ممكن تحس بمغص خفيف أول أسبوع، بس يروح. بخصوص رمضان، بنتكلم مع الدكتور نظبط الجرعات على السحور والإفطار، إن شاء الله تصوم بأمان.",
        transliteration:
          "Hatha al-Metformin yisa'id yazbut as-sukkar bil-dam. Khudh habbah as-subh wa habbah bil-layl, wa yufaddal ma' al-akel ashan ma yiz'ij al-mi'deh. Mumkin thiss bi-maghas khafeef awwal usboo', bas yirooh. Bikhusoos Ramadan, bnitkallam ma' ad-doktor nazbut al-jur'aat 'ala as-suhoor wal-iftar, insha'Allah tsoom bi-aman.",
        rationale:
          "Framing Metformin as helping ('yisa'id yazbut') — not fixing — sets realistic chronic-disease expectations. Warning about GI upset up-front, with reassurance it resolves, dramatically improves first-month adherence. On Ramadan, 'bnitkallam ma' ad-doktor' invites collaboration rather than issuing a fatwa, and closing with 'insha'Allah tsoom bi-aman' (God willing, you fast safely) respects the religious dimension while keeping clinical safety front and center.",
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
        caption: "Pediatric & geriatric vocabulary",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Child / Children", "طفل / أطفال", "Tifl / Atfaal"],
          ["Weight", "وزن", "Wazn"],
          ["Uncle (respectful, m)", "عمو", "Ammu"],
          ["Aunt (respectful, f)", "خالتو", "Khaltu"],
          ["Pilgrim (elder honorific)", "حاج / حجة", "Haj / Hajjeh"],
          ["Syringe / Dropper", "حقنة / قطارة", "Huqnah / Qattarah"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Talking to Kids in Arabic — Caregiver Communication",
        description: "Bridging parent-child conversation in the clinical setting.",
        url: "https://www.youtube.com/results?search_query=pediatric+arabic+medical",
      },
      {
        type: "audio",
        title: "Geriatric Pharmacy — Arabic Case Discussions",
        description: "Polypharmacy and adherence challenges in older patients.",
        url: "https://talkinarabic.com/arabic-youtube/",
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
        "Write a warm Levantine dialogue directed at the mother, with soft reassurance for the child. Include Arabic script and transliteration.",
      answerKey: {
        arabic:
          "سلامتها، ما تشوفي شر. وزنها ١٦ كيلو، فالجرعة ١٠ مل من الشراب كل ٦ ساعات، يعني ٤ مرات باليوم كحد أقصى. رجّي القارورة قبل ما تعطيها. إذا الحرارة ما نزلت بعد يومين، أو صارت أكتر من ٣٩، لازم تشوفي حكيم.",
        transliteration:
          "Salamtha, ma tshoofi shar. Waznha 16 kilo, fal-jur'ah 10 mil min ash-sharaab kul 6 sa'aat, ya'ni 4 marraat bil-yom ka-hadd aqsa. Rejji al-qaroorah qabl ma ta'teeha. Itha al-harara ma nizlit ba'd yomayn, aw saarat aktar min 39, lazim tshoofi hakeem.",
        rationale:
          "Anchoring the calculation in the child's weight ('waznha 16 kilo') teaches the caregiver the underlying logic, so she can generalize. 'Ka-hadd aqsa' (as a maximum) is critical — paracetamol overdose is a leading pediatric ER visit. 'Rejji al-qaroorah' (shake the bottle) prevents inconsistent dosing from settled suspension. The temperature threshold (39°C) and 2-day rule give concrete escalation triggers.",
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
        caption: "De-escalation phrases",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Stay calm / Be patient", "طوّل بالك / اهدأ", "Tawwil balak / Ihda'"],
          ["I understand you", "أنا فاهم عليك", "Ana fahim a'layk"],
          ["I'm on your side", "أنا معك", "Ana ma'ak"],
          ["Let me help you", "خليني أساعدك", "Khalleeni asa'dak"],
          ["Insurance denied", "التأمين رفض", "At-ta'meen rafad"],
          ["Let's find a solution", "خلينا نلاقي حل", "Khalleena nlaqi hal"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic De-escalation Phrases for Healthcare",
        description: "Practical calming vocabulary in both dialects.",
        url: "https://www.youtube.com/results?search_query=arabic+de-escalation+healthcare",
      },
      {
        type: "audio",
        title: "Difficult Conversations — Arabic Pharmacy Podcast",
        description: "Real anonymized cases of counter conflict resolution.",
        url: "https://talkinarabic.com/arabic-youtube/",
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
        "Write a deeply empathetic Levantine response. Include Arabic script and transliteration. Show you are on her side, actively solving the problem — never acting as an administrative barrier.",
      answerKey: {
        arabic:
          "طوّلي بالك، أنا فاهم عليكي وكلّي معكي. خليني أتصل بالتأمين هلق ونشوف شو صار. إذا ما زبطت، بقدر أعطيكي كمية صغيرة اليوم عشان ما تنقطعي عن الدوا، ونكمل باكر. مش رح أتركك بدون حل.",
        transliteration:
          "Tawwili balik, ana fahim a'layki wa kulli ma'aki. Khalleeni ittasil bit-ta'meen halla' wa nshoof shu saar. Itha ma zabtat, ba'dir a'teeki kammiyeh sagheereh al-yom ashan ma tinqata'i 'an ad-dawa, wa nkammel bukra. Mish rah atrukik bidoon hal.",
        rationale:
          "The opening 'Tawwili balik' + 'Ana fahim a'layki wa kulli ma'aki' (I understand you and I'm entirely with you) does three things at once: acknowledges the emotion, validates the person, and signals alliance. Offering to call the insurance company immediately shifts the pharmacist from gatekeeper to advocate. The partial dispense is a concrete face-saving solution that also prevents therapy interruption. Closing with 'Mish rah atrukik bidoon hal' (I won't leave you without a solution) commits publicly — a powerful de-escalation anchor.",
      },
    },
  },
];
