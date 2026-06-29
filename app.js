const posts = [
    {
        name: "Omar",
        country: "Egypt",
        title: "Accepted to Summer Program",
        goal: 1200,
        raised: 540,
        likes: 120
    },
    {
        name: "Sara",
        country: "Jordan",
        title: "Need IELTS Fee Support",
        goal: 200,
        raised: 80,
        likes: 45
    },
    {
        name: "Ahmed",
        country: "Egypt",
        title: "SAT Registration Support",
        goal: 120,
        raised: 60,
        likes: 78
    }
];

const feed = document.getElementById("feed");

function renderPosts() {
    feed.innerHTML = "";

    posts.forEach((post, index) => {
        const percent = (post.raised / post.goal) * 100;

        feed.innerHTML += `
        <div class="card">
            <h3>${post.name} 🇪🇬</h3>
            <p>${post.title}</p>

            <div class="progress">
                <div class="progress-bar" style="width:${percent}%"></div>
            </div>

            <p><b>$${post.raised}</b> / $${post.goal}</p>

            <div class="actions">
                <button onclick="like(${index})">❤️ ${post.likes}</button>
                <button onclick="support(${index})">🤝 Support</button>
            </div>
        </div>
        `;
    });
}

function like(i) {
    posts[i].likes++;
    renderPosts();
}

function support(i) {
    posts[i].raised += 10;
    renderPosts();
}

renderPosts();
