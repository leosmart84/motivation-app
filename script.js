function generateQuote() {
  const quotes = [
    "Start before you are ready.",
    "Done is better than perfect.",
    "Small steps every day.",
    "Your future self will thank you.",
    "Consistency beats motivation."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
