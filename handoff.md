# Context Handoff

## Student Profile

**Name:** Steven  
**Background:**
- High school through BC calculus
- Undergrad multivariable calculus, intro differential equations, basic statistics
- Boolean algebra (CS curriculum)
- Data structures and algorithms (undergrad)
- Princeton alumnus, CEO/cofounder of an adtech startup
- Strong quantitative reasoning, comfortable with formal systems

**Learning goal:** Core mathematical logic literacy—what a math-track undergrad would know that a CS-track undergrad might miss.

**Learning style:** Prefers to understand *why* before *how*. Asks good clarifying questions. Will pursue tangents when they're interesting (which is fine—circle back). Honor system for exercises; genuinely interested in the material.

---

## What We've Covered (Conceptually, Not Rigorously)

In the initial conversation, we surveyed the landscape and got pulled into an interesting tangent about Gödel before backing out. Key points discussed:

1. **The gap in training:** Math-track undergrads get explicit proof techniques, naive set theory, first-order logic with completeness/compactness theorems, and Gödel's incompleteness theorems. CS-track often absorbs some of this implicitly but without the formal foundations.

2. **Logic vs. axioms:** Logic is topic-neutral scaffolding. The *content* comes from axioms (like Peano axioms for arithmetic). We discussed how axioms are constrained by what we're trying to formalize but not uniquely determined—there's a pragmatic/conventional element.

3. **"True but unprovable" (preview):** We got into Gödel territory. Key distinction:
   - *Provable* = true in ALL models of the axioms
   - *True* (in Gödel's sense) = true in the STANDARD model (the "real" natural numbers)
   - The gap exists because axioms can't distinguish standard from non-standard models
   - I created a diagram (React component) illustrating this; Steven found it helpful but correctly noted he needs the foundations before it fully lands.

4. **We agreed to back up** and start from propositional logic, building up properly.

---

## Syllabus Overview

See `/syllabus.md` for the full breakdown. The dependency chain:

```
Propositional Logic
       ↓
First-Order Logic (syntax & semantics)
       ↓
Proof Systems (natural deduction)
       ↓
Structures and Models
       ↓
Peano Axioms & Arithmetic
       ↓
Completeness & Compactness Theorems
       ↓
Computability (may be partial review)
       ↓
Gödel's Incompleteness Theorems
```

Estimated timeline: ~4-6 months at a few hours/week, or ~1 semester equivalent if treated as a course.

---

## Recommended Text

**Boolos, Burgess, and Jeffrey — *Computability and Logic*** (5th edition)

Standard text, good balance of rigor and accessibility, weaves in computability which will resonate with Steven's CS background. Can skip early chapters if Turing machines feel like review.

---

## Pedagogical Approach

1. **Concepts before formalism:** Explain what we're trying to capture and why, then introduce notation.

2. **Exercises are essential:** Logic requires *doing*, not just reading. Each topic should include exercises. Steven attempts them, records attempts in `/exercises/`, solutions provided after attempt.

3. **Spaced repetition:** Log timestamps for when topics are covered and exercises completed. Periodically revisit older material based on time elapsed.

4. **Tangents are okay:** Steven pursues interesting threads. Let him, but flag when we're deferring something and circle back.

5. **Connect to CS intuitions:** Boolean algebra, algorithms, type systems—use these as bridges where helpful.

---

## Session Protocol

### Starting a session:
1. Read `/context/handoff.md` (this file) and `/progress.md`
2. Check if any scheduled reviews are due
3. Pick up where we left off, or start next topic

### Ending a session:
1. Update `/progress.md` with what was covered, exercises assigned/completed, flags for review
2. Update `/context/handoff.md` if any major context shifts (new insights, changed plans, etc.)
3. Commit and push

### File conventions:
- Notes go in `/notes/{topic-slug}.md`
- Exercises go in `/exercises/{topic-slug}/` with `problems.md` and `attempts.md`
- Use ISO date format: `2024-01-15`

---

## Current Status

**Position:** Unit 1, completed 1.1 (Syntax) and 1.2 (Semantics). Ready for 1.3 (Semantic Entailment).

**Next step:** Semantic entailment (⊨), validity of arguments, satisfiability, connection to SAT.

**Open threads to revisit later:**
- The Gödel diagram we created (revisit after completing first-order logic + Peano axioms)
- Philosophy of mathematics: are axioms "arbitrary"? (revisit after incompleteness)

---

## Session Log

| Date | Session | Notes |
|------|---------|-------|
| 2024-XX-XX | Initial conversation | Surveyed landscape, discussed Gödel preview, agreed to start from foundations. Set up repo structure. |
| 2025-12-25 | 1.1 Syntax | Set up web app, covered syntax, exercises completed. |
| 2025-12-28 | 1.2 Semantics | Truth assignments, material conditional (→ vs ↔), tautology/satisfiability distinction. Exercises completed. |
