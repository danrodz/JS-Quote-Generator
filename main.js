var pickRandomFragment,
  randomComparison,
  randomQuestion,
  randomStatement,
  automaticGenerator;

// constructs new sentence types
function SentenceType(begSentence, midSentence, endSentence) {
  this.begSentence = begSentence;
  this.midSentence = midSentence;
  this.endSentence = endSentence;
}

// selects random fragments from arrays
var pickRandomFragment = function(fragment) {
  return fragment[Math.floor(Math.random() * fragment.length)];
};

// constructs new random sentences from fragments
SentenceType.prototype.newSentence = function() {
  var sentence =
    pickRandomFragment(this.begSentence) +
    pickRandomFragment(this.midSentence) +
    pickRandomFragment(this.endSentence);

  return sentence;
};

// Comparisons (first type of sentences)
var randomComparison = new SentenceType(
  [
    'You should try to ',
    'I think you should ',
    'You’d better ',
    'If I were you, I’d ',
    'I recommend that you ',
    'It’s better for you to ',
    'I have got to ',
    'You only have to ',
    'I would rather ',
    "It's your turn to ",
    'I suggest you ',
    'It might be a good idea to ',
    'May I suggest that you ',
    "You don't have to ",
    "You mustn't ",
    'Your only option is to '
  ],

  [
    'sleep all day ',
    'eat more carbs ',
    'hit the gym every day ',
    'play with barbies ',
    'adopt a wild raccoon ',
    'pet a wild koala ',
    'get some rest ',
    'call the Disney hotline ',
    'wake up early ',
    "go to your grandma's house ",
    'learn karate every day ',
    'kill a demogorgon ',
    'ride a unicorn ',
    'learn some witchcraft ',
    'speak in tongues ',
    'levitate a chimpanzee ',
    'resurrect a dinosaur '
  ],

  [
    'like a giant would do.',
    'like a bodybuilder would do.',
    'like a mummy would do.',
    'like a hobbit would do.',
    'like a wizard would do.',
    'like a zookeeper would do.',
    'like how superman would do.',
    'like a possessed child would do.'
  ]
);

// Questions (second type of sentences)
var randomQuestion = new SentenceType(
  [
    'Do I have ',
    'Do you have ',
    'Does he have ',
    'Does she have ',
    'Do they have ',
    'Do we have ',
    'Did I have ',
    'Did you have ',
    'Did she have ',
    'Did he have ',
    'Did they have ',
    'Did we have '
  ],

  [
    'a meeting to attend to ',
    'a math class ',
    'a work party ',
    'a federal holiday ',
    'an overseas vacation ',
    'a place to go to ',
    'a family reunion ',
    'a school concert ',
    'a choir rehearsal ',
    'a science project ',
    'a history test ',
    'a presentation ',
    'a chemistry experiment ',
    'an exam review ',
    'a school orientation ',
    'an open house '
  ],

  [
    'this week?',
    'this month?',
    'this quarter?',
    'this semester?',
    'this year?',
    'this Monday?',
    'this Tuesday?',
    'this Wednesday?',
    'this Thursday?',
    'this Friday?',
    'this Saturday?',
    'this Sunday?',
    'this spring?',
    'this summer?',
    'this fall?',
    'this winter?'
  ]
);

// Statements (third type of sentences)
var randomStatement = new SentenceType(
  [
    'I love ',
    'I really like ',
    'I severely dislike ',
    'I hate ',
    'You love ',
    "You really don't like ",
    'You seriously hate ',
    'They like ',
    'They hate ',
    'He loves ',
    'He hates ',
    'She loves ',
    'She hates ',
    'We enjoy ',
    'We dislike '
  ],

  [
    'eating desserts in the park ',
    'seeing movie trailers ',
    'finding shells in the beach ',
    'leaving parties early ',
    'playing video games ',
    'writing essays ',
    'sitting in the auditorium ',
    'meeting new people ',
    'teaching little kids ',
    'building lego structures ',
    'standing in line ',
    'choosing where to go '
  ],

  [
    "when there's nothing else to do.",
    "when it's the beginning of the year.",
    'during the summer.',
    'during lunch break.',
    'before the holidays.',
    'after coming back from a vacation.',
    "when it's too early.",
    "when it's getting late.",
    "when there's a lot of stuff going on.",
    'after everybody leaves.',
    'before everybody arrives.'
  ]
);

// requests type and number of sentences from user
var automaticGenerator = function() {
  // request type of quotes desired by user
  var quoteType = Number(
    prompt(
      "Enter '1' for Random Comparison, '2' for Random Question, '3' for Random Statement, or Click Cancel to Stop"
    )
  );

  // reference quote type selected with appropriate sentence
  var quoteSelection = function(quoteType) {
    if (quoteType === 1) {
      return randomComparison.newSentence();
    } else if (quoteType === 2) {
      return randomQuestion.newSentence();
    } else if (quoteType === 3) {
      return randomStatement.newSentence();
    } else {
      return;
    }
  };

  // Loop for indefinite sentences (valid only with type 1-3)
  while (quoteType >= 1 && quoteType <= 3) {
    // request sentences (values 1 through 5 only or breaks)
    var numberOfQuotes = Number(
      prompt(
        "Enter the Number of Quotes Requested '1-5', or Click Cancel to Stop"
      )
    );

    // generate sentences requested
    if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
      for (var i = 0; i < numberOfQuotes; i++) {
        console.log(quoteSelection(quoteType));
      }
    } else {
      break;
    }
  }
};

// use randomComparison.newSentence(); for type 1
// use randomQuestion.newSentence(); for type 2
// use randomStatement.newSentence(); for type 3
// use automaticGenerator(); for loop
