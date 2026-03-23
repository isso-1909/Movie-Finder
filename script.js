const apiKey = "5b1522e7";
const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-search");
const cardContainer = document.querySelector(".card-container");
const heroText = document.getElementById("heroText");

btnSearch.addEventListener("click", GetData);
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") GetData();
});

function GetData() {
  const inputValue = inputSearch.value.trim();
  if (!inputValue) return;

  cardContainer.innerHTML = "";

  heroText.classList.add("hidden");

  fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.Search) {
        cardContainer.innerHTML = `<p class="state-msg">No results found for "${inputValue}".</p>`;
        return;
      }
      data.Search.forEach(makeElement);
    })
    .catch((err) => {
      cardContainer.innerHTML = `<p class="state-msg">Something went wrong. Please try again.</p>`;
      console.error("Fetch error:", err);
    });
}

function makeElement(movie) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("role", "listitem");

  const imgWrap = document.createElement("div");
  imgWrap.className = "img-wrap";

  const img = document.createElement("img");
  img.className = "img-card";
  img.src = movie.Poster !== "N/A" ? movie.Poster : "";
  img.alt = movie.Title;
  img.onerror = () => {
    img.src = "https://via.placeholder.com/220x320/161616/6b6560?text=No+Image";
  };

  imgWrap.appendChild(img);

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("div");
  title.className = "card-title";
  title.innerText = movie.Title;

  const year = document.createElement("div");
  year.className = "description";
  year.innerText = movie.Year;

  const btn = document.createElement("button");
  btn.className = "card-btn";
  btn.innerText = "Details";
  btn.addEventListener("click", () => OpenWindow(movie.imdbID));

  body.appendChild(title);
  body.appendChild(year);
  body.appendChild(btn);

  card.appendChild(imgWrap);
  card.appendChild(body);
  cardContainer.appendChild(card);
}

function OpenWindow(id) {
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".info").innerHTML = "";
      makeEl(data);
      document.querySelector(".window").classList.add("active");
    })
    .catch((err) => console.error("Failed to load movie details:", err));
}

function makeEl(movie) {
  const panel = document.querySelector(".info");

  const fields = [
    { label: "Title", value: movie.Title },
    { label: "Year", value: movie.Year },
    { label: "Rated", value: movie.Rated },
    { label: "Released", value: movie.Released },
    { label: "Runtime", value: movie.Runtime },
    { label: "Director", value: movie.Director },
    { label: "Actors", value: movie.Actors },
    { label: "Writer", value: movie.Writer },
    { label: "Language", value: movie.Language },
    { label: "Awards", value: movie.Awards },
    { label: "BoxOffice", value: movie.BoxOffice },
    { label: "imdbID", value: movie.imdbID },
  ];

  fields.forEach(({ label, value }) => {
    const row = document.createElement("div");
    row.className = "text-win";

    const lbl = document.createElement("span");
    lbl.className = "label";
    lbl.innerText = label;

    const val = document.createElement("span");
    val.className = "value";
    val.innerText = value ?? "N/A";

    row.appendChild(lbl);
    row.appendChild(val);
    panel.appendChild(row);
  });

  const closeBtn = document.createElement("button");
  closeBtn.className = "btn-close";
  closeBtn.innerText = "✕ Close";
  closeBtn.onclick = () => {
    document.querySelector(".window").classList.remove("active");
  };
  panel.appendChild(closeBtn);
}

document.querySelector(".window").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".window").classList.remove("active");
  }
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
