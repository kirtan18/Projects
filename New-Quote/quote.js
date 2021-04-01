const quotes = [
  {
    'author':'Walt Disney',
    'quote': 'The way to get started is to quit talking and begin doing.'
  },
  {
    'author':' Will Rogers',
     'quote':'Live in such a way that you would not be ashamed to sell your parrot to the town gossip.'
  },
  {
    'author':'vince lombardi',
   'quote':'The difference between a successful person and others is not a lack of strength, not a lack of knowledge but rather a lack of will.'
  },
  {
    'author':'Walt Disney',
    'quote':'All our dreams can come true, if we have the courage to pursue them.'
  },
  {
    'author':'Elon Musk',
    'quote':'Some people do not like change, but you need to embrace change if the alternative is disaster. '
  },
  {
    'author':'Mark zuckerberg',
    'quote':'By giving people the power to share, we are making the world more transparent.'
  },
  {
    'author':'Elon Musk',
    'quote':'If you get up in the morning and think the future is going to be better, it is a bright day.'
  },
  {
    'author':'Napoleon Hill',
    'quote':'if you cannot do great things, do small things in a great way.'
  },
  {
    'author':'Abdul Kalam A. P. J',
    'quote':'Dream is not that which you see while sleeping it is something that does not let you sleep. And thoughts result in action.'
  },
  {
    'author':' Will Rogers',
    'quote':'even if you’re on the right track, you’ll get run over if you just sit there.'
  },
  ];

  function newQuote(){
  	const randomNumber = Number.parseInt(Math.random() * (quotes.length + 1) );
  	document.querySelector('#quoteDisplay').textContent  = `\"${quotes[randomNumber].quote}\"`;
    document.querySelector('#author').textContent  = `-${quotes[randomNumber].author}`;
}

var myDate = new Date();

    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Morning';
    else if (hrs >= 12 && hrs <= 16)
        greet = 'Afternoon';
    else if (hrs > 16 && hrs < 19)
      greet = 'Evening';
    else if (hrs >= 19 && hrs <= 24)
        greet = 'night';

    document.getElementById('time').innerHTML = greet;





 