const QUESTIONS = [
  {
    id: 1,
    category: "Role & representation",
    difficulty: "Easy",
    question: "In the course, regular expressions are presented as which type of NLP approach?",
    choices: ["A deterministic approach", "A probabilistic language model", "A contextual embedding model", "A graph neural network"],
    correct: 0,
    explanation: "Regular expressions apply explicit rules to character strings, so they are a deterministic way to process text.",
    reminder: "Regex matches patterns defined by rules. It does not learn those rules automatically from training data."
  },
  {
    id: 2,
    category: "Role & representation",
    difficulty: "Easy",
    question: "What representation of text is directly manipulated by regular expressions?",
    choices: ["Character strings", "Dense semantic vectors", "Probability distributions", "Dependency trees"],
    correct: 0,
    explanation: "The course explicitly represents text as character strings when introducing regular expressions.",
    reminder: "Think of regex as operating directly on sequences of characters."
  },
  {
    id: 3,
    category: "Core operators",
    difficulty: "Easy",
    question: "What does concatenation mean in a regular expression?",
    choices: ["Joining two expressions in sequence", "Choosing between two expressions", "Repeating an expression zero or more times", "Negating a character class"],
    correct: 0,
    explanation: "Concatenation places expressions one after another. For example, <code>ab</code> joins <code>a</code> and <code>b</code>.",
    reminder: "Concatenation is usually implicit: writing patterns next to each other means they must occur in sequence."
  },
  {
    id: 4,
    category: "Core operators",
    difficulty: "Easy",
    question: "What does <code>a|b</code> mean?",
    choices: ["Match a followed by b", "Match either a or b", "Match zero or more a characters", "Match every character except a and b"],
    correct: 1,
    explanation: "The vertical bar expresses union or alternation: the pattern may match <code>a</code> or <code>b</code>.",
    reminder: "Use <code>|</code> when a position can be satisfied by one of several alternative patterns."
  },
  {
    id: 5,
    category: "Quantifiers",
    difficulty: "Easy",
    question: "What does the Kleene star in <code>R*</code> mean?",
    choices: ["Exactly one R", "Zero or more repetitions of R", "One or more repetitions of R", "Exactly two repetitions of R"],
    correct: 1,
    explanation: "The Kleene star allows the preceding expression to occur zero, one, or many times.",
    reminder: "<code>*</code> = zero or more repetitions. Therefore, the empty string is also possible."
  },
  {
    id: 6,
    category: "Quantifiers",
    difficulty: "Easy",
    question: "Which quantifier makes the preceding expression optional?",
    choices: ["*", "+", "?", "{2}"],
    correct: 2,
    explanation: "<code>R?</code> means that <code>R</code> occurs zero or one time.",
    reminder: "<code>?</code> = optional = 0 or 1 occurrence."
  },
  {
    id: 7,
    category: "Quantifiers",
    difficulty: "Easy",
    question: "What does <code>R+</code> mean?",
    choices: ["R occurs exactly once", "R occurs zero or more times", "R occurs at least once", "R occurs at most once"],
    correct: 2,
    explanation: "<code>R+</code> requires one or more repetitions of the expression.",
    reminder: "<code>+</code> differs from <code>*</code> because at least one occurrence is required."
  },
  {
    id: 8,
    category: "Quantifiers",
    difficulty: "Medium",
    question: "Which pattern means “repeat <code>R</code> between 2 and 5 times”?",
    choices: ["R{2}", "R{2,5}", "R{2,}", "R?"],
    correct: 1,
    explanation: "The form <code>{n,m}</code> defines a repetition range from <code>n</code> to <code>m</code> occurrences.",
    reminder: "<code>{n}</code> = exact; <code>{n,m}</code> = range; <code>{n,}</code> = at least n."
  },
  {
    id: 9,
    category: "Character classes",
    difficulty: "Easy",
    question: "What does <code>[abc]</code> match?",
    choices: ["The exact string abc", "One character among a, b, or c", "Any character except a, b, or c", "Any three-letter word"],
    correct: 1,
    explanation: "A character class matches one character from the listed set.",
    reminder: "Square brackets define a character class. <code>[abc]</code> behaves like choosing one item from that set."
  },
  {
    id: 10,
    category: "Character classes",
    difficulty: "Easy",
    question: "What does <code>[0-9]</code> match?",
    choices: ["A complete integer of any length", "One digit from 0 to 9", "Only the characters 0 and 9", "Any alphanumeric character"],
    correct: 1,
    explanation: "The hyphen defines a range inside a character class, so <code>[0-9]</code> matches one digit.",
    reminder: "Ranges compress long lists: <code>[0-9]</code> is equivalent to choosing one character from 0 through 9."
  },
  {
    id: 11,
    category: "Character classes",
    difficulty: "Medium",
    question: "What is the meaning of <code>[^abc]</code>?",
    choices: ["Match a, b, or c", "Match any single character not in the set a, b, c", "Start the string with abc", "Repeat abc zero or more times"],
    correct: 1,
    explanation: "When <code>^</code> appears at the start of a character class, it negates the listed set.",
    reminder: "Inside brackets, <code>[^...]</code> means “not one of these characters”."
  },
  {
    id: 12,
    category: "Shortcuts",
    difficulty: "Easy",
    question: "Which shortcut represents a digit?",
    choices: ["\\w", "\\s", "\\d", "."],
    correct: 2,
    explanation: "<code>\\d</code> is the standard shortcut used in the course for a digit, equivalent to <code>[0-9]</code>.",
    reminder: "Core shortcuts from the lesson: <code>\\d</code> digits, <code>\\s</code> whitespace, <code>\\w</code> word characters."
  },
  {
    id: 13,
    category: "Shortcuts",
    difficulty: "Medium",
    question: "Which expression best corresponds to the course description of <code>\\w</code>?",
    choices: ["Whitespace only", "Letters, digits and underscore", "Digits only", "Any punctuation character"],
    correct: 1,
    explanation: "The course equates <code>\\w</code> with a word-character class such as <code>[a-zA-Z0-9_]</code>.",
    reminder: "<code>\\w</code> is useful for identifiers and word-like sequences, but it does not mean “a complete linguistic word”."
  },
  {
    id: 14,
    category: "Anchors & escaping",
    difficulty: "Medium",
    question: "What is the purpose of <code>^</code> and <code>$</code> in a regex?",
    choices: ["They mark the beginning and end of a line/string", "They repeat a pattern", "They create a named group", "They match any two characters"],
    correct: 0,
    explanation: "The course uses <code>^</code> as a start anchor and <code>$</code> as an end anchor.",
    reminder: "Anchors match positions, not characters. They are useful when the whole line or string must follow a structure."
  },
  {
    id: 15,
    category: "Anchors & escaping",
    difficulty: "Medium",
    question: "Why do we escape a special character with a backslash?",
    choices: ["To give it its literal meaning", "To repeat it indefinitely", "To make it optional", "To convert it to uppercase"],
    correct: 0,
    explanation: "Escaping tells the regex engine to treat a special symbol as a literal character when needed.",
    reminder: "Example from the course: <code>\\|</code> can be used when you want a literal vertical bar instead of alternation."
  },
  {
    id: 16,
    category: "Named groups",
    difficulty: "Medium",
    question: "Which Python-style syntax creates a named group?",
    choices: ["[name:expression]", "(?P&lt;name&gt;expression)", "{name=expression}", "&lt;name|expression&gt;"],
    correct: 1,
    explanation: "Python named groups follow the form <code>(?P&lt;group_name&gt;expression)</code>.",
    reminder: "Named groups improve readability and let you access captured values by meaningful names instead of numeric indexes."
  },
  {
    id: 17,
    category: "Practical patterns",
    difficulty: "Medium",
    question: "Which regex from the course is designed for a Tunisian phone number with an optional <code>+216</code> prefix?",
    choices: ["(\\+216)?\\d{8}", "\\+216\\d+", "[216]\\d{8}", "^216?$"],
    correct: 0,
    explanation: "<code>(\\+216)?</code> makes the country prefix optional and <code>\\d{8}</code> requires exactly eight digits afterward.",
    reminder: "Break patterns into meaningful pieces: optional country code + fixed-length local number."
  },
  {
    id: 18,
    category: "Practical patterns",
    difficulty: "Medium",
    question: "Which course pattern is intended to match common image file extensions?",
    choices: ["\\w+\\.(gif|jpeg|jpg|eps|svg|png)", "\\d+\\.(txt|csv)", "^\\[Error\\].*$", "(\\+216)?\\d{8}"],
    correct: 0,
    explanation: "The first pattern matches a word-like filename followed by a dot and one of the listed image extensions.",
    reminder: "Parentheses plus <code>|</code> are useful when several alternative suffixes are acceptable."
  },
  {
    id: 19,
    category: "Practical patterns",
    difficulty: "Medium",
    question: "Which pattern from the lesson matches a line that begins with <code>[Error]</code>?",
    choices: ["^\\[Error\\].*$", "Error+", "[Error]*", "^Error?$"],
    correct: 0,
    explanation: "The brackets are escaped so they are literal, <code>^</code> anchors the start, and <code>.*$</code> accepts the rest of the line.",
    reminder: "When literal brackets are part of the text, escape them because brackets normally define a character class."
  },
  {
    id: 20,
    category: "Limits & use cases",
    difficulty: "Easy",
    question: "Which statement best captures both the strength and the limitation of regular expressions in NLP?",
    choices: [
      "They are flexible for explicit character patterns, but they require carefully designed rules and do not provide semantic understanding by themselves.",
      "They automatically learn semantic meaning from large corpora.",
      "They can only be used for email addresses.",
      "They replace probabilistic and neural NLP models in every task."
    ],
    correct: 0,
    explanation: "Regex is powerful for search, validation, splitting, replacement and extraction when the text structure is known. Its rules are explicit and require language/task knowledge.",
    reminder: "Use regex when the target is defined by form or structure. Use richer NLP models when context and meaning are central."
  },
  {
    id: 21,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Easy",
    question: "Write a regular expression that matches a Tunisian local phone number containing exactly 8 digits.",
    context: "It must match <code>22123456</code>, but reject <code>2212345</code>, <code>221234567</code>, and <code>22A23456</code>.",
    positive: ["22123456", "98765432"],
    negative: ["2212345", "221234567", "22A23456", "+21622123456"],
    solution: "^\\d{8}$",
    explanation: "The anchors force the entire string to follow the rule, while <code>\\d{8}</code> requires exactly eight digits.",
    reminder: "Build the pattern from the structure: start anchor + 8 digits + end anchor."
  },
  {
    id: 22,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Medium",
    question: "Write a regular expression for a Tunisian phone number with an optional <code>+216</code> prefix followed by exactly 8 digits.",
    context: "It must match both <code>22123456</code> and <code>+21622123456</code>, but reject <code>21622123456</code> and <code>+2162212345</code>.",
    positive: ["22123456", "+21622123456", "98765432", "+21698765432"],
    negative: ["21622123456", "+2162212345", "+216221234567", "+21722123456"],
    solution: "^(\\+216)?\\d{8}$",
    explanation: "The escaped plus sign is part of the literal country code. Grouping <code>\\+216</code> and adding <code>?</code> makes the entire prefix optional.",
    reminder: "Use parentheses to group a multi-character unit before applying a quantifier such as <code>?</code>."
  },
  {
    id: 23,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Medium",
    question: "Write a regular expression that matches a simple image filename ending in <code>.gif</code>, <code>.jpeg</code>, <code>.jpg</code>, <code>.eps</code>, <code>.svg</code>, or <code>.png</code>.",
    context: "Examples to accept: <code>photo.jpg</code>, <code>figure_2.png</code>. Reject <code>notes.txt</code> and <code>image.bmp</code>.",
    positive: ["photo.jpg", "figure_2.png", "diagram.svg", "scan.jpeg", "icon.gif", "plot.eps"],
    negative: ["notes.txt", "image.bmp", "photojpg", ".jpg", "a.pdf"],
    solution: "^\\w+\\.(gif|jpeg|jpg|eps|svg|png)$",
    explanation: "The filename is matched with one or more word characters, the dot is escaped, and alternation lists the allowed extensions.",
    reminder: "When several endings are valid, group them and separate alternatives with <code>|</code>."
  },
  {
    id: 24,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Medium",
    question: "Write a regular expression that matches an entire log line only when it begins with the literal text <code>[Error]</code>.",
    context: "It must match <code>[Error] File not found</code> and <code>[Error]42</code>, but reject <code>Warning [Error] later</code>.",
    positive: ["[Error] File not found", "[Error]42", "[Error]"],
    negative: ["Warning [Error] later", "Error File not found", "[Warning] Error", "x[Error]"],
    solution: "^\\[Error\\].*$",
    explanation: "The brackets must be escaped because square brackets normally define a character class. The start anchor requires <code>[Error]</code> to appear first.",
    reminder: "Escape metacharacters when you want to match them literally: <code>\\[</code> and <code>\\]</code>."
  },
  {
    id: 25,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Easy",
    question: "Write a regular expression that matches a complete filename ending with the literal extension <code>.txt</code>.",
    context: "Accept <code>report.txt</code> and <code>notes_2026.txt</code>. Reject <code>report.csv</code> and <code>report.txt.bak</code>.",
    positive: ["report.txt", "notes_2026.txt", "a.txt", "my-report.txt"],
    negative: ["report.csv", "report.txt.bak", "txt", "reporttxt"],
    solution: "^.*\\.txt$",
    explanation: "The escaped dot means a literal period and the end anchor ensures that <code>.txt</code> is the final part of the filename.",
    reminder: "A literal dot is written <code>\\.</code>; an unescaped dot means any character."
  },
  {
    id: 26,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Medium",
    question: "Write a regular expression for a date written in the form <code>DD/MM/YYYY</code>.",
    context: "Accept structurally valid examples such as <code>05/11/2026</code> and <code>31/12/2025</code>. For this exercise, you only need to validate the format, not the real calendar date.",
    positive: ["05/11/2026", "31/12/2025", "01/01/2000"],
    negative: ["5/11/2026", "05-11-2026", "05/11/26", "x05/11/2026", "05/11/2026x"],
    solution: "^\\d{2}/\\d{2}/\\d{4}$",
    explanation: "The format consists of two digits, a slash, two digits, a slash, and four digits. Anchors ensure that nothing appears before or after the date.",
    reminder: "Regex can validate a textual format without necessarily validating its real-world meaning."
  },
  {
    id: 27,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Medium",
    question: "Write a regular expression that matches student identifiers with the form <code>AI_2026_123</code>.",
    context: "The identifier must start with <code>AI_</code>, then contain exactly 4 digits, an underscore, and exactly 3 digits.",
    positive: ["AI_2026_123", "AI_0001_999", "AI_2025_001"],
    negative: ["DS_2026_123", "AI_26_123", "AI_2026_12", "XAI_2026_123", "AI_2026_1234"],
    solution: "^AI_\\d{4}_\\d{3}$",
    explanation: "Literal text can be combined directly with fixed-length digit blocks using <code>{n}</code>.",
    reminder: "Translate each fixed part of the required format into one regex component, then concatenate the components."
  },
  {
    id: 28,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Easy",
    question: "Write a regular expression that matches a complete hashtag made of <code>#</code> followed by one or more word characters.",
    context: "Accept <code>#NLP</code>, <code>#NLP2026</code>, and <code>#AI_DS</code>. Reject <code>#</code>, <code>NLP</code>, and <code>#NLP!</code>.",
    positive: ["#NLP", "#NLP2026", "#AI_DS", "#x"],
    negative: ["#", "NLP", "#NLP!", "x#NLP", "#NLP test"],
    solution: "^#\\w+$",
    explanation: "The hash is literal, <code>\\w+</code> requires at least one word character, and anchors force the whole string to be a hashtag.",
    reminder: "Use <code>+</code> when at least one occurrence is required."
  },
  {
    id: 29,
    type: "regex",
    category: "Pattern writing",
    difficulty: "Medium",
    question: "Write a simple regular expression for an email-like address with a three-letter final extension.",
    context: "Accept examples such as <code>student@example.com</code> and <code>takwa.ben-aicha@univ.edu</code>. This is a simplified educational pattern, not a complete RFC email validator.",
    positive: ["student@example.com", "user123@test.org", "takwa.ben-aicha@univ.edu", "a_b@dept.net"],
    negative: ["studentexample.com", "student@example", "student@example.co", "student@.com", "student example@test.com"],
    solution: "^[\\w.-]+@([\\w-]+\\.)+[\\w-]{3}$",
    explanation: "The pattern combines a local part, the <code>@</code> symbol, one or more domain labels ending in dots, and a final three-character extension.",
    reminder: "Real email syntax is more complex; here the goal is to practice grouping, repetition, classes and escaped dots."
  },
  {
    id: 30,
    type: "regex",
    category: "Named-group writing",
    difficulty: "Challenge",
    question: "Write a Python-style regular expression that captures the day, month and year of a date such as <code>05-11-2026</code> using named groups.",
    context: "Use the group names <code>day</code>, <code>month</code>, and <code>year</code>. The required Python syntax is <code>(?P&lt;name&gt;...)</code>.",
    positive: ["05-11-2026", "31-12-2025", "01-01-2000"],
    negative: ["5-11-2026", "05/11/2026", "05-11-26", "x05-11-2026"],
    requiredNamedGroups: ["day", "month", "year"],
    solution: "^(?P<day>\\d{2})-(?P<month>\\d{2})-(?P<year>\\d{4})$",
    explanation: "Each part of the date is captured by a descriptive named group. This makes extracted structured information easier to access and understand in Python.",
    reminder: "Python named-group syntax is <code>(?P&lt;group_name&gt;expression)</code>."
  }
];

const state = {
  index: 0,
  score: 0,
  selected: null,
  validated: false,
  answers: Array(QUESTIONS.length).fill(null),
  correctness: Array(QUESTIONS.length).fill(null)
};

const $ = (id) => document.getElementById(id);
const homeView = $("homeView");
const quizView = $("quizView");
const resultView = $("resultView");
const answersEl = $("answers");
const feedbackEl = $("feedback");

function escapeText(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function startQuiz() {
  state.index = 0;
  state.score = 0;
  state.selected = null;
  state.validated = false;
  state.answers = Array(QUESTIONS.length).fill(null);
  state.correctness = Array(QUESTIONS.length).fill(null);
  homeView.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = QUESTIONS[state.index];
  state.selected = null;
  state.validated = false;

  $("questionCounter").textContent = `Question ${state.index + 1} / ${QUESTIONS.length}`;
  $("progressBar").style.width = `${((state.index + 1) / QUESTIONS.length) * 100}%`;
  $("categoryBadge").textContent = q.category;
  $("difficultyBadge").textContent = q.difficulty;
  $("questionTitle").innerHTML = q.question;

  if (q.context) {
    $("questionContext").innerHTML = q.context;
    $("questionContext").classList.remove("hidden");
  } else {
    $("questionContext").classList.add("hidden");
    $("questionContext").innerHTML = "";
  }

  answersEl.innerHTML = "";
  if (q.type === "regex") {
    const wrapper = document.createElement("div");
    wrapper.className = "regex-practice";
    wrapper.innerHTML = `
      <label for="regexInput" class="regex-label">Your regular expression</label>
      <input id="regexInput" class="regex-input" type="text" autocomplete="off" spellcheck="false"
             placeholder="Example: ^\\d{8}$" aria-describedby="regexHelp">
      <p id="regexHelp" class="regex-help">Enter the pattern only. You may also use <code>/pattern/</code> notation. Equivalent working patterns are accepted when they pass the hidden examples.</p>
    `;
    answersEl.appendChild(wrapper);
    const input = $("regexInput");
    input.addEventListener("input", () => { state.selected = input.value; });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        validateAnswer();
      }
    });
  } else {
    q.choices.forEach((choice, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", "false");
      button.dataset.index = i;
      button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + i)}</span><span class="answer-text">${choice}</span>`;
      button.addEventListener("click", () => selectAnswer(i));
      answersEl.appendChild(button);
    });
  }

  feedbackEl.className = "feedback hidden";
  feedbackEl.innerHTML = "";
  $("validateBtn").disabled = false;
  $("nextBtn").disabled = true;
  $("nextBtn").textContent = state.index === QUESTIONS.length - 1 ? "See my result" : "Next question";
}

function selectAnswer(i) {
  if (state.validated) return;
  state.selected = i;
  [...answersEl.children].forEach((button, idx) => {
    const active = idx === i;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-checked", String(active));
  });
}

function parseRegexInput(raw) {
  let pattern = raw.trim();
  let flags = "";
  if (pattern.startsWith("/")) {
    const lastSlash = pattern.lastIndexOf("/");
    if (lastSlash > 0) {
      flags = pattern.slice(lastSlash + 1).replace(/[gy]/g, "");
      pattern = pattern.slice(1, lastSlash);
    }
  }
  // The course uses Python-style named groups. Modern JavaScript uses (?<name>...).
  // Translate only for validation in the browser; the student's original answer is preserved.
  const jsPattern = pattern.replace(/\(\?P<([A-Za-z_]\w*)>/g, "(?<$1>");
  return { pattern, jsPattern, flags };
}

function validateRegexPattern(q, raw) {
  try {
    const { pattern, jsPattern, flags } = parseRegexInput(raw);
    if (!pattern) return { correct: false, error: "The pattern is empty." };

    if (q.requiredNamedGroups) {
      const missing = q.requiredNamedGroups.filter(name => {
        const py = `(?P<${name}>`;
        const js = `(?<${name}>`;
        return !pattern.includes(py) && !pattern.includes(js);
      });
      if (missing.length) {
        return { correct: false, error: `Missing required named group(s): ${missing.join(", ")}.` };
      }
    }

    const regex = new RegExp(jsPattern, flags);
    const passes = (text) => { regex.lastIndex = 0; return regex.test(text); };
    const allPositive = q.positive.every(passes);
    const allNegative = q.negative.every(text => !passes(text));
    return { correct: allPositive && allNegative, error: null };
  } catch (err) {
    return { correct: false, error: `Syntax error: ${err.message}` };
  }
}

function validateAnswer() {
  const q = QUESTIONS[state.index];
  if (state.validated) return;

  if (q.type === "regex") {
    const input = $("regexInput");
    const raw = input ? input.value.trim() : "";
    if (!raw) {
      feedbackEl.className = "feedback bad";
      feedbackEl.innerHTML = `<h3>Write a pattern first.</h3><p>Enter the regular expression you would use, then validate it.</p>`;
      return;
    }

    const result = validateRegexPattern(q, raw);
    const correct = result.correct;
    state.validated = true;
    state.answers[state.index] = raw;
    state.correctness[state.index] = correct;
    if (correct) state.score += 1;
    input.disabled = true;
    input.classList.add(correct ? "regex-correct" : "regex-wrong");

    feedbackEl.className = `feedback ${correct ? "good" : "bad"}`;
    feedbackEl.innerHTML = `
      <h3>${correct ? "Correct — your pattern passes the test cases." : "Not quite — refine the pattern."}</h3>
      ${result.error ? `<p><strong>Technical feedback:</strong> ${escapeText(result.error)}</p>` : ""}
      <p><strong>One valid solution:</strong> <code>${escapeText(q.solution)}</code></p>
      <p><strong>Why:</strong> ${q.explanation}</p>
      <p class="reminder"><strong>Concept reminder:</strong> ${q.reminder}</p>
    `;
    $("validateBtn").disabled = true;
    $("nextBtn").disabled = false;
    return;
  }

  if (state.selected === null) {
    feedbackEl.className = "feedback bad";
    feedbackEl.innerHTML = `<h3>Select an answer first.</h3><p>Choose the option you think is correct, then validate it.</p>`;
    return;
  }

  const correct = state.selected === q.correct;
  state.validated = true;
  state.answers[state.index] = state.selected;
  state.correctness[state.index] = correct;
  if (correct) state.score += 1;

  [...answersEl.children].forEach((button, idx) => {
    button.disabled = true;
    button.classList.remove("selected");
    if (idx === q.correct) button.classList.add("correct");
    if (idx === state.selected && idx !== q.correct) button.classList.add("wrong");
  });

  feedbackEl.className = `feedback ${correct ? "good" : "bad"}`;
  feedbackEl.innerHTML = `
    <h3>${correct ? "Correct — good reasoning." : "Not quite — review the rule below."}</h3>
    <p><strong>Why:</strong> ${q.explanation}</p>
    <p class="reminder"><strong>Concept reminder:</strong> ${q.reminder}</p>
  `;
  $("validateBtn").disabled = true;
  $("nextBtn").disabled = false;
}

function nextQuestion() {
  if (!state.validated) return;
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResults();
  }
}

function showResults() {
  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");

  const pct = Math.round((state.score / QUESTIONS.length) * 100);
  $("percentValue").textContent = `${pct}%`;
  $("scoreValue").textContent = `${state.score} / ${QUESTIONS.length}`;

  let heading;
  let message;
  if (pct >= 90) {
    heading = "Strong mastery";
    message = "You are ready to use the core regex syntax in practical NLP tasks. Review the few remaining points, then move on to application exercises.";
  } else if (pct >= 75) {
    heading = "Good foundation";
    message = "You understand most core concepts. Review the categories marked below and retry the quiz to consolidate syntax details.";
  } else if (pct >= 55) {
    heading = "Developing mastery";
    message = "You have the main idea, but some operators and patterns still need practice. Use the personalized reminders below as a revision guide.";
  } else {
    heading = "Review the foundations";
    message = "Return to the basic operators, quantifiers, character classes and use cases. The corrections below identify exactly what to revisit.";
  }
  $("resultHeading").textContent = heading;
  $("resultMessage").textContent = message;

  renderMastery();
  renderMistakes();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMastery() {
  const grouped = {};
  QUESTIONS.forEach((q, i) => {
    grouped[q.category] ??= { total: 0, correct: 0 };
    grouped[q.category].total += 1;
    if (state.correctness[i]) grouped[q.category].correct += 1;
  });

  const container = $("masteryGrid");
  container.innerHTML = "";
  Object.entries(grouped).forEach(([name, stats]) => {
    const pct = Math.round((stats.correct / stats.total) * 100);
    const status = pct >= 80 ? "Strong" : pct >= 50 ? "Satisfactory" : "Needs review";
    const card = document.createElement("div");
    card.className = "mastery-card";
    card.innerHTML = `
      <div class="mastery-top"><span class="mastery-name">${escapeText(name)}</span><span class="mastery-score">${stats.correct}/${stats.total}</span></div>
      <div class="mastery-meter"><div class="mastery-fill" style="width:${pct}%"></div></div>
      <div class="mastery-status">${status} · ${pct}%</div>
    `;
    container.appendChild(card);
  });
}

function renderMistakes() {
  const container = $("mistakeList");
  container.innerHTML = "";
  const mistakes = QUESTIONS.map((q, i) => ({ q, i })).filter(({ i }) => state.correctness[i] !== true);

  if (mistakes.length === 0) {
    container.innerHTML = `<div class="no-mistakes">Excellent — all ${QUESTIONS.length} answers are correct, including the pattern-writing exercises.</div>`;
    return;
  }

  mistakes.forEach(({ q, i }) => {
    const selected = state.answers[i];
    const card = document.createElement("article");
    card.className = "mistake-card";
    if (q.type === "regex") {
      card.innerHTML = `
        <h3>Question ${i + 1} · ${q.question}</h3>
        <p><strong>Your pattern:</strong> ${selected === null ? "No answer" : `<code>${escapeText(selected)}</code>`}</p>
        <p><strong>One valid solution:</strong> <code>${escapeText(q.solution)}</code></p>
        <p>${q.explanation}</p>
        <p class="mini-reminder">Remember: ${q.reminder}</p>
      `;
    } else {
      card.innerHTML = `
        <h3>Question ${i + 1} · ${q.question}</h3>
        <p><strong>Your answer:</strong> ${selected === null ? "No answer" : q.choices[selected]}</p>
        <p><strong>Correct answer:</strong> ${q.choices[q.correct]}</p>
        <p>${q.explanation}</p>
        <p class="mini-reminder">Remember: ${q.reminder}</p>
      `;
    }
    container.appendChild(card);
  });
}

function copyResult() {
  const pct = Math.round((state.score / QUESTIONS.length) * 100);
  const grouped = {};
  QUESTIONS.forEach((q, i) => {
    grouped[q.category] ??= { total: 0, correct: 0 };
    grouped[q.category].total += 1;
    if (state.correctness[i]) grouped[q.category].correct += 1;
  });

  const lines = [
    "NLP — Regular Expressions — Self-Assessment",
    `Score: ${state.score}/${QUESTIONS.length} (${pct}%)`,
    "",
    "Mastery by concept:"
  ];
  Object.entries(grouped).forEach(([name, stats]) => {
    const p = Math.round((stats.correct / stats.total) * 100);
    lines.push(`- ${name}: ${stats.correct}/${stats.total} (${p}%)`);
  });
  lines.push("", "Course: Dr. Ing. Takwa Ben Aïcha Gader");

  navigator.clipboard.writeText(lines.join("\n")).then(() => {
    const old = $("copyBtn").textContent;
    $("copyBtn").textContent = "Copied ✓";
    setTimeout(() => $("copyBtn").textContent = old, 1400);
  }).catch(() => alert("Copy is not available in this browser. Please copy the score manually."));
}

function resetToHome() {
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  homeView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("startBtn").addEventListener("click", startQuiz);
$("validateBtn").addEventListener("click", validateAnswer);
$("nextBtn").addEventListener("click", nextQuestion);
$("resetBtn").addEventListener("click", resetToHome);
$("resultResetBtn").addEventListener("click", resetToHome);
$("retryBtn").addEventListener("click", startQuiz);
$("copyBtn").addEventListener("click", copyResult);
$("reviewBtn").addEventListener("click", () => $("reviewSection").scrollIntoView({ behavior: "smooth", block: "start" }));
