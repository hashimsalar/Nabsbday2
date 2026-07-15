/* =====================================================================
   NABEEHA · Birthday Site CONTENT
   ---------------------------------------------------------------------
   EVERYTHING you might want to change lives in THIS ONE FILE.
   Edit the text between the "quotes", save, and refresh the page.
   Add or remove items by copying a block and changing its text.
   (Keep the commas and { } brackets where they are.)
   No em dashes anywhere. You're welcome. 😄
   ===================================================================== */

const SITE = {

  /* ---------- Basics ---------- */
  name: "Nabeeha",
  fullName: "Nabeeha Ahmed",
  heroGreeting: "Happy Birthday",
  heroSubtitle: "To the most wonderful person I know",
  // The big warm portrait used on the home page hero:
  heroPhoto: "assets/photos/n33.jpg",

  /* ---------- Home: the main birthday message ---------- */
  birthdayMessage: [
    "Nabeeha,",
    "Somewhere between the ignored video calls, the stolen fries, the poetry you pretended to be bored of, and a thousand tiny moments in between, you became my favourite person in the world.",
    "So I built you a little corner of the internet. Wander through it. There are pictures, poems, a puzzle only you could solve, and a game with your name written all over it.",
    "Happy birthday. I hope this year is as beautiful, ridiculous, and radiant as you are.",
    "With all my love, Hashim"
  ],

  /* ---------- Home: "Reasons" that rotate on the hero ---------- */
  reasons: [
    "your laugh",
    "the way you roll your eyes at me",
    "your terrible, wonderful timing",
    "how you look at the people you love",
    "your singing",
    "that you let me swoon over your photos",
    "your whole entire heart"
  ],

  /* ---------- Home: Wishes from friends ---------- */
  // ADD MORE by copying a { ... } block. Leave 'from' blank for anonymous.
  wishes: [
    { from: "Hashim", text: "Happy birthday, Nabs. Thank you for being the best part of every ordinary day. Here's to a year that finally deserves you." },
    { from: "Polina", text: "You are why I am here today, physically and psychologically. You are my home away from home. " },
    { from: "Kat", text: "Super grateful to have been roommates with your across three cities! Thank you for making me chai all the time and for teaching me how to hug. " }
  ],

  /* ---------- Home: wish CARDS (image collages from friends) ----------
     Drop the image files into assets/wishes/ named exactly as 'src' below.
     'from' is an optional label shown on the card. 'cap' shows if the image
     is missing, so the layout still makes sense. Add/remove freely. */
  wishImages: [
    { src: "wish01.jpg", from: "",        cap: "Happy birthday to a brave, beautiful, intelligent woman." },
    { src: "wish02.jpg", from: "",        cap: "Happy Birthday Nabzzz <3" },
    { src: "wish03.jpg", from: "Roomie",  cap: "Happy Birthday Roomie! Across three cities 🏙️" },
    { src: "wish04.jpg", from: "",        cap: "Happy Birthday Loser Nabeeha 😌" },
    { src: "wish05.jpg", from: "",        cap: "Golden Retriever… thanks for not letting me be homeless in Boston 🏠" },
    { src: "wish06.jpg", from: "",        cap: "The kinda ideal love others see between us 😇" },
    { src: "wish07.jpg", from: "",        cap: "The actual love I have to witness 😅 (CPPP SHUT UPPP!!)" },
    { src: "wish08.jpg", from: "J",       cap: "8 years, 10 countries, countless arguments. Love you J <3" },
    { src: "wish09.jpg", from: "",        cap: "Dear Nabeeha… miss and love you most!" },
    { src: "wish10.jpg", from: "",        cap: "I wish you the bestest of days, thanks for always being there 🎙️" },
    { src: "wish11.jpg", from: "Polina",  cap: "Happy birthday, baby ❤️  I love you, Polina" },
    { src: "wish12.jpg", from: "",        cap: "Happy Birthday! 🎈 (Molly Tea & the whole crew)" },
    { src: "wish13.jpg", from: "",        cap: "Happy birthday, Nabeeha! 💛" }
  ],

  /* ---------- Gallery: the photos ----------
     span: 1 = normal tile, 2 = big spotlight tile. */
  photos: [
    { src: "n18", cap: "Nabeeha at Hult ✨", span: 2 },
    { src: "n13", cap: "Where it all started 🐣", span: 2 },
    { src: "n33", cap: "Absolute cutie", span: 2 },
    { src: "n01", cap: "Royalty, simply existing" },
    { src: "n19", cap: "Teeka and blue, absolutely stunning", span: 2 },
    { src: "n23", cap: "Her in black. That's the whole caption." },
    { src: "n24", cap: "Sunlight suits her" },
    { src: "n30", cap: "Green never looked better", span: 2 },
    { src: "n31", cap: "Pretending to pack (packing nothing)" },
    { src: "n37", cap: "Autumn was made for her" },
    { src: "n42", cap: "A whole main-character moment", span: 2 },
    { src: "n40", cap: "Taking the city, it never stood a chance" },
    { src: "n48", cap: "Just Nabeeha, being lovely" },
    { src: "n49", cap: "Blooming", span: 2 },
    { src: "n09", cap: "That smile though" },
    { src: "n38", cap: "VOGUE cover, obviously" },
    { src: "n08", cap: "Us." },
    { src: "n43", cap: "Same face, two screens" },
    { src: "n10", cap: "Split-screen soulmates" },
    { src: "n27", cap: "Headphones on, world off, together" },
    { src: "n28", cap: "Our natural habitat: a video call" },
    { src: "n04", cap: "Definitely focused on the lecture" },
    { src: "n05", cap: "Another day, another call ignored together" },
    { src: "n07", cap: "Trying out fancy backgrounds" },
    { src: "n12", cap: "Meeting? What meeting." },
    { src: "n06", cap: "Long-distance, short attention spans" },
    { src: "n20", cap: "Two faces, zero focus" },
    { src: "n02", cap: "Not paying attention on call (iconic)" },
    { src: "n03", cap: "Caught mid-chocolate 🍫" },
    { src: "n32", cap: "Fries: the beginning 🍟" },
    { src: "n35", cap: "Fries: the sheepish sequel" },
    { src: "n26", cap: "Mid-snack, no regrets" },
    { src: "n21", cap: "Filters were invented for her" },
    { src: "n14", cap: "Smiling at the screen (probably at me)" },
    { src: "n15", cap: "Do Not Disturb mode: activated" },
    { src: "n17", cap: "Bored of my poetry, allegedly" },
    { src: "n22", cap: "Late-night call energy" },
    { src: "n29", cap: "Serving looks in unexpected places" },
    { src: "n39", cap: "Making her case, hand raised" },
    { src: "n44", cap: "Napping like it's an art form" },
    { src: "n45", cap: "Showing me cuteness of herself (as one does)" },
    { src: "n46", cap: "No idea what's happening here, but I love it anyway" },
    { src: "n25", cap: "The day we hit submit on her Minerva app 🎓", span: 2 },
    { src: "n16", cap: "Minerva, here she comes" },
    { src: "n36", cap: "With the first and only love of her life 🐱", span: 2 },
    { src: "n34", cap: "On her way to becoming everyone's favourite auntie" },
    { src: "n50", cap: "With her inspiration ❤️" },
    { src: "n11", cap: "Dressed up and dangerous" },
    { src: "n41", cap: "With a partner in crime" },
    { src: "n47", cap: "Chaos and comfort" }
  ],

  /* ---------- Gallery: the videos ---------- */
  videos: [
    { src: "V2", cap: "Nabeeha, singing. Turn the volume up 🎶" },
    { src: "V3", cap: "With the only love of her life 🐱" },
    { src: "V1", cap: "Teasing the boiz 😌" },
    { src: "V4", cap: "Slowing down time for the photographer 📸" }
  ],

  /* ---------- Poetry ----------
     Add poems by copying a { ... } block.
     rtl:true renders right-to-left in a Nastaliq (Urdu) font.
     Each string in 'lines' becomes one line. "" makes a blank line. */
  poems: [
    {
      title: "یہ کیا کہ اک جہاں کو کرو وقفِ اضطراب",
      rtl: true,
      poet: "صوفی غلام مصطفیٰ تبسم",
      note: "Ghazal by Sufi Ghulam Mustafa Tabassum",
      source: "https://www.rekhta.org/ghazals/ye-kyaa-ki-ik-jahaan-ko-karo-vaqf-e-iztiraab-sufi-tabassum-ghazals?lang=ur",
      lines: [
        "یہ کیا کہ اک جہاں کو کرو وقف اضطراب",
        "یہ کیا کہ ایک دل کو شکیبا نہ کر سکو",
        "",
        "ایسا نہ ہو یہ درد بنے درد لا دوا",
        "ایسا نہ ہو کہ تم بھی مداوا نہ کر سکو",
        "",
        "شاید تمہیں بھی چین نہ آئے مرے بغیر",
        "شاید یہ بات تم بھی گوارا نہ کر سکو",
        "",
        "کیا جانے پھر ستم بھی میسر ہو یا نہ ہو",
        "کیا جانے یہ کرم بھی کرو یا نہ کر سکو",
        "",
        "اللہ کرے جہاں کو مری یاد بھول جائے",
        "اللہ کرے کہ تم کبھی ایسا نہ کر سکو",
        "",
        "میرے سوا کسی کی نہ ہو تم کو جستجو",
        "میرے سوا کسی کی تمنا نہ کر سکو"
      ]
    },
    {
      title: "Ordinary Tuesday",
      lines: [
        "You fell asleep on a call again,",
        "head tipped back, phone still warm in your hand,",
        "and I sat there like an idiot, grinning,",
        "not wanting to hang up and end the day.",
        "",
        "That is the whole secret, really.",
        "I like you most when nothing is happening.",
        "The fries going cold between us,",
        "you rolling your eyes at a poem you swore was too much.",
        "",
        "People spend years chasing a feeling",
        "and I found mine watching you steal the last chip.",
        "So happy birthday, you difficult, brilliant thing.",
        "I would sit through a hundred more lectures with you."
      ],
      author: "Hashim"
    }
  ],

  /* ---------- Cryptic Puzzle ----------
     Answers are checked case-insensitively and ignore spaces.
     'accept' is an optional list of extra accepted answers. */
  puzzle: {
    intro: "Some birthdays come with cake. Yours comes with a lock. Solve each clue to unlock the next, and there's something waiting at the end. 🔓",
    stages: [
      {
        clue: "Where it all started. The school whose backdrop she stood proudly in front of. (One word.)",
        hint: "Business school. It's on a photo in the gallery.",
        answer: "hult",
        accept: ["hult international business school"]
      },
      {
        clue: "The first and only love of her life. Four legs, zero chill. What is it? (The animal, or its name.)",
        hint: "It purrs. Check the gallery and the videos.",
        answer: "cat",
        accept: ["kitty", "the cat"]
      },
      {
        clue: "Unscramble the place she said yes to: R E V A N I M",
        hint: "A university. We submitted the app together.",
        answer: "minerva",
        accept: []
      },
      {
        clue: "Final key. Decode this (each letter shifted forward by 1): I NKUD ZNT. It's the three words you'll say back to me.",
        hint: "Caesar cipher, shift each letter back by 1. The answer is 'i love you'.",
        answer: "i love you",
        accept: ["iloveyou", "love you"]
      }
    ],
    reward: {
      title: "You did it. 💛",
      message: [
        "Of course you solved it. You always figure me out.",
        "Here's the truth the lock was hiding:",
        "Every version of you, on every screen and every street and every fry-stealing afternoon, is my favourite person alive.",
        "Happy birthday, Nabeeha. The next clue is the rest of our lives."
      ]
    }
  },

  /* ---------- Jeopardy ----------
     Copied from your JeopardyLabs board (nabeeha-birthday).
     The "Carbon Dating" category uses the 5 city photos as clues:
     drop the files into assets/jeopardy/ named exactly as the 'img' below. */
  jeopardy: {
    intro: "This is Nabeeha! Click a tile, guess out loud, then reveal. Some answers have bonus points noted for whoever's keeping score.",
    categories: [
      {
        name: "Carbon Dating",
        clues: [
          { value: 100, img: "assets/jeopardy/budapest.jpg", clue: "Which city is this picture from?", answer: "Budapest" },
          { value: 200, img: "assets/jeopardy/prague.jpg",   clue: "Which city is this picture from?", answer: "Prague" },
          { value: 300, img: "assets/jeopardy/hamburg.jpg",  clue: "Which city is this picture from?", answer: "Hamburg" },
          { value: 400, img: "assets/jeopardy/london.jpg",   clue: "Which city is this picture from?", answer: "London" },
          { value: 500, img: "assets/jeopardy/seoul.jpg",    clue: "Which city is this picture from?", answer: "Seoul" }
        ]
      },
      {
        name: "Food Preferences",
        clues: [
          { value: 100, clue: "Popular fruit eaten by a species we share a lot of our DNA with, that Nabeeha HATES.", answer: "Bananas 🍌" },
          { value: 200, clue: "Nabeeha's preferred brand for chai.", answer: "Tapal Danedar (+100 if you say 'family mixture', I'm not sure myself)" },
          { value: 300, clue: "The one food Nabeeha will pick over Hashim.", answer: "Fries 🍟" },
          { value: 400, clue: "Nabeeha will refuse to eat this type of fry.", answer: "Wedges" },
          { value: 500, clue: "Passion Fruit Green Tea is Nabeeha's go-to order from here.", answer: "Chicha San Chen" }
        ]
      },
      {
        name: "Pets",
        clues: [
          { value: 100, clue: "What was the name of Nabeeha's goat?", answer: "Joy. (The question said 'goat', not 'GOAT'. Give +100 if someone answers 'Hashim'.)" },
          { value: 200, clue: "What were the names of Nab's dogs?", answer: "Bruno and Marshal (100 for each)" },
          { value: 300, clue: "What was Nabeeha's lamb's name?", answer: "Mohan Black Eef (Nabeeha, please correct if I'm wrong)" },
          { value: 400, clue: "What was the name of Nabeeha's goat's wife? The name of the past cat gives +100 if you get this wrong.", answer: "Happy. Bonus: Nike was the cat's name. (You won't get 500 for getting both right.)" },
          { value: 500, clue: "What was the name of Nabeeha's goat's kid? (If you get this wrong you can name 2 current cats for 200 points.)", answer: "Cheerful. (You won't get 700 for getting all right.)" }
        ]
      },
      {
        name: "Trivia",
        clues: [
          { value: 100, clue: "What is UUA's nickname for Nabeeha?", answer: "Bossy Apa (+50 points if someone also says 'Hitler')" },
          { value: 200, clue: "What was the first name given to Nabeeha? Bonus +100 if someone knows how long it lasted.", answer: "Hafsa (2 days)" },
          { value: 300, clue: "Name 2 of Nabeeha's recent celebrity crushes (150 each). Bonus +100 for a past celeb crush.", answer: "Haaland and Zohran Mamdani (she hates both). Past: Ahad Raza Mir (hates him most)." },
          { value: 400, clue: "What is Nabeeha's favourite perfume brand?", answer: "Chanel. (Coach and Jimmy Choo also count if Nabeeha approves. Any of the three works.)" },
          { value: 500, clue: "What school does Nabeeha hate most?", answer: "Cadet College Hasanabdal" }
        ]
      },
      {
        name: "Blank Space",
        clues: [
          { value: 100, clue: "Which punctuation is banned from Nabeeha's writing style?", answer: "Em dashes" },
          { value: 200, clue: "What's one city Nabeeha threatened to go to by herself in Europe?", answer: "Paris" },
          { value: 300, clue: "What's the one word that triggers Nabeeha's British accent?", answer: "Always" },
          { value: 400, clue: "What airplane did Nabeeha's dad fly? (+100 if you say what kind of doctor her mom is.)", answer: "Mirage. Bonus: Radiologist. (Max 400 points.)" },
          { value: 500, clue: "Which city did Nabeeha forget her passport enroute to the embassy?", answer: "Buenos Aires" }
        ]
      }
    ]
  }
};
