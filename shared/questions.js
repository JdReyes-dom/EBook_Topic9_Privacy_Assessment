/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 9: Privacy
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Which personal detail was visible in the background of Aery\'s photo?',
    choices: {
      a: 'Her favorite game',
      b: 'Her school ID',
      c: 'Her friend\'s phone number',
      d: 'Her social media password'
    },
    correct: 'b'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What kind of parcel did Aery receive unexpectedly?',
    choices: {
      a: 'A prepaid package',
      b: 'A gift from a friend',
      c: 'A Cash on Delivery parcel',
      d: 'A school delivery'
    },
    correct: 'c'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You are about to upload a photo and notice that a document showing your home address is visible behind you. What would be the safest choice?',
    choices: {
      a: 'Upload the photo because the document is not the main focus.',
      b: 'Crop or retake the photo so the address cannot be seen.',
      c: 'Upload it and ask your friends not to share it.',
      d: 'Post it first and remove it if someone notices the address.'
    },
    correct: 'b'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'A classmate wants to post a selfie showing their school ID clearly. What would be the most helpful advice?',
    choices: {
      a: 'Keep the ID visible because it shows which school they attend.',
      b: 'Post it only during the daytime.',
      c: 'Hide or remove the school ID before posting.',
      d: 'Add their school name in the caption instead.'
    },
    correct: 'c'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Aery initially fail to notice the problem with her photo?',
    choices: {
      a: 'She was focused on taking and posting the selfie rather than checking the background.',
      b: 'She thought the photo would disappear after a few hours.',
      c: 'She had already checked the photo with her trusted adult.',
      d: 'She believed only her closest friends could see the post.'
    },
    correct: 'a'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What made Aery connect the unexpected parcel to the information in her post?',
    choices: {
      a: 'The delivery person told her who had placed the order.',
      b: 'The package contained a copy of her social media post.',
      c: 'She realized that the parcel used her name and information she had exposed online.',
      d: 'Her friend admitted to ordering the parcel for her.'
    },
    correct: 'c'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What did Aery do after realizing that her post may have exposed her personal information?',
    choices: {
      a: 'She continued posting but avoided taking selfies.',
      b: 'She removed the post, checked her privacy settings, and told a trusted adult.',
      c: 'She accepted the parcel so she could find out who ordered it.',
      d: 'She contacted everyone who had viewed her post.'
    },
    correct: 'b'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why can information in the background of a photo be just as important to protect as the information in the caption?',
    choices: {
      a: 'Background details can reveal personal information even when the caption does not mention it.',
      b: 'Background details always make a photo less attractive.',
      c: 'People usually read the background before looking at the caption.',
      d: 'Social media automatically saves every object shown in a photo.'
    },
    correct: 'a'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What does Aery\'s experience show about sharing photos online?',
    choices: {
      a: 'Photos are safe to share as long as they do not show a person\'s face.',
      b: 'Only photos with captions can reveal personal information.',
      c: 'Even an ordinary photo can expose information that someone else could misuse.',
      d: 'Removing a photo immediately prevents anyone from seeing the information.'
    },
    correct: 'c'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Which situation shows the best understanding of the lesson from Aery\'s experience?',
    choices: {
      a: 'Liza takes a photo, quickly posts it, and checks the background later if someone comments.',
      b: 'Marco avoids posting anything online because all social media posts are dangerous.',
      c: 'Nina checks her photo for IDs, addresses, documents, and other private details before deciding to post it.',
      d: 'Carlo posts personal information only when his account has many followers he knows.'
    },
    correct: 'c'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;