# Atharva Mangesh Mahadik — Portfolio

Personal portfolio website for **Atharva Mangesh Mahadik**, a CSE AIML student passionate about Artificial Intelligence, Machine Learning, Software Development, and competitive gaming (Free Fire).

**Live URL:** https://USERNAME.github.io/atharva-portfolio/
*(Replace USERNAME with your actual GitHub username after deployment)*

---

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Features

- Dark AI + Gaming theme with glassmorphism cards
- Purple / Blue / Cyan gradient colour scheme
- Orange / Yellow accent for Free Fire Gaming section
- Fully responsive — works on 320px mobile up to 1920px monitors
- Sticky navigation with JS-powered hamburger menu (mobile)
- Smooth scrolling with active section highlighting
- Entrance animations and hover effects
- SEO meta tags and Open Graph sharing support
- Accessible — ARIA labels, focus indicators, reduced-motion support

---

## Project Structure

```
atharva-portfolio/
│
├── index.html          ← Main HTML file
├── style.css           ← All styles
├── script.js           ← Navigation, scroll effects
├── favicon.ico         ← Browser tab icon (add your own)
├── favicon.png         ← Apple touch icon (add your own)
├── .gitignore
├── README.md
│
└── assets/
    ├── images/
    │   └── 1000184461.jpg   ← Profile photo
    └── icons/               ← (reserved for future icons)
```

---

## Local Development

No build tools required. Open directly in a browser:

```bash
# Option 1 — Python (recommended)
python -m http.server 8080
# Then open: http://localhost:8080

# Option 2 — VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

---

## Deployment — GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** icon → **New repository**.
3. Name it: `atharva-portfolio`
4. Set it to **Public**.
5. Click **Create repository**.

### Step 2 — Push the project to GitHub

Run these commands in your project folder:

```bash
git init
git add .
git commit -m "Deploy Atharva portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/atharva-portfolio.git
git push -u origin main
```

*(Replace `USERNAME` with your GitHub username)*

### Step 3 — Enable GitHub Pages

1. Open your repository on GitHub.
2. Click **Settings** (top tab).
3. In the left sidebar click **Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**.
6. Wait 1–2 minutes for deployment.

### Step 4 — Your live URL

```
https://abhimahadik30.github.io/atharva-portfolio/
```

---

## Updating the Website

After making changes locally:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will automatically redeploy within ~1 minute.

---

## Adding Your Profile Photo

Place your photo at:
```
assets/images/1000184461.jpg
```

If you keep the photo at the project root instead, update `src` in `index.html`:
```html
<img src="1000184461.jpg" ...>
```

---

## Adding a Favicon

Place your favicon files at the project root:
- `favicon.ico`  (for all browsers)
- `favicon.png`  (for modern browsers and Apple devices)

---

## Contact

**Email:** atharvm0522@gmail.com  
**Field:** CSE AIML  
**Interest:** Programming & Gaming
