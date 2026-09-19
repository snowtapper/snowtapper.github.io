/*
============================================================
SHARED WEBSITE FOOTER

Edit the footer text here, and it will change on every page
that loads footer.js.
============================================================
*/

(() => {
    // Find the footer placeholder in the current HTML page.
    const footerPlaceholder = document.getElementById("site-footer");

    // Stop if this page does not have a footer placeholder.
    if (!footerPlaceholder) {
        return;
    }

    // Replace the placeholder with the complete footer.
    footerPlaceholder.outerHTML = `
        <footer id="contact" class="site-footer">
            <h2>Go Make Something!</h2>

            <p>
                Just do it. Make it bad. It might feel good!
            </p>
        </footer>
    `;
})();