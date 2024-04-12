const quotes = [
    {
        lyrics: "Hit that, hit that snare!",
        song: "Misery Business",
    },
    {
        lyrics: "With every guitar string scar on my hand",
        song: "Lover",
    },
    {
        lyrics: "They were born in late December with heart of January embers",
        song: "January Embers",
    },
    {
        lyrics: "I feel so much lighter like a feather with you off my mind",
        song: "Feather",
    },
    {
        lyrics: "What doesn’t kill you makes you stronger",
        song: "Stronger",
    },
    {
        lyrics: "I’ll be your shotgun rider ’til the day I die",
        song: "II MOST WANTED",
    },
    {
        lyrics: "Guaranteed, I can blow your mind",
        song: "Blow Your Mind",
    },
    {
        lyrics: "Would you call in the name of love? ",
        song: "In the Name of Love",
    },
    {
        lyrics: "Everything is blue, his pills, his hands, his jeans",
        song: "Colors",
    },
    {
        lyrics: "Everythins is true to me, never words where you would see",
        song: "Everything is Embarrassing",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//round반올림 ceil올림 floor버림 random 0에서 1사이 랜덤 숫자 생성
//.length -> 아이템 몇 개?

quote.innerText = todaysQuote.lyrics;
author.innerText = todaysQuote.song;