import { useState } from 'react';
import { Math } from '../../components/Math';

interface Problem {
  id: string;
  question: React.ReactNode;
  hint?: string;
  solution: React.ReactNode;
}

const problems: Problem[] = [
  {
    id: '1.3.1',
    question: (
      <>
        Determine whether each entailment holds. If it does, explain why. If not,
        give a counterexample (a truth assignment that makes the premises true
        but the conclusion false).
        <ol type="a">
          <li><Math>{`p \\land q \\vDash p`}</Math></li>
          <li><Math>{`p \\vDash p \\land q`}</Math></li>
          <li><Math>{`p \\to q, q \\to r \\vDash p \\to r`}</Math></li>
          <li><Math>{`p \\lor q \\vDash p \\land q`}</Math></li>
          <li><Math>{`p \\to q \\vDash \\neg q \\to \\neg p`}</Math></li>
          <li><Math>{`\\neg(p \\land q) \\vDash \\neg p \\land \\neg q`}</Math></li>
        </ol>
      </>
    ),
    hint: 'For each, ask: can the premises be true while the conclusion is false?',
    solution: (
      <>
        <ol type="a">
          <li>
            <strong>Yes.</strong> If <Math>{`p \\land q`}</Math> is true, both p and q are true,
            so p is true.
          </li>
          <li>
            <strong>No.</strong> Counterexample: <Math>v(p) = T, v(q) = F</Math>.
            Then p is true but <Math>{`p \\land q`}</Math> is false.
          </li>
          <li>
            <strong>Yes.</strong> (Hypothetical syllogism) Check all cases where both premises
            are true: either p is false (then p→r is true), or p is true, so q must be true
            (by first premise), so r must be true (by second premise), so p→r is true.
          </li>
          <li>
            <strong>No.</strong> Counterexample: <Math>v(p) = T, v(q) = F</Math>.
            Then <Math>{`p \\lor q`}</Math> is true but <Math>{`p \\land q`}</Math> is false.
          </li>
          <li>
            <strong>Yes.</strong> This is contraposition, which we verified as an equivalence
            in 1.2. Same truth table.
          </li>
          <li>
            <strong>No.</strong> Counterexample: <Math>v(p) = T, v(q) = F</Math>.
            Then <Math>{`\\neg(p \\land q)`}</Math> is true (since <Math>{`p \\land q`}</Math> is false),
            but <Math>{`\\neg p \\land \\neg q`}</Math> is false (since <Math>{`\\neg p`}</Math> is false).
            <p className="note">
              This is the converse of De Morgan—it doesn't hold! De Morgan says
              <Math>{`\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q`}</Math>, not{' '}
              <Math>{`\\neg p \\land \\neg q`}</Math>.
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: '1.3.2',
    question: (
      <>
        For each argument, determine if it's <strong>valid</strong>. If valid,
        name the inference pattern if you recognize it. If invalid, give a
        counterexample.
        <ol type="a">
          <li>
            <Math>{`p \\to q, p \\therefore q`}</Math>
          </li>
          <li>
            <Math>{`p \\to q, q \\therefore p`}</Math>
          </li>
          <li>
            <Math>{`p \\to q, \\neg p \\therefore \\neg q`}</Math>
          </li>
          <li>
            <Math>{`p \\to q, \\neg q \\therefore \\neg p`}</Math>
          </li>
          <li>
            <Math>{`p \\lor q, \\neg p \\therefore q`}</Math>
          </li>
        </ol>
      </>
    ),
    hint: 'Watch out for the common fallacies: affirming the consequent and denying the antecedent.',
    solution: (
      <>
        <ol type="a">
          <li>
            <strong>Valid.</strong> Modus ponens. The fundamental rule of conditional
            reasoning.
          </li>
          <li>
            <strong>Invalid.</strong> Affirming the consequent (a formal fallacy).
            Counterexample: <Math>v(p) = F, v(q) = T</Math>. Both premises true, conclusion false.
          </li>
          <li>
            <strong>Invalid.</strong> Denying the antecedent (a formal fallacy).
            Counterexample: <Math>v(p) = F, v(q) = T</Math>. Premises: T→T is T, ¬F is T. Conclusion: ¬T is F.
          </li>
          <li>
            <strong>Valid.</strong> Modus tollens. The contrapositive of modus ponens.
          </li>
          <li>
            <strong>Valid.</strong> Disjunctive syllogism. If one disjunct is false, the other
            must be true.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: '1.3.3',
    question: (
      <>
        Determine whether each set of formulas is satisfiable. If satisfiable,
        give a satisfying assignment. If unsatisfiable, explain why.
        <ol type="a">
          <li><Math>{`\\{p, q, r\\}`}</Math></li>
          <li><Math>{`\\{p, \\neg p\\}`}</Math></li>
          <li><Math>{`\\{p \\to q, p, \\neg q\\}`}</Math></li>
          <li><Math>{`\\{p \\lor q, \\neg p, \\neg q\\}`}</Math></li>
          <li><Math>{`\\{p \\to q, q \\to r, \\neg(p \\to r)\\}`}</Math></li>
        </ol>
      </>
    ),
    solution: (
      <>
        <ol type="a">
          <li>
            <strong>Satisfiable.</strong> <Math>v(p) = v(q) = v(r) = T</Math>.
          </li>
          <li>
            <strong>Unsatisfiable.</strong> No assignment can make both p and ¬p true.
          </li>
          <li>
            <strong>Unsatisfiable.</strong> If p is true and p→q is true, then q must be true.
            But we also require ¬q to be true. Contradiction.
          </li>
          <li>
            <strong>Unsatisfiable.</strong> The first formula requires at least one of p, q to
            be true. But the second and third require both to be false. Contradiction.
          </li>
          <li>
            <strong>Unsatisfiable.</strong> <Math>{`\\neg(p \\to r)`}</Math> requires p true and r false.
            From p true and p→q, we get q true. From q true and q→r, we get r true.
            But we need r false. Contradiction.
            <p className="note">
              This shows hypothetical syllogism is valid: the set "premises + negation of conclusion"
              is unsatisfiable.
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: '1.3.4',
    question: (
      <>
        <strong>The entailment-unsatisfiability connection:</strong>
        <ol type="a">
          <li>
            Use the equivalence <Math>{`\\Gamma \\vDash \\varphi`}</Math> iff{' '}
            <Math>{`\\Gamma \\cup \\{\\neg\\varphi\\}`}</Math> is unsatisfiable
            to show that modus ponens is valid.
          </li>
          <li>
            Use the same method to show that the following is <em>not</em> valid:
            <Math>{`p \\to q, q \\vDash p`}</Math>
          </li>
        </ol>
      </>
    ),
    hint: 'Convert the entailment question into a satisfiability question, then analyze.',
    solution: (
      <>
        <ol type="a">
          <li>
            <p>
              We want to show <Math>{`p, p \\to q \\vDash q`}</Math>.
            </p>
            <p>
              By the equivalence, this holds iff <Math>{`\\{p, p \\to q, \\neg q\\}`}</Math> is
              unsatisfiable.
            </p>
            <p>
              Check: if p is true and ¬q is true (so q is false), then p→q is false
              (true → false = false). So we can't make all three formulas true.
              Hence unsatisfiable, hence modus ponens is valid.
            </p>
          </li>
          <li>
            <p>
              We want to show <Math>{`p \\to q, q \\vDash p`}</Math> does <em>not</em> hold.
            </p>
            <p>
              By the equivalence, it fails iff <Math>{`\\{p \\to q, q, \\neg p\\}`}</Math> is
              satisfiable.
            </p>
            <p>
              Try <Math>v(p) = F, v(q) = T</Math>: p→q is T (false antecedent), q is T, ¬p is T.
              All three true! So the set is satisfiable, hence the entailment fails.
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: '1.3.5',
    question: (
      <>
        <strong>Properties of entailment:</strong>
        <ol type="a">
          <li>
            Give an example showing monotonicity: find <Math>{`\\Gamma, \\varphi, \\psi`}</Math> where{' '}
            <Math>{`\\Gamma \\vDash \\psi`}</Math> and{' '}
            <Math>{`\\Gamma, \\varphi \\vDash \\psi`}</Math> (adding a premise preserves
            entailment).
          </li>
          <li>
            The deduction theorem says <Math>{`\\Gamma, \\varphi \\vDash \\psi`}</Math> iff{' '}
            <Math>{`\\Gamma \\vDash \\varphi \\to \\psi`}</Math>. Verify this for the case:{' '}
            <Math>{`p \\vDash q \\to p`}</Math>.
          </li>
          <li>
            Using the deduction theorem, show that <Math>{`\\vDash p \\to p`}</Math> (with
            no premises).
          </li>
        </ol>
      </>
    ),
    solution: (
      <>
        <ol type="a">
          <li>
            <p>
              Take <Math>{`\\Gamma = \\{p\\}`}</Math>, <Math>{`\\varphi = q`}</Math>,{' '}
              <Math>{`\\psi = p`}</Math>.
            </p>
            <p>
              Then <Math>{`p \\vDash p`}</Math> (trivially—reflexivity).
            </p>
            <p>
              And <Math>{`p, q \\vDash p`}</Math> (still true—adding q doesn't hurt).
            </p>
            <p>
              Monotonicity means you can never "break" an entailment by adding premises.
            </p>
          </li>
          <li>
            <p>
              The theorem says: <Math>{`p, q \\vDash p`}</Math> iff <Math>{`p \\vDash q \\to p`}</Math>.
            </p>
            <p>
              Left side: if p and q are both true, then p is true. ✓
            </p>
            <p>
              Right side: if p is true, is q→p true? Yes—true consequent makes conditional true. ✓
            </p>
            <p>
              Both hold, confirming the equivalence.
            </p>
          </li>
          <li>
            <p>
              By deduction theorem: <Math>{`\\vDash p \\to p`}</Math> iff <Math>{`p \\vDash p`}</Math>.
            </p>
            <p>
              <Math>{`p \\vDash p`}</Math> is reflexivity—trivially true.
            </p>
            <p>
              Therefore <Math>{`\\vDash p \\to p`}</Math>, i.e., p→p is a tautology.
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: '1.3.6',
    question: (
      <>
        <strong>⊨ vs →:</strong> For each statement, say whether it's a claim
        about formulas (metalanguage, uses ⊨) or a formula itself (object language,
        uses →). Then evaluate whether the statement is true.
        <ol type="a">
          <li><Math>{`p \\to p`}</Math></li>
          <li><Math>{`\\vDash p \\to p`}</Math></li>
          <li><Math>{`p \\vDash p`}</Math></li>
          <li><Math>{`p \\to q, q \\to r \\vDash p \\to r`}</Math></li>
          <li><Math>{`(p \\to q) \\to ((q \\to r) \\to (p \\to r))`}</Math></li>
          <li>Are (d) and (e) saying "the same thing"?</li>
        </ol>
      </>
    ),
    solution: (
      <>
        <ol type="a">
          <li>
            <strong>Object language.</strong> This is a formula. It's a contingency—wait, no,
            it's actually a tautology (always true: T→T and F→F are both T).
          </li>
          <li>
            <strong>Metalanguage.</strong> This claims that p→p is a tautology.
            <strong>True</strong>—as noted above.
          </li>
          <li>
            <strong>Metalanguage.</strong> This claims that p entails itself.
            <strong>True</strong>—reflexivity of entailment.
          </li>
          <li>
            <strong>Metalanguage.</strong> This claims hypothetical syllogism is valid.
            <strong>True</strong>—we verified this in exercise 1.3.1(c).
          </li>
          <li>
            <strong>Object language.</strong> This is a formula. Is it a tautology?
            Yes—this is the "exported" form of hypothetical syllogism. Check: it says
            "if p→q, then (if q→r, then p→r)."
          </li>
          <li>
            <strong>Yes, in a precise sense.</strong> By the deduction theorem (applied twice):{' '}
            <Math>{`p \\to q, q \\to r \\vDash p \\to r`}</Math> iff{' '}
            <Math>{`\\vDash (p \\to q) \\to ((q \\to r) \\to (p \\to r))`}</Math>.
            <p>
              The entailment claim (d) and the tautology claim (e) are equivalent.
              The deduction theorem is the bridge between ⊨ (what follows from what) and
              → (how we express "following" inside the language).
            </p>
          </li>
        </ol>
      </>
    ),
  },
];

function Exercise({ problem }: { problem: Problem }) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="exercise">
      <h3>Exercise {problem.id}</h3>
      <div className="exercise-question">{problem.question}</div>

      <div className="exercise-controls">
        {problem.hint && (
          <button onClick={() => setShowHint(!showHint)}>
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        )}
        <button onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
      </div>

      {showHint && problem.hint && (
        <div className="exercise-hint">
          <strong>Hint:</strong> {problem.hint}
        </div>
      )}

      {showSolution && (
        <div className="exercise-solution">
          <strong>Solution:</strong>
          {problem.solution}
        </div>
      )}
    </div>
  );
}

export function Exercises_1_3() {
  return (
    <div className="exercises-content">
      <h1>Exercises: 1.3 Semantic Entailment</h1>

      <p className="exercises-intro">
        These exercises cover entailment, validity, satisfiability, and the
        relationship between ⊨ and →. Pay attention to the common fallacies!
      </p>

      {problems.map((problem) => (
        <Exercise key={problem.id} problem={problem} />
      ))}
    </div>
  );
}
