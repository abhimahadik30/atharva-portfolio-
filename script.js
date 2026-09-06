/**
 * ================================================================
 * ATHARVA MANGESH MAHADIK — PORTFOLIO SCRIPT
 * Version: 2.0 (Production — GitHub Pages ready)
 * ================================================================
 *
 * This file handles:
 *   1. Mobile hamburger menu (open / close / overlay click)
 *   2. Close menu when a nav link is clicked
 *   3. Navbar background change on scroll
 *   4. Active nav link highlight based on scroll position
 *   5. Scroll-to-top button visibility
 *   6. Smooth scroll with navbar offset (for older browsers)
 *
 * All code runs after the DOM is fully loaded.
 * No external libraries used — pure vanilla JavaScript.
 * ================================================================
 */

/* Wait for the HTML to fully load before running any JS */
document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       ELEMENT REFERENCES
       Get references to the elements we need to interact with
    ============================================================ */
    const navbar      = document.getElementById('navbar');
    const hamburger   = document.getElementById('nav-hamburger');
    const navLinks    = document.getElementById('nav-links');
    const overlay     = document.getElementById('nav-overlay');
    const scrollTopBtn = document.getElementById('scroll-top');

    /* All individual nav links (used to close menu on click) */
    const allNavLinks = document.querySelectorAll('.nav-link');

    /* All sections that have an id (used for active link tracking) */
    const sections = document.querySelectorAll('section[id], div[id]');


    /* ============================================================
       1. MOBILE HAMBURGER MENU — OPEN / CLOSE
       JS adds/removes .nav-open on <body>.
       CSS uses .nav-open to show the drawer and overlay.
    ============================================================ */

    /**
     * Opens the mobile navigation drawer.
     * Adds .nav-open to body, updates aria-expanded.
     */
    function openMenu() {
        document.body.classList.add('nav-open');
        hamburger.setAttribute('aria-expanded', 'true');
        /* Prevent background page from scrolling while menu is open */
        document.body.style.overflow = 'hidden';
    }

    /**
     * Closes the mobile navigation drawer.
     */
    function closeMenu() {
        document.body.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
        /* Restore page scrolling */
        document.body.style.overflow = '';
    }

    /**
     * Toggles the menu open/closed each time the button is clicked.
     */
    function toggleMenu() {
        if (document.body.classList.contains('nav-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    /* Attach click listener to the hamburger button */
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    /* Close menu when the dark overlay is clicked */
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    /* Close menu when Escape key is pressed (accessibility) */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });


    /* ============================================================
       2. CLOSE MENU WHEN A NAV LINK IS CLICKED
       On mobile, clicking a link navigates to a section.
       The menu should close automatically.
    ============================================================ */
    allNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });


    /* ============================================================
       3. NAVBAR BACKGROUND ON SCROLL
       After scrolling 50px, add .navbar-scrolled to make
       the navbar background more opaque.
    ============================================================ */
    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    /* Run once immediately so it's correct on page load */
    handleNavbarScroll();


    /* ============================================================
       4. ACTIVE NAV LINK BASED ON SCROLL POSITION
       Highlights the nav link that corresponds to the section
       currently visible in the viewport.
    ============================================================ */
    function updateActiveLink() {
        /* How many pixels of the section must be in view */
        const OFFSET = 120; /* roughly the navbar height + a little extra */

        let currentSectionId = '';

        sections.forEach(function (section) {
            const sectionTop = section.getBoundingClientRect().top;
            /* If the top of this section is above the offset line, it's "active" */
            if (sectionTop <= OFFSET) {
                currentSectionId = section.getAttribute('id');
            }
        });

        /* Update classes on all nav links */
        allNavLinks.forEach(function (link) {
            link.classList.remove('active');
            /* href="#about" — extract "about" and compare */
            const href = link.getAttribute('href');
            if (href && href === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    }


    /* ============================================================
       5. SCROLL-TO-TOP BUTTON VISIBILITY
       Button appears after user scrolls 300px down.
    ============================================================ */
    function handleScrollTopVisibility() {
        if (!scrollTopBtn) return;
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }


    /* ============================================================
       COMBINE ALL SCROLL HANDLERS
       Using a single scroll listener is better for performance
       than attaching multiple separate listeners.
    ============================================================ */
    function onScroll() {
        handleNavbarScroll();
        updateActiveLink();
        handleScrollTopVisibility();
    }

    /* Attach the combined scroll handler */
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Run once immediately to set initial states */
    onScroll();


    /* ============================================================
       6. SMOOTH SCROLL WITH NAVBAR OFFSET (Fallback for older browsers)
       Modern browsers handle scroll-padding-top in CSS.
       This fallback ensures it works on Safari < 15 and
       older Android browsers.
    ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            /* Skip plain "#" links */
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            /* Check if the browser supports CSS scroll-padding-top */
            const supportsScrollPadding = CSS.supports('scroll-padding-top', '0px');

            /* Only use the JS offset on browsers that don't support the CSS property */
            if (!supportsScrollPadding) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 64;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
            /* On modern browsers, the CSS scroll-padding-top handles the offset automatically */
        });
    });


    /* ============================================================
       RESIZE HANDLER
       Close mobile menu if user resizes to desktop width
       (prevents menu getting stuck open on orientation change)
    ============================================================ */
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });


    /* ============================================================
       CONSOLE MESSAGE (dev-friendly)
    ============================================================ */
    console.log('%c Atharva Portfolio v2.0 loaded ✓', 'color: #a855f7; font-weight: bold;');

}); /* end DOMContentLoaded */
