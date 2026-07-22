# Carolus05.github.io-VirtualCV

# Carlo Botha — Virtual CV

A personal portfolio website built as an interactive, developer-themed CV. Designed to look and feel like a code editor / terminal environment, reflecting my background and interests as a Software Developer.

**Live site:** https://carolus05.github.io/YOUR-REPO-NAME/
*(replace with your actual GitHub Pages URL once deployed)*

---

## About

This site was built for the Profile Development module, as a "Virtual CV" component to complement my traditional CV, GitHub profile, and LinkedIn page. Rather than a standard resume layout, it's designed around a code-editor / terminal aesthetic — sidebar file-tree navigation, a typing terminal hero section, and skills rendered like a JSON config — to visually reinforce the "software developer" identity while staying minimal and easy to read.

## Sections

| Section | Description |
|---|---|
| **Home** | Terminal-style intro with a typed `whoami` sequence introducing my name, role, and a short tagline |
| **About** | Professional summary |
| **Skills** | Technical skills grouped by category (languages, web, databases, tools, fundamentals, soft skills) |
| **Projects** | Cards for key projects, with tech tags and links to their GitHub repositories |
| **Education** | Degree, institution, and study focus |
| **Contact** | Email, phone, and links to GitHub/LinkedIn |

## Built With

- **HTML5** — page structure and content
- **CSS3** — styling, layout (Flexbox/Grid), responsive design, no framework
- **Vanilla JavaScript** — mobile nav toggle and scroll-based active-section highlighting
- **Google Fonts** — JetBrains Mono (headings/code elements) and Inter (body text)

No build tools or frameworks are used — the site is plain static HTML/CSS/JS, so it runs directly on GitHub Pages with no build step.

## File Structure

```
├── index.html          # Page structure and content
├── styles.css           # All styling
├── script.js             # Nav toggle + scroll-spy behaviour
├── CV_Carlo_Botha.pdf  # Downloadable CV (linked from the Home section)
└── README.md            # This file
```

## Running Locally

No installation needed — it's a static site.

1. Clone the repository:
   ```bash
   git clone https://github.com/Carolus05/YOUR-REPO-NAME.git
   ```
2. Open `index.html` directly in a browser, or serve it locally, e.g.:
   ```bash
   python3 -m http.server
   ```
   then visit `http://localhost:8000`

## Deployment

Hosted via **GitHub Pages**, deployed from the `main` branch:
1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch** → `main` → `/root`
3. Site is live at `https://carolus05.github.io/YOUR-REPO-NAME/`

## Design Notes

- **Color palette:** near-black background with amber and teal accents, chosen to evoke a code-editor/terminal feel without being a generic dark theme.
- **Typography:** monospace (JetBrains Mono) for headings and code-styled elements, sans-serif (Inter) for body copy, to balance a technical look with readability.
- **Responsive:** sidebar collapses into a top nav with a toggle menu on smaller screens.

## Author

**Carlo Botha**
📧 carlobotha0@gmail.com
🔗 [LinkedIn](#) · [GitHub](https://github.com/Carolus05)
