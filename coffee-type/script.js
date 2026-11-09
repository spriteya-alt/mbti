const questions = [
  {
    prompt: "친구가 오기까지 20분 남았어요. 어떻게 시간을 보내나요?",
    options: { E: "친구에게 전화해 이야기하며 기다려요.", I: "커피를 마시며 조용히 혼자만의 시간을 보내요." },
    tieBreaker: true,
  },
  {
    prompt: "처음 보는 시그니처 커피가 있어요. 뭐가 먼저 궁금한가요?",
    options: { S: "어떤 재료가 들어가고 실제로 무슨 맛이 나는지 궁금해요.", N: "어떻게 이 조합을 떠올렸는지 궁금해요." },
    tieBreaker: true,
  },
  {
    prompt: "친구가 주문한 커피가 너무 쓰다며 아쉬워해요. 뭐라고 하나요?",
    options: { F: "기대했던 맛이 아니어서 아쉽겠다고 먼저 말해요.", T: "얼음이나 우유를 더하면 나아질지 먼저 생각해요." },
    tieBreaker: true,
  },
  {
    prompt: "친구가 카페 약속을 한 시간 미뤘어요. 남은 시간은 어떻게 쓰나요?",
    options: { J: "남은 시간에 할 일을 미리 정해요.", P: "주변을 둘러보다가 눈에 들어오는 걸 해봐요." },
    tieBreaker: true,
  },
  {
    prompt: "카페에서 처음 보는 사람들과 커피 시음회를 해요. 어떻게 시작하나요?",
    options: { I: "먼저 시음하고, 이야기를 나눌 때까지 분위기를 살펴요.", E: "옆 사람에게 어떤 커피를 좋아하는지 먼저 물어봐요." },
  },
  {
    prompt: "여행지에서 마음에 드는 카페를 발견했어요. 무엇을 기억하고 싶나요?",
    options: { N: "그곳에서 떠오른 생각이나 상상을 기억하고 싶어요.", S: "햇빛이 드는 자리와 커피 향 같은 구체적인 장면을 기억하고 싶어요." },
  },
  {
    prompt: "친구들과 카페를 정하는데 의견이 나뉘어요. 뭘 먼저 살피나요?",
    options: { T: "거리, 가격, 대기 시간처럼 비교할 수 있는 조건부터 살펴요.", F: "누구에게 어떤 조건이 특히 중요한지부터 물어봐요." },
  },
  {
    prompt: "새 동네에서 오후 내내 카페를 둘러볼 수 있어요. 어떻게 움직이나요?",
    options: { P: "걷다가 끌리는 곳이 보이면 들어가요.", J: "가볼 곳과 방문 순서를 미리 정해요." },
  },
  {
    prompt: "카페에 도착했는데 친구가 다른 친구들을 데려왔어요. 어떤 쪽이 편한가요?",
    options: { I: "이야기를 듣다가 익숙한 주제가 나오면 참여해요.", E: "먼저 인사하고 모두가 답할 만한 질문을 던져요." },
  },
  {
    prompt: "친구에게 방금 마신 커피를 소개한다면 어떤 말부터 할까요?",
    options: { S: "첫맛은 고소하고 끝에 산미가 남았다고 말해요.", N: "비 오는 날 산책이 떠오르는 맛이었다고 말해요." },
  },
  {
    prompt: "둘이 나눌 디저트가 한 조각 남았어요. 둘 다 먹고 싶다면 어떻게 하나요?",
    options: { F: "누가 더 기대하고 있었는지 살피고 나눌 방법을 정해요.", T: "크기가 비슷하도록 반으로 잘라 나누자고 해요." },
  },
  {
    prompt: "기대하던 카페에 도착했는데 만석이에요. 다음에는 어떻게 하나요?",
    options: { P: "발길 닿는 대로 걸으며 눈에 띄는 곳을 찾아봐요.", J: "근처 후보의 대기 시간을 확인해 다음 목적지를 정해요." },
  },
  {
    prompt: "하루 종일 사람을 만난 뒤 마지막으로 카페에 들러요. 무엇을 하고 싶나요?",
    options: { E: "편한 친구에게 연락해 오늘 있었던 일을 이야기하고 싶어요.", I: "조용한 자리에 앉아 혼자 생각을 정리하고 싶어요." },
  },
  {
    prompt: "단골 카페에서 새 메뉴 아이디어를 받는대요. 무엇을 제안하나요?",
    options: { N: "익숙한 재료를 예상 못 한 방식으로 섞어보자고 해요.", S: "이미 맛이 잘 어울리는 재료를 활용해보자고 해요." },
  },
  {
    prompt: "친구가 직접 내린 커피를 건네며 솔직한 의견을 물어요. 어떻게 말하나요?",
    options: { T: "맛이 어땠는지 구체적으로 말하고 바꿔볼 점을 알려줘요.", F: "좋았던 점을 먼저 이야기하고 아쉬운 점을 부드럽게 덧붙여요." },
  },
  {
    prompt: "다음 주에 친구와 카페에 가기로 했어요. 오늘 어디까지 정하나요?",
    options: { J: "만날 시간과 카페를 지금 정해둬요.", P: "날짜만 잡아두고 나머지는 그날 맞춰요." },
  },
];

const profiles = {
  ISTJ: { name: "플랫화이트", emoji: "☕", description: "익숙한 선택 속에서 자기 페이스를 지키는 당신은 균형 잡힌 플랫화이트를 닮았어요." },
  ISFJ: { name: "카페라떼", emoji: "🥛", description: "작은 배려로 함께 있는 사람을 편안하게 만드는 당신은 부드러운 카페라떼를 닮았어요." },
  INFJ: { name: "더치커피", emoji: "💧", description: "조용히 생각을 쌓고 분위기 뒤에 숨은 마음을 읽는 당신은 여운이 긴 더치커피를 닮았어요." },
  INTJ: { name: "리스트레토", emoji: "🎯", description: "멀리 내다보면서도 핵심을 간결하게 고르는 당신은 맛을 응축한 리스트레토를 닮았어요." },
  ISTP: { name: "아이스 아메리카노", emoji: "🧊", description: "상황을 담백하게 보고 지금 해볼 수 있는 방법을 찾는 당신은 깔끔한 아이스 아메리카노를 닮았어요." },
  ISFP: { name: "아인슈페너", emoji: "☁️", description: "지금 느껴지는 분위기와 감각을 자기 속도로 즐기는 당신은 부드러운 크림을 얹은 아인슈페너를 닮았어요." },
  INFP: { name: "꿀라떼", emoji: "🍯", description: "사소한 순간에도 나만의 의미와 다정함을 더하는 당신은 은은하게 달콤한 꿀라떼를 닮았어요." },
  INTP: { name: "핸드드립", emoji: "🫗", description: "결과가 나오기까지의 과정이 궁금한 당신은 내리는 방식에 따라 맛이 달라지는 핸드드립을 닮았어요." },
  ESTJ: { name: "에스프레소 더블샷", emoji: "⚡", description: "조건을 빠르게 정리하고 일정을 앞으로 이끄는 당신은 힘 있는 에스프레소 더블샷을 닮았어요." },
  ESFJ: { name: "카라멜 마키아토", emoji: "🍮", description: "함께 온 사람들의 취향을 두루 챙기는 당신은 달콤하게 어우러지는 카라멜 마키아토를 닮았어요." },
  ENFJ: { name: "카페모카", emoji: "🍫", description: "사람들의 이야기를 연결해 함께할 방향을 찾는 당신은 커피와 초콜릿이 어울리는 카페모카를 닮았어요." },
  ENTJ: { name: "에스프레소", emoji: "🔥", description: "여러 선택지에서 방향을 잡고 먼저 움직이는 당신은 짧고 선명한 에스프레소를 닮았어요." },
  ESTP: { name: "에스프레소 토닉", emoji: "🫧", description: "예상 밖의 일이 생겨도 눈앞의 기회를 빠르게 잡는 당신은 톡 쏘는 에스프레소 토닉을 닮았어요." },
  ESFP: { name: "아포가토", emoji: "🍨", description: "즐거운 순간을 발견하면 바로 주변 사람과 나누는 당신은 커피와 아이스크림이 만나는 아포가토를 닮았어요." },
  ENFP: { name: "바닐라 콜드브루", emoji: "✨", description: "사람들과 이야기하며 뜻밖의 조합을 떠올리는 당신은 향긋한 바닐라 콜드브루를 닮았어요." },
  ENTP: { name: "오렌지 아메리카노", emoji: "🍊", description: "익숙한 조합을 뒤집어 새 가능성을 시험하는 당신은 상큼한 오렌지 아메리카노를 닮았어요." },
};

const get = (id) => document.getElementById(id);
const screens = ["start", "quiz", "result"];
const responses = new Array(questions.length);
const answers = get("answers");
const nextButton = get("next");
const shareButton = get("share");
let currentQuestion = 0;
let result = null;

function showScreen(screen) {
  screens.forEach((id) => { get(id).hidden = id !== screen; });
  window.scrollTo(0, 0);
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const legend = get("question");
  legend.textContent = question.prompt;
  answers.replaceChildren(...Object.entries(question.options).map(([letter, label]) => {
    const option = document.createElement("label");
    option.className = "answer";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = letter;
    radio.checked = responses[currentQuestion] === letter;
    option.append(radio, label);
    return option;
  }));

  const step = currentQuestion + 1;
  get("progress").value = step;
  get("progress-count").textContent = step + " / " + questions.length;
  get("previous").disabled = currentQuestion === 0;
  nextButton.disabled = responses[currentQuestion] === undefined;
  get("next-label").textContent = step === questions.length ? "결과 보기" : "다음";
  legend.focus();
}

function calculateResult(answersByQuestion) {
  const dimensions = ["EI", "SN", "TF", "JP"].map(([first, second]) => {
    const firstCount = answersByQuestion.filter((letter) => letter === first).length;
    const secondCount = answersByQuestion.filter((letter) => letter === second).length;
    const tieIndex = questions.findIndex((question) => question.tieBreaker && first in question.options);
    let letter = answersByQuestion[tieIndex];
    if (firstCount > secondCount) letter = first;
    if (secondCount > firstCount) letter = second;

    const exampleIndex = answersByQuestion.indexOf(letter);
    return { letter, margin: Math.abs(firstCount - secondCount), example: questions[exampleIndex].options[letter] };
  });

  const type = dimensions.map(({ letter }) => letter).join("");
  const examples = dimensions.sort((a, b) => b.margin - a.margin).slice(0, 2).map(({ example }) => example);
  return { type, profile: profiles[type], examples };
}

function showResult() {
  result = calculateResult(responses);
  const { type, profile, examples } = result;
  get("result-type").textContent = type;
  get("result-name").textContent = profile.name;
  get("result-emoji").textContent = profile.emoji;
  get("result-description").textContent = profile.description;
  const image = get("result-image");
  image.alt = profile.name + " 일러스트";
  image.src = "images/" + type.toLowerCase() + ".svg";
  get("result-examples").replaceChildren(...examples.map((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }));
  showScreen("result");
  get("result-title").focus();
}

get("start-button").addEventListener("click", () => {
  showScreen("quiz");
  renderQuestion();
});

answers.addEventListener("change", (event) => {
  responses[currentQuestion] = event.target.value;
  nextButton.disabled = false;
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
  result = null;
  get("share-status").textContent = "";
  get("share-fallback").hidden = true;
  get("share-text").value = "";
  showScreen("start");
  get("start-title").focus();
});

shareButton.addEventListener("click", async () => {
  const sharedResult = result;
  const { profile, type } = sharedResult;
  const shareText = "〈나는 무슨 커피 타입?〉\n내 결과는 " + profile.emoji + " " + profile.name + " · " + type + "!\n" + profile.description;
  const status = get("share-status");
  const fallback = get("share-fallback");
  const field = get("share-text");
  status.textContent = "";
  fallback.hidden = true;
  shareButton.disabled = true;

  try {
    if (navigator.share) {
      try {
        await navigator.share({ title: "나는 무슨 커피 타입?", text: shareText });
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }
    if (result !== sharedResult) return;
    try {
      await navigator.clipboard.writeText(shareText);
      if (result === sharedResult) status.textContent = "결과 문구를 복사했어요.";
    } catch {
      if (result !== sharedResult) return;
      field.value = shareText;
      fallback.hidden = false;
      field.focus();
      field.select();
    }
  } finally {
    shareButton.disabled = false;
  }
});
