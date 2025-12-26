# Claude Teaches Logic

A self-study course in mathematical logic, tutored by Claude.

## Structure

```
/syllabus.md          # Course outline with topics and dependencies
/progress.md          # Session log, current position, review scheduling
/context/             # Handoff files for session continuity
  handoff.md          # Current state for Claude to read at session start
/notes/               # Topic summaries built up during study
/exercises/           # Problems, attempts, and solutions by topic
```

## How It Works

1. Each session, Claude reads `context/handoff.md` and `progress.md`
2. We pick up where we left off or do scheduled review
3. Session ends with updated progress and handoff
4. Spaced repetition based on timestamps and confidence levels

## Syllabus Overview

1. Propositional Logic
2. First-Order Logic — Syntax
3. First-Order Logic — Semantics
4. Proof Systems
5. Completeness and Compactness
6. Peano Arithmetic
7. Computability Theory
8. Gödel's Incompleteness Theorems

See `syllabus.md` for full breakdown.

## Textbook

Boolos, Burgess, and Jeffrey — *Computability and Logic* (5th edition)
