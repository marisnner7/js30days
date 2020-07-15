// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

 const peopleYear = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const birthDate = inventors.filter((inventor) => (

  inventor.year > 1500 && inventor.year < 1600
));

// console.table(birthDate);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullName = inventors.map((inventor) => (
  inventor.first + ' ' +inventor.last
));

//console.table(fullName);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const orderedAge = inventors.sort((a,b) => (
  b.year > a.year ? -1 : 1
));

//console.table(orderedAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// console.log(yearLived);
// 5. Sort the inventors by years lived

const sortByYears = inventors.sort((a,b) => {
  const lastGuy = a.passed - a.year;
  const firstGuy = b.passed - b.year;
  return lastGuy > firstGuy ? 1 : -1
});

// console.table(sortByYears);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortPeople = people.sort(function (lastName, firstName) {
  const [aLast, aFirst] = lastName.split(', ');
  const [bLast, bFirst] = firstName.split(', ');
  return aLast > bLast ? -1 : 1
})
// console.log(sortPeople);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];


 // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?
  const olderThan = peopleYear.some( maior => {
    const currentYear = (new Date().getFullYear());
      if(currentYear - maior.year > 19)  {
        // console.table(maior.name);
      }

  });
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const filterComment = comments.find(single => {
        if(single.id === 823423){
        // console.log(single.text) 
      }
      });
      
    // Array.prototype.findIndex()
    // Find the comment with this ID

    const findComment = comments.findIndex( comment =>
      comment.id === 823423 )
    // delete the comment with the ID of 823423
    console.log(findComment)

    const newComments = [
      ...comments.slice(0, findComment),
      ...comments.splice(findComment +1 )
    ];