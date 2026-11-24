# AdigunIoT agent instructions

## Required visual treatment for every page and menu

- **Icons and emoji.** Give every screen title, menu item, submenu, experience link, and primary action a recognizable icon or emoji paired with a short localized text label. Use playful, topic-specific emoji where they help people recognize the destination. Keep protocol controls and data legible with consistent functional icons. Mark decorative glyphs as hidden from screen readers when the text already names the control. The approved corporate identity uses one corporate logo.
- **Centered layout.** Place the main directory, menu panels, page content, and interaction stage in a centered, responsive container. Give complex workbenches room to expand on laptops while staying centered. On phones, use a centered single-column flow when space is tight, readable list rows, and touch-friendly controls. Keep long lists and paragraphs aligned for easy reading.
- **Review.** Check the visual treatment on phones and laptops for every page and menu in the proposed release. Verify icon and emoji rendering, clear labels, keyboard focus, centered content, and no clipped or overlapping elements. A missing requirement keeps the release gate closed.

## Release gate

Do not merge any pull request or branch. Do not deploy or publish AdigunIoT to any hosted environment, including preview, staging, or production. Do not bypass this gate by pushing application changes directly to a deployment branch or triggering a publishing workflow. Local previews, checks, and draft pull requests on non-deploying branches are permitted.

The gate remains closed until every page and menu in the proposed release has passed the checks below on both phone and laptop, and the product owner explicitly approves lifting the gate and authorizes the merge or deployment. Once lifted for an approved release, apply the same checks and owner approval to later release candidates. Partial completion, a passing build, screenshots, or approval of a draft alone do not lift the gate.

- **Home, collections, categories, and submenus:** Use the approved Adigun directory layout throughout. Each menu row has a clear icon and label, and opens the correct same-site destination. Search, breadcrumbs, direct links, and Back must work. Show only genuinely playable pages as available. Planned pages may appear as explicitly marked directory entries.
- **Internet and Protocol Explorer experiences:** Use the approved dark Adigun workbench with original device illustrations, visible network paths, and animated events. Playback and stepping must synchronize the diagram, sequence, event timeline, and inspector. Verify the reduced-motion view and phone layout.
- **Every other experience:** Open into its working interactive workspace. Verify its primary action, status feedback, and return route. Check keyboard focus, touch controls, readable labels, and overflow across the shared shell.

Record the candidate commit, page and menu inventory, device or viewport checks, results, and any gaps in the review PR. Keep the gate closed if any required check is missing or fails. Use the design references and acceptance criteria in [PROPOSED PROMPT.md](PROPOSED%20PROMPT.md).
