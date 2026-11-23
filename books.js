
const booksGrid = document.getElementById("booksGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll("[data-genre]");
const resultsCount = document.getElementById("resultsCount");
const emptyMessage = document.getElementById("emptyMessage");
const readBooksCount = document.getElementById("readBooksCount");
const genreChart = document.getElementById("genreChart");
const topGenre = document.getElementById("topGenre");
const favoritesList = document.getElementById("favoritesList");
const emptyFavorites = document.getElementById("emptyFavorites");
const roomIntro = document.getElementById("roomIntro");
const roomLabel = document.getElementById("roomLabel");
const roomTitle = document.getElementById("roomTitle");
const roomDescription = document.getElementById("roomDescription");
const classicsEntrance = document.getElementById("classicsEntrance");
const literaryVault = document.getElementById("literaryVault");
const vaultFeature = document.getElementById("vaultFeature");



// Get selected genre from URL
let selectedGenre = new URLSearchParams(window.location.search)
    .get("genre") || "All";

if (!["All", ...new Set(books.map(book => book.genre))]
    .includes(selectedGenre)) {
    selectedGenre = "All";
    }

    const roomDetails = {
    All: {
        label: "THE READING ROOM COLLECTION",
        title: "Explore Our Library",
        description: "Discover stories worth reading, from timeless classics to modern favorites."
    },

    Classics: {
        label: "WELCOME TO THE CLASSICS ROOM",
        title: "Timeless Classics",
        description: "Step into timeless stories, literary treasures, and unforgettable characters."
    }
};

function updateRoomIntro() {
    const room = roomDetails[selectedGenre] || roomDetails.All;

    roomLabel.textContent = room.label;
    roomTitle.textContent = room.title;
    roomDescription.textContent = room.description;
    console.log("Description text:", roomDescription.textContent);

    document.body.classList.toggle(
        "classics-room",
        selectedGenre === "Classics"
    );

    classicsEntrance.hidden = selectedGenre !== "Classics";

}


// Load saved favorites
let favorites = [];

try {
    favorites = JSON.parse(
        localStorage.getItem("readingFavorites")
    ) || [];

    if (!Array.isArray(favorites)) {
        favorites = [];
    }
} catch {
    favorites = [];
}

// Load saved read books 
let readBooks = [];

try {
    readBooks = JSON.parse(
        localStorage.getItem("readBooks")
    ) || [];

     if (!Array.isArray(readBooks)) {
        readBooks = [];
    }
} catch {
    readBooks = [];
}

// Create a book card
function createBookCard(book) {

    const card = document.createElement("article");
    card.className = "book-card";

    // Book cover
    const image = document.createElement("img");
    image.src = book.image;
    image.alt = `${book.title} book cover`;
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "book-info";

    // Genre
    const genre = document.createElement("span");
    genre.className = "book-genre";
    genre.textContent = book.genre;

    // Title
    const title = document.createElement("h3");
    title.textContent = book.title;

    // Author
    const author = document.createElement("p");
    author.className = "book-author";
    author.textContent = `By ${book.author}`;

    // Publication year
    const year = document.createElement("p");
    year.className = "book-year";
    year.textContent = `Published: ${book.year}`;

    // Description
    const description = document.createElement("p");
    description.className = "book-description";
    description.textContent = book.description;

    // Book details link
    const detailsLink = document.createElement("a");
    detailsLink.href = `book-details.html?id=${book.id}`;
    detailsLink.className = "book-link";
    detailsLink.textContent = "View Book Details →";

    // Favorites button
    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "favorite-btn";

    function updateFavoriteButton() {
        const isFavorite = favorites.includes(book.id);

        favoriteButton.textContent = isFavorite
            ? "♥ Saved to Favorites"
            : "♡ Add to Favorites";

        favoriteButton.setAttribute(
            "aria-pressed",
            String(isFavorite)
        );
    }

    favoriteButton.addEventListener("click", () => {

        if (favorites.includes(book.id)) {
            favorites = favorites.filter(id => id !== book.id);
        } else {
            favorites.push(book.id);
        }

        try {
            localStorage.setItem(
                "readingFavorites",
                JSON.stringify(favorites)
            );
        } catch {
            // Favorites remain available for this session.
        }

        updateFavoriteButton();
        renderFavorites();
    });

    updateFavoriteButton();

    // Mark book as read button
const readButton = document.createElement("button");
readButton.type = "button";
readButton.className = "read-btn";

function updateReadButton() {
    const isRead = readBooks.includes(book.id);

    readButton.textContent = isRead
        ? "✓ Marked as Read"
        : "Mark as Read";

    readButton.setAttribute(
        "aria-pressed",
        String(isRead)
    );
}

readButton.addEventListener("click", () => {
    if (readBooks.includes(book.id)) {
        readBooks = readBooks.filter(id => id !== book.id);
    } else {
        readBooks.push(book.id);
    }

    localStorage.setItem(
        "readBooks",
        JSON.stringify(readBooks)
    );

    updateReadButton();
    updateReadingAnalytics();
});

updateReadButton();

    // Add book information
    info.append(
        genre,
        title,
        author,
        year,
        description,
        detailsLink,
        favoriteButton,
        readButton
    );

    // Add image and information to card
    card.append(image, info);

    return card;
}

// Display favorite books
function renderFavorites() {
    favoritesList.replaceChildren();

    const favoriteBooks = books.filter(book =>
        favorites.includes(book.id)
    );

    emptyFavorites.hidden = favoriteBooks.length > 0;

    favoriteBooks.forEach(book => {
        const favoriteItem = document.createElement("div");
        favoriteItem.className = "favorite-item";

        const image = document.createElement("img");
        image.src = book.image;
        image.alt = `${book.title} book cover`;
        image.className = "favorite-cover";
        image.loading = "lazy";

        const bookInfo = document.createElement("div");
        bookInfo.className = "favorite-info";
        
        const title = document.createElement("h3");
        title.textContent = book.title;
        
        const genre = document.createElement("p");
        genre.textContent = book.genre;
        
        bookInfo.append(title, genre);
        
        // Remove from Favorites button
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-favorite-btn";
        removeButton.textContent = "♥";
        removeButton.setAttribute(
            "aria-label",
            `Remove ${book.title} from favorites`
        );
        removeButton.title = "Remove from Favorites";
        removeButton.addEventListener("click", () => {
        favorites = favorites.filter(id => id !== book.id);
        
        try {
        localStorage.setItem(
            "readingFavorites",
            JSON.stringify(favorites)
         );
        } catch {
        // Favorites remain available for this session.
        }
        renderFavorites();
        renderBooks();
    });
        favoriteItem.append(image, bookInfo, removeButton);
        favoritesList.appendChild(favoriteItem);
    });
}

function renderLiteraryVault() {
    if (!literaryVault || !vaultFeature) {
        return;
    }

    const featuredBook = books.find(book => book.id === 1);

    literaryVault.hidden = selectedGenre !== "Classics";

    if (!featuredBook || selectedGenre !== "Classics") {
        vaultFeature.replaceChildren();
        return;
    }

    vaultFeature.replaceChildren();

    const cover = document.createElement("img");
    cover.className = "vault-cover";
    cover.src = featuredBook.image;
    cover.alt = `${featuredBook.title} book cover`;
    cover.loading = "lazy";

    const details = document.createElement("div");
    details.className = "vault-details";

    const label = document.createElement("span");
    label.className = "vault-book-label";
    label.textContent = "THE FEATURED CLASSIC";

    const title = document.createElement("h3");
    title.textContent = featuredBook.title;

    const author = document.createElement("p");
    author.className = "vault-author";
    author.textContent = `By ${featuredBook.author} · ${featuredBook.year}`;

    const description = document.createElement("p");
    description.className = "vault-description";
    description.textContent = featuredBook.description;

    const actions = document.createElement("div");
    actions.className = "vault-actions";

    const discoverLink = document.createElement("a");
    discoverLink.className = "vault-discover";
    discoverLink.href = `book-details.html?id=${featuredBook.id}`;
    discoverLink.textContent = "Discover This Classic →";

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "vault-favorite";

    function updateVaultFavorite() {
        const isFavorite = favorites.includes(featuredBook.id);

        favoriteButton.textContent = isFavorite
            ? "♥ Saved to Favorites"
            : "♡ Add to Favorites";

        favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    }

    favoriteButton.addEventListener("click", () => {
        if (favorites.includes(featuredBook.id)) {
            favorites = favorites.filter(id => id !== featuredBook.id);
        } else {
            favorites.push(featuredBook.id);
        }

        try {
            localStorage.setItem("readingFavorites", JSON.stringify(favorites));
        } catch {
            // Keep favorites available for this session.
        }

        updateVaultFavorite();
        renderFavorites();
        renderBooks();
    });

    updateVaultFavorite();

    actions.append(discoverLink, favoriteButton);
    details.append(label, title, author, description, actions);
    vaultFeature.append(cover, details);
}


// Display books based on search and genre
function renderBooks() {
    updateRoomIntro();
    renderLiteraryVault();

    const query = searchInput.value.trim().toLowerCase();

    const filteredBooks = books.filter(book => {

        const matchesGenre =
            selectedGenre === "All" ||
            book.genre === selectedGenre;

        const matchesSearch =
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query);

        return matchesGenre && matchesSearch;
    });

    booksGrid.replaceChildren();

    filteredBooks.forEach(book => {
        booksGrid.appendChild(createBookCard(book));
    });

    resultsCount.textContent =
        `${filteredBooks.length} books found`;

    emptyMessage.hidden = filteredBooks.length !== 0;

    filterButtons.forEach(button => {

        const isActive =
            button.dataset.genre === selectedGenre;

        button.classList.toggle("active", isActive);

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });
}

// Search as user types
searchInput.addEventListener("input", renderBooks);

// Filter by genre
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedGenre = button.dataset.genre;

        const url = new URL(window.location.href);

        if (selectedGenre === "All") {
            url.searchParams.delete("genre");
        } else {
            url.searchParams.set("genre", selectedGenre);
        }

        window.history.replaceState({}, "", url);

        renderBooks();
    });
});

// Display books when page loads
renderBooks();
renderFavorites();

// Update reading analytics
function updateReadingAnalytics() {
    readBooksCount.textContent = readBooks.length;

    const readBooksData = books.filter(book =>
        readBooks.includes(book.id)

    );

    const genreCounts = {};

    readBooksData.forEach(book => {

        if (genreCounts[book.genre]) {
            genreCounts[book.genre]++;
        } else {
            genreCounts[book.genre] = 1;
        }
    });

    genreChart.replaceChildren();

const maxGenreCount = Math.max(0, ...Object.values(genreCounts));

for (const genre in genreCounts) {
    const count = genreCounts[genre];

    const genreRow = document.createElement("div");
    genreRow.className = "genre-row";

    const genreInfo = document.createElement("div");
    genreInfo.className = "genre-info";

    const genreName = document.createElement("span");
    genreName.className = "genre-name";
    genreName.textContent = genre;

    const genreCount = document.createElement("span");
    genreCount.className = "genre-count";
    genreCount.textContent =
        `${count} ${count === 1 ? "Book" : "Books"}`;

    const genreBar = document.createElement("div");
    genreBar.className = "genre-bar";

    const genreFill = document.createElement("div");
    genreFill.className = "genre-fill";
    genreFill.style.width =
        `${(count / maxGenreCount) * 100}%`;

    genreBar.appendChild(genreFill);
    genreInfo.append(genreName, genreCount);
    genreRow.append(genreInfo, genreBar);
    genreChart.appendChild(genreRow);
}

    let topGenreName = "Not available yet";
let maxCount = 0;

for (const genre in genreCounts) {
    if (genreCounts[genre] > maxCount) {
        maxCount = genreCounts[genre];
        topGenreName = genre;
    } else if (genreCounts[genre] === maxCount) {
        topGenreName += " & " + genre;
    }
}

topGenre.textContent = topGenreName;

}

updateReadingAnalytics();