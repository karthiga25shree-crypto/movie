```javascript
const movies = [
    {id:1,title:"Interstellar",year:2014,genre:"Sci-Fi",language:"English",rating:8.7,mood:["Thoughtful","Adventure"],description:"A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.",poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"},
    {id:2,title:"Inception",year:2010,genre:"Thriller",language:"English",rating:8.8,mood:["Thoughtful","Thriller"],description:"A skilled thief enters people's dreams to steal secrets and is offered a chance to erase his past.",poster:"https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"},
    {id:3,title:"The Dark Knight",year:2008,genre:"Action",language:"English",rating:9.0,mood:["Thriller","Thoughtful"],description:"Batman faces a dangerous criminal whose actions threaten Gotham City.",poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
    {id:4,title:"3",year:2012,genre:"Romance",language:"Tamil",rating:7.4,mood:["Romantic","Thoughtful"],description:"A young couple's relationship unfolds through love, friendship, and unexpected life challenges.",poster:"https://image.tmdb.org/t/p/w500/3ZJxjvQp0QJ5Q5p0p2x0p3p0p0p.jpg"},
    {id:5,title:"96",year:2018,genre:"Romance",language:"Tamil",rating:8.5,mood:["Romantic","Relaxed"],description:"Two former schoolmates reunite after many years, bringing back memories of their first love.",poster:"https://image.tmdb.org/t/p/w500/96movieposter.jpg"},
    {id:6,title:"Vinnaithaandi Varuvaayaa",year:2010,genre:"Romance",language:"Tamil",rating:8.0,mood:["Romantic","Thoughtful"],description:"An aspiring filmmaker falls in love with a woman whose family and beliefs complicate their relationship.",poster:"https://image.tmdb.org/t/p/w500/vtv-poster.jpg"},
    {id:7,title:"Sita Ramam",year:2022,genre:"Romance",language:"Telugu",rating:8.5,mood:["Romantic","Thoughtful"],description:"A soldier receives mysterious love letters that connect him to an unforgettable romance.",poster:"https://image.tmdb.org/t/p/w500/sitaramam-poster.jpg"},
    {id:8,title:"Premalu",year:2024,genre:"Comedy",language:"Malayalam",rating:7.9,mood:["Happy","Romantic"],description:"A young man navigates friendship, romance, and funny situations while finding his way in a new city.",poster:"https://image.tmdb.org/t/p/w500/premalu-poster.jpg"},
    {id:9,title:"Jai Bhim",year:2021,genre:"Drama",language:"Tamil",rating:8.7,mood:["Thoughtful"],description:"A lawyer fights for justice for a marginalized community in a powerful courtroom drama.",poster:"https://image.tmdb.org/t/p/w500/jai-bhim-poster.jpg"},
    {id:10,title:"Vikram",year:2022,genre:"Action",language:"Tamil",rating:8.3,mood:["Thriller","Adventure"],description:"A covert investigation uncovers a dangerous criminal network.",poster:"https://image.tmdb.org/t/p/w500/vikram-poster.jpg"},
    {id:11,title:"Leo",year:2023,genre:"Action",language:"Tamil",rating:7.2,mood:["Thriller","Adventure"],description:"A quiet cafe owner becomes entangled in a violent world connected to his mysterious past.",poster:"https://image.tmdb.org/t/p/w500/leo-poster.jpg"},
    {id:12,title:"Master",year:2021,genre:"Action",language:"Tamil",rating:7.3,mood:["Thriller","Adventure"],description:"An unconventional professor faces a ruthless criminal who exploits vulnerable young people.",poster:"https://image.tmdb.org/t/p/w500/master-poster.jpg"},
    {id:13,title:"Soorarai Pottru",year:2020,genre:"Drama",language:"Tamil",rating:8.7,mood:["Thoughtful","Happy"],description:"An ambitious man attempts to make air travel accessible to ordinary people.",poster:"https://image.tmdb.org/t/p/w500/soorarai-pottru-poster.jpg"},
    {id:14,title:"The Avengers",year:2012,genre:"Action",language:"English",rating:8.0,mood:["Adventure","Happy"],description:"A team of extraordinary heroes comes together to protect Earth from a global threat.",poster:"https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"},
    {id:15,title:"The Martian",year:2015,genre:"Sci-Fi",language:"English",rating:8.0,mood:["Adventure","Happy"],description:"An astronaut stranded on Mars uses science and determination to survive.",poster:"https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg"},
    {id:16,title:"Coco",year:2017,genre:"Animation",language:"English",rating:8.4,mood:["Happy","Relaxed"],description:"A young musician journeys into the Land of the Dead to uncover his family's history.",poster:"https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"},
    {id:17,title:"Inside Out",year:2015,genre:"Animation",language:"English",rating:8.1,mood:["Happy","Thoughtful"],description:"A young girl's emotions navigate the challenges of growing up.",poster:"https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg"},
    {id:18,title:"La La Land",year:2016,genre:"Romance",language:"English",rating:8.0,mood:["Romantic","Happy"],description:"A musician and an aspiring actress fall in love while chasing their dreams in Los Angeles.",poster:"https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"},
    {id:19,title:"Parasite",year:2019,genre:"Thriller",language:"Korean",rating:8.5,mood:["Thoughtful","Thriller"],description:"A struggling family becomes entangled with a wealthy household in an unexpected story of class and deception.",poster:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"},
    {id:20,title:"Train to Busan",year:2016,genre:"Thriller",language:"Korean",rating:7.6,mood:["Thriller","Adventure"],description:"Passengers struggle to survive a terrifying outbreak aboard a high-speed train.",poster:"https://image.tmdb.org/t/p/w500/2Gf1e5C5C4C5C5C5C5C5C5C5C5C.jpg"},
    {id:21,title:"3 Idiots",year:2009,genre:"Comedy",language:"Hindi",rating:8.4,mood:["Happy","Thoughtful"],description:"Three engineering students challenge expectations while discovering friendship and the meaning of success.",poster:"https://image.tmdb.org/t/p/w500/3idiots-poster.jpg"},
    {id:22,title:"Zindagi Na Milegi Dobara",year:2011,genre:"Adventure",language:"Hindi",rating:8.2,mood:["Happy","Adventure"],description:"Three friends embark on a road trip that changes their outlook on life and relationships.",poster:"https://image.tmdb.org/t/p/w500/znmd-poster.jpg"},
    {id:23,title:"Drishyam",year:2013,genre:"Thriller",language:"Malayalam",rating:8.3,mood:["Thriller","Thoughtful"],description:"A resourceful father uses his intelligence to protect his family when they become involved in a crime.",poster:"https://image.tmdb.org/t/p/w500/drishyam-poster.jpg"},
    {id:24,title:"Bangalore Days",year:2014,genre:"Comedy",language:"Malayalam",rating:8.3,mood:["Happy","Romantic"],description:"Three cousins explore friendship, relationships, and independence in a new city.",poster:"https://image.tmdb.org/t/p/w500/bangalore-days-poster.jpg"}
];

const grid = document.getElementById("movieGrid");
const favoritesGrid = document.getElementById("favoritesGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const languageFilter = document.getElementById("languageFilter");
const sortFilter = document.getElementById("sortFilter");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const favoritesEmpty = document.getElementById("favoritesEmpty");
const modal = document.getElementById("movieModal");
const toast = document.getElementById("toast");

let selectedMood = "";
let currentMovieId = null;
let toastTimer;

function loadFavorites() {
    try {
        const saved = JSON.parse(localStorage.getItem("cineverseFavorites") || "[]");
        return Array.isArray(saved)
            ? saved.filter(id => movies.some(movie => movie.id === id))
            : [];
    } catch {
        return [];
    }
}

let favorites = loadFavorites();

function saveFavorites() {
    try {
        localStorage.setItem("cineverseFavorites", JSON.stringify(favorites));
    } catch {
        showToast("Could not save favorites in this browser.");
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function posterFallback(movie) {
    const title = escapeHTML(movie.title);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="560" viewBox="0 0 400 560"><rect width="400" height="560" fill="#211a35"/><circle cx="320" cy="100" r="130" fill="#8157c8" opacity=".3"/><text x="200" y="255" fill="#ffffff" font-family="Arial" font-size="29" text-anchor="middle">${title}</text><text x="200" y="305" fill="#c7b3ff" font-family="Arial" font-size="18" text-anchor="middle">${movie.year}</text><text x="200" y="510" fill="#a78bfa" font-family="Arial" font-size="15" text-anchor="middle">CINEVERSE AI</text></svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function cardHTML(movie) {
    const saved = favorites.includes(movie.id);
    const poster = escapeHTML(movie.poster);

    return `
        <article class="movie-card">
            <div class="poster-wrap">
                <img
                    class="poster"
                    src="${poster}"
                    alt="${escapeHTML(movie.title)} poster"
                    loading="lazy"
                    data-movie-id="${movie.id}"
                >
                <span class="rating">⭐ ${movie.rating.toFixed(1)}</span>
                <button
                    class="heart-btn ${saved ? "saved" : ""}"
                    data-action="favorite"
                    data-id="${movie.id}"
                    aria-label="${saved ? "Remove from" : "Add to"} watchlist: ${escapeHTML(movie.title)}"
                    aria-pressed="${saved}"
                >${saved ? "♥" : "♡"}</button>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${escapeHTML(movie.title)}</h3>
                <p class="movie-meta">${movie.year} · ${escapeHTML(movie.language)} · ${escapeHTML(movie.genre)}</p>
                <div class="movie-tags">
                    ${movie.mood.slice(0, 2).map(mood => `<span class="tag">${escapeHTML(mood)}</span>`).join("")}
                </div>
                <button class="details-btn" data-action="details" data-id="${movie.id}">
                    View Details →
                </button>
            </div>
        </article>
    `;
}

function attachPosterFallbacks(container) {
    container.querySelectorAll("img[data-movie-id]").forEach(img => {
        img.onerror = () => {
            const movie = movies.find(item => item.id === Number(img.dataset.movieId));
            if (movie && !img.dataset.fallbackUsed) {
                img.dataset.fallbackUsed = "true";
                img.src = posterFallback(movie);
            }
        };
    });
}

function getFilteredMovies() {
    const query = searchInput.value.trim().toLowerCase();
    const genre = genreFilter.value;
    const language = languageFilter.value;

    let filtered = movies.filter(movie => {
        const matchesSearch = [
            movie.title, movie.genre, movie.language,
            String(movie.year), ...movie.mood
        ].join(" ").toLowerCase().includes(query);

        const matchesGenre = genre === "All" || movie.genre === genre;
        const matchesLanguage = language === "All" || movie.language === language;
        const matchesMood = !selectedMood || movie.mood.includes(selectedMood);

        return matchesSearch && matchesGenre && matchesLanguage && matchesMood;
    });

    switch (sortFilter.value) {
        case "rating":
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case "year":
            filtered.sort((a, b) => b.year - a.year);
            break;
        case "title":
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }

    return filtered;
}

function renderMovies() {
    const filtered = getFilteredMovies();

    grid.innerHTML = filtered.map(cardHTML).join("");
    resultsCount.textContent = `${filtered.length} movie${filtered.length === 1 ? "" : "s"} found`;
    emptyState.hidden = filtered.length !== 0;

    attachPosterFallbacks(grid);
    renderFavorites();
}

function renderFavorites() {
    const favoriteMovies = favorites
        .map(id => movies.find(movie => movie.id === id))
        .filter(Boolean);

    favoritesGrid.innerHTML = favoriteMovies.map(cardHTML).join("");
    favoritesEmpty.hidden = favoriteMovies.length > 0;

    attachPosterFallbacks(favoritesGrid);
}

function toggleFavorite(id) {
    const movie = movies.find(item => item.id === id);
    if (!movie) return;

    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
        showToast(`${movie.title} removed from your watchlist.`);
    } else {
        favorites.push(id);
        showToast(`${movie.title} added to your watchlist! ❤️`);
    }

    saveFavorites();
    renderMovies();
}

function openMovie(id) {
    const movie = movies.find(item => item.id === id);
    if (!movie) return;

    currentMovieId = id;

    document.getElementById("modalPoster").src = posterFallback(movie);
    document.getElementById("modalPoster").alt = `${movie.title} poster`;
    document.getElementById("modalGenre").textContent = movie.genre.toUpperCase();
    document.getElementById("modalTitle").textContent = movie.title;
    document.getElementById("modalMeta").textContent =
        `${movie.year} · ${movie.language} · ⭐ ${movie.rating.toFixed(1)}/10`;
    document.getElementById("modalDescription").textContent = movie.description;

    document.getElementById("modalTags").innerHTML = movie.mood
        .map(mood => `<span class="tag">${escapeHTML(mood)}</span>`)
        .join("");

    updateModalFavoriteButton();

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("closeModal").focus();
}

function updateModalFavoriteButton() {
    const button = document.getElementById("modalFavorite");
    const saved = favorites.includes(currentMovieId);
    button.textContent = saved ? "♥ Remove from Watchlist" : "♡ Add to Watchlist";
}

function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
}

function surpriseMe() {
    const filtered = getFilteredMovies();

    if (filtered.length === 0) {
        showToast("No matching movies. Try changing your filters!");
        return;
    }

    const movie = filtered[Math.floor(Math.random() * filtered.length)];
    openMovie(movie.id);
}

searchInput.addEventListener("input", renderMovies);
genreFilter.addEventListener("change", renderMovies);
languageFilter.addEventListener("change", renderMovies);
sortFilter.addEventListener("change", renderMovies);

document.querySelectorAll(".mood-card").forEach(button => {
    button.addEventListener("click", () => {
        selectedMood = button.dataset.mood;

        document.querySelectorAll(".mood-card").forEach(card => {
            const active = card === button;
            card.classList.toggle("active", active);
            card.setAttribute("aria-pressed", String(active));
        });

        renderMovies();
        document.getElementById("discover").scrollIntoView({ behavior: "smooth" });
    });
});

function clearMood() {
    selectedMood = "";
    document.querySelectorAll(".mood-card").forEach(button => {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
    });
    renderMovies();
}

document.getElementById("clearMood").addEventListener("click", clearMood);

function resetFilters() {
    searchInput.value = "";
    genreFilter.value = "All";
    languageFilter.value = "All";
    sortFilter.value = "recommended";
    clearMood();
}

document.getElementById("resetFilters").addEventListener("click", resetFilters);
document.getElementById("emptyReset").addEventListener("click", resetFilters);
document.getElementById("surpriseBtn").addEventListener("click", surpriseMe);
document.getElementById("ctaBtn").addEventListener("click", surpriseMe);

document.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const id = Number(button.dataset.id);
    if (!Number.isInteger(id)) return;

    if (button.dataset.action === "favorite") {
        toggleFavorite(id);
    } else if (button.dataset.action === "details") {
        openMovie(id);
    }
});

document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);

document.getElementById("modalFavorite").addEventListener("click", () => {
    if (currentMovieId !== null) {
        toggleFavorite(currentMovieId);
        updateModalFavoriteButton();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});

document.getElementById("profileBtn").addEventListener("click", () => {
    showToast("Your personal movie collection is ready!");
});

document.getElementById("movieCount").textContent = `${movies.length}`;

renderMovies();
```
