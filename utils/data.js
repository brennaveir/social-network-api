const usernames = [
    herabera,
    helopastry,
    theenbean,
    apollobollo,
    twydiddy,
    duallabear,
    brennaveir,
    bradJennings,
    korok,
    thwomp,
    rupee,
    bulletBill,
    pokeball,
    sheikahTablet,
    hylianShield,
    link,
    ganondorf,
    zelda, 
    mario,
    peach,
    bowser,
    mewtwo,
    gyarados, 
    sylveon,
    glaceon, 
    vaporeon,
    flareon,
    eevee,
    leafeon,
    espeon,
    umbreon
  ];
  
  const thoughtDescriptions = [
  "It's dangerous to go alone! Take this!",
  "There's No Sense In Going Out Of Your Way To Get Somebody To Like You.",
  "Do You Always Need A Reason To Help Somebody?",
  "Hey, I'll Use My Trusty Frying Pan As A Drying Pan.",
"You See, Sometimes Friends Have To Go Away, But A Part Of Them Stays Behind With You.",
"From Now On, I Swear I'll Never Run Away And Leave My Friends Behind Again. No More Excuses.",
"A Caterpie May Change Into A Butterfree, But The Heart That Beats Inside Remains The Same.",
"You Can't Expect To Win Every Single Battle...",
"I See Now That The Circumstances Of One's Birth Are Irrelevant. It Is What You Do With The Gift Of Life That Determines Who You Are.",
"It's a secret to everybody",
"Grumble, Grumble",
"I am Error",
"Well excuse me, princess",
"Well, My Mind Is Getting Hazy... Please Let Me Hear The Sound Of The Flute One Last Time...",
"Those Who Do Not Know The Danger Of Wielding Power Will, Before Long, Be Ruled By It.",
"If I Was A Seagull, I Would Fly As Far As I Could! I Would Fly To Faraway Places And Sing For Many People! … If I Wish To The Wind Fish, I Wonder If My Dream Will Come True...",
"I Want You To Live For The Future. There May Be Nothing Left For You… But Despite That, You Must Look Forward And Walk A Path Of Hope, Trusting That It Will Sustain You When Darkness Comes.",
"An Incarnation Of My Hatred Shall Ever Follow Your Kind, Dooming Them To Wander A Blood-Soaked Sea Of Darkness For All Time!",
"I Wasn't Kidding When I Said Pay! Now You'll Pay The Ultimate Price!",
"A Sword Wields No Strength Unless The Hand That Holds It Has Courage.",
"Courage Need Not Be Remembered, For It Is Never Forgotten.",
"Your True Face... What Kind Of... Face Is It? I Wonder... The Face Under The Mask... Is That… Your True Face?",
"Do You Ever Feel A Strange Sadness As Dusk Falls? They Say It's The Only Time When Our World Intersects With Theirs... [...] That Is Why Loneliness Always Pervades The Hour Of Twilight.",
"The Flow Of Time Is Always Cruel... Its Speed Seems Different For Each Person, But No One Can Change It... A Thing That Does Not Change With Time Is A Memory Of Younger Days.",
"The Right Thing… What Is It? I Wonder… If You Do The Right Thing… Does It Really Make… Everybody… Happy?",
  
];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUser = () =>
    `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
  
  // Function to generate random thoughts that we can add to user object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtName: getRandomArrItem(thoughtDescriptions),
        score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUser, getRandomThoughts };
  