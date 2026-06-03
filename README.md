# StratVault

**stratvault.ai** — AI-powered business analysis delivered as professional decks.

> *Not just beautiful. Bulletproof.*

## What Is This

StratVault turns complex business questions into structured, consultant-grade strategy decks (PPT). Users choose a scenario, answer 5-8 questions, and receive a 15-page deck built on the Strategy Chessboard methodology (BOARD framework).

## Repository Structure

```
site/           Public website and user entry points
studio/         Report generation system (workflows, agents, templates, renderers)
docs/           Product, architecture, and methodology documentation
_archive/       Previous version files (qipan.site v1)
```

### site/
User-facing pages: landing, workshop (deck generation), cases gallery, expert marketplace.

### studio/
The report generation engine. Breaks each scenario into **workflows**, each workflow contains **template modules**, and modules are composed into a final PPTX deck.

```
studio/
├── workflows/      Report generation flows (scenario → module sequence)
├── agents/         Agent role definitions and execution contracts
├── templates/      Deck and slide templates (YAML + slide components)
├── design-system/  Color tokens, themes, brand mapping rules
├── asset-packs/    Industry-specific visual assets
├── knowledge/      Methodology, analytical lenses, cases, data sources
├── renderers/      PPTX / PNG / PDF output engines
└── outputs/        Generated files (not tracked in git)
```

### docs/
```
docs/
├── product/        Business plan, product specs
├── architecture/   Technical architecture docs
└── methodology/    Strategy Chessboard methodology docs
```

## Current Product Lines

| Scenario | User Pain | Status |
|----------|-----------|--------|
| Growth Diagnosis | "Why has our growth stalled?" | 🟢 In development |
| Annual Strategic Plan | "Board meeting next month" | 🟡 Planned |
| Business Review | "Q3 review in 2 weeks" | 🟡 Planned |

## Design Principles

- Workflows, templates, assets, knowledge, and outputs stay separate.
- Templates control layout; `design-system` controls color/theme; `asset-packs` control industry visuals.
- Generated files go to `outputs/`, never into templates or asset packs.
- If in doubt, don't add a new directory. Check which existing bucket it belongs to.
