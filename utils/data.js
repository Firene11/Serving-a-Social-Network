// create a database of random users and random thoughts

/*
example user data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
 */

/*
example thought data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
 */

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
        "userId": "5edff358a0fcb779aa7b118b"
      },
      {
        "thoughtText": "When ther's a will, there's a way!",
        "username": "daniel",
        "userId": ""
      },
      {
        "thoughtText": "Is the moon made of cheese?",
        "username": "terence",
        "userId": ""
      },
      {
        "thoughtText": "I wish summer would never end",
        "username": "sarah",
        "userId": ""
      },
      {
        "thoughtText": "I am a pretty smart guy.",
        "username": "jacob",
        "userId": ""
      },
      {
        "thoughtText": "What the heck is happening today?",
        "username": "aviad",
        "userId": ""
      },
      {
        "thoughtText": "Cats are hilarious",
        "username": "ben",
        "userId": ""
      },
      {
        "thoughtText": "I am a man of mystery",
        "username": "chris",
        "userId": ""
      },
      {
        "thoughtText": "I will master the universe",
        "username": "midge",
        "userId": ""
      },
];

const users = [];

// Function to generate random users that we can add to the database. Includes user thoughts.
const getRandomUser = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        description: getRandomArrItem(someUsers),
        thoughts: [...getUserThoughts(1)],
      });
    }
    return results;
  };
  
  // Create the responses that will be added to each user
  const getRandomThought = (int) => {
    if (int === 1) {
      return getRandomArrItem(someThoughts);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        responseBody: getRandomArrItem(someThoughts),
        username: getRandomUser(),
      });
    }
    return results;
  };
  


// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThought };
  