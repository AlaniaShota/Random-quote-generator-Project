//Quotes Array (ციტატები)
const Quotes = [
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    writer: "Nelson Mandela",
  },
  {
    quotes: "The way to get started is to quit talking and begin doing.",
    writer: "Walt Disney",
  },
  {
    quotes:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    writer: "Steve Jobs",
  },
  {
    quotes:
      "If life were predictable it would cease to be life, and be without flavor.",
    writer: "Eleanor Roosevelt",
  },
  {
    quotes:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    writer: "Oprah Winfrey",
  },
  {
    quotes:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    writer: "James Cameron",
  },
  {
    quotes: "Life is what happens when you're busy making other plans.",
    writer: "John Lennon",
  },
  {
    quotes:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    writer: "Mother Teresa",
  },
  {
    quotes:
      "When you reach the end of your rope, tie a knot in it and hang on.",
    writer: "Franklin D. Roosevelt",
  },
  {
    quotes:
      "Always remember that you are absolutely unique. Just like everyone else.",
    writer: "Margaret Mead",
  },
  {
    quotes:
      "Don't judge each day by the harvest you reap but by the seeds that you plant. ",
    writer: "Robert Louis Stevenson",
  },
  {
    quotes:
      "The future belongs to those who believe in the beauty of their dreams.",
    writer: "Eleanor Roosevelt",
  },
  {
    quotes:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    writer: "Benjamin Franklin",
  },
  {
    quotes:
      "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    writer: "Helen Keller",
  },
  {
    quotes:
      "It is during our darkest moments that we must focus to see the light.",
    writer: "Aristotle",
  },
  {
    quotes: "Whoever is happy will make others happy too.",
    writer: "Anne Frank",
  },
];

const quotesTitle = document.querySelector(".quote-title");
const randomQuote = document.querySelector(".random-quote");
const quoteText = document.querySelector(".quote-text");
const quoteWriter = document.querySelector(".quote-writer");
const buttonBtn = document.querySelector(".submit");

//title is changing by javascript (თაითელი შეცვლა ჯს-დან)
quotesTitle.innerHTML = "Random Quotes";
let quotesTextIndex = 0;
let quotesWriterIndex = 0;

buttonBtn.onclick = showQuote;

//html clean (დასუფთავება)
function clearPage() {
  quoteText.innerHTML = "";
  quoteWriter.innerHTML = "";
}

//Pick up quote and writers (ციტატის და წერლის წამოღება)
function showQuote() {
  clearPage();
  const randomQuoteText = `<p class="quote-text">%Loading ...%</p>`;
  const newQuoteText = randomQuoteText.replace(
    "%Loading ...%",
    Quotes[quotesTextIndex]["quotes"]
  );
  quoteText.innerHTML = newQuoteText;
  const randomQuoteWriter = `<p class="quote-writer">%Loading ...%</p>`;
  const newQuoteWriter = randomQuoteWriter.replace(
    "%Loading ...%",
    Quotes[quotesWriterIndex]["writer"]
  );
  quoteWriter.innerHTML = newQuoteWriter;

  quotesTextIndex++;
  quotesWriterIndex++;
  finalMessage();
}

//Final message where person can repeat read (ფინალური სმს სადაც მომხმარებლს შეუძლია თავიდან დაიწყოს წაკითხვა)
function finalMessage() {
  if (quotesTextIndex === Quotes.length) {
    quoteText.innerHTML = "Have good day!";
    quoteWriter.innerHTML = "";
    buttonBtn.innerHTML = "Repeat";
    buttonBtn.blur();
    buttonBtn.onclick = () => history.go();
  }
}
