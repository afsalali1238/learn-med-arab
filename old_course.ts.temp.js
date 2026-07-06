






module.exports = [
  {
    id: "w1",
    number: 1,
    title: "Pharmacy Counter Basics & Culturally Competent Greetings",
    timeAllocation:
      "2h Listening / Video Analysis ┬╖ 2h Speaking Practice & Phonetic Drills ┬╖ 2h Weekly Assignment",
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
          ["How are you? (m/f)", "┘â┘è┘ü ╪¡╪º┘ä┘â┘Ä╪ƒ / ┘â┘è┘ü ╪¡╪º┘ä┘â┘É╪ƒ", "Kayfa haluka? / Kayfa haluki?"],
          ["Emirates ID", "╪¿╪╖╪º┘é╪⌐ ╪º┘ä┘ç┘ê┘è╪⌐", "Bitaqat Al-Hawiya"],
          ["Health Insurance", "╪¬╪ú┘à┘è┘å ╪╡╪¡┘è", "Ta'meen Sihhi"],
          ["Please wait here", "┘à┘å ┘ü╪╢┘ä┘â ╪º┘å╪¬╪╕╪▒ ┘ç┘å╪º", "Min fadlik intadhir huna"],
          ["Medical Prescription", "┘ê╪╡┘ü╪⌐ ╪╖╪¿┘è╪⌐", "Wasfa tibbiyya"],
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
      { id: "w1-c2", label: "Differentiated Khaleeji vs. Levantine audio recordings with ΓëÑ90% accuracy." },
      { id: "w1-c3", label: "Roleplayed Emirates ID + insurance intake using localized dialect." },
    ],
    scenario: {
      patient:
        "A local Emirati male in traditional Kandura approaches the pharmacy counter. Welcome him respectfully, ask for his prescription, and request his Emirates ID and insurance card to process his medication.",
      instructions:
        "Write exactly what you would say in Arabic script plus English transliteration. Use a professional Modern Standard Arabic (MSA) tone appropriate for a healthcare setting in the UAE ΓÇö MSA is understood by patients of every Arab nationality, unlike a single regional dialect.",
      answerKey: {
        arabic:
          "╪ú┘ç┘ä╪º┘ï ╪¿┘â ┘è╪º ╪ú╪«┘è╪î ┘â┘è┘ü ╪¡╪º┘ä┘â┘Ä╪ƒ ╪ú╪╣╪╖┘å┘è ╪º┘ä┘ê╪╡┘ü╪⌐ ┘ä┘ê ╪│┘à╪¡╪¬╪î ┘ê┘ç┘ä ┘à┘à┘â┘å ╪¿╪╖╪º┘é╪⌐ ╪º┘ä┘ç┘ê┘è╪⌐ ┘ê╪¿╪╖╪º┘é╪⌐ ╪º┘ä╪¬╪ú┘à┘è┘å╪ƒ ╪¬┘ü╪╢┘ä ╪¿╪º┘ä╪¼┘ä┘ê╪│ ┘ç┘å╪º ╪»┘é╪º╪ª┘é ┘ê╪│┘å╪╣╪» ┘ä┘â ╪º┘ä╪»┘ê╪º╪í.",
        transliteration:
          "Ahlan bika ya akhi, kayfa haluka? A'tini al-wasfa law samaht, wa hal mumkin bitaqat al-hawiya wa bitaqat al-ta'meen? Tafaddal bi-l-juloos huna daqaiq wa sanu'idd laka al-dawaa'.",
        rationale:
          "Kayfa haluka is the universally understood Modern Standard Arabic phrase for 'How are you?' ΓÇö unlike Gulf 'shlonak' or Levantine 'kifak', it is recognized by every Arabic speaker regardless of nationality. 'Ahlan bika' (welcome) followed by 'ya akhi' (my brother) keeps a warm, respectful tone without lapsing into a specific regional dialect. 'Law samaht' (if you please) and 'tafaddal bi-l-juloos huna' (please sit here) are the standard, formally correct ways to make a polite request and offer a seat in a healthcare setting.",
      },
    },
  },
  {
    id: "w2",
    number: 2,
    title: "Symptom Elicitation & Anatomical Terminology",
    timeAllocation: "2h Listening/Video ┬╖ 2h Speaking Practice ┬╖ 2h Weekly Assignment",
    coreConcepts: [
      "Accurate symptom elicitation depends on colloquial anatomical vocabulary ΓÇö patients rarely use MSA body-part names. The pharmacist must recognize and produce Khaleeji and Levantine terms for head, chest, stomach, and throat, and know when a patient's word choice signals dialect and register.",
      "Beyond naming body parts, this week trains open-ended clinical inquiries: 'What are your symptoms?', 'How long has this been going on?', 'Are you taking other medications?', 'Are you pregnant?'. These questions must be phrased with dialect-appropriate softeners to protect patient dignity, especially for reproductive or sensitive topics.",
    ],
    focusAreas: [
      { title: "Colloquial anatomy", description: "Head, chest, stomach, throat in both dialects." },
      { title: "Open-ended inquiry", description: "Elicit symptom onset, duration, and severity." },
      { title: "Sensitive topics", description: "Pregnancy, allergies, concurrent meds ΓÇö asked with tact." },
    ],
    vocabTables: [
      {
        caption: "Clinical inquiry phrases (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["How old are you?", "┘â┘à ╪╣┘à╪▒┘â┘Ä╪ƒ / ┘â┘à ╪╣┘à╪▒┘â┘É╪ƒ", "Kam omruka? / Kam omruki?"],
          ["What are your symptoms?", "┘à╪º ┘ç┘è ╪º┘ä╪ú╪╣╪▒╪º╪╢╪ƒ", "Ma hiya al-a'raad?"],
          ["Are you pregnant?", "┘ç┘ä ╪ú┘å╪¬┘É ╪¡╪º┘à┘ä╪ƒ", "Hal anti hamil?"],
          ["Are you taking other medications?", "┘ç┘ä ╪¬╪ú╪«╪░ ╪ú╪»┘ê┘è╪⌐ ╪ú╪«╪▒┘ë╪ƒ", "Hal ta'khudh adwiyah ukhra?"],
          ["Do you have allergies?", "┘ç┘ä ┘ä╪»┘è┘â ╪¡╪│╪º╪│┘è╪⌐╪ƒ", "Hal ladayka/ladayki hasasiyah?"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Arabic Body Parts Vocabulary ΓÇö Levantine & MSA",
        description: "Colloquial vs. standard anatomical terms with pronunciation drills.",
        url: "https://www.youtube.com/results?search_query=arabic+body+parts+levantine+MSA",
      },
      {
        type: "video",
        title: "Medical Episodes ΓÇö Levantine Arabic",
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
          "╪ú┘ç┘ä╪º┘ï ╪¿┘â┘É╪î ╪ú╪¬┘à┘å┘ë ┘ä┘â┘É ╪º┘ä╪┤┘ü╪º╪í. ┘à╪º ┘ç┘è ╪º┘ä╪ú╪╣╪▒╪º╪╢ ╪º┘ä╪¬┘è ╪¬╪┤╪╣╪▒┘è┘å ╪¿┘ç╪º╪ƒ ┘à┘å╪░ ┘à╪¬┘ë ┘ê╪ú┘å╪¬┘É ╪╣┘ä┘ë ┘ç╪░┘ç ╪º┘ä╪¡╪º┘ä╪ƒ ┘ç┘ä ╪¬╪┤╪╣╪▒┘è┘å ╪¿╪ú┘ä┘à ╪ú┘ê ╪║╪½┘è╪º┘å╪ƒ ┘ê┘ç┘ä ╪¬╪¬┘å╪º┘ê┘ä┘è┘å ╪ú┘è ╪»┘ê╪º╪í ╪ó╪«╪▒ ╪¡╪º┘ä┘è╪º┘ï╪ƒ",
        transliteration:
          "Ahlan biki, atamanna laki al-shifaa'. Ma hiya al-a'raad allati tash'urina biha? Mundhu mata wa anti 'ala hadhihi al-haal? Hal tash'urina bi-alam aw ghathayan? Wa hal tatanawalina ay dawaa' aakhar haaliyan?",
        rationale:
          "'Atamanna laki al-shifaa'' (I wish you a swift recovery) is a standard empathetic opener understood across every Arab region ΓÇö unlike a dialect-specific comfort phrase, it never sounds out of place. 'Mundhu mata' (since when) and 'Ma hiya al-a'raad' use the formal MSA interrogative structure rather than colloquial 'shu al-a'raad' or 'shno a'radhak', so the question is unambiguous to a patient from any Arabic-speaking background. Asking about pain, nausea, and concurrent medications in the same formal register keeps the exchange clinically precise.",
      },
    },
  },
  {
    id: "w3",
    number: 3,
    title: "Explaining Dosage, Frequencies, and Administration Routes",
    timeAllocation: "2h Listening/Video ┬╖ 2h Speaking Practice & Verbs ┬╖ 2h Weekly Assignment",
    coreConcepts: [
      "Dosage counseling is where miscommunication becomes dangerous. The pharmacist must articulate numerical dose, frequency, timing relative to food, and route of administration in the patient's dialect. Numbers, time expressions, and imperative verbs must feel native.",
      "Physical formulations ΓÇö tablet, capsule, syrup, drops, cream, inhaler ΓÇö carry distinct dialect names. Confusing 'habbah' (tablet) with 'kabsuleh' (capsule) can mean a patient chews a modified-release medication. This week drills the vocabulary of forms plus the verbs of administration: swallow, apply, inhale, dissolve.",
    ],
    focusAreas: [
      { title: "Numerical dosing", description: "Doses, frequencies, and timing relative to meals." },
      { title: "Formulations", description: "Tablet, capsule, syrup, inhaler, drops, cream." },
      { title: "Administration verbs", description: "Swallow, apply, inhale, dissolve ΓÇö in imperative mood." },
    ],
    vocabTables: [
      {
        caption: "Dosage & administration phrases (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Pill / Tablet", "┘é╪▒╪╡ / ╪¡╪¿╪⌐", "Qurs / Habbah"],
          ["Capsule", "┘â╪¿╪│┘ê┘ä╪⌐", "Kabsoula"],
          ["Medical Syrup", "╪┤╪▒╪º╪¿", "Sharab"],
          ["Once a day", "┘à╪▒╪⌐ ┘ü┘è ╪º┘ä┘è┘ê┘à", "Marrah fi al-yawm"],
          ["Three times a day", "╪½┘ä╪º╪½ ┘à╪▒╪º╪¬ ┘ü┘è ╪º┘ä┘è┘ê┘à", "Thalath marrat fi al-yawm"],
          ["Before food", "┘é╪¿┘ä ╪º┘ä╪ú┘â┘ä", "Qabla al-akl"],
          ["After food", "╪¿╪╣╪» ╪º┘ä╪ú┘â┘ä", "Ba'da al-akl"],
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
        title: "Levantine Arabic ΓÇö Medical Episodes",
        description: "Native interviews across a range of medical topics.",
        url: "https://www.youtube.com/results?search_query=levantine+arabic+doctor+visit",
      },
      
    ],
    checkpoints: [
      { id: "w3-c1", label: "Mastered numbers 1ΓÇô100 and time expressions for dosing." },
      { id: "w3-c2", label: "Named 12 formulations and their administration verbs in both dialects." },
      { id: "w3-c3", label: "Roleplayed a 3-drug regimen handoff with clear food-timing instructions." },
    ],
    scenario: {
      patient:
        "A Levantine patient is picking up amoxicillin 500mg capsules ΓÇö one capsule every 8 hours for 7 days. Counsel on dose, spacing, food timing, and stress the importance of completing the entire antibiotic course even after symptoms resolve.",
      instructions:
        "Draft the full Arabic counseling dialogue in formal Modern Standard Arabic (MSA). Include Arabic script and transliteration. Instructions must be unambiguous to prevent antibiotic resistance ΓÇö MSA avoids any dialect-specific term for 'capsule' or 'course of treatment' that a patient from a different nationality might not recognize.",
      answerKey: {
        arabic:
          "┘ç╪░╪º ┘à╪╢╪º╪» ╪¡┘è┘ê┘è. ┘è╪¼╪¿ ╪ú┘å ╪¬╪ú╪«╪░ ╪¡╪¿╪⌐ ┘ê╪º╪¡╪»╪⌐╪î ╪½┘ä╪º╪½ ┘à╪▒╪º╪¬ ┘ü┘è ╪º┘ä┘è┘ê┘à╪î ╪¿╪╣╪» ╪º┘ä╪ú┘â┘ä╪î ┘ä┘à╪»╪⌐ ╪│╪¿╪╣╪⌐ ╪ú┘è╪º┘à. ┘à┘å ╪º┘ä┘à┘ç┘à ╪¼╪»╪º┘ï ╪ú┘å ╪¬┘â┘à┘ä ╪º┘ä╪»┘ê╪º╪í ┘â┘ä┘ç ╪¡╪¬┘ë ┘ä┘ê ╪┤╪╣╪▒╪¬ ╪¿╪¬╪¡╪│┘å╪î ┘ä┘â┘è ┘ä╪º ╪¬╪╣┘ê╪» ╪º┘ä╪╣╪»┘ê┘ë.",
        transliteration:
          "Hadha mudadd hayawi. Yajibu an ta'khudh habbah wahida, thalath marrat fi al-yawm, ba'da al-akl, li-muddat sab'at ayyam. Min al-muhim jiddan an tukmil al-dawaa' kullahu hatta law sha'arta bi-tahassun, li-kay la ta'ood al-adwa.",
        rationale:
          "Hadha mudadd hayawi (this is an antibiotic) uses proper MSA demonstrative pronouns to name the drug class plainly, which anchors why completion matters. Yajibu an ta'khudh (you must take) is the formal subjunctive construction required after yajibu an (must) ΓÇö grammatically correct and unambiguous. Min al-muhim jiddan an tukmil (it is very important that you complete) is the standard, professional way to mandate adherence without sounding aggressive, and reads identically whether the patient is Emirati, Levantine, or of any other Arab nationality.",
      },
    },
  },
  {
    id: "w4",
    number: 4,
    title: "Side Effects, Adverse Reactions & High-Risk Medications",
    timeAllocation: "2h Listening/Video ┬╖ 2h Speaking Practice ┬╖ 2h Weekly Assignment",
    coreConcepts: [
      "Disclosing side effects without inducing non-compliance requires linguistic finesse. The pharmacist frames adverse reactions as monitored possibilities rather than looming threats, using conditional structures ('if you noticeΓÇª, thenΓÇª') and reassurance markers.",
      "High-risk medications ΓÇö anticoagulants, first-generation antihistamines, opioids ΓÇö demand explicit red-flag language. This week builds vocabulary for anaphylaxis, bleeding, drowsiness, and drug interactions, plus the imperative phrasing that tells a patient exactly when to seek emergency care.",
    ],
    focusAreas: [
      { title: "Empathetic disclosure", description: "Frame side effects as monitored, not feared." },
      { title: "Red-flag language", description: "Anaphylaxis, bleeding, dizziness ΓÇö when to call 999." },
      { title: "Conditional structures", description: "'If X, then Y' ΓÇö the grammar of safety-netting." },
    ],
    vocabTables: [
      {
        caption: "Side-effect & emergency vocabulary (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Side effects", "╪ó╪½╪º╪▒ ╪¼╪º┘å╪¿┘è╪⌐", "Athaar janibiyya"],
          ["Severe drowsiness", "┘å╪╣╪º╪│ ╪┤╪»┘è╪»", "Nu'aas shadeed"],
          ["Rash / Allergic reaction", "╪╖┘ü╪¡ ╪¼┘ä╪»┘è / ╪¡╪│╪º╪│┘è╪⌐", "Tafah jildi / Hasasiyah"],
          ["Swelling", "╪¬┘ê╪▒┘à", "Tawarrum"],
          ["Shortness of breath", "╪╢┘è┘é ╪º┘ä╪¬┘å┘ü╪│", "Deeq al-tanaffus"],
          ["Go to emergency immediately", "╪º╪░┘ç╪¿ ╪Ñ┘ä┘ë ╪º┘ä╪╖┘ê╪º╪▒╪ª ┘ü┘ê╪▒╪º┘ï", "Idhhab ila al-tawari' fawran"],
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
        title: "Arabic Medical Vocabulary ΓÇö Adverse Drug Reactions",
        description: "Native pharmacist walkthroughs of high-risk counseling.",
        url: "https://www.youtube.com/results?search_query=arabic+pharmacist+counseling",
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
          "┘ç╪░╪º ╪º┘ä╪»┘ê╪º╪í ┘è┘Å╪«┘ü┘ü ┘à┘å ╪¬╪¼┘ä╪╖ ╪º┘ä╪»┘à╪î ┘ä╪░┘ä┘â ┘è╪¼╪¿ ╪ú┘å ╪¬┘å╪¬╪¿┘ç ╪¼┘è╪»╪º┘ï. ╪Ñ╪░╪º ┘ä╪º╪¡╪╕╪¬┘Ä ┘å╪▓┘è┘ü╪º┘ï ┘à┘å ╪º┘ä╪ú┘å┘ü ╪ú┘ê ╪º┘ä┘ä╪½╪⌐╪î ╪ú┘ê ╪╕┘ç╪▒╪¬ ┘â╪»┘à╪º╪¬ ╪»┘ê┘å ╪│╪¿╪¿ ┘ê╪º╪╢╪¡╪î ┘è╪¼╪¿ ╪ú┘å ╪¬╪¬╪╡┘ä ╪¿┘å╪º ┘ü┘ê╪▒╪º┘ï ╪ú┘ê ╪¬╪░┘ç╪¿ ╪Ñ┘ä┘ë ╪º┘ä╪╖┘ê╪º╪▒╪ª. ╪¬╪¼┘å┘æ╪¿ ╪º┘ä╪Ñ┘â╪½╪º╪▒ ┘à┘å ╪º┘ä╪«╪╢╪▒┘ê╪º╪¬ ╪º┘ä┘ê╪▒┘é┘è╪⌐╪î ┘ê┘ä╪º ╪¬╪¬┘å╪º┘ê┘ä ╪Ñ┘è╪¿┘ê╪¿╪▒┘ê┘ü┘è┘å ╪ú┘ê ╪ú╪│╪¿╪▒┘è┘å ╪Ñ┘ä╪º ╪¿╪Ñ╪░┘å ╪º┘ä╪╖╪¿┘è╪¿.",
        transliteration:
          "Hadha al-dawaa' yukhaffif min tajallut al-dam, lidhalika yajibu an tantabih jayyidan. Idha lahazta nazeefan min al-anf aw al-litha, aw zaharat kadamat duna sabab wadih, yajibu an tattasil bina fawran aw tadh-hab ila al-tawari'. Tajannab al-ikthar min al-khudrawat al-waraqiyya, wa la tatanawal ibuprofen aw aspirin illa bi-idhn al-tabib.",
        rationale:
          "Framing Warfarin as thinning the blood (yukhaffif min tajallut al-dam) in plain MSA is intuitive and avoids relying on a colloquial idiom for anticoagulation. Repeating 'yajibu an' constructions makes each safety instruction sound equally authoritative regardless of the patient's dialect background. Naming the interaction generically (khudrawat waraqiyya ΓÇö leafy greens) rather than a dialect-specific food word ensures the warning is understood by any Arabic speaker in the UAE.",
      },
    },
  },
  {
    id: "w5",
    number: 5,
    title: "Pain Assessment & OTC Triage",
    timeAllocation: "2h Listening/Video ┬╖ 2h Speaking Practice ┬╖ 2h Weekly Assignment",
    coreConcepts: [
      "Pain assessment in colloquial Arabic hinges on the pain scale (Miqyas al-alam) and descriptive vocabulary ΓÇö sharp, dull, throbbing, burning. The pharmacist must elicit character, location, radiation, and timing without leading the patient.",
      "OTC triage requires quick decision-making: when to sell paracetamol, when to escalate to a physician, when to counsel on red flags. This week builds the culturally attuned phrases for validating discomfort (Salamtak, ma tshoof shar) and directing patients appropriately.",
    ],
    focusAreas: [
      { title: "Pain scale", description: "Miqyas al-alam 0ΓÇô10 and descriptive character words." },
      { title: "OTC red flags", description: "When to escalate: chest pain, severe abdominal pain, neuro signs." },
      { title: "Validating comfort", description: "'Salamtak' and other empathy phrases that build trust." },
    ],
    vocabTables: [
      {
        caption: "Pain descriptors (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Pain / Ache", "╪ú┘ä┘à / ┘ê╪¼╪╣", "Alam / Waja'"],
          ["Cough", "╪│╪╣╪º┘ä / ┘â╪¡╪⌐", "Su'aal / Kahha"],
          ["Nausea", "╪║╪½┘è╪º┘å", "Ghathayan"],
          ["Constipation", "╪Ñ┘à╪│╪º┘â", "Imsak"],
          ["Diarrhea", "╪Ñ╪│┘ç╪º┘ä", "Ishaal"],
          ["Stomach cramps", "┘à╪║╪╡", "Maghas"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Pain Assessment in Arabic ΓÇö Clinical Vocabulary",
        description: "Character, location, and severity descriptors.",
        url: "https://www.youtube.com/results?search_query=arabic+medical+pain+assessment",
      },
      {
        type: "video",
        title: "Levantine Medical Arabic ΓÇö Pain Episodes",
        description: "Real dialogues around pain description and OTC triage.",
        url: "https://www.youtube.com/results?search_query=levantine+arabic+pain+description",
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
          "╪ú╪¬┘à┘å┘ë ┘ä┘ç╪º ╪º┘ä╪┤┘ü╪º╪í. ┘ç┘ä ┘ä╪»┘è┘ç╪º ╪¡┘à┘ë ╪º┘ä╪ó┘å╪ƒ ╪│╪ú╪╣╪╖┘è┘â┘É ┘à╪¡┘ä┘ê┘ä ╪¼┘ü╪º┘ü ┘ä╪¬╪╣┘ê┘è╪╢ ╪º┘ä╪│┘ê╪º╪ª┘ä╪î ╪¿╪º┘ä╪Ñ╪╢╪º┘ü╪⌐ ╪Ñ┘ä┘ë ╪»┘ê╪º╪í ┘ä┘ä╪Ñ╪│┘ç╪º┘ä. ╪Ñ╪░╪º ╪º╪│╪¬┘à╪▒ ╪º┘ä┘à╪║╪╡ ┘ê╪º┘ä╪Ñ╪│┘ç╪º┘ä ╪ú┘â╪½╪▒ ┘à┘å ┘è┘ê┘à┘è┘å╪î ┘è╪¼╪¿ ╪ú┘å ╪¬╪▒┘è ╪╖╪¿┘è╪¿╪º┘ï.",
        transliteration:
          "Atamanna laha al-shifaa'. Hal ladayha humma al-aan? Sa-u'tiki mahloul jafaf li-ta'weed al-sawa'il, bil-idafa ila dawaa'in lil-ishaal. Idha istamarra al-maghas wa-l-ishaal akthar min yawmayn, yajibu an tarayi tabeeban.",
        rationale:
          "Atamanna laha al-shifaa' (I wish her a recovery) is the standard MSA empathy marker for a caregiver ΓÇö it works whether the mother is Emirati, Levantine, or of any other nationality, unlike a dialect-specific comfort phrase. Mahloul jafaf (rehydration solution) and yajibu an tarayi tabeeban (you must see a doctor) are precise clinical MSA terms that leave no room to misjudge the urgency of the two-day red flag.",
      },
    },
  },
  {
    id: "w6",
    number: 6,
    title: "Chronic Disease Counseling: Diabetes & Hypertension",
    timeAllocation: "2h Listening/Video ┬╖ 2h Speaking Practice ┬╖ 2h Weekly Assignment",
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
          ["Diabetes / Blood Sugar", "╪º┘ä╪│┘â╪▒┘è / ╪│┘â╪▒ ╪º┘ä╪»┘à", "Al-sukkari / Sukkar al-dam"],
          ["Blood Pressure", "╪╢╪║╪╖ ╪º┘ä╪»┘à", "Daghut al-dam"],
          ["Fasting (e.g., Ramadan)", "╪º┘ä╪╡┘è╪º┘à", "Al-siyam"],
          ["Diet / Nutrition", "┘å╪╕╪º┘à ╪║╪░╪º╪ª┘è", "Nidham ghidha'i"],
          ["Measurement / Testing", "┘é┘è╪º╪│ / ┘ü╪¡╪╡", "Qiyas / Fahs"],
          ["Suhoor / Iftar", "╪│╪¡┘ê╪▒ / ╪Ñ┘ü╪╖╪º╪▒", "Suhoor / Iftar"],
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
        title: "Ramadan & Medication ΓÇö Arabic Pharmacist Guide",
        description: "Real cases on dose timing during fasting.",
        url: "https://www.youtube.com/results?search_query=arabic+pharmacist+ramadan+medication",
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
        "Write a formal Modern Standard Arabic (MSA) counseling dialogue. Include Arabic script and transliteration. Approach Ramadan with religious sensitivity ΓÇö negotiate, do not forbid.",
      answerKey: {
        arabic:
          "╪ú┘ç┘ä╪º┘ï ╪¿┘â ┘è╪º ╪ú╪«┘è╪î ╪ú╪¬┘à┘å┘ë ┘ä┘â ╪º┘ä╪┤┘ü╪º╪í. ┘ç╪░╪º ╪»┘ê╪º╪í ╪º┘ä╪│┘â╪▒┘è (┘à┘è╪¬┘ü┘ê╪▒┘à┘è┘å). ┘è╪¼╪¿ ╪ú┘å ╪¬╪¬┘å╪º┘ê┘ä ╪¡╪¿╪⌐ ┘ü┘è ╪º┘ä╪╡╪¿╪º╪¡ ┘ê╪¡╪¿╪⌐ ┘ü┘è ╪º┘ä┘à╪│╪º╪í╪î ┘ê┘è┘Å┘ü╪╢┘æ┘ä ╪¬┘å╪º┘ê┘ä┘ç ┘à╪╣ ╪º┘ä╪╖╪╣╪º┘à ╪¡╪¬┘ë ┘ä╪º ┘è┘Å╪▓╪╣╪¼ ┘à╪╣╪»╪¬┘â. ┘é╪» ╪¬╪┤╪╣╪▒ ╪¿┘à╪║╪╡ ╪«┘ü┘è┘ü ┘ü┘è ╪º┘ä╪ú╪│╪¿┘ê╪╣ ╪º┘ä╪ú┘ê┘ä╪î ┘ä┘â┘å┘ç ╪│┘è╪▓┘ê┘ä. ╪ú┘à╪º ╪¿╪«╪╡┘ê╪╡ ╪º┘ä╪╡┘è╪º┘à ┘ü┘è ╪▒┘à╪╢╪º┘å╪î ┘ü╪│┘å╪¬╪¡╪»╪½ ┘à╪╣ ╪º┘ä╪╖╪¿┘è╪¿ ┘ä╪¬╪╣╪»┘è┘ä ╪º┘ä╪¼╪▒╪╣╪º╪¬ ╪╣┘ä┘ë ╪º┘ä╪│╪¡┘ê╪▒ ┘ê╪º┘ä╪Ñ┘ü╪╖╪º╪▒╪î ╪¡╪¬┘ë ╪¬╪╡┘ê┘à ╪¿╪ú┘à╪º┘å ╪Ñ┘å ╪┤╪º╪í ╪º┘ä┘ä┘ç.",
        transliteration:
          "Ahlan bika ya akhi, atamanna laka al-shifaa'. Hadha dawaa' al-sukkari (Metformin). Yajibu an tatanawal habbah fi al-sabah wa habbah fi al-masaa', wa yufaddal tanawuluhu ma'a al-ta'aam hatta la yuz'ij mi'datak. Qad tash'ur bi-maghas khafif fi al-usbu' al-awwal, lakinnahu sayazoul. Amma bikhusoos al-siyam fi Ramadan, fasanatahaddath ma'a al-tabib li-ta'deel al-jur'aat 'ala al-suhoor wa-l-iftar, hatta tasoom bi-aman insha'Allah.",
        rationale:
          "Yajibu an tatanawal (you must take) uses the formal MSA construction consistently, so the dosing schedule reads with the same authority as the safety warning. 'Fasanatahaddath ma'a al-tabib' (we will speak with the doctor) invites collaboration on Ramadan dosing rather than issuing a blanket rule ΓÇö a standard, respectful MSA framing that works regardless of the patient's specific background. Closing with 'insha'Allah' respects the religious dimension while the rest of the sentence stays in precise clinical register.",
      },
    },
  },
  {
    id: "w7",
    number: 7,
    title: "Pediatric & Geriatric Counseling",
    timeAllocation: "2h Listening/Video ┬╖ 2h Speaking Practice ┬╖ 2h Weekly Assignment",
    coreConcepts: [
      "Pediatric counseling in Dubai is almost always mediated through a caregiver ΓÇö most often the mother. The pharmacist speaks to both: giving clinical instructions to the parent while validating the child's experience. Weight-based dosing calculations must be explained in accessible terms.",
      "Geriatric counseling demands slower pace, respectful address (Ammu/Khaltu ΓÇö uncle/aunt), and awareness of polypharmacy. Many elderly patients in Dubai are visiting from surrounding countries and may hold prescriptions in different naming conventions.",
    ],
    focusAreas: [
      { title: "Weight-based dosing", description: "Explaining mg/kg to caregivers in plain Arabic." },
      { title: "Respectful address", description: "Ammu, Khaltu, Haj/Hajjeh ΓÇö cultural age markers." },
      { title: "Polypharmacy review", description: "Reconciling multiple medications with an elderly patient." },
    ],
    vocabTables: [
      {
        caption: "Pediatric & geriatric vocabulary (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Child / Children", "╪╖┘ü┘ä / ╪ú╪╖┘ü╪º┘ä", "Tifl / Atfaal"],
          ["Weight", "┘ê╪▓┘å", "Wazn"],
          ["Uncle (respectful address)", "╪╣┘à┘æ┘è", "Ammi"],
          ["Aunt (respectful address)", "╪«╪º┘ä╪¬┘è", "Khalti"],
          ["Pilgrim (elder honorific)", "╪¡╪º╪¼ / ╪¡╪¼╪⌐", "Haj / Hajjah"],
          ["Syringe / Dropper", "╪¡┘é┘å╪⌐ / ┘é╪╖╪º╪▒╪⌐", "Huqnah / Qattarah"],
        ],
      },
    ],
    resources: [
      {
        type: "video",
        title: "Talking to Kids in Arabic ΓÇö Caregiver Communication",
        description: "Bridging parent-child conversation in the clinical setting.",
        url: "https://www.youtube.com/results?search_query=arabic+pediatric+vocabulary",
      },
      {
        type: "video",
        title: "Geriatric Pharmacy ΓÇö Arabic Case Discussions",
        description: "Polypharmacy and adherence challenges in older patients.",
        url: "https://www.youtube.com/results?search_query=arabic+elderly+care+medical",
      },
      
    ],
    checkpoints: [
      { id: "w7-c1", label: "Calculated and communicated weight-based pediatric doses in Arabic." },
      { id: "w7-c2", label: "Used respectful geriatric address (Ammu/Khaltu/Haj) in 5 roleplays." },
      { id: "w7-c3", label: "Reconciled a polypharmacy list of ΓëÑ5 medications with an elderly patient." },
    ],
    scenario: {
      patient:
        "A mother brings her 4-year-old (16 kg) with fever. You are dispensing paracetamol syrup 120mg/5ml, dose 15 mg/kg every 6 hours. Counsel the mother clearly: dose, frequency, max/day, and when to see a doctor.",
      instructions:
        "Write a warm, formal Modern Standard Arabic (MSA) dialogue directed at the mother, with soft reassurance for the child. Include Arabic script and transliteration.",
      answerKey: {
        arabic:
          "╪ú╪¬┘à┘å┘ë ┘ä┘ç╪º ╪º┘ä╪┤┘ü╪º╪í. ┘ê╪▓┘å┘ç╪º ┘í┘ª ┘â┘è┘ä┘ê╪║╪▒╪º┘à╪º┘ï╪î ┘ü╪º┘ä╪¼╪▒╪╣╪⌐ ╪º┘ä┘à┘å╪º╪│╪¿╪⌐ ┘ç┘è ┘í┘á ┘à┘ä ┘à┘å ╪º┘ä╪┤╪▒╪º╪¿ ┘â┘ä ┘ª ╪│╪º╪╣╪º╪¬╪î ╪ú┘è ╪ú╪▒╪¿╪╣ ┘à╪▒╪º╪¬ ┘â╪¡╪» ╪ú┘é╪╡┘ë ┘ü┘è ╪º┘ä┘è┘ê┘à. ┘è╪¼╪¿ ╪ú┘å ╪¬┘Å╪▒╪¼┘æ┘è ╪º┘ä┘é╪º╪▒┘ê╪▒╪⌐ ╪¼┘è╪»╪º┘ï ┘é╪¿┘ä ╪Ñ╪╣╪╖╪º╪ª┘ç╪º ╪º┘ä╪»┘ê╪º╪í. ┘ê╪Ñ╪░╪º ┘ä┘à ╪¬┘å╪«┘ü╪╢ ╪º┘ä╪¡╪▒╪º╪▒╪⌐ ╪¿╪╣╪» ┘è┘ê┘à┘è┘å╪î ╪ú┘ê ╪º╪▒╪¬┘ü╪╣╪¬ ╪Ñ┘ä┘ë ╪ú┘â╪½╪▒ ┘à┘å ┘ú┘⌐ ╪»╪▒╪¼╪⌐╪î ┘è╪¼╪¿ ╪ú┘å ╪¬╪▒╪º╪¼╪╣┘è ╪╖╪¿┘è╪¿╪º┘ï.",
        transliteration:
          "Atamanna laha al-shifaa'. Waznuha sittata 'ashara kilughraman, fal-jur'ah al-munasibah hiya 'ashara millilitrat min al-sharaab kulla sitta sa'aat, ay arba' marrat ka-hadd aqsa fi al-yawm. Yajibu an turajji al-qarurah jayyidan qabla i'taiha al-dawaa'. Wa idha lam tankhafid al-harara ba'da yawmayn, aw irtafa'at ila akthar min tis'a wa thalathin darajah, yajibu an turaji'i tabeeban.",
        rationale:
          "Anchoring the dose in the child's exact weight (waznuha sittata 'ashara kilughraman) in formal MSA teaches the underlying mg/kg logic clearly, without relying on a dialect-specific number system. Ka-hadd aqsa (as a maximum) is stated plainly ΓÇö paracetamol overdose is a leading pediatric safety concern, so this phrase must be unambiguous to any caregiver. The temperature threshold and two-day rule give the mother two concrete, standard escalation triggers regardless of her own dialect background.",
      },
    },
  },
  {
    id: "w8",
    number: 8,
    title: "Empathy, De-escalation, and Handling Confused Patients",
    timeAllocation: "2h Listening/Video ┬╖ 2h Speaking Practice ┬╖ 2h Weekly Assignment",
    coreConcepts: [
      "The culmination of clinical fluency is navigating conflict and emotional distress at the counter. This module equips the pharmacist with de-escalation vocabulary to calm agitated patients ΓÇö phrases like 'Tawwil balak' (stay calm/be patient) and 'Ana fahim a'layk' (I understand you) that lower emotional temperature.",
      "A common friction point in Dubai pharmacies involves insurance and administrative denials. The pharmacist must acknowledge the frustration, position themselves alongside the patient rather than as an administrative barrier, and offer concrete next steps ΓÇö often escalation to the insurance line or a partial dispense.",
    ],
    focusAreas: [
      { title: "Lowering temperature", description: "Tawwil balak, Ihda', Ana fahim a'layk." },
      { title: "Aligning with patient", description: "Language that puts you on the same team." },
      { title: "Concrete next steps", description: "Always offer a path forward ΓÇö never a flat 'no'." },
    ],
    vocabTables: [
      {
        caption: "De-escalation phrases (MSA)",
        headers: ["English", "Arabic Script", "Transliteration"],
        rows: [
          ["Please calm down", "╪ú╪▒╪¼┘ê ╪º┘ä┘ç╪»┘ê╪í", "Arju al-hudoo'"],
          ["I understand your situation", "╪ú┘å╪º ╪ú╪¬┘ü┘ç┘à ┘ê╪╢╪╣┘â", "Ana atafahham wad'ak"],
          ["Pre-authorization required", "┘à┘ê╪º┘ü┘é╪⌐ ┘à╪│╪¿┘é╪⌐ ┘à┘å ╪º┘ä╪¬╪ú┘à┘è┘å", "Muwafaqa musabbaqa min al-ta'meen"],
          ["Claim rejected", "┘à╪╖╪º┘ä╪¿╪⌐ ┘à╪▒┘ü┘ê╪╢╪⌐", "Mutalaba marfouda"],
          ["Alternative (Generic)", "╪¿╪»┘è┘ä", "Badeel"],
          ["Do not worry", "┘ä╪º ╪¬┘é┘ä┘é", "La taqlaq"],
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
        title: "Difficult Conversations ΓÇö Arabic Pharmacy Cases",
        description: "Real anonymized cases of counter conflict resolution.",
        url: "https://www.youtube.com/results?search_query=arabic+conflict+resolution+pharmacy",
      },
      
    ],
    checkpoints: [
      { id: "w8-c1", label: "Deployed 10 de-escalation phrases in stress roleplay without hesitation." },
      { id: "w8-c2", label: "Handled an insurance denial with an agitated patient in Γëñ3 minutes." },
      { id: "w8-c3", label: "Completed the capstone Type 2 diabetes counseling roleplay." },
    ],
    scenario: {
      patient:
        "A Levantine woman is visibly upset ΓÇö her chronic medication has been denied by insurance and she cannot afford the full price. She raises her voice at the counter. De-escalate, align with her, and offer concrete next steps.",
      instructions:
        "Write a deeply empathetic response in formal Modern Standard Arabic (MSA). Include Arabic script and transliteration. Show you are on her side, actively solving the problem ΓÇö never acting as an administrative barrier.",
      answerKey: {
        arabic:
          "╪ú╪╣╪¬╪░╪▒ ┘à┘å┘â ┘è╪º ╪ú╪«╪¬┘è╪î ┘ê┘ä╪º ╪¬┘é┘ä┘é┘è╪î ╪ú┘å╪º ╪ú┘é╪»╪▒ ┘ê╪╢╪╣┘â. ┘ä┘ä╪ú╪│┘ü ╪º┘ä╪¬╪ú┘à┘è┘å ╪▒┘ü╪╢ ╪¬╪║╪╖┘è╪⌐ ┘ç╪░╪º ╪º┘ä╪»┘ê╪º╪í ┘ä╪ú┘å┘ç ╪║╪º┘ä┘è ╪º┘ä╪½┘à┘å. ┘ä┘â┘å ┘ä╪º ╪¬┘é┘ä┘é┘è╪î ╪│╪ú╪¬╪╡┘ä ╪¿╪º┘ä╪╖╪¿┘è╪¿ ╪º┘ä╪ó┘å ┘ê╪ú╪╖┘ä╪¿ ┘à┘å┘ç ╪ú┘å ┘è┘â╪¬╪¿ ╪¿╪»┘è┘ä╪º┘ï ┘ä┘ç ┘å┘ü╪│ ╪º┘ä┘à┘ü╪╣┘ê┘ä ┘ê┘è╪║╪╖┘è┘ç ╪º┘ä╪¬╪ú┘à┘è┘å. ╪º╪¼┘ä╪│┘è ╪»┘é╪º╪ª┘é ┘ü┘é╪╖.",
        transliteration:
          "A'tadhir minki ya ukhti, wa la taqlaqi, ana uqaddir wad'aki. Li-l-asaf al-ta'meen rafada taghtiyat hadha al-dawaa' li-annahu ghali al-thaman. Lakin la taqlaqi, sa-uttasil bi-l-tabeeb al-aan wa atlub minhu an yaktuba badeelan lahu nafs al-maf'oul wa yughatteehi al-ta'meen. Ijlisi daqaiq faqat.",
        rationale:
          "A'tadhir minki (I apologize to you) and la taqlaqi (do not worry) are standard, formal markers for defusing anxiety that read as sincere without leaning on any single dialect's comfort phrase. Ana uqaddir wad'aki (I understand/appreciate your situation) is a direct MSA rendering of professional empathy. Proposing to call the doctor and offering a covered generic alternative (badeel) moves the pharmacist from gatekeeper to active advocate, using clear, standard syntax any patient in the UAE would immediately understand.",
      },
    },
  },
];

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
