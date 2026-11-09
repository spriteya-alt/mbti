const questions = [
  { pole: "E", text: "새 팀 과제를 받으면 팀원들과 이야기하면서 아이디어를 떠올리는 편이다." },
  { pole: "S", text: "처음 맡은 일은 구체적인 예시를 먼저 보면 시작하기 쉽다." },
  { pole: "T", text: "팀원들의 의견이 갈리면 모두에게 같은 기준을 적용해 판단하는 편이다." },
  { pole: "J", text: "마감까지 할 일을 나누고 순서를 정해두면 마음이 편하다." },
  { pole: "I", text: "회의에서 의견을 내기 전에 혼자 생각을 정리할 시간이 필요하다." },
  { pole: "N", text: "발표를 준비할 때 세부 자료보다 전체 이야기가 먼저 떠오른다." },
  { pole: "F", text: "피드백을 줄 때 상대가 그 말을 어떻게 받아들일지 먼저 생각한다." },
  { pole: "P", text: "작업 방식은 시작해 본 뒤 상황에 맞춰 정하는 게 편하다." },
  { pole: "E", text: "일이 막히면 팀원에게 먼저 말을 걸어 같이 풀어보고 싶다." },
  { pole: "S", text: "새 아이디어를 검토할 때 실제 사례나 확인할 수 있는 자료부터 찾는다." },
  { pole: "T", text: "추가 부탁을 수락할지는 기존 역할과 마감에 어떤 영향이 있는지부터 따진다." },
  { pole: "J", text: "팀에서 각자의 역할과 중간 마감을 초반에 확정해두고 싶다." },
  { pole: "I", text: "사람들과 종일 협업한 뒤에는 혼자 일하는 시간이 있어야 에너지가 돌아온다." },
  { pole: "N", text: "익숙한 과제를 맡아도 이번에는 어떤 새 방식으로 풀 수 있을지 생각한다." },
  { pole: "F", text: "팀이 해결책을 고를 때 각자의 사정과 부담을 중요하게 본다." },
  { pole: "P", text: "마감 전까지 더 좋은 아이디어가 나오면 작업 계획을 바꾸는 게 편하다." },
];

const choices = [
  { value: 2, label: "매우 그렇다" },
  { value: 1, label: "그런 편이다" },
  { value: -1, label: "그렇지 않은 편이다" },
  { value: -2, label: "전혀 그렇지 않다" },
];

const profiles = {
  ISTJ: { name: "믿음직한 운영자", emoji: "🗂️", description: "역할과 기준을 정리하고 맡은 일을 꾸준히 마무리해요.", tip: "해야 할 일을 세 칸으로 나누고, 첫 칸에 오늘 끝낼 일을 적어보세요." },
  ISFJ: { name: "세심한 지원군", emoji: "🧺", description: "팀원이 놓친 부분을 알아차리고 필요한 도움을 조용히 챙겨요.", tip: "팀에서 필요한 것 하나와 내가 맡을 수 있는 범위를 적어보세요." },
  INFJ: { name: "방향을 읽는 조력자", emoji: "🕯️", description: "팀원들의 생각을 살피며 우리가 왜 이 일을 하는지 정리해요.", tip: "이번 일로 팀이 이루고 싶은 것을 한 문장으로 써보세요." },
  INTJ: { name: "길을 그리는 설계자", emoji: "♟️", description: "최종 목표를 먼저 그려보고 그곳까지 갈 순서를 설계해요.", tip: "완성된 결과물을 한 줄로 정의하고, 거기서 거꾸로 첫 단계를 찾아보세요." },
  ISTP: { name: "실전형 해결사", emoji: "🔧", description: "막힌 지점을 찾아 직접 손대보고, 효과가 있는 방법을 남겨요.", tip: "가장 막힌 부분 하나를 골라 5분 안에 해볼 수 있는 실험을 정해보세요." },
  ISFP: { name: "감각적인 제작자", emoji: "🎨", description: "직접 만들면서 세부를 다듬고 결과물에 자연스러운 감각을 더해요.", tip: "마음에 드는 예시 하나를 골라 첫 화면이나 첫 문장부터 만들어보세요." },
  INFP: { name: "의미를 찾는 창작자", emoji: "🌱", description: "과제가 내게 어떤 의미인지 찾고, 그 생각을 나만의 표현으로 풀어요.", tip: "이 일에서 마음이 가는 지점 하나를 찾고, 거기서 초안을 써보세요." },
  INTP: { name: "질문하는 분석가", emoji: "🔍", description: "당연하게 여긴 전제를 다시 보고, 문제를 설명할 수 있는 구조를 찾아요.", tip: "해결해야 할 문제를 질문 하나로 바꾸고, 답을 찾는 데 필요한 자료 하나를 열어보세요." },
  ESTP: { name: "빠르게 움직이는 해결사", emoji: "⚡", description: "눈앞의 문제에 바로 손을 대고 결과를 보며 다음 행동을 정해요.", tip: "5분 안에 보여줄 수 있는 초안을 만들고 팀원에게 의견 하나를 물어보세요." },
  ESFP: { name: "현장에 활기를 더하는 사람", emoji: "🎈", description: "팀원의 반응을 살피며 분위기를 풀고 함께 시도할 일을 찾아요.", tip: "팀원 한 명과 결과물의 첫 부분을 같이 만들어보세요." },
  ENFP: { name: "가능성을 여는 기획자", emoji: "✨", description: "대화에서 나온 아이디어를 연결하고 새롭게 시도해 볼 방향을 찾아요.", tip: "아이디어를 세 가지 적고, 오늘 바로 해볼 수 있는 하나에 표시해보세요." },
  ENTP: { name: "새 판을 짜는 실험가", emoji: "🧪", description: "익숙한 방식에 질문을 던지고 여러 해법을 비교하는 데 에너지를 얻어요.", tip: "기존 방식과 새 방식 하나씩을 적고, 차이를 확인할 작은 실험을 골라보세요." },
  ESTJ: { name: "흐름을 잡는 진행자", emoji: "📋", description: "역할과 마감을 분명히 하고 팀이 다음 단계로 넘어가도록 도와요.", tip: "팀이 오늘 결정해야 할 한 가지를 적고, 누가 언제 확인할지 정해보세요." },
  ESFJ: { name: "팀을 연결하는 조율자", emoji: "🤝", description: "팀원들이 필요한 정보를 주고받도록 돕고 서로의 상황을 챙겨요.", tip: "팀원들에게 지금 필요한 도움 한 가지를 물어보고 내 역할을 정해보세요." },
  ENFJ: { name: "함께 나아가는 안내자", emoji: "🧭", description: "팀의 목표를 공유하고 각자가 기여할 수 있는 자리를 찾아요.", tip: "오늘의 목표를 한 줄로 공유한 뒤 팀원에게 맡고 싶은 부분을 물어보세요." },
  ENTJ: { name: "결정을 이끄는 전략가", emoji: "🚀", description: "우선순위를 정하고 결정이 필요한 지점을 찾아 일을 앞으로 밀어요.", tip: "성공 기준 하나를 정하고 그 기준에 가장 가까워지는 행동부터 해보세요." },
};

const get = (id) => document.getElementById(id);
const screens = ["start", "quiz", "result"];
const responses = new Array(questions.length);
const progress = get("progress");
const answers = get("answers");
const nextButton = get("next");
const shareButton = get("share");
let currentQuestion = 0;
let resultType = "";

progress.max = questions.length;

function showScreen(screen) {
  screens.forEach((id) => { get(id).hidden = id !== screen; });
  window.scrollTo(0, 0);
}

function updateProgress() {
  const count = responses.filter((response) => response !== undefined).length;
  progress.value = count;
  get("progress-count").textContent = count + " / " + questions.length;
}

function renderQuestion() {
  const questionNumber = document.createElement("span");
  questionNumber.className = "question-number";
  questionNumber.textContent = "Q. " + String(currentQuestion + 1).padStart(2, "0");
  const legend = get("question");
  legend.replaceChildren(questionNumber, questions[currentQuestion].text);

  answers.replaceChildren(...choices.map(({ value, label }) => {
    const option = document.createElement("label");
    option.className = "answer";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = value;
    radio.checked = responses[currentQuestion] === value;
    option.append(radio, label);
    return option;
  }));

  get("previous").disabled = currentQuestion === 0;
  nextButton.disabled = responses[currentQuestion] === undefined;
  nextButton.firstChild.textContent = currentQuestion === questions.length - 1 ? "결과 보기 " : "다음 ";
  updateProgress();
  legend.focus();
}

function calculateType(answersByQuestion) {
  return ["EI", "SN", "TF", "JP"].map(([first, second]) => {
    const scores = questions.flatMap(({ pole }, index) => {
      if (pole === first) return [answersByQuestion[index]];
      if (pole === second) return [-answersByQuestion[index]];
      return [];
    });
    const total = scores.reduce((sum, score) => sum + score, 0);
    // On a tie, use the strongest response, preferring the earlier item if equally strong.
    const strongest = scores.reduce((best, score) => Math.abs(score) > Math.abs(best) ? score : best);
    return (total || strongest) > 0 ? first : second;
  }).join("");
}

function showResult() {
  resultType = calculateType(responses);
  const profile = profiles[resultType];
  get("result-type").textContent = resultType;
  get("result-name").textContent = profile.name;
  get("result-emoji").textContent = profile.emoji;
  get("result-description").textContent = profile.description;
  get("result-tip").textContent = profile.tip;
  showScreen("result");
  get("result-title").focus();
}

get("start-button").addEventListener("click", () => {
  showScreen("quiz");
  renderQuestion();
});

answers.addEventListener("change", (event) => {
  responses[currentQuestion] = Number(event.target.value);
  nextButton.disabled = false;
  updateProgress();
});

get("previous").addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});

get("quiz-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (responses[currentQuestion] === undefined) return;
  if (currentQuestion === questions.length - 1) {
    showResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});

get("restart").addEventListener("click", () => {
  responses.fill(undefined);
  currentQuestion = 0;
  resultType = "";
  get("share-status").textContent = "";
  get("share-fallback").hidden = true;
  get("share-text").value = "";
  updateProgress();
  showScreen("start");
  get("start-title").focus();
});

shareButton.addEventListener("click", async () => {
  const profile = profiles[resultType];
  const shareText = ["인간 사용 설명서 · 나의 협업 성향", profile.emoji + " " + resultType + " " + profile.name, profile.description].join("\n");
  const status = get("share-status");
  const fallback = get("share-fallback");
  const field = get("share-text");
  status.textContent = "";
  fallback.hidden = true;
  shareButton.disabled = true;

  try {
    if (navigator.share) {
      try {
        await navigator.share({ title: "인간 사용 설명서", text: shareText });
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      if (!get("result").hidden) status.textContent = "결과 문구를 복사했어요.";
    } catch {
      if (get("result").hidden) return;
      field.value = shareText;
      fallback.hidden = false;
      field.focus();
      field.select();
    }
  } finally {
    shareButton.disabled = false;
  }
});
