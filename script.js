function showFunFact() {
  const facts = [
    "Great ads make people *feel* something.",
    "We’ve mastered the art of the cheeky tagline.",
    "Behind every viral campaign is a brilliant coffee-fueled brainstorm.",
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fun-fact").textContent = randomFact;
}
