
const detailsContainer = document.getElementById("bookDetails");

const params = new URLSearchParams(window.location.search);
const bookId = Number(params.get("id"));

const book = books.find((item) => item.id === bookId);

function renderList(items, renderItem) {
    if (!Array.isArray(items) || items.length === 0) {
        return "<p>Not available.</p>";
    }

    return `<ul>${items.map(renderItem).join("")}</ul>`;
}

function renderBookDetails() {
    if (!detailsContainer) {
        console.error('Element "#bookDetails" was not found.');
        return;
    }

    if (!book) {
        detailsContainer.innerHTML = `
            <div class="details-error">
                <h1>Book Not Found</h1>
                <p>Sorry, we couldn't find this book.</p>
                <a href="books.html" class="btn">Back to Books</a>
            </div>
        `;
        return;
    }

    const favorites = JSON.parse(
        localStorage.getItem("readingFavorites") || "[]"
    );

    const isFavorite = favorites.some(
        (item) => Number(item) === book.id
    );

    detailsContainer.innerHTML = `
        <div class="details-container">
            <div class="details-cover">
                <img
                    src="${book.image}"
                    alt="Cover of ${book.title}"
                    onerror="this.style.display='none'"
                >
                <button
                    type="button"
                    class="favorite-btn"
                    id="favoriteButton"
                    aria-pressed="${isFavorite}"
                >
                    ${isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
                </button>
            </div>

            <div class="details-content">
                <a href="books.html" class="back-link">← Back to Books</a>

                <span class="book-genre">${book.genre || ""}</span>
                <h1>${book.title || "Untitled"}</h1>
                <p class="book-author">By ${book.author || "Unknown"}</p>

                <p class="book-description">
                    ${book.description || ""}
                </p>

                <div class="details-meta">
                    <p><strong>Publication Year:</strong> ${book.year || "Unknown"}</p>
                    <p><strong>Original Language:</strong> ${book.originalLanguage || "Not available"}</p>
                    <p><strong>Country:</strong> ${book.country || "Not available"}</p>
                    <p><strong>Pages:</strong> ${book.pages || "Not available"}</p>
                    <p><strong>Literary Period:</strong> ${book.literaryPeriod || "Not available"}</p>
                    <p><strong>Setting:</strong> ${book.setting || "Not available"}</p>
                    <p><strong>Reading Level:</strong> ${book.readingLevel || "Not available"}</p>
                    <p><strong>Mood:</strong> ${book.mood || "Not available"}</p>
                </div>

                <section class="details-section">
                    <h2>Overview</h2>
                    <p>${book.overview || "Not available."}</p>
                </section>

                <section class="details-section">
                    <h2>Plot Summary</h2>
                    <p>${book.plotSummary || "Not available."}</p>
                </section>

                <section class="details-section">
                    <h2>Main Characters</h2>
                    ${renderList(
                        book.characters,
                        (character) => `
                            <li>
                                <strong>${character.name}</strong>
                                <p>${character.description}</p>
                            </li>
                        `
                    )}
                </section>

                <section class="details-section">
                    <h2>Themes</h2>
                    ${renderList(
                        book.themes,
                        (theme) => `<li>${theme}</li>`
                    )}
                </section>

                <section class="details-section">
                    <h2>Why Read This Book?</h2>
                    ${renderList(
                        book.whyRead,
                        (reason) => `<li>${reason}</li>`
                    )}
                </section>

                <section class="details-section">
                    <h2>Reading Experience</h2>
                    <p>${book.readingExperience || "Not available."}</p>
                </section>

                <section class="details-section">
                    <h2>You May Also Like</h2>
                    <div class="similar-books">
                        ${
                            (book.similarBookIds || [])
                                .map((id) => books.find((item) => item.id === id))
                                .filter(Boolean)
                                .map((similarBook) => `
                                    <a
                                        class="similar-book-link"
                                        href="book-details.html?id=${similarBook.id}"
                                    >
                                        ${similarBook.title}
                                    </a>
                                `)
                                .join("")
                        }
                    </div>
                </section>
            </div>
        </div>
    `;

    document
        .getElementById("favoriteButton")
        .addEventListener("click", toggleFavorite);
}

function toggleFavorite() {
    let favorites = JSON.parse(
        localStorage.getItem("readingFavorites") || "[]"
    ).map(Number);

    const alreadyFavorite = favorites.includes(book.id);

    if (alreadyFavorite) {
        favorites = favorites.filter((id) => id !== book.id);
    } else {
        favorites.push(book.id);
    }

    localStorage.setItem("readingFavorites", JSON.stringify(favorites));
    renderBookDetails();
}

renderBookDetails();
