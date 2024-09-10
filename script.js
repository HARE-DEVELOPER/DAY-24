function navigateTo(page, id) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = `
            <h1>Welcome to the Guvi Blog</h1>
            <p>Your one-stop destination for learning and sharing knowledge.</p>
        `;
    } else if (page === 'about') {
        content.innerHTML = `
            <h1>About Us</h1>
            <p>This blog is a platform to share knowledge and insights.</p>
        `;
    } else if (page === 'blog') {
        content.innerHTML = `
            <h1>Blog Post ${id}</h1>
            <p>This is the content for blog post ${id}.</p>
        `;
    } else {
        content.innerHTML = `
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        `;
    }

    // Update the URL without refreshing the page
    window.history.pushState({ page, id }, '', `#${page}${id ? '/' + id : ''}`);
}

// Handle back/forward navigation
window.onpopstate = function(event) {
    if (event.state) {
        navigateTo(event.state.page, event.state.id);
    } else {
        navigateTo('home'); // Default to home if no state is found
    }
};

// Load the default page
if (window.location.hash) {
    const [page, id] = window.location.hash.substring(1).split('/');
    navigateTo(page, id);
} else {
    navigateTo('home'); // Load home page by default
}