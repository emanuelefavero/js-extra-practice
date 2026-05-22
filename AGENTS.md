# AGENTS.md

## Project Overview

JS Extra Practice is a small interactive JavaScript exercise app created for a
Web Development course context. The goal is to help students practice beginner
JavaScript exercises directly in the browser.

The app is intentionally course-friendly: it should stay simple, readable, and
easy to explain. Avoid production-style over-engineering unless it clearly helps the learning experience.

When available, use the `boolean-course-exercises` skill before making course
or exercise-related changes. This project should be treated as a learning
exercise collection, not as a production platform.

Keep this file updated when project-level details change. If a future change
adds or removes important features, changes the stack, changes deployment,
changes the exercise data shape, or changes the expected explanation/style
guidelines, update `AGENTS.md` in the same work.

## Audience And Learning Level

The target audience is students who started learning programming recently and
are practicing JavaScript fundamentals:

- functions;
- conditions;
- loops;
- arrays;
- strings;
- simple return values;
- basic test cases.

Explanations should be in Italian and should feel like a clear tutor note:
adult, practical, not childish, and not too short. For exercises with multiple
logical steps, prefer this structure:

1. a short abstract explanation of the idea;
2. a `Passaggi:` section with a numbered list;
3. inline code only where it clarifies a less obvious part, such as
   `.includes()`, `.toLowerCase()`, `arr.length`, `.push()`, or `-1`;
4. a final sentence explaining what the function returns.

For very simple exercises, a short paragraph is enough.

## Current Features

- Single-page Vite app.
- 25 completed exercises:
  - 5 `snack`;
  - 10 `umano`;
  - 10 `esperto`.
- One focused exercise workspace at a time.
- Level filter and text search.
- CodeMirror editor for writing solutions.
- Read-only CodeMirror block for official solutions with syntax highlighting.
- Example input and expected output shown below the editor.
- `Esegui test` button that runs exercise tests in the browser.
- Output panel showing passing/failing test cases.
- Solution/explanation toggle hidden by default.
- The solution toggle resets to hidden when switching exercise.
- Completion state saved in `localStorage`.
- Student code saved per exercise in `localStorage`.
- Green completed badges in the sidebar.
- Final success message after all exercises are completed:
  `Tutti gli esercizi completati. Ecco un’arancina! 🍘`
- Development-only helper buttons, visible only with `npm run dev` through
  `import.meta.env.DEV`:
  - `Completa tutto`;
  - `Reset stato`.

## Tech Stack

- Vite
- Vanilla JavaScript
- CodeMirror 6
- CSS only, no Tailwind or component framework
- GitHub Pages deployment through GitHub Actions

Do not add React, TypeScript, routing, backend services, authentication, or a
database for ordinary changes. The app should remain frontend-only.

## Important Files

- `index.html`: Vite HTML entrypoint.
- `src/main.js`: app rendering, CodeMirror setup, runner, localStorage logic,
  filters, completion state, and dev-only helpers.
- `src/exercises.js`: exercise data, starter code, official solutions,
  explanations, and tests.
- `src/style.css`: full app styling.
- `vite.config.js`: Vite config. Uses `base: './'` so GitHub Pages works under
  the repository path.
- `.github/workflows/deploy.yml`: builds and deploys `dist` to GitHub Pages.
- `README.md`: public project documentation.

## Development Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Always run `npm run build` before considering a change complete.

For frontend behavior changes, also verify in the browser when possible:

- app loads;
- exercises render;
- editor works;
- tests run;
- completion state updates;
- solution toggle works;
- mobile layout remains usable.

## Exercise Data Guidelines

Each exercise in `src/exercises.js` should include:

- `id`
- `level`
- `title`
- `prompt`
- `functionName`
- `starterCode`
- `solution`
- `explanation`
- `tests`

Keep solutions beginner-friendly. Prefer functions, conditions, loops, arrays,
strings, and clear variable names. Avoid clever one-liners when a straightforward solution is easier to understand.

Tests should be simple and readable. Use neutral example names in test data.
Avoid personal names connected to real teachers/classmates. Current examples use names like `Anna`, `Paolo`, `Silvia`, `Giulia`, `Bruno`, `Bianca`, `Sofia`,
`Giorgio`, and `Marta`.

## Runner Notes

The app evaluates user code locally in the browser with `new Function(...)`.
This is acceptable for this learning tool because users are running their own
code client-side. Do not present it as a secure sandbox.

Test comparison is intentionally simple and uses JSON-style deep equality for
the current exercise data.

## Styling Direction

The visual style should remain modern, minimal, and documentation-like:

- light theme only;
- cool gray backgrounds;
- white surfaces;
- subtle borders;
- indigo/blue for focus and selection;
- green only for `Esegui test` and success/completed states;
- no decorative animations, bokeh, or heavy visual effects;
- compact but readable layout.

The current style is inspired by modern GitHub/Stripe documentation and
shadcn-like components, without installing Tailwind or shadcn.

## Deployment Notes

The live site is published at:

```txt
https://emanuelefavero.github.io/js-extra-practice/
```

GitHub Pages must use **GitHub Actions** as the Pages source. The workflow
builds the app and uploads `dist`.

Do not commit `dist`; it is ignored and rebuilt by the workflow.
