# Robert's ChatGPT Guide

An accessible, practical, self-paced educational website made for Robert.

This static website teaches ChatGPT through **37 hands-on lessons**, **18 capability guides**, and **19 everyday scenarios**, with examples relevant to residential building management, household finances, health research, news, Spanish and guitar.

## Open the website

Once GitHub Pages is enabled, the site will be at:

**https://erikw1024.github.io/ai-guide/**

## Publish on GitHub Pages (one-time setup)

The repository is public and the files are already in its root directory.

1. Open [repository Settings → Pages](https://github.com/erikw1024/ai-guide/settings/pages).
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and the directory to `/(root)`.
4. Select **Save**.
5. Check the GitHub Pages deployment status from the Pages or Actions tab.
6. Open https://erikw1024.github.io/ai-guide/ to test.

Future changes committed to `main` will be published automatically.

## What is included

- Home dashboard, guided curriculum and learning progress.
- 37 self-paced lessons and 18 capability overviews.
- 19 practice scenarios, each with a copyable prompt and verification advice.
- Interactive prompt builder, quizzes, bookmarks and private local notes.
- An expanded **Picture guides** section with nine annotated interface diagrams and nine real, source-attributed OpenAI Help Centre screenshots.
- Visual teaching throughout all 37 lessons, all 18 capability guides, all 19 practical scenarios, and the home and reference pages. Eight additional topic illustrations cover building matters, budgets, health, news, language, guitar, drawing and prompt workflows.
- Mobile-friendly layout, large-text toggle, and printable quick reference.

## Visual resources

The nine interface diagrams in `assets/` and the eight topic illustrations in `assets/topics/` are **illustrative teaching images, not captured screenshots**. The site also embeds **nine genuine OpenAI Help Centre screenshots** from `images.ctfassets.net`, preserving their original appearance and linking to their source articles. Some examples show previous versions of ChatGPT and are labelled accordingly. The course uses clear numbered overlays and accompanying steps to tell Robert what to look for; it does not invent an account-specific screenshot.

The official screenshots are fetched from OpenAI's image CDN at page-view time, so viewing them requires internet access and causes normal image requests to that CDN. If an image cannot load, the site falls back to a local annotated diagram. No user documents or learning progress are sent to this image service.

To update the visual tutorials, edit `visual-guide.js`, `visual-guide.css`, `visual-expansion.js`, and `visual-expansion.css`. To edit course content, the existing lesson and data content is embedded in `index.html`, which remains the complete standalone site. The visual extension is loaded from the repository.

## Privacy and accessibility

There is no backend, user account, tracking code or collection of personal information. Learning progress, saved lessons and notes use **localStorage** in Robert's browser and do not sync between devices. Do not use real medical or financial records in training exercises.

All content uses Australian spelling. Accessibility features include keyboard navigation, reduced-motion support, generous touch targets, accessible image descriptions and an enlarged-text option.

## Useful official references

- [Getting started with ChatGPT](https://openai.com/academy/getting-started/)
- [ChatGPT Projects](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [ChatGPT Voice](https://help.openai.com/en/articles/20001274-chatgpt-voice)
- [ChatGPT Search](https://help.openai.com/en/articles/9237897-chatgpt-search)
- [Data Controls](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt)
- [GitHub Pages source configuration](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Last visual content update: 18 November 2026.
