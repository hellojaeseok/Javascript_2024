const quotes =[
    {
        quote: "You cannot swim for new horizons, until you have the courage to lose sight of shore",
        writer: "William Faulker",
    },

    {
        quote:"An Idea is like a virus. Resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define... or to destroy you" ,
        writer:"Dominick Cobb (From the movie : Inception)",

    },

    {
    quote:"Until you make the unconscious conscious, it will direct your life and you will call it fate" ,
    writer:"C.G Jung" ,
    },
    {
        quote:"You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future" ,
        writer:"Steve Jobs" ,
    },
    {
        quote:"He who has a why can bear any how" ,
        writer:"Friedrich Nietzsche" ,
    },
    {
        quote:"When something is important enough, you do it even if the odds are not in your favor" ,
        writer:"Elon Musk" ,
    },
    {
        quote:"I have not failed. I've just found 10,000 ways that won't work",
        writer: "Thomas Edison",
    },
    {
        quote:"Life is never fair, and perhaps it is a good thing for most of us that it is not",
        writer: "Oscar Wilde"
    },
    {
        quote:"Setting goals is the first step in turning the invisible into the visible",
        writer: "Tony Robbins",
    },
    {
        quote:"Failure is not the opposite of success; it's part of success",
        writer: "Arianna Huffinton",
    }



]

const quote = document.querySelector("#quote span:first-child")
const writer = document.querySelector("#quote span:last-child")


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = `"${todaysQuote.quote}"`
writer.innerText = `-${todaysQuote.writer}-`

