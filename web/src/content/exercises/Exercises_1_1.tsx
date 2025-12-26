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
    id: '1.1.1',
    question: (
      <>
        Which of the following are well-formed formulas? For those that aren't, explain why.
        <ol type="a">
          <li><Math>{'p \\land q'}</Math></li>
          <li><Math>{'\\neg\\neg p'}</Math></li>
          <li><Math>{'p \\land \\lor q'}</Math></li>
          <li><Math>{'(p \\rightarrow q) \\leftrightarrow (\\neg q \\rightarrow \\neg p)'}</Math></li>
          <li><Math>{'p q \\rightarrow r'}</Math></li>
          <li><Math>{'\\rightarrow p q'}</Math></li>
          <li><Math>{'((p))'}</Math></li>
        </ol>
      </>
    ),
    hint: 'Apply the recursive definition. Every WFF is built from atoms using the rules.',
    solution: (
      <ol type="a">
        <li><strong>WFF.</strong> <Math>{'p'}</Math> and <Math>{'q'}</Math> are atoms, so <Math>{'p \\land q'}</Math> is formed by rule 3.</li>
        <li><strong>WFF.</strong> <Math>{'p'}</Math> is a WFF, so <Math>{'\\neg p'}</Math> is (rule 2), so <Math>{'\\neg\\neg p'}</Math> is (rule 2 again).</li>
        <li><strong>Not a WFF.</strong> No rule allows two connectives in sequence without a formula between them.</li>
        <li><strong>WFF.</strong> Both sides of <Math>{'\\leftrightarrow'}</Math> are WFFs, so the whole thing is.</li>
        <li><strong>Not a WFF.</strong> <Math>{'p q'}</Math> is not a WFF—there's no connective joining them. (We don't have implicit conjunction.)</li>
        <li><strong>Not a WFF.</strong> Connectives aren't prefix operators. <Math>{'\\rightarrow'}</Math> must appear between two formulas.</li>
        <li><strong>Not a WFF.</strong> Extra parentheses around an atom violate the formation rules as stated. (Some texts allow this; in our strict definition, parentheses only appear as part of applying rules 2-3.)</li>
      </ol>
    ),
  },
  {
    id: '1.1.2',
    question: (
      <>
        For each WFF, identify the <em>main connective</em> (the last connective applied in building the formula):
        <ol type="a">
          <li><Math>{'p \\rightarrow q \\land r'}</Math></li>
          <li><Math>{'\\neg p \\lor q'}</Math></li>
          <li><Math>{'\\neg(p \\lor q)'}</Math></li>
          <li><Math>{'p \\rightarrow q \\rightarrow r'}</Math></li>
          <li><Math>{'p \\land q \\rightarrow r \\lor s'}</Math></li>
        </ol>
      </>
    ),
    hint: 'Use precedence rules. The main connective is the one with lowest precedence (applied last).',
    solution: (
      <ol type="a">
        <li><Math>{'\\rightarrow'}</Math> — parses as <Math>{'p \\rightarrow (q \\land r)'}</Math></li>
        <li><Math>{'\\lor'}</Math> — parses as <Math>{'(\\neg p) \\lor q'}</Math>. Negation binds tighter.</li>
        <li><Math>{'\\neg'}</Math> — the negation applies to the whole disjunction.</li>
        <li>The first <Math>{'\\rightarrow'}</Math> — parses as <Math>{'p \\rightarrow (q \\rightarrow r)'}</Math> due to right-association.</li>
        <li><Math>{'\\rightarrow'}</Math> — parses as <Math>{'(p \\land q) \\rightarrow (r \\lor s)'}</Math></li>
      </ol>
    ),
  },
  {
    id: '1.1.3',
    question: (
      <>
        Fully parenthesize each formula (show all implicit grouping):
        <ol type="a">
          <li><Math>{'p \\land q \\lor r'}</Math></li>
          <li><Math>{'\\neg p \\rightarrow q'}</Math></li>
          <li><Math>{'p \\rightarrow q \\rightarrow p'}</Math></li>
          <li><Math>{'p \\lor q \\land r \\rightarrow s'}</Math></li>
        </ol>
      </>
    ),
    solution: (
      <ol type="a">
        <li><Math>{'((p \\land q) \\lor r)'}</Math></li>
        <li><Math>{'((\\neg p) \\rightarrow q)'}</Math></li>
        <li><Math>{'(p \\rightarrow (q \\rightarrow p))'}</Math></li>
        <li><Math>{'((p \\lor (q \\land r)) \\rightarrow s)'}</Math></li>
      </ol>
    ),
  },
  {
    id: '1.1.4',
    question: (
      <>
        <strong>Object vs. meta:</strong> Which of the following are statements <em>in</em> propositional logic,
        and which are statements <em>about</em> propositional logic?
        <ol type="a">
          <li><Math>{'p \\lor \\neg p'}</Math></li>
          <li>"<Math>{'p \\lor \\neg p'}</Math> is a tautology"</li>
          <li><Math>{'\\varphi \\lor \\neg\\varphi'}</Math></li>
          <li>"For any formula <Math>{'\\varphi'}</Math>, <Math>{'\\varphi \\lor \\neg\\varphi'}</Math> is a tautology"</li>
          <li><Math>{'p \\rightarrow (q \\rightarrow p)'}</Math></li>
        </ol>
      </>
    ),
    hint: 'Look for metavariables (φ, ψ) and English commentary about formulas.',
    solution: (
      <ol type="a">
        <li><strong>In.</strong> A specific formula of propositional logic.</li>
        <li><strong>About.</strong> An English sentence asserting something about the formula. This is metalanguage.</li>
        <li><strong>About (schema).</strong> <Math>{'\\varphi'}</Math> is a Greek letter, which by our convention is a metavariable—not a symbol in the object language. This expression represents infinitely many formulas (one for each possible substitution for <Math>{'\\varphi'}</Math>), not a single specific formula.</li>
        <li><strong>About.</strong> Explicitly quantifies over all formulas—definitely metalanguage.</li>
        <li><strong>In.</strong> A specific formula with object-language variables <Math>{'p'}</Math> and <Math>{'q'}</Math>.</li>
      </ol>
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

export function Exercises_1_1() {
  return (
    <div className="exercises-content">
      <h1>Exercises: 1.1 Syntax</h1>

      <p className="exercises-intro">
        Work through these exercises to solidify your understanding of propositional logic syntax.
        Try each problem before revealing the solution.
      </p>

      {problems.map((problem) => (
        <Exercise key={problem.id} problem={problem} />
      ))}
    </div>
  );
}
