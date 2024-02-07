const quotes = [
  {
    quote: "성공은 준비된 기회가 만나는 것이다",
    author: "- 로이디즌월트 엠러슨",
  },
  {
    quote: "행복은 우리가 행위로 선택하는 것이다, 그리고 그것은 습관이다",
    author: "- 아리스토텔레스",
  },
  {
    quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다",
    author: "- 헨리 포드",
  },
  { quote: "지희야 할 일 끝내고 놀아라",
    author: "- 전은주", },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
