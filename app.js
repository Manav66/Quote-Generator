var quotes = [
    "A professional writer is an amateur who didn’t quit. ~ Richard Bach",
"I only write when I’m inspired, so I see to it that I’m inspired every morning at nine o’clock. ~ Peter De Vries",
"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.” ~ Steven King",
"It’s none of their business that you have to learn how to write. Let them think you were born that way. ~ Ernest Hemingway",
"If you want to be a writer, you must do two things above all others: read a lot and write a lot. ~ Stephen King",
"There is no greater agony than bearing an untold story inside you. ~ Maya Angelou",
"I love deadlines. I love the whooshing noise they make as they go by. ~ Douglas Adams, The Salmon of Doubt",
"A writer is working when he’s staring out of the window.” ~ Burton Rascoe",
"Just write every day of your life. Read intensely. Then see what happens. Most of my friends who are put on that diet have very pleasant careers.” ~ Ray Bradbury",
"Close the door. Write with no one looking over your shoulder. Don’t try to figure out what other people want to hear from you; figure out what you have to say. It’s the one and only thing you have to offer.” ~ Barbara Kingsolver",
"The English language is an arsenal of weapons. If you are going to brandish them without checking to see whether or not they are loaded, you must expect to have them explode in your face from time to time.” ~ Stephen Fry",
"If my doctor told me I had only six minutes to live, I wouldn’t brood. I’d type a little faster.” ~ Isaac Asimov",
"Every writer I know has trouble writing.” ~ Joseph Heller",
"Good writing is remembering detail. Most people want to forget. Don’t forget things that were painful or embarrassing or silly. Turn them into a story that tells the truth.” ~ Paula Danziger",
"There is no rule on how to write. Sometimes it comes easily and perfectly: sometimes it’s like drilling rock and then blasting it out with charges.” ~ Ernest Hemingway",
"The scariest moment is always just before you start. After that, things can only get better.” ~ Stephen King",
"And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.” ~ Sylvia Plath",
"The best time to plan a book is while you’re doing the dishes.” ~ Agatha Christie",
"There are three rules for writing the novel. Unfortunately, no one knows what they are.” ~ W. Somerset Maugham",
"[As a writer] you have to have the three D’s: drive, discipline and desire. If you’re missing any one of those three, you can have all the talent in the world, but it’s going to be really hard to get anything done.” ~ Nora Roberts",
"I try to write a certain amount each day, five days a week. A rule sometimes broken is better than no rule.” ~ Herman Wouk",
"Never, never, never, never give up.” ~Winston Churchill",
"We will open the book. Its pages are blank. We are going to put words on them ourselves. The book is called Opportunity and its first chapter is New Year’s Day.” ~ Edith Lovejoy Pierce",
"There’s no better teacher for writing than reading… Get a library card. That’s the best investment.” ~ Alisa Valdes",
]


function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}