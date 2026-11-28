# AdigunIoT agent instructions

## Workspace and scope

Work in the selected `C:\Codex\AdigunIoT` folder and the [AdigunIoT repository](https://github.com/HephzibahBehulahHQ/AdigunIoT). Verify both before writing. Preserve existing work, inspect installed tools and the dependency cache, reuse the package manager and lockfile, and keep project artifacts in the project folder. Use one current standalone Phase 0 preview. Before implementation, read [PROPOSED PROMPT.md](PROPOSED%20PROMPT.md) and verify the canonical [HB design system](https://github.com/HephzibahBehulahHQ/hb-design-system), [HB AI engineering policy](https://github.com/HephzibahBehulahHQ/hb-AI-policy), and [AI division guidance](https://github.com/HephzibahBehulahHQ/hb-artificial-intelligence).

## Product boundaries

- **AdigunIoT** is the portfolio. It has 100 categories with 100 independently identifiable mini-site positions each. Ten collections are browse groupings.
- **AdigunBored** occupies one portfolio position. It has its own 100 categories and a target of 50 distinct destinations per category. Its catalog can contain native activities and approved links to other Adigun sites. Keep portfolio and directory IDs, statuses, and counts separate.
- **Adigun Protocol Explorer** is a separate mini-site and the interaction model for Internet Explorer experiences. Other experiences use workspaces suited to what visitors do.
- Label planned, playable in preview, verified, and published records accurately. Keep unfinished items out of published counts and playable-only actions.

## Identity, layout, and interaction

- Use the exact approved `assets/corporate/hephzibah-behulah-official.jpg` artwork from the design system. Use one corporate logo per product header, a text product wordmark, and a concise division label. Preserve aspect ratio and visual contrast. Use the approved typography and color tokens. Keep emoji in navigation and activities.
- Center each directory and category in a bounded desktop container. AdigunBored uses compact, icon-led list panels and a wider item list next to a narrower Related rail. Stack the rail below the results on phones. Keep primary actions near the top and use original illustrations, distinct readable accents, short labels, and useful feedback.
- Every menu, submenu, and experience link needs a recognizable icon or emoji and a readable accessible label. Keep the whole row clickable. Verify search, direct routes, breadcrumbs, Back, keyboard focus, and touch controls. Put extended detail behind an optional disclosure.
- Explorer workspaces use a dark stage with original device art, animated events, a timeline and an inspector. Derive every view from the same event state. Provide pause, step, restart and reduced motion. Use simulated data only for networking demos.

## One-screen game interface

Every game must run in a single fixed viewport from start to finish. Keep the play area, score or status, and essential gameplay controls visible and usable together, including Start, Pause when applicable, Replay or Reset, and Exit. The game page, embedded game frame, and play area must require zero horizontal or vertical scrolling to play or reach any control. Scale the board and reflow the controls for laptop, phone, and short phone viewports. Optional help may open in a dismissible overlay. Keep keyboard focus visible and touch targets usable. Verify start, active play, and end-of-round states on the exact release candidate. Any game that needs scrolling fails the release gate.

## Universal Game Studio layout and UI

Apply this rule to every game and interactive app during use, including embedded studios. Keep portfolio and directory browsing in the directory layout described above.

- **Lock the viewport.** Set `html`, `body`, and `#studio` to `100vw` by `100vh` with `overflow: hidden`. Use the dynamic viewport height on supported phones to account for browser chrome. Require zero horizontal and vertical scrolling. The full-bleed playfield fills the studio at `z-index: 1`. Leave about 90% of the canvas open, with persistent UI covering at most 15%. Keep sidebars, persistent text panels, and dashboard boxes out of the studio.
- **Top-left HUD.** At a fixed 16px inset, show at most four small single-line glass pills. Each pill contains only an icon and short value, such as `❤️ 100` or `⏱️ 01:20`. Keep descriptions and sublabels in Help.
- **Top-right controls.** At a fixed 16px inset, use 40px square icon buttons with accessible names for Help, Audio when available, and Pause or Menu. Keep exit reachable through Menu.
- **Bottom-center dock.** Center a fixed horizontal dock 16px from the bottom. Keep it at or below 76px tall. Use 60px square tiles with icons and optional short badges for tools, cards, or abilities.
- **Bottom-right actions.** At a fixed 16px inset, show one or two primary actions and quick reset or undo icons as applicable. On narrow phones, offset the dock or action group vertically only as needed to prevent overlap. Respect safe-area insets and keep controls within the viewport.
- **On-demand overlays.** Put tutorials, rules, lore, detailed stats, and settings in centered glass dialogs at `z-index: 20`. Open them on explicit Help or Menu activation, or at game start or game over. Support dismissal, keyboard focus management, and return focus to the trigger where applicable.
- **Pointer safety.** Set full-screen HUD wrappers to `pointer-events: none`. Restore `pointer-events: auto` on interactive buttons and docks so the rest of the canvas remains clickable.

Verify the exact candidate at laptop and phone sizes, including a short phone viewport, through start, active play or use, reset, and end states. Check for zero scrolling, unobstructed canvas input, non-overlapping controls, persistent HUD coverage, usable touch and keyboard controls, and reachable exit. Hold releases that fail these checks.

## Ship small verified increments

Merge and deploy reviewable increments as they pass. One complete page, menu, or feature can qualify. The owner authorizes routine releases to existing authorized targets. Follow branch protections and required reviews. New hosting, custom domains, and access changes require separate authorization.

Before release, verify the exact candidate on phone and laptop. Check affected pages, menus and shared navigation for official identity, working controls, icons, centered layout, readable accents, useful visuals, keyboard support, purposeful animation and reduced motion. Run relevant build and regression checks. Record the candidate, checked routes, viewport results and gaps in the PR. Hold the affected increment if a required check is missing or fails. After deployment, verify the live revision and smoke-test the changed routes.
