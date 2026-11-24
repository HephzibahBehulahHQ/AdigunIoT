# AdigunIoT portfolio · Phase 0 production brief

## The product boundary

AdigunIoT is the product repository and portfolio. It houses **100 editorial categories with 100 mini-website positions in each**. The ten collections are navigation groupings of ten categories apiece. A mini-website has an independent visitor promise, name, home route, visual identity within HB standards, and an activity or tool of its own. It may have multiple screens. Count it once. A menu, topic, tab, theme, setting, simulation scenario, or route alias does not add another site.

**AdigunBored** is one mini-website in Random Discovery. AdigunBored.com is its proposed domain pending verification. It offers a compact, image- and icon-led discovery experience, including ways to find other Adigun sites. **Adigun Protocol Explorer** is another mini-website in Internet & Protocols. Its dark, illustrated, animated workbench is the reference for Internet Explorer experiences. **Signal Catch** and **Paper Circuit** occupy distinct positions in Arcade and Paper & Cardboard. The portfolio directory is the map of the whole project. It occupies no mini-website slot. AdigunBored’s layout applies to its own browse screens. Other mini-websites use the layout that fits their primary activity.

## Review these Phase 0 previews first

1. Open [AdigunIoT Portfolio Preview](docs/preview/AdigunIoT-portfolio-preview.html). Open any category and see all 100 positions. Search category and lead-site names, use the collection filters, or enter an exact slot ID.
2. In that same file, open AdigunBored and the three sample experiences. Use **Back to portfolio** to return to the previous collection, category or slot. Keep this single preview as the current review artifact.
3. Review on phone and laptop. Verify arrows, breadcrumbs, Back, keyboard focus, visual density, image usefulness, and whether each example feels like a separate mini-website. The prototype labels unfilled positions and distinguishes sample previews from published sites.

**Current Phase 0 review scope:** 10 collections, 100 visible categories, 10,000 addressable positions, one proposed lead site per category, and four clickable mini-website previews. Positions without an editorial concept remain open. An open position reserves capacity. It does not represent a completed idea or working website. Do not start product implementation or populate the full taxonomy until the owner approves the portfolio structure and Phase 0 direction. Follow the release gate in [AGENTS.md](AGENTS.md). Routine small increments may merge and deploy once the exact release candidate passes the checks in AGENTS.md.

## Use the HB templates and rules

- [Company](https://github.com/HephzibahBehulahHQ/HephzibahBehulahHQ.github.io) defines the corporate identity and five divisions. Product code stays in this repository.
- [Universal product template](https://github.com/HephzibahBehulahHQ/hb-design-system/tree/main/templates/universal-product) supplies the current configuration contract. Verify the schema, official logo, token paths and typography. Use the one-logo rule and text wordmark. Apply approved division accents. Use real supported capabilities and en, de, yo and pcm where adopted in the product configuration.
- [AI division](https://github.com/HephzibahBehulahHQ/hb-artificial-intelligence) supplies domain guidance for responsible AI and defensive learning. Make simulation and actual AI use clear where relevant. Enable Adigun BOT only once a real integration meets [its component standard](https://github.com/HephzibahBehulahHQ/hb-design-system/tree/main/components/AdigunBot).
- [Engineering policy](https://github.com/HephzibahBehulahHQ/hb-AI-policy) supplies governance, security, checkpoint and testing requirements. Confirm the actual policy revision and scope. Record the exact candidate and review evidence.
- Verify the selected checkout and existing stack before modifying application code. Reuse the package manager, lockfile and compatible tools. For a verified documentation-only checkout, use Astro static output and TypeScript as the initial implementation choice. Keep the standalone HTML review files independent of the production build.

## Phase 0 visual review and first production slices

The preview is a decision artifact. Review the portfolio directory, an AdigunBored category, and a playable site as separate screens.

1. **Portfolio review.** Open categories at opposite ends of the directory. Check the 100-by-100 structure, slot lookup, and labels for proposed and playable entries.
2. **AdigunBored review.** Open Arcade from Board Home, select a playable row, return, then open a related category. Confirm the centered list and Related rail, original icons and colors, a concise header, and the single-column phone flow. The current 100 category routes demonstrate structure. Publish counts from real entries.
3. **Explorer review.** Play a protocol lesson, select a timeline event, switch to Sequence, and retry with reduced motion. Confirm the path, active event and inspector agree.
4. **Brand review.** The standalone file embeds the exact approved corporate JPEG from the HB design-system template. The portfolio shows AdigunIoT as its text wordmark, and each site shows its product name. Verify the logo at phone and laptop widths.

For the first build slice, create registry validation and a real directory-to-activity flow using one owned activity. Maintain separate registry records for portfolio sites, board categories and board destinations. A Board destination resolves to a native activity route or an approved existing portfolio site. Reject self-links, dangling references, duplicate canonical IDs and published records with unavailable destinations. An entry appears in Play, published counts and Surprise only when its destination is verified. Extend with related links, browsing by mood, recent history, layout preferences, and feedback in individually testable increments.

## Current implementation goals

1. **One review artifact.** Maintain only the self-contained portfolio preview. Start from Home and verify every category, slot, and demo link. Keep all product work in the selected AdigunIoT folder and draft branch.
2. **Complete the first interaction slice.** Verify the flow from portfolio to category to demo and back. Review all four sample layouts on a phone and laptop. Use the approved compact, centered, icon-led design.
3. **Build the catalog foundation.** Adopt the HB product template in the verified project, establish a typed registry and distinct site routes, and carry the validated 100-by-100 inventory into production. Incrementally specify distinct concepts after the structure review.
4. **Release in small verified increments.** Verify the changed pages, menus and affected shared navigation. Merge and deploy each passing slice to the existing authorized target and smoke-test the deployed revision.

## Exact category structure

| # | Collection | Ten categories |
| --- | --- | --- |
| 1 | Systems & Engineering | Internet & Protocols · Signals & Wireless · Computers & Operating Systems · Electronics & Circuits · Sensors & Measurement · Robotics & Motion · Automation & PLCs · Energy & Power Grids · Machines & Mechanisms · Transport & Navigation |
| 2 | Arcade & Challenges | Arcade · Reaction & Timing · Logic & Deduction · Memory & Attention · Spatial Puzzles · Number Puzzles · Strategy Boards · Daily Challenges · Pattern Spotting · Trivia |
| 3 | DIY & Making | DIY & Making Projects · Paper & Cardboard · Wood & Workshop · Textiles & Stitching · Recycling & Repair · Kitchen Science & Food Making · Garden & Growing · Models & Prototyping · Photography & Optics · Home Organization |
| 4 | Science & Nature | Space & Astronomy · Physics Playgrounds · Chemistry Models · Earth & Geology · Weather & Climate · Life & Cells · Human Body & Senses · Oceans & Water · Animals & Ecosystems · Materials Science |
| 5 | Creative Studio | Pixel Art & Sprites · Drawing & Illustration · Animation & Motion · Generative Art · Color & Design · Sound & Music · Beat & Rhythm · Writing & Story · Words & Language · Creative Generators |
| 6 | Web & Digital Worlds | Homepage Builder · Retro Computing · Web History · Interactive Toys · Virtual Worlds · Multiplayer & Social · Data & Visualization · Maps & Geography · Random Discovery · Curious Facts |
| 7 | AI & Digital Trust | AI Foundations · Training Data & Labels · Model Evaluation · AI Explanations · Text & Language AI · Vision & Audio AI · Human–AI Workflows · Privacy & Permissions · Secure Habits · Defensive Monitoring |
| 8 | Money & Markets | Money & Budgeting · Interest & Compounding · Market Mechanics · Charts & Indicators · Fees & Friction · Risk & Uncertainty · Diversification · Trading Journals · Strategy Testing · Economic Signals |
| 9 | Faith & Biblical Learning | Bible Overview · Bible Geography · Biblical Timelines · People of the Bible · Parables · Biblical Themes · Scripture Memory · Bible Study Methods · Church & Community History · Faith & Service |
| 10 | Civic Life & Society | Public Institutions · Public Budgets · Elections & Representation · Local Government · How Laws Are Made · Public Services · Rights & Responsibilities · Media & Information Literacy · Policy Trade-offs · Community Planning |

## AdigunBored · one site, its own 5,000-destination catalog

Use AdigunBored as the product name. Treat AdigunBored.com as a candidate domain until verified. AdigunBored occupies **one portfolio position**. Its internal categories, games, tools and other destinations have their own catalog. Allocate **100 board categories with a target of 50 distinct destinations each**, for about **5,000 board destinations**. Keep these counts separate from the 10,000-site portfolio. A board destination can own an original activity or point to another verified Adigun site. A cross-link does not create a second portfolio site.

| Board family | Ten AdigunBored categories |
| --- | --- |
| 🎮 Arcade | Quick Games · Reflex · Platforming · Sports · Racing · Party · Two Players · Score Chasers · Daily Games · Arcade Rooms |
| 🧩 Puzzles | Logic Grids · Word Puzzles · Number Puzzles · Tile Puzzles · Memory · Mysteries · Trivia · Hidden Objects · Mazes · Pattern Tests |
| 🫧 Just for Fun | Pointless Play · Satisfying Loops · Emoji Play · Comedy · Tiny Surprises · Nonsense Machines · Mind Tricks · Optical Illusions · Odd Questions · Random Portals |
| 🧪 Playgrounds | Visual Toys · Physics Toys · Tiny Towns · Sandboxes · Fluid Play · Particle Play · Creature Makers · World Builders · Decision Games · Business Sims |
| 🎨 Make | Draw · Pixel Art · Avatars · Color Mixing · Design Prompts · Paper Projects · DIY Tools · Web Pages · Collage · Craft Challenges |
| 🎵 Listen | Beat Makers · Sound Toys · Ambient · Radio Maps · Music Discovery · Ear Training · Rhythm Games · Instrument Toys · Chiptunes · Sound Stories |
| 🌍 Explore | Maps · Space · Nature · Weather · Ocean · Virtual Museums · Data Stories · Food Origins · Internet History · City Walks |
| 💡 Get Curious | How It Works · Curious Facts · Science Demos · AI Experiments · Coding Play · Language Play · Brain Training · Myth Checks · Future Worlds · Quiz Lab |
| 🛋️ Unwind | Cozy Corners · Quiet Puzzles · Garden Play · Cat Corner · Mindful Breaks · Retro Rooms · Seasonal Play · Short Reads · Mini Films · Night Mode |
| 🌀 Rabbit Holes | Odd Search · Internet Collections · Interactive Fiction · Web Comics · Media Quizzes · Dress Up · Odd Shops · Deep Dives · Group Experiments · Unsorted Wonders |

- **Centered from Home to detail.** At laptop widths use a centered directory with a maximum content width near 980 px, generous side margins, compact three-column panels on Home, and a two-column category page. Give the actual list about two-thirds of the category page and related-category cards the remaining space. On phones stack the list above Related, with 44 px touch targets and no horizontal scrolling. Use original HB visual styling, readable color accents, emoji, small illustrations, short labels and clickable rows.
- **Full reference coverage.** Carry forward the reference behaviors from the supplied recordings and transcripts: category and subcategory browsing, Arcade, Moods, Updates, search, Surprise, featured tiles, recent additions, clearable recent visits, layout switching, session summary, feedback, help and footer links. Add category share/copy, a local opt-in “Worth it?” vote on eligible return visits with a suppress option, and a pause control for any moving fact strip. Publish genuine counts. Surface playable rows before optional details.
- **Standalone activities.** Include quick games, visual toys, art, sound, unusual questions, discovery, small simulations, short reads and original pointless fun. Each native destination has a real interaction or useful content. Group destinations by visitor action. Preserve original title, icon, route, availability, publication date, age/rights and accessibility metadata. Keep fixture and planned records out of published counts and Surprise. Build and verify small slices as they become ready.
- **Phase 0 evidence.** The standalone preview demonstrates AdigunBored’s 100 separate category routes and a centered category view with a related rail. The 50-per-category figure is capacity. Verify real counts and links incrementally as the native destinations are built.

## Portfolio implementation contract after approval

- Maintain one typed registry of immutable category and site IDs. Allocate 100 ordered positions to each category. Example position ID `C01-001` means category 1, position 1. Keep IDs independent of titles. Generate stable, shareable category and site routes from the registry. Keep preview file hashes separate from production URLs.
- Use ID, category, slug, title, intent, core activity, result, visual assets, owner division, related sites, accessibility, disclosures and publish state per site. Reserve optional custom domains as verified aliases of canonical routes. A custom domain requires ownership, configuration and explicit authorization. Keep the directory functional on the primary host.
- Portfolio pages share a centered, compact design. Show the full category directory, short labels, topic emoji or icons, optional useful illustrations, and prominent search. Provide direct category access, Back, and mobile touch targets. A category page can surface a handful of existing sites, then list or paginate its positions in planning view. Public view counts and links only published sites. Share search and browse state where appropriate.
- Site manifests select a shared interaction renderer where it fits. Provide an isolated, typed route and an extension point for bespoke sites. Load only the selected site runtime. Preserve consistent identity, keyboard access, reduced motion, help, and routing across all sites. Give each site an intentional activity-focused layout.
- Separate AdigunBored’s editorial lists, moods, arcade filters, layout preferences, featured images, local session stats, and clearable history from the portfolio registry interface. Search discovers approved internal sites. Keep categories, Arcade, Moods, Updates, help and feedback from header to footer. Use real content and counts.
- For Internet Explorer sites, use an illustrated dark stage with original device drawings and animated events. The active path, network/sequence view, steps, timeline and inspector derive from the same simulation cursor. Support Play/Pause, Previous, Next, Restart, speed, and reduced motion. Use synthetic scenarios and reserved example addresses. Avoid real traffic capture or targeting.
- For all others, put the primary interaction and visible result ahead of explanation. Keep required instructions short, offer details on demand, and use original artwork and content. Trade simulators use fictional data and explicit assumptions. Civic content uses verified, dated sources. Bible content requires rights clearance. DIY content needs practical safety and source review.

## Phase 0 acceptance and later production milestones

Review all 100 categories and confirm each exposes 100 ordered positions without duplicate IDs. Verify navigation across the first and last category, slot lookup, category filtering, and the four sample sites. Check layouts at phone, tablet and laptop widths. Record which checks ran. Owners should decide whether the categories, the split between portfolio and AdigunBored, and the four visual directions are right before implementation.

After Phase 0 approval, fill the 10,000 slots with distinct original site concepts using ten topic families per category and ten concepts per family. Each concept needs a distinct user action or learning outcome. Keep the original seed inventory traceable, flag overlaps, and require editorial review before turning an idea into a build specification. Export a machine-readable registry and a reviewable catalog from the same records. Validate 100 categories, 100 concepts per category, 10,000 total, unique routes, all five divisions represented, and separate planned, built, verified and published counts.

Build in reviewable slices. First aim for a verified site in each category, then milestones of 1,000, 5,000 and 10,000. Verify actual behavior, content, accessibility, responsive visuals and deep links. Never claim the full build based on the count of positions or ideas. Merge and deploy each passing increment as it is ready. Record the before-merge checks and verify the deployed revision.

## Reference annex

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
