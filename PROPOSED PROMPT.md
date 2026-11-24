# AdigunIoT Product Brief and Build Prompt

AdigunIoT is one Hephzibah Behulah website where people pick something to play, learn, make, or discover. The homepage is the menu. Each selection opens a working, self-contained experience on the same domain, with its own shareable URL. The initial catalog target is approximately 1,000 experiences. The approved Phase 1 taxonomy will plan 10,000 ideas for long-term expansion.

This README is the prompt for review. Phase 0 builds a live preview of the hub with three working experiences. Phase 1 begins after the product owner approves that preview. Phase 1 delivers the catalog plan.

## Reference experiences

- [Protocol Explorer](https://protocol-explorer-alpha.vercel.app/) informs the first explainer. Let users step through an animated message journey and inspect what happens.
- [Bored.com](https://www.bored.com/) informs discovery. Let users browse categories or press **Surprise Me** to open another experience inside AdigunIoT.
- Existing product names and clone labels in the seed list identify inspiration only. Translate them into original titles, interactions, rules, visuals, text, and assets before implementation. Consolidate overlapping seeds into distinct concepts while retaining their original subject coverage.

## Build prompt

Act as a senior product architect, UI/UX lead, and taxonomist for Hephzibah Behulah Conglomerate. Your job has two parts, in strict order:

Phase 0 (must be delivered first): Build the interface and physical structure — the UI/UX of the whole project — as a real, live, functional, sci-fi, animated, interactive mockup so the client can see how it will look and feel.

Phase 1 (only after Phase 0 is approved): Produce the solid, non-generic taxonomy of 10,000 unique menu/tool/game/experience ideas, all under one single domain as independent modules.

Do not invent brand positioning. Read the repos first.

### Company and template context
Global templates and policies:

https://github.com/HephzibahBehulahHQ/HephzibahBehulahHQ.github.io

https://github.com/HephzibahBehulahHQ/hb-design-system

https://github.com/HephzibahBehulahHQ/hb-AI-policy

Brand repository:

https://github.com/HephzibahBehulahHQ/hb-artificial-intelligence

Product and hosted repository:

https://github.com/HephzibahBehulahHQ/AdigunIoT

Step 0 — Verify access. If any repo returns 404 or is private, stop and report exactly which ones are inaccessible, and state what information you need (README, product brief, brand list, design-system components). Do not fabricate brand details.

Step 1 — Extract from the repos:

The company’s brand list and what each brand stands for.

The global template structure and the brand-level template overrides.

The design-system components, color rules, layout rules, and naming conventions.

The AI policy constraints (what content is allowed, what must be disclosed, what is prohibited).

The AdigunIoT product goals, target users, and prospective interface.

The existing folder/file conventions so new modules fit the repo.

### Product structure
We are building one website at a single domain (e.g. adiguniot.hephzibahbehulah.com) that contains about 1,000–10,000 distinct “sub-sites” as menu items. Each menu item is a self-contained original module hosted under its own path on the same domain:

https://adiguniot.hephzibahbehulah.com/{category}/{slug}

Examples:

.../learn/how-the-internet-works — an original interactive explainer in the spirit of Protocol Explorer

.../arcade/click-the-dot — an original browser game in the spirit of Bored.com

.../diy/paper-circuit — an original step-by-step DIY project

Critical constraints:

No redirects to external websites.

No iframes embedding external websites.

No copying of external sites’ code or content. The look-and-feel may be inspired by them, but the implementation, copy, and assets must be original and owned by Hephzibah Behulah.

Every module must respect the global template, the brand template, the design system, and the AI policy.

Every module must be config-driven so it can be added without writing a new unique page from scratch. Define module types such as: explainer, simulator, game, quiz, generator, builder, daily, multiplayer, directory, visualization.

The 10,000 ideas must cut across all company brands, not sit in a generic “fun tools” silo. Each idea must be tagged with the brand(s) it serves and the module type it uses.

## Phase 0 — Live sci-fi UI/UX mockup
Goal: Let the client see and touch how the whole project will look, feel, and move before any content or 10,000 ideas are built. This is a functional, interactive, animated, sci-fi-styled mockup — not a static image, not a wireframe, not a slide deck.

### Phase 0 deliverables
A running mockup that can be opened in a browser and clicked through. It must be hosted (e.g. GitHub Pages, Vercel, or a local dev server) and be genuinely interactive, not a video.

Sci-fi visual direction: futuristic, animated, alive. Think holographic panels, glowing accents, smooth transitions, particle or grid backgrounds, data-stream animations, and a cohesive “command center” feel — but all derived from hb-design-system (colors, typography, spacing, component rules). Do not invent a visual language that contradicts the design system; extend it into a sci-fi expression.

The physical structure of the whole project, visible in the mockup:

The main “hub” / landing experience.

The top-level category navigation (the 15 categories below).

A category view showing how menu items appear as cards/tiles/panels.

A single module view showing the shell that every one of the 10,000 tools will use (header, controls, content area, AI-policy disclosure area, brand badge).

A search / command palette (sci-fi style) for finding any of the 10,000 modules.

A brand switcher showing how the same shell re-themes per brand.

Animation and interaction requirements:

Page/panel transitions animated (no hard reloads).

Hover, focus, and click states on every interactive element.

At least one ambient animated background or data visualization.

A working search/filter that actually filters the mockup’s sample modules.

At least 3 sample modules fully clickable end-to-end (one explainer, one game, one DIY) so the client feels a real flow, not a dead mock.

Responsive behavior: desktop, tablet, mobile.

Fidelity level: high-fidelity, “this looks like the real product.” Real copy where possible, real sample data, real transitions. Placeholder content only where the repos do not yet provide it, and clearly marked as placeholder.

Accessibility and policy compliance baked in: keyboard navigation, focus states, reduced-motion fallback, and the AI-policy disclosure pattern visible in the shell.

A short walkthrough document explaining: what the client is looking at, how to navigate the mockup, which parts are final vs. placeholder, and what decisions the client must approve before Phase 1 begins.

### Phase 0 acceptance gate
Phase 1 does not start until the client has clicked through the live mockup and approved:

The sci-fi visual direction.

The hub → category → module navigation structure.

The universal module shell.

The search/command palette.

The brand-switching behavior.

If the client requests changes, iterate on the mockup until approved.

## Phase 1 — The 10,000-idea taxonomy
### Taxonomy structure
Produce the output as a structured taxonomy with these top-level categories (refine names after reading the repos, but keep the coverage):

Learn-How-It-Works (Protocol Explorer spirit)

Arcade / Boredom Killers (Bored.com spirit)

DIY & Make (Instructables spirit)

Interactive Toys & Simulators (Neal.fun spirit)

Random Discovery / Weird Web (Useless Web spirit)

Creative Tools & Generators

Data & Visualization Playgrounds

Daily Challenges & Quizzes

Personal Homepage Builder (Neocities spirit)

Multiplayer / Social Experiments

Sound & Music Toys

Text & Word Games

Art & Pixel Playgrounds

Science & Nature Explorers

Retro / Nostalgia Zone

For each idea, output a record with these fields:

id (sequential)

title

slug

category

brand (which Hephzibah Behulah brand(s) it serves)

module_type (from the list above)

one_line_pitch (what the user does)

why_it_fits (tie to a specific brand value or repo finding)

template_dependencies (which design-system components or global template pieces it uses)

ai_policy_notes (any disclosure, safety, or content constraint from hb-AI-policy)

### Seed ideas
Learn-How-It-Works: How the Internet Works; How DNS Resolves a Name; How HTTPS Handshakes; How Wi-Fi Sends Data; How a CPU Executes Code; How GPS Finds You; How Bitcoin Validates a Block; How a Search Engine Ranks Pages; How Encryption Keeps Secrets; How Memory (RAM) Works; How Email Travels; How a Touchscreen Senses Touch; How Neural Networks Learn; How Compilers Turn Code into Apps; How the Power Grid Balances.

Arcade: Click the Dot; Memory Grid; Word Snake; Reaction Timer; Mini Sudoku; Tower Stack; Color Match; Typing Race; Pixel Painter; Endless Runner; Bubble Pop Physics; Dice Roller RPG; Maze Generator; Simon Says Sound; 2048 Variants; Solitaire/FreeCell; Chess Puzzles; Trivia Machine; Guess the Country; Emoji Decoder.

DIY: Build a Paper Circuit; Make a Solar Phone Charger; DIY Desk Organizer; Build a Simple Robot Arm; Make Natural Soap; Grow Mushrooms in a Bucket; Build a Weather Station; Make a Leather Wallet; DIY Water Filter; Build a Birdhouse; Make Sourdough Starter; Build a Pinhole Camera; Make a Terrarium; Build a Bluetooth Speaker; DIY Bookbinding; Make Natural Dyes; Build a Compost Bin; Make a Simple Game in Scratch; Build a Wind Turbine Model; DIY Candle Making.

Interactive Toys: The Size of Space; The Deep Sea; Your Age on Other Planets; The Speed of Light Visualizer; What If You Fell Into a Black Hole; History of the Universe in One Scroll; Spend a Billion Dollars; The Password Game; Infinite Craft; Little Alchemy Clone; The Most Boring Website; Is It a Hot Dog?; The Useless Machine; Draw a Perfect Circle; Hold Your Breath Timer; The Button; Wait, What Time Is It?; The Last Website.

Random Discovery: Surprise Me; Random Fact Machine; Random Wikipedia-Style Article; Random Color; Random Sound; Random Story Starter; Random Drawing Prompt; Random Recipe; Random Useless Statistic; Random Quote; Random Map Pin; Random Emoji Combo; Random Name Generator; Random Constellation; Random Animal Fact.

Creative Tools: ASCII Art Maker; Pixel Avatar Builder; Logo Text Generator; Color Palette Extractor; Meme Caption Tool; Haiku Generator; Band Name Generator; Conlang Word Builder; Fractal Explorer; Pattern Tile Maker; Gradient Generator; QR Code Styler; Story Plot Spinner; Character Sheet Builder; World Map Generator.

Data & Visualization: Population Clock; World Debt Visualizer; Internet Traffic Map; Climate Timeline Scroller; Language Family Tree; Music Genre Evolution Graph; Sports Records Explorer; Space Mission Timeline; Invention Timeline; Human Body Stats Explorer; Food Origins Map; Currency Comparison Toy; Historical Population by City; Element Periodic Table Interactive; Planet Comparison Tool.

Daily Challenges: Daily Word Puzzle; Daily Math Challenge; Daily Geography Quiz; Daily Logic Grid; Daily Riddle; Daily Memory Test; Daily Reaction Challenge; Daily Typing Sprint; Daily Guess the Song; Daily Spot the Difference; Daily Maze; Daily Crossword Mini; Daily Trivia Streak; Daily Codebreaker; Daily Drawing Prompt.

Homepage Builder: My Corner Builder; Guestbook Module; Retro Counter Widget; Marquee Maker; Link List Builder; Theme Picker (90s/00s/Y2K); Pixel Background Library; Visitor Log Display; Profile Card Generator; Webring Joiner.

Multiplayer: Draw Together; Live Poll Wall; Two Truths One Lie; Message in a Bottle; Guess My Drawing; Global Countdown; Where in the World; Word Chain; Rock Paper Scissors League; Typing Race Lobby; Shared Pixel Canvas; Anonymous Compliment Wall; Live Quiz Lobby; Trivia Duel; Chess Lobby.

Sound & Music: Drum Pad; Piano Roll; Ambient Sound Mixer; Binaural Beat Generator; Chiptune Maker; Metronome; Tuner; Loop Station; Random Melody Generator; Sound Board; Rain Generator; White Noise Machine; Beat Maker; Vocal Warmup Coach; Music Theory Quiz.

Text & Word: Wordle Clone; Anagram Solver; Hangman; Boggle; Crossword Builder; Typing Test; Palindrome Checker; Rhyme Finder; Acrostic Maker; Word Ladder; Scrabble Helper; Text Adventure Engine; Mad Libs; Story Chain; Word Count Visualizer.

Art & Pixel: Pixel Editor; Sprite Animator; Mandelbrot Zoomer; Spirograph; Kaleidoscope; Sand Drawing; Fluid Simulation; Particle Playground; ASCII Painter; Doodle Wall; Color by Number; Pattern Generator; 3D Shape Spinner; Glitch Art Maker; Collage Maker.

Science & Nature: Solar System Tour; Periodic Table Interactive; Human Anatomy Explorer; Cell Simulator; Weather Simulator; Ecosystem Builder; Dinosaur Timeline; Tree of Life Browser; Mineral Identifier; Cloud Spotter; Bird Song Player; Plant Growth Sim; Volcano Simulator; Earthquake Map; Ocean Depth Explorer.

Retro & Nostalgia: Old TV Simulator; Cassette Player; Floppy Disk Saver; Windows 95 Desktop Parody; Dial-Up Modem Simulator; VHS Filter Camera; Pager Message Sender; Arcade High Score Board; 90s Chat Room Sim; Geocities Page Builder; Tamagotchi Clone; Snake (Nokia style); Minesweeper; Tetris Clone; Pong.

### Scale-out requirement
The seed list above is roughly 200 items. You must expand it to 10,000 distinct, non-duplicative ideas, distributed across the 15 categories and across all company brands. Do not pad with near-duplicates (e.g. “Click the Dot 2”). Each idea must be genuinely distinct in user action or learning outcome. Where a category needs hundreds of items, derive them systematically (e.g. “How X Works” for 100 different X that are relevant to the company’s brands; “Daily Challenge” for 100 different skills; “DIY Project” for 100 different materials or tools).

### Deliverable format
Output a single Markdown document with:

Repo review summary — what you found in each repo, and any access failures.

Brand map — brand → values → which categories serve it.

Template map — global template pieces and design-system components available to modules.

AI policy constraints — the rules every module must follow.

The 10,000-idea table in the record format above, grouped by category. If the full 10,000 exceeds output limits, produce the complete list in batches, stating the batch number and total, and continue until all 10,000 are delivered.

Gap analysis — which categories are thin, which brands are underserved, and what to build first.

## Rules for both phases
Phase 0 comes first. No taxonomy work until the live mockup is approved.

Read the repos before writing ideas or designing the UI. If a repo is inaccessible, say so and ask for the content instead of guessing.

Do not propose redirects, iframes, or copied content.

Do not propose generic ideas that could belong to any company; every idea must tie to a brand value or repo finding.

Every idea must fit the config-driven module model so it can be added under /{category}/{slug} on the single domain.

Respect the AI policy in every module description and in the Phase 0 shell.

The Phase 0 mockup must be real, live, functional, sci-fi, animated, and interactive — a thing the client can click, not a picture of a thing.
