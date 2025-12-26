# Syllabus: Foundations of Mathematical Logic

## Course Overview

**Goal:** Achieve core literacy in mathematical logic—the foundations that a math-track undergraduate would have.

**Textbook:** Boolos, Burgess, and Jeffrey, *Computability and Logic* (5th ed.)  
**Supplementary:** Enderton, *A Mathematical Introduction to Logic* (for additional exercises/perspective)

**Estimated time:** 12-16 weeks at ~4 hours/week

---

## Unit 1: Propositional Logic
*Weeks 1-2*

### 1.1 Syntax of Propositional Logic
- Propositional variables, connectives (¬, ∧, ∨, →, ↔)
- Well-formed formulas (wffs)
- Parsing and precedence
- **Likely review** from boolean algebra, but establish notation

### 1.2 Semantics of Propositional Logic
- Truth assignments / valuations
- Truth tables
- Tautologies, contradictions, contingencies
- Logical equivalence
- **Likely review**, but frame in terms of "models"

### 1.3 Semantic Entailment
- Definition of entailment (⊨)
- Validity of arguments
- Satisfiability
- Connection to boolean satisfiability (SAT) from CS

### 1.4 Proof Systems for Propositional Logic
- Natural deduction introduction
- Inference rules: intro/elim for each connective
- Constructing formal proofs
- Soundness and completeness (propositional case)
- **New material**—this is where we slow down

**Exercises:** Truth tables, equivalence proofs, natural deduction proofs

---

## Unit 2: First-Order Logic — Syntax
*Weeks 3-4*

### 2.1 The Need for Quantifiers
- Limitations of propositional logic
- Expressing "all" and "some"
- Predicates, relations, functions

### 2.2 First-Order Languages
- Vocabulary: constants, function symbols, relation symbols
- Terms and formulas
- Free and bound variables
- Substitution

### 2.3 Quantifiers and Scope
- Universal (∀) and existential (∃) quantifiers
- Scope and binding
- Prenex normal form
- Common pitfalls (variable capture, vacuous quantification)

**Exercises:** Translating English to FOL, identifying free/bound variables, parsing formulas

---

## Unit 3: First-Order Logic — Semantics
*Weeks 5-6*

### 3.1 Structures (Models)
- Domains of discourse
- Interpretations of symbols
- Variable assignments

### 3.2 Truth in a Structure
- Satisfaction relation
- Truth of quantified statements
- The role of variable assignments

### 3.3 Semantic Concepts
- Validity (true in all structures)
- Satisfiability
- Logical consequence (⊨)
- Theories and models of theories

### 3.4 Important Examples
- Arithmetic structures
- Graph structures
- Algebraic structures (groups, rings)

**Exercises:** Evaluating formulas in given structures, finding models/countermodels

---

## Unit 4: Proof Systems for First-Order Logic
*Weeks 7-8*

### 4.1 Natural Deduction for FOL
- Quantifier introduction and elimination rules
- Restrictions on ∀-intro and ∃-elim
- Proof strategies

### 4.2 Formal Proofs
- Extended examples
- Common proof patterns
- Equality and its axioms

### 4.3 Soundness
- Every provable formula is valid
- Proof of soundness

**Exercises:** Natural deduction proofs with quantifiers

---

## Unit 5: Completeness and Compactness
*Weeks 9-10*

### 5.1 The Completeness Theorem
- Statement: if ⊨ φ then ⊢ φ
- Significance: syntax captures semantics
- Proof sketch (Henkin construction)

### 5.2 Consequences of Completeness
- Compactness theorem
- Löwenheim-Skolem theorems
- Non-standard models exist

### 5.3 Limitations
- Completeness is for first-order logic specifically
- Second-order logic is incomplete
- Tradeoffs between expressiveness and completeness

**Exercises:** Applications of compactness, constructing non-standard models

---

## Unit 6: Peano Arithmetic
*Week 11*

### 6.1 The Peano Axioms
- Zero, successor, induction
- Defining addition and multiplication
- First-order vs. second-order induction

### 6.2 Arithmetic as a First-Order Theory
- The language of arithmetic
- What can and cannot be expressed
- Standard vs. non-standard models

### 6.3 Representability
- Representing computable functions in PA
- Gödel numbering (preview)

**Exercises:** Proofs within PA, understanding the axioms

---

## Unit 7: Computability Theory
*Weeks 12-13*

### 7.1 Turing Machines
- Definition and examples
- Church-Turing thesis
- **Likely review** from CS

### 7.2 Decidability and Undecidability
- Decision problems
- The halting problem
- Reductions
- **Likely review**, but connect to logic

### 7.3 Recursive and Recursively Enumerable Sets
- Definitions
- The arithmetical hierarchy (brief)
- Connection to definability

**Exercises:** May be light if this is review; focus on connections to logic

---

## Unit 8: Gödel's Incompleteness Theorems
*Weeks 14-16*

### 8.1 Gödel Numbering
- Encoding syntax as numbers
- Representability of syntactic notions

### 8.2 The First Incompleteness Theorem
- The Gödel sentence
- Self-reference via diagonalization
- Proof sketch
- Rosser's strengthening

### 8.3 The Second Incompleteness Theorem
- Consistency cannot be proven internally
- Implications for Hilbert's program

### 8.4 Philosophical Implications
- What does incompleteness mean?
- Mechanism and minds (Lucas-Penrose, responses)
- Return to: are axioms arbitrary?

**Exercises:** Working through the construction, understanding the proof

---

## Dependencies Graph

```
         [1. Propositional Logic]
                   |
         [2. FOL Syntax]
                   |
         [3. FOL Semantics]
                   |
         [4. FOL Proof Systems]
                   |
    +--------------+--------------+
    |                             |
[5. Completeness]           [6. Peano Arithmetic]
    |                             |
    +-------------+---------------+
                  |
         [7. Computability]
                  |
         [8. Incompleteness]
```

---

## Assessment Approach

- **Exercises:** Assigned per topic, self-graded, record attempts
- **Comprehension checks:** Periodically explain concepts back (Feynman technique)
- **Review sessions:** Spaced repetition based on timestamps
- **Milestone:** After Unit 5, revisit the Gödel diagram from initial conversation—should now make full sense
