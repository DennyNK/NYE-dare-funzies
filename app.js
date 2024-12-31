function randomizer (dares) {

    let remainingDares = [...dares];
    const button = document.querySelector('#button');
    const txtBox = document.getElementById('text-box');


    button.addEventListener('click', () => {
        const randomTxt = Math.floor(remainingDares.length * Math.random());
        let currDare = remainingDares[randomTxt]
        txtBox.value = currDare;
        let index = remainingDares.indexOf(currDare);
        remainingDares.splice(index, 1);

        if (remainingDares.length === 0) {
            remainingDares = [...dares];
        }
    })
    


}

randomizer ([
    'Share your most embarrassing moment from 2023', 
    'Share your biggest goal or resolution for the upcoming year', 
    'Wear a mustache (real or drawn) for 15 mins', 
    'Wear a fake tattoo on your forehead for 15 mins', 
    'Show off your best cartwheel',
    'Do a dramatic reading of the last text you received',
    'Snap a silly selfie with the person sitting next to you',
    'Instead of talking human talk in some animal sound for the next 5 mins',
    'Send I love you to the second person in your instagram dms',
    "Tell the person on your right why you're their new best friend",
    'Write Happy New Year with your non-dominant hand',
    'Sing a karaoke duet with someone of a song by your choice',
    'Do the robot dance for 1 minute',
    'Pretend to be a news anchor and give a "year in review"',
    'Try to juggle 3 random objects',
    "Pretend you're a time traveler from 2050",
    'Pretend to be a famous chef tasting party snacks',
    'Start a chat with someone by using lyrics of a song by your choice',
    'Do the Macarena while wearing oven mitts (if there are any available)',
    'Beatbox for 1 min',
    "Do a dramatic slow-motion dance while pretending you're in a music video",
    'Start a human pyramid with your friends (or a pile of random objects)',
    "Have a dance-off where everyone tries to out-silly each other",
    "Guess the New Year's resolution of the person to your left",
    'Create a human knot with 3 more people and untangle yourselves',
    'Attempt to drink a cup of water while holding it with only your elbows',
    "Draw what you think you'll look like in 10 years",
    'Share some of your funniest moments from the past year',
    'Write a short message to your future self and read it out loud',
    'Create a new holiday for the year and explain its traditions',
    'Predict something hilarious that will happen in 2025',
    'Convince people to buy 2025 like in an ad'
])