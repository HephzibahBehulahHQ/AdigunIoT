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

Every game must run in a single fixed viewport from start to finish. Keep the play area, score or status, and every game-specific button, menu, and controller visible and usable together, including Start, Pause when applicable, Replay or Reset, and Exit. The game page, embedded game frame, and play area must require zero horizontal or vertical scrolling to play or reach any control. Scale the board and reflow the controls for laptop, phone, and short phone viewports. Optional help may open in a dismissible overlay. Keep keyboard focus visible and touch targets usable. Verify start, active play, and end-of-round states on the exact release candidate. Any game that needs scrolling fails the release gate.

## Ship small verified increments

Merge and deploy reviewable increments as they pass. One complete page, menu, or feature can qualify. The owner authorizes routine releases to existing authorized targets. Follow branch protections and required reviews. New hosting, custom domains, and access changes require separate authorization.

Before release, verify the exact candidate on phone and laptop. Check affected pages, menus and shared navigation for official identity, working controls, icons, centered layout, readable accents, useful visuals, keyboard support, purposeful animation and reduced motion. Run relevant build and regression checks. Record the candidate, checked routes, viewport results and gaps in the PR. Hold the affected increment if a required check is missing or fails. After deployment, verify the live revision and smoke-test the changed routes.
