export type ResourceType = "video" | "audio" | "article";

export interface Resource {
  type: ResourceType;
  title: string;
  description: string;
  url: string;
}

export interface VocabTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface Checkpoint {
  id: string;
  label: string;
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

export const COURSE_TITLE = "Medical Pharmacy Arabic";
export const COURSE_SUBTITLE = "Standard Conversational Arabic for Pharmacists";

export const CAPSTONE = {
  title: "Full Patient Counseling Roleplay: New Type 2 Diabetes Diagnosis",
  description:
    "A comprehensive 10-minute simulated consultation. The student must initiate the interaction with standard clinical greetings, collect a brief medical history, explain the exact dosage of Metformin, outline potential side effects, provide lifestyle advice, and conclude with professional well-wishes, entirely in standard Spoken Medical Arabic.",
};

export const WEEKS: Week[] = [
  {
    id: "week-1",
    number: 1,
    title: "Dispensing & Administrative Basics",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "Professional clinical greetings",
      "Administrative intake and data collection",
      "Navigating patients within the pharmacy",
    ],
    focusAreas: [
      {
        title: "Patient Intake",
        description: "Requesting identification, insurance, and medical prescriptions politely.",
      },
    ],
    vocabTables: [
      {
        caption: "Administrative Vocabulary",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["How are you?", "كيف حالك؟", "Kayfa haluka?"],
          ["How can I help you?", "كيف أقدر أساعدك؟", "Kayfa aqdir usa'idak?"],
          ["ID Card", "بطاقة الهوية", "Bitaqat al-hawiya"],
          ["Health Insurance", "تأمين صحي", "Ta'meen sihhi"],
          ["Medical Prescription", "وصفة طبية", "Wasfa tibbiyya"],
          ["Please wait here", "من فضلك انتظر هنا", "Min fadlik intadhir huna"],
          ["Excuse me / If you please", "لو سمحت", "Law samaht"],
          ["Pain", "ألم", "Alam"],
          ["Water", "ماء", "Maa"],
          ["Medicine / Drug", "دواء", "Dawaa'"],
          ["Patient", "مريض", "Marid"],
          ["Hospital", "مستشفى", "Mustashfa"],
          ["Clinic", "عيادة", "'Eyaadah"],
          ["Pharmacy", "صيدلية", "Saydaliyah"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Medical Pharmacy Vocabulary",
        description: "Vocabulary for greeting and processing patients.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+pharmacy+vocabulary",
      },
      {
        type: "article",
        title: "Arabic Vocabulary for Healthcare Professionals",
        description: "Comprehensive medical vocabulary for healthcare settings.",
        url: "https://www.tareequljannah.com/blogs/arabic-vocabulary-for-healthcare-professionals/",
      },
    ],
    checkpoints: [
      {
        id: "w1-c1",
        label: "Mastered 25 standard administrative phrases.",
      },
      {
        id: "w1-c2",
        label: "Roleplayed processing an ID and insurance card.",
      },
    ],
    scenario: {
      patient: "A 45-year-old male patient presents to the pharmacy counter.",
      instructions:
        "Welcome him respectfully, ask for his prescription, ID, and insurance card to process his medication.",
      answerKey: {
        arabic:
          "أهلاً بك. كيف حالك؟ أعطني الوصفة لو سمحت، وهل ممكن بطاقة الهوية وبطاقة التأمين؟ تفضل بالجلوس هنا دقائق وسنجهز لك الدواء.",
        transliteration:
          "Ahlan bika. Kayfa haluka? A'tini al-wasfa law samaht, wa hal mumkin bitaqat al-hawiya wa bitaqat al-ta'meen? Tafaddal bi-l-juloos huna daqaiq wa sanujahhiz laka al-dawaa'.",
        rationale:
          "Uses standard, professional Medical Arabic to establish a polite clinical boundary while efficiently gathering administrative requirements.",
      },
    },
  },
  {
    id: "week-2",
    number: 2,
    title: "Demographics & History Taking",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "Asking about age and weight",
      "Inquiring about allergies",
      "Checking pregnancy status",
    ],
    focusAreas: [
      {
        title: "Medical History Gathering",
        description: "Formulating standard interrogatives to safely assess a patient's background.",
      },
    ],
    vocabTables: [
      {
        caption: "Clinical Inquiries",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["How old are you?", "كم عمرك؟", "Kam omruka/omruki?"],
          ["Do you have allergies?", "هل لديك حساسية؟", "Hal ladayka hasasiyah?"],
          ["Are you pregnant?", "هل أنتِ حامل؟", "Hal anti hamil?"],
          ["What are your symptoms?", "ما هي الأعراض؟", "Ma hiya al-a'raad?"],
          [
            "Are you taking other medications?",
            "هل تأخذ أدوية أخرى؟",
            "Hal ta'khudh adwiyah ukhra?",
          ],
          ["Blood", "دم", "Dam"],
          ["Skin", "جلد", "Jild"],
          ["Liver", "كبد", "Kabid"],
          ["Kidney", "كلية", "Kulya"],
          ["Urine", "بول", "Bawl"],
          ["Heart", "قلب", "Qalb"],
          ["Milk", "حليب", "Haleeb"],
          ["Food", "طعام", "Ta'aam"],
          ["Face", "وجه", "Wajh"],
          ["Joint", "مفصل", "Mefsal"],
          ["Conjunctiva", "ملتحمة", "Multahemah"],
          ["Cerebrum", "مخ", "Mukh"],
          ["Brain", "دماغ", "Ademaagh"],
          ["Tongue", "لسان", "Allesaan"],
          ["Breast", "ثدي", "Thady"],
          ["Youth", "شباب", "Shabaab"],
          ["Old Age", "شيخوخة", "Shykhookhah"],
          ["Death", "موت", "Maoot"],
          ["Infant", "رضيع", "Radee"],
          ["Children", "أطفال", "Alatfaal"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Healthcare History Taking",
        description: "Standard phrasing for medical history and patient background.",
        url: "https://www.youtube.com/results?search_query=arabic+healthcare+history+taking",
      },
      {
        type: "audio",
        title: "Arabic Medical Dialogue Podcasts",
        description: "Listening exercises for clinical questions.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+podcast+clinical",
      },
    ],
    checkpoints: [
      {
        id: "w2-c1",
        label: "Mastered the syntactic structure of standard history-taking questions.",
      },
      {
        id: "w2-c2",
        label: "Translated 10 patient intake forms from English to Arabic.",
      },
    ],
    scenario: {
      patient:
        "A female patient approaches the pharmacy counter asking for an over-the-counter cough syrup for her young child.",
      instructions:
        "Before dispensing, ask her the child’s exact age, whether the child has any known medication allergies, and if the child currently has a fever.",
      answerKey: {
        arabic: "كم عمر الطفل؟ هل لديه حساسية من أي دواء؟ وهل لديه حمى الآن؟",
        transliteration:
          "Kam omru al-tifl? Hal ladayhi hasasiyah min ay dawaa'? Wa hal ladayhi humma al-aan?",
        rationale:
          "Directly accesses clinical data using universally understood medical terminology (e.g., 'humma' for fever, 'hasasiyah' for allergy).",
      },
    },
  },
  {
    id: "week-3",
    number: 3,
    title: "Dosage, Frequencies, & Administration",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "Numerical values 1-30 in Arabic",
      "Frequency terminology (e.g., three times a day)",
      "Administration instructions relative to meals",
    ],
    focusAreas: [
      {
        title: "Medication Regimens",
        description: "Clearly articulating exact dosages and timing to prevent medication errors.",
      },
    ],
    vocabTables: [
      {
        caption: "Dosage Instructions",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Pill / Tablet", "قرص / حبة", "Qurs / Habbah"],
          ["Medical Syrup", "شراب", "Sharab"],
          ["Once a day", "مرة في اليوم", "Marrah fi al-yawm"],
          ["Three times a day", "ثلاث مرات في اليوم", "Thalath marrat fi al-yawm"],
          ["Before food", "قبل الأكل", "Qabla al-akl"],
          ["After food", "بعد الأكل", "Ba'da al-akl"],
          ["Before Meals", "قبل الطعام", "Qabla al-ta'am"],
          ["At Bedtime", "قبل النوم", "Qabel annaoom"],
          ["In the Morning", "في الصباح", "Fi al-sabah"],
          ["In the Evening", "في المساء", "Fi al-masaa'"],
          ["Before Noon", "قبل الظهر", "Qabel azzuhur"],
          ["Every Hour", "كل ساعة", "Kul saa'ah"],
          ["Every 6 Hours", "كل 6 ساعات", "Kul set saa'aat"],
          ["Every 8 Hours", "كل 8 ساعات", "Kul thamaan saa'aat"],
          ["Every 12 Hours", "كل 12 ساعة", "Kul ethnay asharah saa'ah"],
          ["One Teaspoonful", "ملعقة شاي واحدة", "Melaqet shaay waahedah"],
          ["One Tablespoonful", "ملعقة واحدة كبيرة", "Melaqah waahedah kabeerah"],
          ["For Ten Days", "لمدة عشرة أيام", "Lemuddat ashrat ayyaam"],
          ["For One Week", "لمدة أسبوع", "Lemudatusboo'"],
          ["Once Weekly", "مرة في الأسبوع", "Marrah fel esboo'"],
          ["Twice Daily", "مرتين في اليوم", "Marratayn fee alyoom"],
          [
            "One Tablet Three Times Daily",
            "حبة ثلاث مرات في اليوم",
            "Habbah thalaath marraat fee alyoom",
          ],
          ["Once Daily", "مرة في اليوم", "Marrah fee alyoom"],
          ["Four Times Daily", "أربع مرات في اليوم", "Arba' marraat fee alyoom"],
          ["Divided Doses", "مقسمة إلى عدة جرعات", "Muqassamah elaa eddat jura'aat"],
          ["Gradually", "تدريجياً", "Tadreejyyan"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Medical Numbers and Dosages",
        description: "Learn to pronounce numbers and frequency terms clearly.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+numbers+and+dosages",
      },
    ],
    checkpoints: [
      {
        id: "w3-c1",
        label: "Passed the Arabic numbers 1-30 speed drill.",
      },
      {
        id: "w3-c2",
        label: "Audio-recorded 5 distinct dosage instructions clearly.",
      },
    ],
    scenario: {
      patient:
        "A 30-year-old male patient requires dispensing of oral Amoxicillin (antibiotic capsules).",
      instructions:
        "Explain that he needs to take one capsule three times a day, strictly after food, for seven days. Stress the importance of finishing the entire course.",
      answerKey: {
        arabic:
          "هذا مضاد حيوي. يجب أن تأخذ حبة واحدة، ثلاث مرات في اليوم، بعد الأكل، لمدة سبعة أيام. من المهم جداً أن تكمل الدواء كله حتى لو شعرت بتحسن.",
        transliteration:
          "Hadha mudadd hayawi. Yajibu an ta'khudh habbah wahida, thalath marrat fi al-yawm, ba'da al-akl, li-muddat sab'at ayyam. Min al-muhim jiddan an tukmil al-dawaa' kullahu hatta law sha'arta bi-tahassun.",
        rationale:
          "Uses standard medical phrasing to mandate adherence, ensuring the clinical message of antibiotic completion is unambiguous.",
      },
    },
  },
  {
    id: "week-4",
    number: 4,
    title: "Storage & Contraindications",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "Thermal storage instructions",
      "Direct prohibitions and contraindications",
      "Explaining specialized formulations",
    ],
    focusAreas: [
      {
        title: "Safety and Preservation",
        description:
          "Instructing patients on how to store medications properly and what interactions to avoid.",
      },
    ],
    vocabTables: [
      {
        caption: "Storage and Formulation",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Refrigerator", "ثلاجة", "Thallajah"],
          ["Asthma Inhaler", "بخاخ", "Bakhakh"],
          ["Suppository", "تحميلة", "Tahmeela"],
          ["Eye drops", "قطرة عين", "Qatrat 'ayn"],
          ["Discard / Throw away", "تخلص منه", "Takhallas minhu"],
          ["Suspension", "معلق", "Muallaq"],
          ["Laxative", "ملين", "Mulyen"],
          ["Digestive Enzyme", "مساعد للهضم", "Musaa'ed lelhadm"],
          ["Diuretic", "مدر للبول", "Mudir lelbaool"],
          ["Sweetener", "محليات", "Muhalleeaat"],
          ["Tablet", "حبوب / أقراص", "Huboob / Aqraas"],
          ["Powder", "مسحوق", "Mashooq"],
          ["Ointment", "مرهم", "Marham"],
          ["Cream", "كريم", "Kareem"],
          ["Capsule", "كبسولة", "Kabsoolah"],
          ["Lotion", "غسول", "Ghasil"],
          ["Soap", "صابون", "Saaboon"],
          ["Syrup", "شراب", "Sharab"],
          ["Shampoo", "شامبو", "Shampoo"],
          ["Aerosol / Spray", "رش / بخاخ", "Rash / Bakhkhaakh"],
          ["Injection", "حقنة", "Huqnah"],
          ["Gel", "جل", "Jel"],
          ["Lozenge", "مطهر للحلق", "Mutahhir lelhalq"],
          ["Gargle", "غرغرة", "Ghargharah"],
          ["Contraceptive", "حبوب منع الحمل", "Huboob man' alhaml"],
          ["Mouth Wash", "مطهر للفم", "Mutahhir lelfam"],
          ["Decongestant", "مزيل زكام", "Muzeel zukaam"],
          ["Mineral Salt", "أملاح معدنية", "Amlaah ma'dariyyah"],
          ["Narcotic", "مخدرات", "Mukhadderaat"],
          ["Hypnotic", "منومات", "Munawwemaat"],
          ["Expectorant", "طارد للبلغم", "Taared lelbalgham"],
          ["Haemostatic", "إيقاف النزيف", "Eqaaf alnazeef"],
          ["Antacid", "مضاد للحموضة", "Mudaad lel humoodah"],
          ["Anthelmintic", "طارد للديدان", "Taared leldeedaan"],
          ["Antiemetic", "مضاد للقيء", "Mudaad lelqay'"],
          ["Antispasmodic", "مضاد المغص", "Mudaad lelmaghs"],
          ["Antidiarrheal", "مضاد للإسهال", "Mudaad leleshaal"],
          ["Antidiabetic Agents", "مضاد للسكر", "Mudaad lelsukkar"],
          ["Anticoagulant", "مضاد للتجلط", "Mudaad leltajallut"],
          ["Anti-pyretic", "خافض للحرارة", "Khaafed lelharaarah"],
          ["Antihistamine", "مضاد للحساسية", "Mudaad lel hasaasyyah"],
          ["Antifungal", "مضاد للفطريات", "Mudaad lelfetryyaat"],
          ["Antibiotic", "مضاد حيوي", "Mudaad hayawee"],
          ["Antihypertensive", "خافض الضغط", "Khaafed aldaght"],
          ["Antiseptic", "مطهر", "Mutahhir"],
          ["Anti-inflammatory", "مضاد للالتهاب", "Mudaad leleltehaab"],
          ["Antidepressant", "مضاد للاكتئاب", "Mudaad lelekteaab"],
          ["Vaccine", "طعم / لقاح", "Tu'm / Luqaah"],
          ["Alcohol", "كحول", "Kuhool"],
          ["Plaster", "لصقة", "Lasqah"],
          ["Orally", "بالفم", "Bil-fam"],
          ["Sublingual", "تحت اللسان", "Taht allesaan"],
          ["Rectally", "شرجي", "Shargee"],
          ["Vaginally", "مهبلي", "Mehbalee"],
          ["Intravenous", "حقنة بالوريد", "Huqnah bel wareed"],
          ["Inhalation", "استنشاق", "Estenshaaq"],
          ["Drops Topically", "نقط موضعية", "Nuqat mawde'yyah"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Medical Storage and Contraindications",
        description: "Vocabulary for medication safety and formulation mechanics.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+storage+and+contraindications",
      },
    ],
    checkpoints: [
      {
        id: "w4-c1",
        label: "Translated 10 pharmaceutical warning labels.",
      },
      {
        id: "w4-c2",
        label: "Passed the storage and contraindication scenario quiz.",
      },
    ],
    scenario: {
      patient:
        "A male patient requires counseling for a reconstituted pediatric antibiotic suspension.",
      instructions:
        "Explain that the medication must be kept in the refrigerator, shaken well before each use, and thrown away after 14 days.",
      answerKey: {
        arabic:
          "هذا الدواء يجب أن يوضع في الثلاجة. ولا تنس أن ترج العلبة جيداً قبل الاستخدام. وبعد أربعة عشر يوماً، يجب التخلص من الدواء المتبقي.",
        transliteration:
          "Hadha al-dawaa' yajibu an yuwda' fi al-thallajah. Wa la tansa an tarujj al-ulba jayyidan qabla al-istikhdam. Wa ba'da arba'at ashar yawman, yajibu al-takhallus min al-dawaa' al-mutabaqqi.",
        rationale:
          "Applies the formal passive voice for professional instructions and universally standard vocabulary for discarding expired medication.",
      },
    },
  },
  {
    id: "week-5",
    number: 5,
    title: "Symptoms & OTC Triage",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "Anatomical vocabulary for isolating pain",
      "Symptom elicitation",
      "Pain scale assessment",
    ],
    focusAreas: [
      {
        title: "Triage and OTC Recommendations",
        description: "Identifying red-flag symptoms and recommending over-the-counter solutions.",
      },
    ],
    vocabTables: [
      {
        caption: "Anatomy and Symptoms",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Pain / Ache", "ألم", "Alam"],
          ["Cough", "سعال", "Su'aal"],
          ["Nausea", "غثيان", "Ghathayan"],
          ["Constipation", "إمساك", "Imsak"],
          ["Diarrhea", "إسهال", "Ishaal"],
          ["Stomach cramps", "مغص", "Maghas"],
          ["Cold", "زكام / برد", "Zukaam / Bard"],
          ["Vomiting", "قيء", "Qaee'"],
          ["Headache", "صداع", "Sudaa'"],
          ["Toothache", "ألم الأسنان", "Alam asnaan"],
          ["Burn", "حرق", "Harq"],
          ["Weakness", "ضعف", "Da'ff"],
          ["Irritation / Allergy", "حساسية", "Hasaasyeah"],
          ["Indigestion", "سوء الهضم", "Soo' alhadm"],
          ["Infection", "التهاب", "Iltihaab"],
          ["Fever", "حمى", "Hummaa"],
          ["Baldness", "صلع / أقرع", "Sala' / Aqra'"],
          ["Influenza", "أنفلونزا", "Enflunzaa"],
          ["Motion Sickness", "دوار الحركة", "Duwaar alharakah"],
          ["Tonsillitis", "التهاب اللوزتين", "Iltihaab elloozataeen"],
          ["Sore Throat", "ألم في الحلق", "Alam fi al-halq"],
          ["Dry Skin", "الجلد الجاف", "Aljild aljaaf"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Medical Symptom Vocabulary",
        description: "Visual identification of symptoms and body parts.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+symptom+vocabulary",
      },
    ],
    checkpoints: [
      {
        id: "w5-c1",
        label: "Mastered 20 anatomical terms and 15 symptom descriptors.",
      },
      {
        id: "w5-c2",
        label: "Roleplayed an OTC triage decision tree.",
      },
    ],
    scenario: {
      patient:
        "A 25-year-old female patient complains of severe stomach cramps and diarrhea that started yesterday.",
      instructions:
        "Verify if she has a fever, recommend an oral rehydration salt alongside an antidiarrheal, and advise her to see a doctor if symptoms persist past 48 hours.",
      answerKey: {
        arabic:
          "هل لديك حمى أو غثيان؟ سأعطيك دواء للإسهال ومحلول جفاف لتعويض السوائل. إذا استمر المغص أكثر من يومين، يجب مراجعة الطبيب.",
        transliteration:
          "Hal ladayki humma aw ghathayan? Sa-u'tiki dawaa' li-l-ishaal wa mahloul jafaf li-ta'weed al-sawa'il. Idha istamarra al-maghas akthar min yawmayn, yajibu muraja'at al-tabeeb.",
        rationale:
          "Translates precise clinical actions (replacing fluids, medical referral) into standard Arabic suitable for safe OTC triage.",
      },
    },
  },
  {
    id: "week-6",
    number: 6,
    title: "Side Effects & Adverse Reactions",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "Describing common side effects",
      "Identifying allergic reactions",
      "Expectation management",
    ],
    focusAreas: [
      {
        title: "Informed Consent",
        description: "Explaining potential adverse effects clearly without causing undue alarm.",
      },
    ],
    vocabTables: [
      {
        caption: "Warnings and Reactions",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Side effects", "آثار جانبية", "Athaar janibiyya"],
          ["Severe Drowsiness", "نعاس شديد", "Nu'aas shadeed"],
          ["Allergic reaction", "حساسية", "Hasasiyah"],
          ["Swelling", "تورم", "Tawarrum"],
          ["Shortness of breath", "ضيق التنفس", "Deeq al-tanaffus"],
          ["Toxicity / Poisoning", "تسمم", "Tasammum"],
          ["Bleeding", "نزيف", "Nazeef"],
          ["Spasm / Cramp", "مغص / تشنج", "Maghs / Tashannuj"],
          ["Whooping Cough", "سعال ديكي", "Suaal deekee"],
          ["Small Pox", "جدري", "Judary"],
          ["Measles", "حصبة", "Hasbah"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Medical Side Effects Pharmacy",
        description: "Vocabulary for patient warnings and medication side effects.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+side+effects+pharmacy",
      },
    ],
    checkpoints: [
      {
        id: "w6-c1",
        label: "Mastered 15 common side effect vocabularies.",
      },
      {
        id: "w6-c2",
        label: "Constructed conditional sentences for emergency responses.",
      },
    ],
    scenario: {
      patient: "A 40-year-old male patient is prescribed a strong first-generation antihistamine.",
      instructions:
        "Warn him that the medication causes severe drowsiness and dry mouth. Instruct him not to drive after taking it and recommend taking it at night.",
      answerKey: {
        arabic:
          "انتبه، هذا الدواء يسبب نعاساً شديداً وجفاف الفم. لذلك، لا تقد السيارة بعد أن تأخذه. من الأفضل أن تأخذه ليلاً قبل النوم.",
        transliteration:
          "Intabih, hadha al-dawaa' yusabbib nu'aasan shadeedan wa jafaf al-fam. Lidhālika, la taqud al-sayyara ba'da an ta'khudhahu. Min al-afdal an ta'khudhahu laylan qabla al-nawm.",
        rationale:
          "Delivers an authoritative safety warning using the formal prohibition for driving while maintaining clinical professionalism.",
      },
    },
  },
  {
    id: "week-7",
    number: 7,
    title: "Chronic Disease Management",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "Terminology for diabetes, hypertension, and hyperlipidemia",
      "Pharmacological compliance",
      "Lifestyle and dietary modifications",
    ],
    focusAreas: [
      {
        title: "Long-term Care Counseling",
        description:
          "Coaching patients on adherence and integrating lifestyle advice into dispensing.",
      },
    ],
    vocabTables: [
      {
        caption: "Metabolic and Chronic Conditions",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Diabetes", "مرض السكري", "Marad al-sukkari"],
          ["Blood Pressure", "ضغط الدم", "Daghut al-dam"],
          ["Diet / Nutrition", "نظام غذائي", "Nidham ghidha'i"],
          ["Measurement / Testing", "فحص", "Fahs"],
          ["Compliance", "الالتزام بالدواء", "Al-iltizam bi-l-dawaa'"],
          ["Paralysis", "فالج", "Faalej"],
          ["Cancer", "سرطان", "Sarataan"],
          ["Anemia", "فقر الدم / أنيميا", "Aneemyaa / Faqru edam"],
          ["Coma", "غيبوبة", "Ghyboobah"],
          ["Gonorrhea", "سيلان", "Sayalaan"],
          ["Syphilis", "زهري", "Zuhree"],
          ["Cholera", "كوليرا", "Kuleraa"],
          ["Scabies", "جرب", "Jarab"],
          ["Gangrene", "غرغرينا", "Gharghareenah"],
          ["Cataract", "الساد", "Assaad"],
          ["Psoriasis", "صدفية", "Sadafyyah"],
          ["Warts", "ثالول", "Thaalool"],
          ["Hypoglycemia", "سكر منخفض", "Sukkar munkhafed"],
          ["Hyperglycemia", "سكر عالي", "Sukkar 'aalee"],
          ["Hepatitis", "التهاب كبدي", "Iltihaab alkabedy"],
          ["Peptic Ulcer", "قرحة هضمية", "Qarhah hadmyyah"],
          ["Hernia", "فتق", "Fatq"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Medical Chronic Disease Vocabulary",
        description: "Standard terminology for metabolic conditions and compliance.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+chronic+disease+vocabulary",
      },
    ],
    checkpoints: [
      {
        id: "w7-c1",
        label: "Mastered terminology for common chronic diseases.",
      },
      {
        id: "w7-c2",
        label: "Memorized 5 key lifestyle counseling phrases.",
      },
    ],
    scenario: {
      patient:
        "A 60-year-old male patient is newly diagnosed with Type 2 Diabetes and prescribed Metformin.",
      instructions:
        "Counsel him to take the tablet with meals to avoid stomach upset, monitor his blood sugar regularly, and reduce his intake of sweets.",
      answerKey: {
        arabic:
          "هذا دواء السكري. يجب أن تأخذه مع الأكل كي لا يتعب معدتك. ومن الضروري فحص السكر بانتظام، وتقليل تناول الحلويات.",
        transliteration:
          "Hadha dawaa' al-sukkari. Yajibu an ta'khudhahu ma'a al-akl kay la yut'ib ma'idatak. Wa min al-daroori fahs al-sukkar bi-intidham, wa taqleel tanawul al-halawiyat.",
        rationale:
          "Translates chronic disease management protocols into clear, jargon-free standard Arabic that any patient can understand.",
      },
    },
  },
  {
    id: "week-8",
    number: 8,
    title: "Empathy & Patient De-escalation",
    timeAllocation: "2 hours Listening/Video, 2 hours Speaking Practice, 2 hours Assignment",
    coreConcepts: [
      "De-escalation vocabulary",
      "Explaining insurance denials or requirements",
      "Offering generic clinical alternatives",
    ],
    focusAreas: [
      {
        title: "Conflict Resolution",
        description:
          "Managing emotional distress and administrative friction at the pharmacy counter.",
      },
    ],
    vocabTables: [
      {
        caption: "Administrative and Empathy Phrases",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Please calm down", "أرجو الهدوء", "Arju al-hudoo'"],
          ["I understand your situation", "أنا أتفهم وضعك", "Ana atafahham wad'ak"],
          ["Pre-authorization", "موافقة مسبقة", "Muwafaqa musabbaqa"],
          ["Claim Rejected", "مطالبة مرفوضة", "Mutalaba marfouda"],
          ["Alternative (Generic)", "بديل", "Badeel"],
          ["Do not worry", "لا تقلق", "La taqlaq"],
          ["I will contact the doctor", "سأتصل بالطبيب", "Sa-uttasil bi-l-tabeeb"],
          ["Up to the mark", "حتى العلامة", "Hattaa al'alaamah"],
          [
            "Two drops each eye 4 times a day",
            "قطرتان في كل عين أربع مرات في اليوم",
            "Qatrataan fee kul 'aeen arba' marraat fee alyoom",
          ],
          ["Chew; Do Not Swallow Whole", "يمضغ ولا يبلع", "Yumdagh wa la yubla'"],
          ["To be given orally", "يعطى عن طريق الفم", "Yuta 'an tareeq al fam"],
          [
            "Shake the bottle before use",
            "رج الزجاجة قبل الاستعمال",
            "Ruj alzujaajah qabel alest'maal",
          ],
          ["As directed by physician", "حسب إرشادات الطبيب", "Hasab ershaadaat altabeeb"],
          ["Use in pregnancy", "يستخدم في حالة الحمل", "Yustkhdam fee haalat elhaml"],
          ["Use in lactation", "في حالة الإرضاع", "Fee haalat elerdaa'"],
          ["For external use", "للاستعمال الخارجي", "Lelestemaal alkhaarejy"],
          ["For internal use", "للاستعمال الداخلي", "Lel este'maal eddaakhely"],
          ["Rub into the affected area", "ادهن المنطقة المصابة", "Edhan el manteqah almusaabah"],
          ["Not to be repeated", "غير قابل للتكرار", "Ghaeer qaabel leltekraar"],
          [
            "Keep at room temperature",
            "يحفظ في درجة حرارة الغرفة",
            "Yuhfad fee darajet haraarat elghurfah",
          ],
          ["Use without dilution", "يستعمل بدون تخفيف", "Yusta'mal bedoon takhfeef"],
          [
            "Keep the bottle tightly closed",
            "احفظ الزجاجة مغلقة بإحكام",
            "Ehfaz azzujaajah mughlaqah beehkaam",
          ],
          [
            "Keep out of the reach of children",
            "لا تترك الأدوية في متناول أيدي الأطفال",
            "Laa tatruk aladweyah fee mutanaawal aydee elatfaal",
          ],
          [
            "Avoid contact with eye, skin, and clothes",
            "تجنب ملامسة العيون، الجلد والملابس",
            "Tajannab mulaamasata al'uyoon aljeld walmalaabes",
          ],
          [
            "Store in a dry place, protect from light",
            "يحفظ بعيداً عن الضوء في مكان جاف",
            "Yuhfad ba'eedan 'an eddao fee makaanen jaaf",
          ],
          ["Store in a refrigerator", "يخزن في الثلاجة", "Yukhazzanu feththallaajah"],
          ["Complete the course", "أكمل العلاج", "Akmeel al'elaaj"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Medical Empathy and Communication",
        description: "Phrases for calming patients and showing empathy in healthcare.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+empathy+and+communication",
      },
    ],
    checkpoints: [
      {
        id: "w8-c1",
        label: "Mastered 10 key de-escalation phrases.",
      },
      {
        id: "w8-c2",
        label: "Completed the Final Capstone Roleplay Submission.",
      },
    ],
    scenario: {
      patient:
        "A mother is visibly frustrated because her child’s prescribed brand-name asthma inhaler is not covered by insurance.",
      instructions:
        "De-escalate her frustration, validate her concern, and offer to contact the prescribing doctor to change the prescription to an approved generic alternative.",
      answerKey: {
        arabic:
          "أعتذر منك، أنا أقدر وضعك. للأسف التأمين رفض تغطية هذا البخاخ. لكن لا تقلقي، سأتصل بالطبيب الآن وأطلب منه كتابة بديل يغطيه التأمين.",
        transliteration:
          "A'tadhir minki, ana uqaddir wad'aki. Li-l-asaf al-ta'meen rafada taghtiyat hadha al-bakhakh. Lakin la taqlaqi, sa-uttasil bi-l-tabeeb al-aan wa atlub minhu kitabat badeel yughatteehi al-ta'meen.",
        rationale:
          "Replaces conflict with active problem-solving using standard empathetic markers and professional healthcare terms.",
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
  { level: 6, title: "Bilingual Pharmacist", min: 1000 },
  { level: 7, title: "Arabic Pharmacy Director", min: 1500 },
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
