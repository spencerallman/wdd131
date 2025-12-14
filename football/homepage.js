const funFacts = [
  "The first college football game was played in 1869 between Rutgers and Princeton.",
  "The Rose Bowl, first played in 1902, is the oldest bowl game.",
  "Army vs. Navy is one of the longest-running rivalries, dating back to 1890.",
  "College football fields are 100 yards long, just like the NFL.",
  "The first televised game was on September 30 1939 between Fordham University and Waynesburg College.",
  "On October 7 1916, Georgia tech won the highest scoring game ever 222-0 vs Cumberland.",
  "The University of Michigan has the record for most total wins as a program: 1,018!"
];

const factBtn = document.getElementById("factBtn");
const factDisplay = document.getElementById("factDisplay");

factBtn.addEventListener("click", () => {
  
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const randomFact = funFacts[randomIndex];

  factDisplay.textContent = randomFact;
});
