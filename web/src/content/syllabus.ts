export interface Lesson {
  id: string;
  title: string;
  status: 'not-started' | 'in-progress' | 'complete';
}

export interface Unit {
  id: number;
  title: string;
  lessons: Lesson[];
}

export const syllabus: Unit[] = [
  {
    id: 1,
    title: 'Unit 1: Propositional Logic',
    lessons: [
      { id: '1-1-syntax', title: '1.1 Syntax', status: 'not-started' },
      { id: '1-2-semantics', title: '1.2 Semantics', status: 'not-started' },
      { id: '1-3-entailment', title: '1.3 Semantic Entailment', status: 'not-started' },
      { id: '1-4-proofs', title: '1.4 Proof Systems', status: 'not-started' },
    ],
  },
  {
    id: 2,
    title: 'Unit 2: FOL Syntax',
    lessons: [
      { id: '2-1-quantifiers', title: '2.1 The Need for Quantifiers', status: 'not-started' },
      { id: '2-2-languages', title: '2.2 First-Order Languages', status: 'not-started' },
      { id: '2-3-scope', title: '2.3 Quantifiers and Scope', status: 'not-started' },
    ],
  },
  {
    id: 3,
    title: 'Unit 3: FOL Semantics',
    lessons: [
      { id: '3-1-structures', title: '3.1 Structures (Models)', status: 'not-started' },
      { id: '3-2-truth', title: '3.2 Truth in a Structure', status: 'not-started' },
      { id: '3-3-semantic-concepts', title: '3.3 Semantic Concepts', status: 'not-started' },
      { id: '3-4-examples', title: '3.4 Important Examples', status: 'not-started' },
    ],
  },
  {
    id: 4,
    title: 'Unit 4: FOL Proof Systems',
    lessons: [
      { id: '4-1-natural-deduction', title: '4.1 Natural Deduction for FOL', status: 'not-started' },
      { id: '4-2-formal-proofs', title: '4.2 Formal Proofs', status: 'not-started' },
      { id: '4-3-soundness', title: '4.3 Soundness', status: 'not-started' },
    ],
  },
  {
    id: 5,
    title: 'Unit 5: Completeness & Compactness',
    lessons: [
      { id: '5-1-completeness', title: '5.1 The Completeness Theorem', status: 'not-started' },
      { id: '5-2-consequences', title: '5.2 Consequences of Completeness', status: 'not-started' },
      { id: '5-3-limitations', title: '5.3 Limitations', status: 'not-started' },
    ],
  },
  {
    id: 6,
    title: 'Unit 6: Peano Arithmetic',
    lessons: [
      { id: '6-1-peano-axioms', title: '6.1 The Peano Axioms', status: 'not-started' },
      { id: '6-2-arithmetic-theory', title: '6.2 Arithmetic as a First-Order Theory', status: 'not-started' },
      { id: '6-3-representability', title: '6.3 Representability', status: 'not-started' },
    ],
  },
  {
    id: 7,
    title: 'Unit 7: Computability Theory',
    lessons: [
      { id: '7-1-turing-machines', title: '7.1 Turing Machines', status: 'not-started' },
      { id: '7-2-decidability', title: '7.2 Decidability and Undecidability', status: 'not-started' },
      { id: '7-3-recursive-sets', title: '7.3 Recursive and R.E. Sets', status: 'not-started' },
    ],
  },
  {
    id: 8,
    title: "Unit 8: Godel's Incompleteness",
    lessons: [
      { id: '8-1-godel-numbering', title: '8.1 Godel Numbering', status: 'not-started' },
      { id: '8-2-first-incompleteness', title: '8.2 First Incompleteness Theorem', status: 'not-started' },
      { id: '8-3-second-incompleteness', title: '8.3 Second Incompleteness Theorem', status: 'not-started' },
      { id: '8-4-philosophy', title: '8.4 Philosophical Implications', status: 'not-started' },
    ],
  },
];
