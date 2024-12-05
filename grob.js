const data = [
    { name: "Albert Reinhard Hensler", url: "Albert Reinhard Hensler.html" },
    { name: "Phantom", url: "Phantom.html" },
    { name: "Jacob Skawler", url: "Jacob Skawler.html" },
    { name: "Kevin", url: "Kevin.html" },
    { name: "Grobprusreisches Reich", url: "Grobprusreisches Reich.html" },
    { name: "Dominion of Darklight", url: "Dominion of Darklight.html" },
    { name: "Space State of Eurasia", url: "Space State of Eurasi.html" },
    { name: "Oriez", url: "Oriez.html" },
    { name: "Lutzereinpakt", url: "Lutzereinpakt.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
    { name: "Wagub", url: "watermelon.html" },
  ];
  
  const searchInput = document.getElementById("search");
  const resultsContainer = document.getElementById("results");
  
  searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ""; // Clear previous results
  
    const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
  
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = item.name;
            a.href = item.url; // Set the URL for the link
            a.target = "_blank"; // Optional: open in a new tab
            li.appendChild(a);
            resultsContainer.appendChild(li);
        });
    } else {
        resultsContainer.innerHTML = "<li>No results found</li>";
    }
  });