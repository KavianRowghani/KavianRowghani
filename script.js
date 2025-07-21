function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const button = document.getElementById('dark-mode-toggle');
    button.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'enabled' : 'disabled');
}

function filterPosts() {
    const input = document.getElementById('search-bar');
    const filter = input.value.toLowerCase();
    const grid = document.getElementById('post-grid');
    const posts = grid.getElementsByClassName('post-summary');
    Array.from(posts).forEach((post, index) => {
        const title = post.getElementsByTagName('h3')[0].textContent.toLowerCase();
        const summary = post.getElementsByTagName('p')[1].textContent.toLowerCase();
        post.style.display = title.includes(filter) || summary.includes(filter) ? '' : 'none';
        post.style.setProperty('--index', index);
    });
}

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    document.getElementById('dark-mode-toggle').textContent = '☀️';
}
