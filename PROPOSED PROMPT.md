# AdigunIoT production build prompt

## Assignment

When the owner gives you this prompt to implement, begin Phase 0 in [AdigunIoT](https://github.com/HephzibahBehulahHQ/AdigunIoT). Deliver a running website and working interactions. Stop at the owner’s Phase 0 review gate. The first release is a prototype of the actual product architecture.

AdigunIoT is a browser playground by HB Artificial Intelligence. A visitor who has five spare minutes opens the homepage, finds something interesting, and immediately plays, learns, makes, or discovers. Each card is the doorway to an independent mini-experience on the same domain. Protocol Explorer is the interaction reference for seeing an invisible process unfold. Bored.com is the discovery reference for choosing a category or finding a surprise. Implement original experiences and visual assets in the Hephzibah Behulah design system.

The publishing ambition is approximately 1,000 working experiences. After approval, plan a distinct 10,000-idea backlog. The catalog and the number of working pages are independent milestones. Show accurate module counts throughout the product. Use the existing authorized host if available. Treat adiguniot.hephzibahbehulah.com as a candidate until ownership and configuration are verified.

## Read these sources and apply them

| Source | Implementation decision |
| --- | --- |
| [Corporate identity and scope](https://github.com/HephzibahBehulahHQ/HephzibahBehulahHQ.github.io/blob/main/docs/repository-scope.md) | Keep this product entirely in AdigunIoT. The corporate site remains the public gateway for five divisions. |
| [Universal product template](https://github.com/HephzibahBehulahHQ/hb-design-system/tree/main/templates/universal-product) | Start from the current schema v3 product.config.json. Replace identity and repository references with AdigunIoT values. Confirm the AI brand key against the canonical token source. Set en, de, yo and pcm with en default. Set capability fields from implementation and keep unavailable integrations false or null. |
| [Naming and identity](https://github.com/HephzibahBehulahHQ/hb-design-system/blob/main/docs/brand-and-product-naming.md) | One corporate logo, AdigunIoT text wordmark, and a stable BY HB ARTIFICIAL INTELLIGENCE label. Use the exact approved corporate artwork and verified typography. Where asset verification fails, document the limitation and use the standard text fallback. Verify footer links before enabling them. |
| [Design system](https://github.com/HephzibahBehulahHQ/hb-design-system) | Read actual files under tokens/ and assets/corporate/. Use the AI division’s Midnight Navy and Violet as the initial dark palette. Import approved accent values for collections and map them to product-level CSS variables. Keep approved assets and token values intact. |
| [HB Artificial Intelligence](https://github.com/HephzibahBehulahHQ/hb-artificial-intelligence/blob/main/docs/responsible-technology-guidance.md) | Use synthetic local inputs for defensive learning and label demonstrations. Use editorial content and deterministic behavior in Phase 0. The module disclosure states the actual AI and data behavior. |
| [Adigun BOT](https://github.com/HephzibahBehulahHQ/hb-design-system/tree/main/components/AdigunBot) | Set disabled for Phase 0. Keep the module context contract ready for a future authenticated, server-side, product-aware integration. Enable only after a working integration and required approval and verification. |
| [HB AI Engineering Policy](https://github.com/HephzibahBehulahHQ/hb-AI-policy/blob/main/docs/policy-index.md) | Use version 2.0 adoption template with a verified immutable policy commit and real adoption details when authorized. Follow applicable checkpoint, security, acceptance and reporting rules. Record source refs and verification evidence in the walkthrough or current status. |

Verify local path, Git remote, branch, cleanly scoped changes, existing dependencies and cache before installing. Inspect the current project first and reuse any compatible stack and existing lockfile. If the verified checkout is documentation-only, use **Astro static output, TypeScript and CSS**, using interactive browser scripts for the three modules and shared navigation. Use the available compatible Node/npm versions and lock the dependency versions. In the selected Windows project folder use the existing authorized checkout. If it is still only a repository-link item, resolve access to the intended checkout or report the concrete blocker. Keep productive work in the selected product, with no extra project copies or cloud workspaces. Use a dedicated branch and a reviewable PR. Public deployment and merging product code require the applicable authorization. A local preview is sufficient for the review gate.

## Phase 0 — Build the live prototype

### Screen 1 · Discover

The desktop dark theme is a restrained sci-fi observatory: midnight background, a low-contrast grid, violet focus and selection accents, and finely outlined cards. Use the brand system for text, spacing and contrast. Give the top of the screen a single main message, **Find something to play, learn, or make**, and two real actions, **Explore** and **Surprise me**. The hero’s live animation shows an abstract message moving between three nodes. Pause ambient animation when offscreen and respect reduced motion.

Use this screen order:

1. Shared header with approved identity, Discover, Categories, search trigger, collection selector, and language selector.
2. Hero with the two actions and a link to the featured experience.
3. Three playable cards. Each shows its title, one sentence describing the action, category, and primary collection. Use motion previews only where they communicate what the experience does. Each card has a real link.
4. Category directory and honest playable counts. Show zero-count categories with clear empty pages and links back to playable experiences.
5. Product footer with verified corporate links and working project documentation.

Use **Play, Learn, Make, Discover** as quick filters or intent shortcuts. Keep the 15 categories as the complete browse structure. Brand collection selection applies a verified accent and filters the catalog by division. Keep the product owner label fixed. Show the three Phase 0 modules across the AI and Elektroniker collections. The remaining collections still open their own useful empty view. Preserve browser history and shareable filter state.

### Screen 2 · Categories and search

Use /categories/ for the directory and /category/{category}/ for a category page. A category page has a heading, concise description, live count, filtered card grid and a clear-filter action. Display empty states for inactive or narrow combinations.

Use one command palette on all routes. Open it from the header or Ctrl/Cmd+K. Search translated titles, aliases, category and keywords using a cached static index. Normalize case, diacritics and whitespace. Rank exact title then prefix then token matches. Show at most eight quick results, with a link to the complete filter view when applicable. Support keyboard navigation, Enter to open, Escape to close, and focus return to the trigger. Include an accessible empty state. Use the same published registry for cards, search and random selection. Surprise me opens a playable internal module, excluding the current or most recent selection when alternatives exist. If filters yield nothing, offer a clear way to reset them.

### Screen 3 · Universal experience shell

Generate /{category}/{slug}/ from one module route and use canonical URLs for cards and search. On desktop show breadcrumbs and module title above the interaction workspace and its inspector/help column. On narrow screens stack the workspace, controls and help. Keep the same parts across modules: category and division badges, prompt, workspace, actions, actionable feedback, reset, help/source links, and a short AI/data disclosure. Browser Back returns to the previous view, including filters. Use enhanced in-app transitions with ordinary links, working direct URLs and history as the baseline. Provide a styled 404 with search and a return link.

Use visible keyboard focus, semantic headings, named controls, readable contrast and touch targets. Announce meaningful state changes in a live region without reading every animation frame. Make the full flow operable with reduced motion. Check at 360, 768 and 1440 CSS px with no horizontal overflow. Translate shell, controls, statuses, errors, search aliases, and sample content in English, German, Yoruba and Nigerian Pidgin. Persist only intended non-sensitive settings such as locale. Use versioned browser keys and handle storage denial gracefully. Record which translations were reviewed and which require linguistic review.

### Three working experiences

| Route and collection | What happens in the workspace | Acceptance case |
| --- | --- | --- |
| /how-it-works/adigun-protocol-explorer/ · HB Artificial Intelligence | Choose a fictional destination and press Send. Follow a browser, name resolver, gateway and server through a simplified DNS lookup, request and response. Use a fixed synthetic event sequence with a visible timeline, packet inspector, Play/Pause/Step/Reset and a labeled text log. An optional simulated delay visibly changes the delivery time. Identify which networking details the model simplifies. Keep all packets in local simulation. | Step reaches the same end state as Play. Pause freezes progress. Reset clears the timeline and selection. The event log exposes source, destination, purpose and outcome in keyboard and reduced-motion use. Reload restarts the demo. |
| /arcade/signal-catch/ · HB Artificial Intelligence | A 20-second reaction game. A pulse travels along a grid and briefly appears on one of four receiver pads. Click a pad or use keys 1–4 to catch it. A correct catch earns one point once per pulse. A wrong or missed catch breaks the streak. Offer an untimed practice round and a results screen with Replay. Use original art and sound, with sound off by default. | Starting multiple times creates one timer. The same pulse cannot score twice. The timed round ends once and shows the final score. Replay clears round state, and keyboard input works only in the active game. |
| /diy/paper-circuit/ · HB Elektroniker | A four-step virtual build: place the source symbol, route the two foil paths, orient the LED, and close the switch. Offer both placement controls and buttons. The diagram lights only with a closed path and correct simulated polarity. Provide reset and a short explanation of the result. Physical-build instructions are out of scope for the prototype. | Open circuit and reversed polarity yield different feedback. A correct closed path lights the virtual LED. Step navigation and reset behave consistently and all interactions work with a keyboard. |

### Implementation contract

Use a single content registry and a typed renderer map. Where the repository lacks equivalent structure, use these paths:

```text
product.config.json
src/layouts/ProductShell.astro
src/components/
src/content/categories.ts
src/content/modules/
src/lib/catalog.ts
src/lib/module-contract.ts
src/modules/explainer/
src/modules/game/
src/modules/builder/
src/pages/index.astro
src/pages/categories.astro
src/pages/category/[category].astro
src/pages/[category]/[slug].astro
src/pages/404.astro
src/i18n/
src/styles/
tests/
docs/phase-0-walkthrough.md
```

Each manifest defines stable id, schema version, slug, category, primary division and additional division tags, module type, publish status, per-locale title/pitch/instructions/keywords, runtime configuration, disclosure, source references and asset provenance where applicable. Validate each runtime configuration against its renderer type. The initial three renderers own their state machines and DOM lifecycle. Keep configuration declarative and support a registry of shipped renderer types. Config must never execute arbitrary script, reference a remote executable or render unsanitized rich text. Additional module types enter the registry only after a real renderer exists.

Reject duplicate IDs and routes, reserved paths, unknown categories/divisions, incompatible renderer configs, missing required translations, broken asset paths and invalid published records in the build. Use stable slugs across locales. Store progress only when a feature explicitly requires it. Generate static route entries and the lightweight discovery index at build time. Load only the selected module’s interactive code; a larger catalog should not serialize each simulation into the homepage. Paginate or incrementally render catalog results, test indexing with ephemeral scale fixtures, and keep fixtures out of the public build.

Collect no personal data for Phase 0. Do not embed or redirect to competitor sites as experiences. Keep external documentation links separate from gameplay. Use original content and rightsholder-approved assets. In later modules, use synthetic markets with educational framing, source and date civic claims without partisan targeting, verify Bible translation rights, and review DIY safety and technical claims before publication.

### Build order and acceptance

1. Verify sources and scaffold the product shell. Land a thin vertical slice linking the homepage to the working Protocol Explorer and back.
2. Add typed catalog, route validation, category navigation, search and surprise. Ship the game and DIY module through the same shell.
3. Complete translations and interaction polish. Confirm one identity header, collection theming, history/deep links, and visible disclosure. Handle unknown routes, empty search and browser storage failures.
4. Run lint or equivalent, type checks, contract tests, the production build and browser checks against the built preview. Exercise all three modules, filter/search/surprise, direct URL refresh, keyboard focus and reduced motion. Inspect representative screen sizes and console errors. Record actual commands, outcomes, preview URL and exact revision. Document how to run and explore the preview and identify any unresolved limitations.
5. Give the owner the running preview and walkthrough. Ask for approval of the visual direction, hub-to-module navigation, shared shell, search, and collection switching. Iterate on requested changes. Stop before Phase 1 until approval is explicit.

## Phase 1 — Build the taxonomy after approval

Use these stable category keys and refine localized display names without changing published paths.

| Category key | Scope |
| --- | --- |
| how-it-works | Animated explanations of systems and processes |
| arcade | Original short games |
| diy | Guided making projects and virtual builds |
| interactive-toys | Playable simulations and manipulable toys |
| random-discovery | Internal surprises, unusual facts and discovery |
| creative-tools | Generators and creative utilities |
| data-visualization | Interactive datasets, charts, maps and timelines |
| daily-challenges | Rotating puzzles, challenges and quizzes |
| homepage-builder | Personal homepage tools and reusable widgets |
| multiplayer | Approved collaborative and social experiences |
| sound-music | Instruments, sound toys and music learning |
| text-word | Word games, language tools and writing play |
| art-pixel | Drawing, animation and visual experiments |
| science-nature | Scientific models and natural-history exploration |
| retro | Original retro-computing and nostalgia experiences |

Ground ideas in the five distinct missions. Examples of what this means in practice:

- **Elektroniker** — *Relay Race Board*. Trace an input through a virtual relay circuit and identify which lamp should turn on.
- **Trading** — *Fee Drag*. Use a synthetic ledger to compare how trade frequency changes fees and outcomes. Publish the assumptions alongside the sandbox.
- **Artificial Intelligence** — *Train a Shape Sorter*. Label shapes, test on new examples, and inspect how imbalanced examples affect mistakes using a local toy classifier.
- **Evangelism** — *Parable Story Map*. Arrange scenes in order, then explore the passage and context from a rights-cleared source.
- **Politics** — *Public Budget Table*. Balance a fictional local budget and see which services are affected as allocations change.

Use category × user action × learning outcome × source domain to create ideas. Assign explicit category quotas summing to 10,000 and track primary and secondary division coverage in each batch. Reserve the first 1,000 release candidates for high-value, accessible modules with available rights and compatible renderers. Sequence review and development by renderer and category. Real-time multiplayer needs separately implemented moderation, reporting and privacy controls before publication.

Deliver one Markdown taxonomy grouped by category. Each record requires sequential id, title, slug, category, brand(s), module_type, one_line_pitch, why_it_fits, template_dependencies and ai_policy_notes. Use the renderer vocabulary explainer, simulator, game, quiz, generator, builder, daily, multiplayer, directory or visualization. Include a repo review, brand map, template map, policy summary and gap analysis. Use numbered batches if needed and assemble into one final document. Verify exact row count, contiguous IDs, unique canonical routes, valid taxonomy tags, brand traceability and semantic distinctness. A new setting or reskin is insufficient to establish a new experience.

### Owner-provided seed inventory

Carry these seeds forward. Treat references to existing branded games and software as topic cues and create original concepts. Reframe overlapping entries into distinct goals while retaining topic coverage.

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

## Reference sites

- [Protocol Explorer](https://protocol-explorer-alpha.vercel.app/)
- [Bored.com](https://www.bored.com/)
