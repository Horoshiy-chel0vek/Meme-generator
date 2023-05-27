function clearAll(){
  const memeContainer = document.querySelector(".meme-content");
  memeContainer.innerHTML = "";
  const jokeContainer = document.querySelector(".joke-content");
  jokeContainer.innerHTML = "";
  const riddleContainer = document.querySelector(".riddle-content");
  riddleContainer.innerHTML = "";
  const quoteContainer = document.querySelector(".quote-content");
  quoteContainer.innerHTML = "";
  
}
function showMeme(){
  clearAll();
  const memeUrl = getRandomData("memes");
  const memeContainer = document.querySelector(".meme-content");
  const newMeme = document.createElement("img");
  newMeme.setAttribute("src", memeUrl);
  memeContainer.appendChild(newMeme);
  console.log(newMeme);
  
}
function showJoke(){
  clearAll();
  const joke = getRandomData("jokes");
  const jokeContainer = document.querySelector(".joke-content");
  const newJoke = document.createElement("p");
  newJoke.textContent = joke;
  jokeContainer.appendChild(newJoke);
  console.log(newJoke);
}

function showRiddle(){
  clearAll();
  const riddle = getRandomData("riddles");
  const riddleContainer = document.querySelector(".riddle-content");
  const newRiddle = document.createElement("p");
  newRiddle.textContent = riddle.question;
  const newAnswer = document.createElement("p");
  newAnswer.textContent = riddle.answer;
  newAnswer.setAttribute("id", "riddle-answer");
  newAnswer.hidden = true;
  riddleContainer.appendChild(newRiddle);
  riddleContainer.appendChild(newAnswer);
  console.log(newAnswer);
}

function showAnswer(){
  const newAnswer = document.querySelector("#riddle-answer");
  newAnswer.hidden = false;
}
function showQuote(){
  clearAll();
  const quote = getRandomData("quotes");
  const quoteContainer = document.querySelector(".quote-content");
  const newQuote = document.createElement("p");
  newQuote.textContent = quote.quote;
  const newAuthor = document.createElement("p");
  newAuthor.textContent = quote.author;
  quoteContainer.appendChild(newQuote);
  quoteContainer.appendChild(newAuthor);
  console.log(newAuthor);
}

const memes = [
  "https://cs13.pikabu.ru/post_img/2023/01/26/8/1674737374154760580.jpg",
  "https://cs13.pikabu.ru/post_img/big/2020/05/16/10/1589650889142638741.jpg",
"https://cs13.pikabu.ru/post_img/2022/12/14/6/1671008037224421279.jpg","https://cs14.pikabu.ru/post_img/big/2022/05/16/7/1652696861195618563.jpg"
];
const jokes = ["Программист звонит в библиотеку.— Здравствуйте, Катю можно?— Она в архиве. —Разархивируйте ее пожалуйста. Она мне срочно нужна!", "— Настоящий программист всегда должен ложиться спать или в 1:28 или в 2:56... Ну, на крайний случай, в 5:12.— А вставать в 10:24. Ну, на крайний случай, в 20:48.", "Если бы программисты были врачами, им бы говорили «У меня болит нога», а они отвечали «Ну не знаю, у меня такая же нога, а ничего не болит»"];
const quotes = [
  { quote: "Учится, учится и еще раз учиться!", author: "В.И. Ленин" },
  { quote: "Ну, поехали!", author: "Ю.А. Гагарин"},
  { quote: "Социализм или варварство", author: "Р. Люксембург" },
  { quote: "Чем умнее человек, тем легче он признает себя дураком", author: "Альберт Эйнштейн"}
];

const riddles = [
 { question: "Коромысло на небе повисло", answer: "Радуга" },
  { question: "Висит груша нельзя скушать", answer: "Лампочка" },
  { question: "Сидит дед во сто шуб одет", answer: "Лук" }
];

const data = {
  memes,
  jokes,
  quotes,
  riddles
};
function rn_num(len){
  return Math.floor(Math.random()*len);
}
function getRandomData(type){
  return data[type][rn_num(data[type].length)]
}

showQuote();
