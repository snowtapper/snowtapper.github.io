/*
    Find the website's main folder from the location
    of this header.js file.

    This makes the navigation work from pages inside
    subfolders as well as pages in the main folder.
*/
const headerScript = document.currentScript;
const siteRoot = new URL(".", headerScript.src);


/*
    This function creates a complete link from a path
    such as "gallery.html".
*/
function siteLink(path) {
    return new URL(path, siteRoot).href;
}


/*
    Find the empty header location in the current page.
*/
const headerLocation =
    document.getElementById("site-header");


/*
    Insert the shared header and navigation.
*/
headerLocation.innerHTML = `
    <header>

        <!-- Website title links back to the homepage -->
        <a class="name" href="${siteLink("index.html")}">
            CREATIVE BRIDGE
        </a>


        <nav class="main-nav">

            <!-- Gallery -->
            <a href="${siteLink("gallery.html")}">
                GALLERY
            </a>


            <!-- Outdoors dropdown -->
            <details
                class="nav-dropdown"
                name="main-navigation"
            >
                <summary>OUTDOORS</summary>

                <div class="dropdown-menu">

                    <a href="${siteLink("outdoors.html")}">
                        All Outdoors
                    </a>

                    <a href="${siteLink("outdoors-pages/outdoors-written.html")}">
                        Written Works
                    </a>
                  

                    <a href="${siteLink("outdoors-pages/outdoors-photography.html")}">
                        Photography
                    </a>

                </div>
            </details>


            <!-- Art dropdown -->
            <details
                class="nav-dropdown"
                name="main-navigation"
            >
                <summary>ART</summary>

                <div class="dropdown-menu">

                    <a href="${siteLink("art.html")}">
                        All Art
                    </a>

                    <a href="${siteLink("art-writing.html")}">
                        Written Works
                    </a>

                    <a href="${siteLink("art-visual.html")}">
                        Visual Works
                    </a>

                    <a href="${siteLink("art-photography.html")}">
                        Photography
                    </a>

                </div>
            </details>


            <!-- Aerospace dropdown -->
            <details
                class="nav-dropdown"
                name="main-navigation"
            >
                <summary>AEROSPACE</summary>

                <div class="dropdown-menu">

                    <a href="${siteLink("aerospace.html")}">
                        All Aerospace
                    </a>

                    <a href="${siteLink("aerospace-projects.html")}">
                        Projects
                    </a>

                    <a href="${siteLink("aerospace-writing.html")}">
                        Technical Writing
                    </a>

                    <a href="${siteLink("aerospace-photography.html")}">
                        Photography
                    </a>

                </div>
            </details>


            <!-- About -->
            <a href="${siteLink("about.html")}">
                ABOUT
            </a>

        </nav>

    </header>
`;