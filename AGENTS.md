# AdigunIoT agent instructions

## Required visual treatment for every page and menu

- **Icons and emoji.** Give every screen title, menu item, submenu, experience link, and primary action a recognizable icon or emoji paired with a short localized text label. Use playful, topic-specific emoji where they help people recognize the destination. Keep protocol controls and data legible with consistent functional icons. Mark decorative glyphs as hidden from screen readers when the text already names the control. The approved corporate identity uses one corporate logo.
- **Centered layout.** Place the main directory, menu panels, page content, and interaction stage in a centered, responsive container. Give complex workbenches room to expand on laptops while staying centered. On phones, use a centered single-column flow when space is tight, readable list rows, and touch-friendly controls. Keep long lists and paragraphs aligned for easy reading.
- **Review.** Check the visual treatment on phones and laptops for every page and menu in the proposed release. Verify icon and emoji rendering, clear labels, keyboard focus, centered content, and no clipped or overlapping elements. A missing requirement keeps the release gate closed.

## Compact, visual, interactive design

- Put search and playable links near the top. Use centered, compact directory panels with clickable rows, icons or emoji, and short labels at every menu level. Stack panels on phones.
- Use original illustrations, useful thumbnails, and visual previews to show what visitors can do. Keep copy to titles, action labels, essential instructions, accessibility text, and feedback. Put longer explanations in optional details.
- Give each interactive control a working action and visible feedback. In Explorer pages, show the illustrated, animated stage and playback controls before extended explanations. Keep labels, keyboard access, and reduced-motion behavior intact.
- Review every page and menu on phone and laptop for visual clarity, compactness, and working interactions. Unresolved failures keep the release gate closed.

## Incremental merge and deployment

Merge and deploy small, complete increments as work progresses. A single finished page, menu, or feature can qualify. The owner authorizes routine merge and deployment of passing increments to the existing authorized targets. Follow branch protection and required reviews. Use preview or local checks for unfinished work. New hosting targets, custom domains, or access changes require separate authorization.

Before merging or deploying, check the exact candidate on phones and laptops. Review every changed page and menu and any affected shared navigation. Confirm recognizable icons or emoji with text labels, useful images, centered compact layouts, distinguishable accessible colors, working interactions with visible feedback, and purposeful animation with reduced-motion support where applicable. Keep the approved directory and Explorer patterns. Run relevant build, accessibility, and regression checks. Record evidence and hold any increment with missing or failing checks. A passing build alone is insufficient.

- **Home, collections, categories, and submenus:** Use the approved Adigun directory layout throughout. Each menu row has a clear icon and label, and opens the correct same-site destination. Search, breadcrumbs, direct links, and Back must work. Show only genuinely playable pages as available. Planned pages may appear as explicitly marked directory entries.
- **Internet and Protocol Explorer experiences:** Use the approved dark Adigun workbench with original device illustrations, visible network paths, and animated events. Playback and stepping must synchronize the diagram, sequence, event timeline, and inspector. Verify the reduced-motion view and phone layout.
- **Every other experience:** Open into its working interactive workspace. Verify its primary action, status feedback, and return route. Check keyboard focus, touch controls, readable labels, and overflow across the shared shell.

Record the candidate commit, affected page and menu inventory, device or viewport checks, results, and any gaps in the review PR. Verify the deployed revision and smoke-test the changed routes after release. Use the design references and acceptance criteria in [PROPOSED PROMPT.md](PROPOSED%20PROMPT.md).
