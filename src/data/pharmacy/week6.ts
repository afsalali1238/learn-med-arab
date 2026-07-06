import { Week } from "../course";

export const week6: Week = {
  id: "pharmacy-week-6",
  number: 6,
  title: "Patient Education: Common Medical Instructions",
  timeAllocation: "45-60 minutes",
  coreConcepts: ["Patient warnings", "Usage instructions"],
  focusAreas: [{ title: "Education", description: "Safety and usage guidelines." }],
  vocabTables: [
    {
      caption: "Common Medical Instructions",
      headers: ["English", "Arabic", "Transliteration"],
      rows: [
        ["Up to the mark", "حتى العلامة", "Hattaa al'alaamah"],
        [
          "Two drops each eye 4 times a day",
          "قطرتان في كل عين أربع مرات في اليوم",
          "Qatrataan fee kul 'aeen arba' marraat fee alyoom",
        ["How can I help you?", "كَيْفَ يُمْكِنُنِي مُسَاعَدَتُك؟", "Kayfa yumkinunī musā'adatak?"],
        ["May I see the prescription?", "هَلْ يُمْكِنُنِي رُؤْيَة الوَصْفَة؟", "Hal yumkinunī ru'yat al-waṣfah?"],
        ["Do you have any allergies?", "هَلْ لَدَيْك أَيّ حَسَّاسِيَّة؟", "Hal ladayk ayy ḥassāsiyyah?"],
        ["This medicine is for...", "هَذَا الدَّوَاء لِـ...", "Hādhā ad-dawā' li..."],
        ["Follow the doctor's instructions.", "اِتَّبِع تَعْلِيمَات الطَّبِيب", "Ittabi' ta'līmāt aṭ-ṭabīb"],
        ["Are you taking other medications?", "هَلْ تَأْخُذ أَدْوِيَة أُخْرَى؟", "Hal ta'khudh adwiyah ukhrā?"],
        ["Get well soon.", "أَلْف سَلَامَة / شَفَاك اللَّه", "Alf Salāmah / Shafāk Allāh"],
        ["Do you have any questions?", "هَلْ لَدَيْك أَيّ أَسْئِلَة؟", "Hal ladayk ayy as'ilah?"],
        ["I will explain how to use it.", "سَأَشْرَح لَك كَيْفِيَّة الاِسْتِخْدَام", "Sa-ashraḥ lak kayfiyyat al-istikhdām"],
        ["Complete the whole course.", "أَكْمِل العِلَاج كَامِلاً", "Akmil al-'ilāj kāmilan"],

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
      type: "article",
      title: "65 Must-Know Arabic Words/Phrases for Healthcare",
      description: "Scribd document featuring a condensed list of critical vocabulary and polite standard phrasing.",
      url: "https://www.scribd.com/document/731306912/65-Must-Know-Arabic-Words-Phrases-for-Anyone-Working-in-Healthcare",
    },
  ],
  checkpoints: [{ id: "pharmacy-wk6-cp1", label: "Instructions Quiz" }],
  scenario: {
    patient: "The bottle must be shaken.",
    instructions: "Translate: 'Shake the bottle before use'",
    answerKey: {
      arabic: "رج الزجاجة قبل الاستعمال",
      transliteration: "Ruj alzujaajah qabel alest'maal",
      rationale: "Preparation instruction.",
    },
  },
};
