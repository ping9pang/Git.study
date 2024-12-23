const quotes = [
    {
        quote : "거울만 보면 Gay가 될 것 같다. ",
        author: "최하호"
    },
    {
        quote : "지금이 리즈다 ",
        author : "박범근"
    },
    {
        quote: "어제의 고점이 오늘의 저점이다 ",
        author : "김주윤"
    }
]

const quoteElement = document.querySelector("#quotes span:first-child");
const authorElement = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteElement.innerText = todayQuote.quote;
authorElement.innerText = todayQuote.author;
