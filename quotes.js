const quotesList = [
    {
        quote:"Blaze with the fire that is never extinguished.",
        author:"Lusia Sigea"
    },
    {
        quote:"There is nothing in the world so irresistibly contagious as laughter and good humor.",
        author:"Charles Dickens"
    },
    {
        quote:"The nice thing about egotists is that they don't talk about other people.",
        author:"Lucille S. Harper"
    },
    {
        quote:"A man's character may be learned from the adjectives which he habitually uses in conversation.",
        author:"Mark Twain"
    },
    {
        quote:"It is not God’s will merely that we should be happy, but that we should make ourselves happy.",
        author:"Kant"
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela"
    },
    {
        quote:"Life is either a daring adventure or nothing at all.",
        author:"Helen Keller"
    },
    {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison"
    },
    {
        quote:"Life is either a great adventure or nothing.",
        author:"Helen Keller"
    },
    {
        quote:"Keep your eyes on the stars and your feet on the ground.",
        author:"Theodore Roosevelt"
    },
    {
        quote:"There is always some madness in love. But there is also always some reason in madness.",
        author:"Friedrich Nietzsche"
    },
    {
        quote:"Love asks me no questions, and gives me endless support.",
        author:"William Shakespeare"
    },
    {
        quote:"Success is going from failure to failure without a loss of enthusiasm.",
        author:"Winston Churchill"
    },
    {
        quote:"Always bear in mind that your own resolution to succeed is more important than any other.",
        author:"Abraham Lincoln"
    },
    {
        quote:"Try not to become a man of success but rather try to become a man of value.",
        author:"Albert Einstein"
    },
    {
        quote:"The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author:"Reid Hoffman"
    },
    {
        quote:"Some people dream of success, while other people get up every morning and make it happen.",
        author:"Wayne Huizenga"
    },
] // quotesList.length=17

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quoteIndex = Math.floor(Math.random()*quotesList.length);
const todaysQuote = quotesList[quoteIndex];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
