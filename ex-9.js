// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here


let totalScores = 0;
let NumberOfstudent = 0;

for( let studentName in studentsScore)
{ console.info(totalScores = totalScores + studentsScore[studentName]); 
console.info(NumberOfstudent = NumberOfstudent + 1); }

let averageScore = totalScores / NumberOfstudent

console.log( 'Average score is ' + averageScore);


let currentScore = 0;
let highestScore = 0;
let highestScoreName;
for(let studentName in studentsScore)
{ currentScore = studentsScore[studentName];
  if ( currentScore > highestScore)
{ console.info(highestScore = currentScore);
  highestScoreName = studentName};
  }

  console.log(highestScoreName);
  console.log( highestScoreName + ' has the highest score, which is ' + highestScore + ' points.')


let lowestScore = Number.MAX_VALUE;
let lowestScoreName;

for( let studentName in studentsScore)
{ console.info(currentScore = studentsScore[studentName])
if( currentScore < lowestScore) 
  {lowestScore = currentScore;
  lowestScoreName = studentName;}
}


console.log(lowestScoreName + ' has lowest score, which is ' + lowestScore + ' points.')

