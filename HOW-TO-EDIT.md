# Nabeeha's Birthday Site: how to use & edit

Everything is a plain website. No install needed.

## Open it
Double-click **`index.html`**. It opens in your browser and works fully offline.

## Password
The whole site is locked behind a passcode: **861258**.
Enter it once and it stays unlocked while the browser tab is open.
To change it: open `assets/js/gate.js` and edit the line `var PW = "861258";`.

## Two things to drop in (images from chat)
Pasted chat images don't transfer as files, so two folders have named slots. Add the image files and they appear automatically.

**1. Jeopardy city photos** → `assets/jeopardy/`
`london.jpg` (pebble beach) · `hamburg.jpg` (four of you) · `prague.jpg` (with the dog) · `budapest.jpg` (grand building) · `seoul.jpg` (whale skeleton)

**2. Friends' birthday cards** → `assets/wishes/`
`wish01.jpg` … `wish12.jpg` (see `PUT-WISH-CARDS-HERE.txt` in that folder for which card is which). They show up on the home page under "Birthday Cards".

Until added, the site still works and shows tidy placeholders.

## Jeopardy (now with teams)
Open `jeopardy.html`. Choose 1 to 4 teams, name them, and hit Start.
The board tracks each team's score, highlights whose turn it is, and rotates turns after every clue. Reveal the answer, then tap "Got it +", "Wrong −", or "Skip". When the board is cleared it announces the winner. "New game / change teams" resets it.
All questions and answers live in `assets/js/data.js` under `jeopardy`.

## Change any words / add wishes / add poems
Open **`assets/js/data.js`** in any text editor. Everything is there, with comments:

- **Birthday message & hero**: top of the file.
- **Text wishes**: the `wishes:` list. Copy a line to add more.
- **Card wishes (images)**: the `wishImages:` list.
- **Poems**: the `poems:` list. The Urdu ghazal renders right-to-left automatically (`rtl: true`).
- **Puzzle**: the `puzzle:` section. Answers ignore case and spaces.
- **Photo captions**: the `photos:` list. `span: 2` = big spotlight tile.

Save, refresh the browser. Done.

## Puzzle answers (so you don't lock yourself out)
1. **hult**  2. **cat**  3. **minerva**  4. **i love you**

## Put it online (optional, free)
Drag the whole site folder onto **netlify.com/drop** for a shareable link. (GitHub Pages / Vercel work too.) The password gate still applies.

## Pages
`index.html` (home + wishes + cards), `gallery.html`, `puzzle.html`, `jeopardy.html`, `poetry.html`.
