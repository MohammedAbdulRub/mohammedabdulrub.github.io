# Portfolio Site — Setup & Deploy Guide

Plain HTML/CSS/JS site. No build step, no dependencies.

## 1. Open in VS Code

1. Unzip/move this `portfolio-site` folder anywhere on your computer.
2. Open VS Code → `File > Open Folder` → select `portfolio-site`.
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab (`Ctrl+Shift+X`, search "Live Server").
4. Right-click `index.html` → **Open with Live Server**. Your site opens at `http://127.0.0.1:5500` and auto-refreshes as you edit.

## 2. Customize content

- `index.html` — replace all placeholder text: your name, bio, skills, project details, experience, email/social links. Search for "Your Name", "placeholder", and "yourusername" to find every spot to edit.
- Add your resume PDF to `assets/resume/resume.pdf` (the nav bar links to it).
- Add project screenshots/images to `assets/` and reference them with `<img>` tags in the project cards if desired.
- Colors/fonts live at the top of `css/style.css` under `:root` — change `--accent` and `--accent-2` for a different color scheme.

## 3. Push to GitHub

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

**Naming tip:** if you name the repo `YOUR_USERNAME.github.io` exactly, GitHub Pages serves it automatically at `https://YOUR_USERNAME.github.io` with no extra config. Any other repo name works too, just at `https://YOUR_USERNAME.github.io/REPO_NAME`.

## 4. Enable GitHub Pages

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. Wait 1-2 minutes, then visit the URL GitHub shows you.

## 5. Future updates

Any time you edit files locally, just:

```bash
git add .
git commit -m "Update projects"
git push
```

GitHub Pages redeploys automatically within a minute or two.

## Folder structure

```
portfolio-site/
├── index.html          # all page content/sections
├── css/style.css        # all styling
├── js/script.js         # mobile menu + scroll polish
├── assets/
│   └── resume/
│       └── resume.pdf   # add your resume here
└── README.md
```
