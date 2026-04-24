# Orandi

A prayer translation and exploration app. Deployed at https://orandi.netlify.app.

- **Source:** https://github.com/orbisdei/orandi
- **Hosting:** Netlify, auto-deploys on push to `main`

## Project structure

```
orandi/
├── index.html                # Main entry point (iOS-framed layout)
├── Orandi Android.html       # Android-specific layout
├── Orandi iOS.html           # iOS-specific layout
├── manifest.json             # PWA manifest
├── sw.js                     # Service worker (offline support)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── android-frame.jsx         # Android device frame component
├── ios-frame.jsx             # iOS device frame component
├── tweaks-panel.jsx          # UI tweaks panel component
├── prayer-app-core.js        # Core app logic (shared React components)
├── prayer-data.js            # Prayer content and data
├── deploy.ps1                # Deploy script (currently empty)
└── CLAUDE.md                 # This file
```

## Deploying

Push to `main` — Netlify auto-deploys within ~30 seconds.

```bash
git add -A
git commit -m "describe your change"
git push
```

`deploy.ps1` exists but is currently empty. If you want a one-shot wrapper, add the commands above to it.

## App name

The app is called **Orandi** everywhere — in UI text, page titles, manifest, and documentation. Do not use "Prayer Translator" in any user-facing text.

## PWA setup

This is a Progressive Web App. Users install it via:
- **Android:** Chrome → three-dot menu → "Add to Home Screen"
- **iPhone:** Safari → Share → "Add to Home Screen"

The service worker (`sw.js`) caches core assets on first load for offline use. When adding new pages or assets, add them to the `ASSETS_TO_CACHE` array in `sw.js` and bump the cache version so clients pick up the change:

```js
const CACHE_NAME = 'prayer-translator-v1'; // bump this number on cache changes
```

Note: the cache key is still `prayer-translator-*` from before the rename. Renaming it is a one-liner but will invalidate existing clients' caches on next load — intended when you want that, otherwise leave as-is.

## Platform targets

- Android: Samsung S23, Android 16, One UI 8.0
- iOS: iPhone (Safari)

## Known issues / history

- Originally built in Claude Design as "Prayer Translator" — renamed to Orandi.
- Initial deploy 404'd because entry point was named `Prayer Translator.html` instead of `index.html`; fixed by renaming.
- Service worker cache key (`prayer-translator-v1`) still reflects the old name.
