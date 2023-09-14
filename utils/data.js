// create a database of random users and random thoughts

const someUsers = [
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    },
    {
        "username": "daniel",
        "email": "daniel@gmail.com"
    },
    {
        "username": "terence",
        "email": "terence@outlook.com"
    },
    {
        "username": "sarah",
        "email": "sarah@hotmail.com"
    },
    {
        "username": "jacob",
        "email": "jacob@gmail.com"
    },
    {
        "username": "aviad",
        "email": "aviad@netwoking.com"
    },
    {
        "username": "ben",
        "email": "benben@gmail.com"
    },
    {
        "username": "chris",
        "email": "christopher@usermail.com"
    },
    {
        "username": "midge",
        "email": "midgiecat@catsnow.com"
    },
  ];

const someThoughts = [
    {
        "thoughtText": "Here's a cool thought...",
        "username": "lernantino",
      },
      {
        "thoughtText": "When ther's a will, there's a way!",
        "username": "daniel",
      },
      {
        "thoughtText": "Is the moon made of cheese?",
        "username": "terence",
      },
      {
        "thoughtText": "I wish summer would never end",
        "username": "sarah",
      },
      {
        "thoughtText": "I am a pretty smart guy.",
        "username": "jacob",
      },
      {
        "thoughtText": "What the heck is happening today?",
        "username": "aviad",
      },
      {
        "thoughtText": "Cats are hilarious",
        "username": "ben",
      },
      {
        "thoughtText": "I am a man of mystery",
        "username": "chris",
      },
      {
        "thoughtText": "I will master the universe",
        "username": "midge",
      },
];

const users = [];

// Get a random user given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getRandomUser = () =>
  `${getRandomArrItem(someUsers)}`;

  
  // Create the thoughts that will be added to each user
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        responseBody: getRandomArrItem(someThoughts),
        username: getRandomUser()[0],
      });
    }
    return results;
  };
  


// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThought };
  