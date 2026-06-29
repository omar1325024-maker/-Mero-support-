if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
}

const posts = [
    {
        name: "Omar",
        title: "Accepted to Summer Program",
        goal: 1200,
        raised: 560,
        likes: 124
    },
    {
        name: "Sara",
        title: "Need IELTS Fee Support",
        goal: 200,
        raised: 80,
        likes: 45
    },
    {
        name: "Ahmed",
        title: "SAT Registration Support",
        goal: 120,
        raised: 60,
        likes: 78
    }
];

const feed = document.getElementById("feed");

function render() {
    feed.innerHTML = "";

    posts.forEach((p, i) => {

        let percent = (p.raised / p.goal) * 100;

        feed.innerHTML += `
        <div class="card">
            <h3>${p.name} 🇪🇬</h3>
            <p>${p.title}</p>

            <div style="background:#eee;height:10px;border-radius:10px;overflow:hidden;">
                <div style="width:${percent}%;height:10px;background:#4a67ff;"></div>
            </div>

            <p><b>$${p.raised}</b> / $${p.goal}</p>

            <button onclick="like(${i})">❤️ ${p.likes}</button>
            <button onclick="support(${i})">🤝 Support</button>
        </div>
        `;
    });
}

function like(i) {
    posts[i].likes++;
    render();
}

function support(i) {
    posts[i].raised += 10;
    render();
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

render();
