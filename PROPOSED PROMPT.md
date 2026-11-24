# AdigunIoT production build prompt

## Assignment

When the owner gives you this prompt to implement, begin Phase 0 in [AdigunIoT](https://github.com/HephzibahBehulahHQ/AdigunIoT). Deliver a running website and working interactions. Stop at the owner’s Phase 0 review gate. The first release is a prototype of the actual product architecture.

AdigunIoT is a browser playground by HB Artificial Intelligence. A visitor who has five spare minutes opens the homepage, finds something interesting, and immediately plays, learns, makes, or discovers. Each card is the doorway to an independent mini-experience on the same domain. Protocol Explorer is the interaction reference for seeing an invisible process unfold. Bored.com is the discovery reference for choosing a category or finding a surprise. Implement original experiences and visual assets in the Hephzibah Behulah design system.

The publishing target is 10,000 working experiences organized into 100 categories with 100 experiences each. Phase 0 proves the interface with three working pages. Phase 1 specifies all 10,000, followed by authorized build and publication milestones. Show accurate module counts throughout the product. Use the existing authorized host if available. Treat adiguniot.hephzibahbehulah.com as a candidate until ownership and configuration are verified.

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

1. Shared header with approved identity and responsive access to Home, Browse, Search, Surprise Me, division and language as specified below.
2. Hero with the two actions and a link to the featured experience.
3. Three playable cards. Each shows its title, one sentence describing the action, category, and primary collection. Use motion previews only where they communicate what the experience does. Each card has a real link.
4. Category directory and honest playable counts. Show zero-count categories with clear empty pages and links back to playable experiences.
5. Product footer with verified corporate links and working project documentation.

Use **Play, Learn, Make, Discover** as quick filters or intent shortcuts. Show the ten catalog collections as the browse entry to 100 categories. The separate division filter applies a verified accent and filters the catalog by division. Keep the product owner label fixed. Show the three Phase 0 modules across the AI and Elektroniker division views. The remaining division views still open their own useful empty view. Preserve browser history and shareable filter state.

### Bored.com discovery reference

Use the owner-provided Bored.com screenshot as a functional reference. It shows a prominent search box, a shuffle action, grouped panels with playable counts, compact icon-led links, a featured destination, and a recent additions list. Translate those discovery patterns into the original HB visual system with approved colors, typography and assets.

- Put a labeled search field near the top of Home and a nearby Surprise Me action. Keep the intro compact so people can see and open a playable experience near the first screen.
- On laptops, use a two- or three-column board of collection panels where space allows. Each shows its icon, title, count and up to five available experience links with icons. The full collection opens with a clear View all action. In the three-module prototype, show each playable link once in the main browse panels and use a compact category grid for the remaining directory. Add Recently added only when real publication dates are available. Feature Protocol Explorer as an immediate action.
- On phones, stack the panels in one readable column, with a short list of tappable rows and a View all link in each panel. Keep the search reachable from the bottom bar when the visitor scrolls. Keep category and experience navigation on the same domain.
- Preserve HB’s original visual treatment across the panels, featured card and controls. Use factual microcopy with verified attribution if a fact appears. Keep scrolling calm and reduced-motion friendly.

### Icon-led navigation on phones and laptops

Every visible menu item has a recognizable icon **and a short translated label**. Apply this to primary navigation, all 10 collections, all 100 category menus, division and intent filters, utility actions, and experience cards. The icon helps people scan. The label tells them where the item goes. Keep the shared header’s one-logo rule. Use the approved icon family where available, or an approved consistent line-icon set. Feature icons such as a network diagram, gamepad, folded paper, compass, music note and bar chart are functional symbols.

- **Phone:** Use a bottom bar with four destinations: Home, Browse, Search and Surprise Me. Keep corporate identity, division and language controls in a compact header or labeled settings panel. Browse opens a two-column icon-card grid where width permits, with a single column when labels need more room. The visitor sees 10 collections first, then the selected collection’s 10 categories, then experience cards. Leave room for safe-area insets and keep the bottom bar from covering content or focus. Every destination works by tap with no hover dependency.
- **Laptop:** Use one header with the same four labeled destinations. Show the ten collections in a spacious icon-card grid and surface the full directory behind Browse. Collection and category pages use breadcrumbs and clearly labeled back links. Wide layouts can show the catalog filters beside the results. Keep the same destination names and symbols across screen sizes.
- **Implementation:** Add an icon key to the collection and category manifests and support a module-level icon override that falls back to its category icon. Use one local typed icon registry shared by menus, search and cards. Assign a recognizable symbol to each collection and each category, avoiding indistinguishable sibling icons. The build validates the 10 collection mappings, 100 category mappings and any module overrides. Use decorative icon semantics when the adjacent label names the control, visible focus and an active state that uses more than color. Aim for 44 × 44 CSS px touch areas. Allow translated labels to wrap. Use clearly named controls when compact utility buttons use icon-only presentation.
- **Acceptance:** At 360, 768 and 1440 CSS px, verify Home → Browse → Collection → Category → Experience and back. Test opening Search and Surprise Me on both phone and laptop. Check tab order, focus visibility, keyboard operation, touch reachability, no overlapping fixed controls, and no clipped labels across all four languages. Verify all catalog menu entries render their intended icon and label. Include the phone and laptop views in the Phase 0 walkthrough.

### Screen 2 · Categories and search

Use /categories/ for the directory, /collections/{collection}/ for collection pages and /category/{category}/ for category pages. Phase 0 renders all ten collections and 100 categories from the directory. A category page has a heading, concise description, live count, filtered card grid and a clear-filter action. Display empty states for inactive or narrow combinations.

Use one command palette on all routes. Open it from the header or Ctrl/Cmd+K. Search translated titles, aliases, category and keywords using a cached static index. Normalize case, diacritics and whitespace. Rank exact title then prefix then token matches. Show at most eight quick results, with a link to the complete filter view when applicable. Support keyboard navigation, Enter to open, Escape to close, and focus return to the trigger. Include an accessible empty state. Use the same published registry for cards, search and random selection. Surprise me opens a playable internal module, excluding the current or most recent selection when alternatives exist. If filters yield nothing, offer a clear way to reset them.

### Screen 3 · Universal experience shell

Generate /{category}/{slug}/ from one module route and use canonical URLs for cards and search. On desktop show breadcrumbs and module title above the interaction workspace and its inspector/help column. On narrow screens stack the workspace, controls and help. Keep the same parts across modules: category and division badges, prompt, workspace, actions, actionable feedback, reset, help/source links, and a short AI/data disclosure. Browser Back returns to the previous view, including filters. Use enhanced in-app transitions with ordinary links, working direct URLs and history as the baseline. Provide a styled 404 with search and a return link.

Use visible keyboard focus, semantic headings, named controls, readable contrast and touch targets. Announce meaningful state changes in a live region without reading every animation frame. Make the full flow operable with reduced motion. Check at 360, 768 and 1440 CSS px with no horizontal overflow. Translate shell, controls, statuses, errors, search aliases, and sample content in English, German, Yoruba and Nigerian Pidgin. Persist only intended non-sensitive settings such as locale. Use versioned browser keys and handle storage denial gracefully. Record which translations were reviewed and which require linguistic review.

### Directory continuity and illustrated explorer workspaces

Every collection or category link opens a dedicated, same-domain directory page using the same Adigun browse shell: search, breadcrumbs, labeled icons, grouped panels, and clickable rows. Use the full hierarchy Home → Collection → Category → Experience. The visible row itself is a link. Support direct URLs and Back. On phones, stack panels in reading order. Only published entries get playable links and count as available. A planned category can open a directory page with an honest empty state.

Internet and protocol experiences open in the dark Adigun workbench. Give each an original illustrated topology with recognizable device drawings, directional network links, and animated event markers that follow the active path. On desktop keep steps, stage, inspector and packet timeline in view together at a usable size. On mobile keep the stage and playback reachable and stack the supporting panels. Treat the diagram, sequence, timeline, and inspector as views of the same event state. Speed changes presentation without changing event data. Reduced motion shows a static active path and endpoint. Apply this contract to future Internet Explorer modules as they are built. The prototype illustrates one explainer with three scenarios.

### Reference-to-product interaction contract

The owner supplied two screenshots. Treat each as a reference for a different moment in the visitor journey.

| Reference | Behavior AdigunIoT must deliver | Adigun design decision |
| --- | --- | --- |
| Bored.com discovery board | Scan grouped experiences, search immediately, open a result in one click, and jump to something unexpected. | Use a compact HB header, an immediately usable search field, an icon-led collection strip and short lists of real experiences grouped beneath it. Use HB typography, spacing and accents. Start with search and a playable featured link in the first screen on phone and laptop. |
| Protocol Explorer workspace | Choose a lesson, advance a simulation, see the change, select an event, and understand what happened. Compare network and sequence views of the same event. | Use an original HB workbench with a scenario bar above the workspace, a prominent transport bar beneath the stage, and an Event / Lesson details area. Design original diagrams, icons and copy. Each control belongs to a working interaction. |

**The product loop is Find → Open → Act → See the result → Try again or find another.** A preview passes when a new visitor can complete this loop without a tour. The three prototype experiences share navigation and feedback conventions. Their workspaces fit their activities: a network diagram for the explainer, receiver pads for the game and a circuit board for the builder. Use the same design tokens and avoid forcing every module into the explainer layout.

### Flagship interaction · Adigun Protocol Explorer

Use one fictional web request as the completed flagship lesson. Give the visitor three ready-to-run scenarios: **First visit**, **DNS answer already cached**, and **Slow reply**. Keep the scenario selector visible. Give each scenario a concrete question and a visibly different result. Use reserved example addresses and synthetic timings. Preview and document these lesson cases with no real hosts, traffic capture or external requests.

- **Stage:** Show browser, local gateway, resolver and origin server as labeled original illustrations. In Network view, highlight the active path and animate a message along it. In Sequence view, show the same events chronologically between participant lanes. Switching views keeps the same event and play position.
- **Lesson rail:** Display the lesson’s milestones as selectable items: find the address, connect, request, receive and display. Explain the chosen milestone in plain language. In the cached scenario, explicitly show the skipped lookup. Label what the lesson simplifies.
- **Transport:** Play/Pause, Previous, Next, Restart and speed are functional. Start paused. Play walks through the event sequence once, and stops at the final event. Previous and Next pause playback and move one event. Selecting a milestone or timeline event pauses and seeks to it. Changing the scenario restarts at its initial state. Restart returns to that scenario’s initial state. Show which step is active and what will happen next.
- **Event log and inspector:** Each event has an ID, phase, simulated time, sender, receiver, kind, short explanation and optional synthetic details. A selected event highlights the same record in the lesson, animation and log. Show a short **Why this matters** explanation alongside details such as a response code. Keep simulated timestamps deterministic and consistent across playback speeds. Changing speed affects presentation time only.
- **Phone layout:** Stack scenario, stage and transport at the top. Provide labeled **Steps**, **Events**, and **Details** views beneath the stage. Represent timeline rows as tappable summaries with expandable details. A visitor must be able to complete and inspect the whole lesson without a horizontal scroll trap.
- **Laptop layout:** Keep the scenario and view switch above the stage. Put the compact lesson rail beside the stage when width permits, with the transport and event log below and details available alongside the selected entry. Maintain a meaningful tab order and keep controls reachable at common laptop heights.

Model the lesson as scenario data and one deterministic playback state with scenario, cursor, play status and speed. Derive all visible highlights from the cursor. Maintain one playback scheduler. Cancel it on pause, seek, restart, scenario change, route exit and unmount. Test switching views and scenarios during playback, rapid clicks, completing the timeline, stepping backward and leaving and reopening the experience. In reduced motion, replace travel animation with static path highlights and keep every event accessible. Announce explicit step changes and playback completion without overwhelming a screen reader during autoplay.

### Foundation review and release evidence

Before application implementation, review this prompt's page map, interaction rules and acceptance cases with the owner. Use the screenshots to compare the feel of the flows. Resolve requested changes in the brief. Once authorized to build Phase 0, deliver a vertical slice with real interactions before broadening the catalog. No taxonomy expansion begins ahead of the existing Phase 0 approval gate.

At the live review ask the owner to try these tasks on laptop and phone:

1. From Home, find Protocol Explorer through search. Return to the same browse position. Open a different experience through Surprise Me.
2. Run First visit, pause, step, inspect a response, switch to Sequence, then compare the cached scenario and explain what changed.
3. Play a round of Signal Catch and replay. Build a Paper Circuit and distinguish an open loop from reversed polarity.
4. Open a shared experience URL directly. Repeat the key flows using a keyboard and reduced-motion settings. Confirm icons, labels, controls, and state feedback remain clear.

Record the actual preview URL, revision, checked devices or viewport sizes and any failed tasks. Keep the prototype’s published counts honest. Treat the 100-category directory and the 10,000-experience plan as separate from the number of working experiences available during review.

### Three working experiences

| Route and collection | What happens in the workspace | Acceptance case |
| --- | --- | --- |
| /internet-protocols/adigun-protocol-explorer/ · HB Artificial Intelligence | Run and compare First visit, DNS answer already cached and Slow reply using the flagship interaction contract above. Follow a fictional browser request with synchronized diagram, sequence, lesson, event log and inspector. Keep all events in local simulation. | Step reaches the same end state as Play. Pause freezes progress. Reset clears the timeline and selection. The event log exposes source, destination, purpose and outcome in keyboard and reduced-motion use. Reload restarts the demo. |
| /arcade/signal-catch/ · HB Artificial Intelligence | A 20-second reaction game. A pulse travels along a grid and briefly appears on one of four receiver pads. Click a pad or use keys 1–4 to catch it. A correct catch earns one point once per pulse. A wrong or missed catch breaks the streak. Offer an untimed practice round and a results screen with Replay. Use original art and sound, with sound off by default. | Starting multiple times creates one timer. The same pulse cannot score twice. The timed round ends once and shows the final score. Replay clears round state, and keyboard input works only in the active game. |
| /paper-cardboard/paper-circuit/ · HB Elektroniker | A four-step virtual build: place the source symbol, route the two foil paths, orient the LED, and close the switch. Offer both placement controls and buttons. The diagram lights only with a closed path and correct simulated polarity. Provide reset and a short explanation of the result. Physical-build instructions are out of scope for the prototype. | Open circuit and reversed polarity yield different feedback. A correct closed path lights the virtual LED. Step navigation and reset behave consistently and all interactions work with a keyboard. |

### Implementation contract

Use a single content registry and a typed renderer map. Where the repository lacks equivalent structure, use these paths:

```text
product.config.json
src/layouts/ProductShell.astro
src/components/
src/content/collections.ts
src/content/categories.ts
src/content/modules/
src/lib/catalog.ts
src/lib/module-contract.ts
src/modules/explainer/
src/modules/game/
src/modules/builder/
src/pages/index.astro
src/pages/categories.astro
src/pages/collections/[collection].astro
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
3. Complete translations and interaction polish. Confirm one identity header, division theming, history/deep links, and visible disclosure. Handle unknown routes, empty search and browser storage failures.
4. Run lint or equivalent, type checks, contract tests, the production build and browser checks against the built preview. Exercise all three modules, filter/search/surprise, direct URL refresh, keyboard focus and reduced motion. Inspect representative screen sizes and console errors. Record actual commands, outcomes, preview URL and exact revision. Document how to run and explore the preview and identify any unresolved limitations.
5. Give the owner the running preview and walkthrough. Ask for approval of the visual direction, hub-to-module navigation, shared shell, search, and division filtering. Iterate on requested changes. Stop before Phase 1 until approval is explicit.

## Phase 1 — Specify the full catalog after approval

## Catalog architecture — 10 collections × 10 categories × 100 experiences

**The product target is 10,000 working interactive pages.** The navigation has 10 broad collections and exactly 100 named categories. Each category has 100 planned experiences. Collections help people browse. Categories own the experience URLs and quotas. Division tags are a separate editorial dimension, so one module can belong to several HB missions without counting twice. The Phase 1 taxonomy is the blueprint for the 10,000 working pages. Build and publish those pages progressively after the taxonomy and release slices are authorized.

### Locked starting directory

Use these proposed names and keys as implementation defaults. Translate displays without changing keys. Every collection owns the ten categories listed in its row.

| Collection and key | Categories and canonical keys |
| --- | --- |
| 1. Systems & Engineering (`systems-engineering`) | Internet & Protocols (`internet-protocols`) · Signals & Wireless (`signals-wireless`) · Computers & Operating Systems (`computers-operating-systems`) · Electronics & Circuits (`electronics-circuits`) · Sensors & Measurement (`sensors-measurement`) · Robotics & Motion (`robotics-motion`) · Automation & PLCs (`automation-plcs`) · Energy & Power Grids (`energy-power-grids`) · Machines & Mechanisms (`machines-mechanisms`) · Transport & Navigation (`transport-navigation`) |
| 2. Arcade & Challenges (`arcade-challenges`) | Arcade (`arcade`) · Reaction & Timing (`reaction-timing`) · Logic & Deduction (`logic-deduction`) · Memory & Attention (`memory-attention`) · Spatial Puzzles (`spatial-puzzles`) · Number Puzzles (`number-puzzles`) · Strategy Boards (`strategy-boards`) · Daily Challenges (`daily-challenges`) · Pattern Spotting (`pattern-spotting`) · Trivia (`trivia`) |
| 3. DIY & Making (`diy-making`) | DIY & Making Projects (`diy-making-projects`) · Paper & Cardboard (`paper-cardboard`) · Wood & Workshop (`wood-workshop`) · Textiles & Stitching (`textiles-stitching`) · Recycling & Repair (`recycling-repair`) · Kitchen Science & Food Making (`kitchen-science-food-making`) · Garden & Growing (`garden-growing`) · Models & Prototyping (`models-prototyping`) · Photography & Optics (`photography-optics`) · Home Organization (`home-organization`) |
| 4. Science & Nature (`science-nature`) | Space & Astronomy (`space-astronomy`) · Physics Playgrounds (`physics-playgrounds`) · Chemistry Models (`chemistry-models`) · Earth & Geology (`earth-geology`) · Weather & Climate (`weather-climate`) · Life & Cells (`life-cells`) · Human Body & Senses (`human-body-senses`) · Oceans & Water (`oceans-water`) · Animals & Ecosystems (`animals-ecosystems`) · Materials Science (`materials-science`) |
| 5. Creative Studio (`creative-studio`) | Pixel Art & Sprites (`pixel-art-sprites`) · Drawing & Illustration (`drawing-illustration`) · Animation & Motion (`animation-motion`) · Generative Art (`generative-art`) · Color & Design (`color-design`) · Sound & Music (`sound-music`) · Beat & Rhythm (`beat-rhythm`) · Writing & Story (`writing-story`) · Words & Language (`words-language`) · Creative Generators (`creative-generators`) |
| 6. Web & Digital Worlds (`web-digital-worlds`) | Homepage Builder (`homepage-builder`) · Retro Computing (`retro-computing`) · Web History (`web-history`) · Interactive Toys (`interactive-toys`) · Virtual Worlds (`virtual-worlds`) · Multiplayer & Social (`multiplayer-social`) · Data & Visualization (`data-visualization`) · Maps & Geography (`maps-geography`) · Random Discovery (`random-discovery`) · Curious Facts (`curious-facts`) |
| 7. AI & Digital Trust (`ai-digital-trust`) | AI Foundations (`ai-foundations`) · Training Data & Labels (`training-data-labels`) · Model Evaluation (`model-evaluation`) · AI Explanations (`ai-explanations`) · Text & Language AI (`text-language-ai`) · Vision & Audio AI (`vision-audio-ai`) · Human–AI Workflows (`human-ai-workflows`) · Privacy & Permissions (`privacy-permissions`) · Secure Habits (`secure-habits`) · Defensive Monitoring (`defensive-monitoring`) |
| 8. Money & Markets (`money-markets`) | Money & Budgeting (`money-budgeting`) · Interest & Compounding (`interest-compounding`) · Market Mechanics (`market-mechanics`) · Charts & Indicators (`charts-indicators`) · Fees & Friction (`fees-friction`) · Risk & Uncertainty (`risk-uncertainty`) · Diversification (`diversification`) · Trading Journals (`trading-journals`) · Strategy Testing (`strategy-testing`) · Economic Signals (`economic-signals`) |
| 9. Faith & Biblical Learning (`faith-biblical-learning`) | Bible Overview (`bible-overview`) · Bible Geography (`bible-geography`) · Biblical Timelines (`biblical-timelines`) · People of the Bible (`people-of-the-bible`) · Parables (`parables`) · Biblical Themes (`biblical-themes`) · Scripture Memory (`scripture-memory`) · Bible Study Methods (`bible-study-methods`) · Church & Community History (`church-community-history`) · Faith & Service (`faith-service`) |
| 10. Civic Life & Society (`civic-life-society`) | Public Institutions (`public-institutions`) · Public Budgets (`public-budgets`) · Elections & Representation (`elections-representation`) · Local Government (`local-government`) · How Laws Are Made (`how-laws-are-made`) · Public Services (`public-services`) · Rights & Responsibilities (`rights-responsibilities`) · Media & Information Literacy (`media-information-literacy`) · Policy Trade-offs (`policy-trade-offs`) · Community Planning (`community-planning`) |

This directory preserves the earlier topic coverage across the 100 categories. Learn-how-it-works material lives throughout the systems and science collections. Games, DIY, toy simulations, discovery, generators, visualization, daily challenges, homepage building, multiplayer, music, words, art, nature and retro each have explicit homes. Use cross-links and tags for related pages. Keep one canonical category per module.

### Design the 100 slots before writing the titles

Give every category an editorial brief with a visitor promise, category boundaries, suitable interaction types, source and rights needs, and ten topic families. Assign ten experiences per family. Give each item a meaningful action, a result the visitor can observe, and a clear reason to spend time on it. An item may teach, entertain, help someone make something, or combine those goals. Derive ideas from the subject and user action. Use the grids for coverage and accountability.

For **Internet & Protocols**, start with these ten families: addresses, name lookup, routing, local links, delivery and retries, encrypted connections, browser requests, caches, real-time messages, and outage diagnosis. The name-lookup family has space for ten distinct interactions. Examples include tracing a lookup, comparing a cached and uncached answer, stepping through an expired record, and matching names to synthetic record types. A single DNS simulator with ten settings is one module. A separate experience earns a slot when its main interaction or outcome warrants its own visit.

For **Public Budgets**, families could include revenue, public services, capital projects, trade-offs, fiscal calendars, borrowing, maintenance, emergency reserves, community input and budget transparency. A visitor balancing a fictional library budget and a visitor tracing how a road repair moves from a proposal to an appropriation perform meaningfully different activities. Use fictional numbers with stated assumptions.

Use the same discipline for creative and play categories. For **Sound & Music**, a pulse sequencer, a rhythm transcription puzzle, and a tool for comparing timbres each offer a different experience. Recoloring a sequencer comes under customization for the original module.

### Visitor navigation at scale

- Home shows the ten collections and a focused selection of published pages. The category directory shows all 100 with collection filters. Keep the header small on phones. Provide an All Categories destination, a short collection menu and a keyboard-friendly search entry.
- Give each collection a landing page at /collections/{collection}/ with its 10 category cards. Give each category a page at /category/{category}/. Keep experiences at /{category}/{slug}/. Show Home → Collection → Category → Experience in breadcrumbs. Add related experiences from another category when there is a genuine connection.
- On category pages, show published counts, paginate at 24 cards and preserve filter and page state in the URL. Provide Play, Learn, Make and Discover intent filters. Use a shareable browse state. Distinguish these filters from collections and the five division tags.
- **Surprise Me** supports the whole published site or the current filter. Announce the scope. In Phase 0 avoid the current or most recent choice when there is an alternative. At scale use a short session history to avoid repeats and offer another experience from the destination. For an empty scope, offer the all-site choice explicitly.
- Index only published modules. Build lightweight per-locale search summaries and lazy-load search data when needed. At scale shard results or use an equivalent measured approach. Keep renderer configs out of the catalog index. Verify meaningful queries at 100, 1,000 and 10,000 records using unpublished synthetic fixtures. Never expose fixture records or show planned counts as available experiences.
- Offer editorial discovery routes after the prototype, beginning with **I have two minutes**, **Make something**, and **Teach me something**. Use duration and action metadata so those links predict what will happen. Keep browsing useful without sign-in.

### Editorial and production workflow

Phase 1 delivers one reviewable Markdown taxonomy and a machine-readable catalog ledger generated from the same records. Each record includes stable ID, collection, canonical category, family, slug, primary division and optional secondary divisions, module type, user intent, title, one-line pitch, core action, visible outcome, brand rationale, template dependencies, disclosure needs, source or rights requirements, estimated duration, and status. Give each category a three-item pilot slate selected for contrast of interaction. Keep public UI counts tied to published entries only.

Generate a validation report with 10 collections, 10 categories in each, 10 families per category, 10 records per family, 100 records per category and exactly 10,000 total. Verify contiguous taxonomy IDs, immutable module identifiers, unique canonical paths, valid references and coverage across all five divisions. Flag near-duplicates using normalized title and action/outcome text, then review flagged pairs. Record the review decision. Generate the Markdown from the ledger so it can be reviewed by category and maintained without divergent copies.

Use editorial states **idea → specified → built → verified → published**. Each promotion has evidence: a defined interaction, implemented renderer, checks against the acceptance case, then release approval and the published route. Only published modules enter discovery and public counts. Keep renderer additions tied to a verified interaction need.

After the three-module prototype and Phase 1 approval, plan publication in cumulative milestones of **100, 1,000, 5,000 and 10,000**. At 100, aim for one verified experience in every category to test actual breadth. At 1,000, aim for ten per category and evaluate search, accessibility and editorial throughput. At 5,000 and 10,000, enforce the same publication checks and measure browse performance and coverage. Every milestone counts actual working pages. Require approved release slices for the implementation effort. Keep the project status explicit if some category has a rights, moderation, safety or technical dependency.

### Division anchors and original examples

- **Elektroniker** — Relay Race Board. Trace a virtual control input and work out which indicator changes.
- **Trading** — Fee Drag. Compare fictional transaction costs at different activity levels with visible assumptions.
- **Artificial Intelligence** — Train a Shape Sorter. Label shapes, test held-out examples, and inspect how label imbalance changes errors.
- **Evangelism** — Parable Story Map. Arrange scenes in order and explore the passage with rights-cleared material.
- **Politics** — Public Budget Table. Make trade-offs in a fictional municipal budget and inspect how services are affected.

Keep the existing owner-provided seed inventory. Map each seed to its new home and create original equivalents for cues based on existing products. Consolidate true overlaps and keep a traceability record. Include the repo review, brand map, template map, policy summary and gap analysis in the Phase 1 delivery.

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
