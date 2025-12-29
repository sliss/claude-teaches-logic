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
    id: '1.2.1',
    question: (
      <>
        Let <Math>v</Math> be the truth assignment where <Math>v(p) = T</Math>, <Math>v(q) = F</Math>, <Math>v(r) = T</Math>.
        Evaluate each formula under <Math>v</Math>:
        <ol type="a">
          <li><Math>{'p \\land q'}</Math></li>
          <li><Math>{'p \\lor q'}</Math></li>
          <li><Math>{'p \\to q'}</Math></li>
          <li><Math>{'q \\to p'}</Math></li>
          <li><Math>{'(p \\land q) \\to r'}</Math></li>
          <li><Math>{'p \\to (q \\to r)'}</Math></li>
        </ol>
      </>
    ),
    hint: 'Work from the inside out, applying the recursive definition of evaluation.',
    solution: (
      <>
        <ol type="a">
          <li><strong>F</strong>. <Math>{'T \\land F = F'}</Math></li>
          <li><strong>T</strong>. <Math>{'T \\lor F = T'}</Math></li>
          <li><strong>F</strong>. <Math>{'T \\to F = F'}</Math> (the only case where conditional is false)</li>
          <li><strong>T</strong>. <Math>{'F \\to T = T'}</Math> (false antecedent makes it true)</li>
          <li><strong>T</strong>. <Math>{'(T \\land F) \\to T = F \\to T = T'}</Math></li>
          <li><strong>T</strong>. <Math>{'T \\to (F \\to T) = T \\to T = T'}</Math></li>
        </ol>
      </>
    ),
  },
  {
    id: '1.2.2',
    question: (
      <>
        Classify each formula as a <strong>tautology</strong>, <strong>contradiction</strong>, or <strong>contingency</strong>.
        Justify your answer (a counterexample suffices for non-tautologies).
        <ol type="a">
          <li><Math>{'p \\to p'}</Math></li>
          <li><Math>{'p \\land \\neg p'}</Math></li>
          <li><Math>{'p \\to (q \\to p)'}</Math></li>
          <li><Math>{'(p \\to q) \\to p'}</Math></li>
          <li><Math>{'(p \\to q) \\lor (q \\to p)'}</Math></li>
          <li><Math>{'\\neg(p \\leftrightarrow \\neg p)'}</Math></li>
        </ol>
      </>
    ),
    hint: 'For tautologies, check all cases. For non-tautologies, find a counterexample.',
    solution: (
      <>
        <ol type="a">
          <li><strong>Tautology.</strong> <Math>{'T \\to T = T'}</Math> and <Math>{'F \\to F = T'}</Math>. Always true.</li>
          <li><strong>Contradiction.</strong> For any <Math>v(p)</Math>, either <Math>p</Math> or <Math>{'\\neg p'}</Math> is false, so the conjunction is always false.</li>
          <li><strong>Tautology.</strong> If <Math>v(p) = F</Math>, the whole thing is true (false antecedent). If <Math>v(p) = T</Math>, then we need <Math>{'q \\to T'}</Math>, which is always true. So always true.</li>
          <li><strong>Contingency.</strong> Try <Math>v(p) = F, v(q) = F</Math>: <Math>{'(F \\to F) \\to F = T \\to F = F'}</Math>. But with <Math>v(p) = T</Math>: <Math>{'(T \\to q) \\to T = T'}</Math>. So it can be true or false.</li>
          <li><strong>Tautology.</strong> If <Math>v(p) \le v(q)</Math> (in the F&lt;T ordering), then <Math>{'p \\to q'}</Math> is true. If <Math>v(q) \le v(p)</Math>, then <Math>{'q \\to p'}</Math> is true. One of these always holds. (This is "linearity" of implication.)</li>
          <li><strong>Tautology.</strong> <Math>{'p \\leftrightarrow \\neg p'}</Math> is a contradiction (a thing can't equal its negation), so its negation is a tautology.</li>
        </ol>
      </>
    ),
  },
  {
    id: '1.2.3',
    question: (
      <>
        Verify the following logical equivalences using truth tables:
        <ol type="a">
          <li><Math>{'p \\to q \\equiv \\neg p \\lor q'}</Math></li>
          <li><Math>{'p \\to q \\equiv \\neg q \\to \\neg p'}</Math> (contraposition)</li>
          <li><Math>{'\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q'}</Math> (De Morgan)</li>
        </ol>
      </>
    ),
    solution: (
      <>
        <p>(a) <Math>{'p \\to q \\equiv \\neg p \\lor q'}</Math>:</p>
        <table className="truth-table">
          <thead>
            <tr>
              <th><Math>p</Math></th>
              <th><Math>q</Math></th>
              <th><Math>{'p \\to q'}</Math></th>
              <th><Math>{'\\neg p'}</Math></th>
              <th><Math>{'\\neg p \\lor q'}</Math></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>T</td><td>T</td><td>T</td><td>F</td><td>T</td></tr>
            <tr><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>
            <tr><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td></tr>
            <tr><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td></tr>
          </tbody>
        </table>
        <p>Columns 3 and 5 match, so the equivalence holds.</p>

        <p>(b) <Math>{'p \\to q \\equiv \\neg q \\to \\neg p'}</Math>:</p>
        <table className="truth-table">
          <thead>
            <tr>
              <th><Math>p</Math></th>
              <th><Math>q</Math></th>
              <th><Math>{'p \\to q'}</Math></th>
              <th><Math>{'\\neg q \\to \\neg p'}</Math></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>T</td><td>T</td><td>T</td><td>T</td></tr>
            <tr><td>T</td><td>F</td><td>F</td><td>F</td></tr>
            <tr><td>F</td><td>T</td><td>T</td><td>T</td></tr>
            <tr><td>F</td><td>F</td><td>T</td><td>T</td></tr>
          </tbody>
        </table>
        <p>Both columns match.</p>

        <p>(c) De Morgan: verify by computing each cell.</p>
        <table className="truth-table">
          <thead>
            <tr>
              <th><Math>p</Math></th>
              <th><Math>q</Math></th>
              <th><Math>{'p \\land q'}</Math></th>
              <th><Math>{'\\neg(p \\land q)'}</Math></th>
              <th><Math>{'\\neg p \\lor \\neg q'}</Math></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td></tr>
            <tr><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>
            <tr><td>F</td><td>T</td><td>F</td><td>T</td><td>T</td></tr>
            <tr><td>F</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>
          </tbody>
        </table>
        <p>Columns 4 and 5 match.</p>
      </>
    ),
  },
  {
    id: '1.2.4',
    question: (
      <>
        <strong>The material conditional:</strong> For each English sentence, first translate to propositional logic
        using <Math>{'\\to'}</Math>, then evaluate whether the translation is true given the facts stated.
        <ol type="a">
          <li>"If 2+2=5, then the moon is made of cheese." (Both claims are false.)</li>
          <li>"If Paris is in France, then grass is green." (Both claims are true.)</li>
          <li>"If snow is white, then 1=2." (First claim true, second false.)</li>
          <li>"If pigs can fly, then gold is a metal." (First false, second true.)</li>
        </ol>
        <p>Do the truth values match your intuition about whether these "should" be true?</p>
      </>
    ),
    hint: 'Remember: the material conditional is false only when the antecedent is true and the consequent is false.',
    solution: (
      <>
        <ol type="a">
          <li>
            <Math>{'p \\to q'}</Math> where <Math>v(p) = F, v(q) = F</Math>.
            Result: <strong>T</strong> (false antecedent).
          </li>
          <li>
            <Math>{'p \\to q'}</Math> where <Math>v(p) = T, v(q) = T</Math>.
            Result: <strong>T</strong> (true consequent).
          </li>
          <li>
            <Math>{'p \\to q'}</Math> where <Math>v(p) = T, v(q) = F</Math>.
            Result: <strong>F</strong> (the only false case).
          </li>
          <li>
            <Math>{'p \\to q'}</Math> where <Math>v(p) = F, v(q) = T</Math>.
            Result: <strong>T</strong> (false antecedent).
          </li>
        </ol>
        <p>
          Cases (a) and (d) feel counterintuitive—how can "if pigs fly then gold is a metal" be true?
          The answer is that the material conditional captures only truth-functional relationships,
          not relevance or causation. In mathematics, we regularly use conditionals where the
          antecedent and consequent are unrelated (e.g., "if n is even then n² is even" doesn't
          imply causation). The material conditional is exactly what we need for this.
        </p>
      </>
    ),
  },
  {
    id: '1.2.5',
    question: (
      <>
        <strong>Semantic relationships:</strong>
        <ol type="a">
          <li>
            Prove that <Math>{'\\varphi'}</Math> is a tautology if and only if <Math>{'\\neg\\varphi'}</Math> is a contradiction.
          </li>
          <li>
            Prove that <Math>{'\\varphi'}</Math> is satisfiable if and only if <Math>{'\\neg\\varphi'}</Math> is not a tautology.
          </li>
          <li>
            Give an example of two formulas <Math>{'\\varphi'}</Math> and <Math>{'\\psi'}</Math> such that both are contingencies
            but <Math>{'\\varphi \\land \\psi'}</Math> is a contradiction.
          </li>
        </ol>
      </>
    ),
    hint: 'For (a) and (b), use the definitions directly. For (c), think about complementary conditions.',
    solution: (
      <>
        <ol type="a">
          <li>
            <p>
              (<Math>\Rightarrow</Math>) Suppose <Math>{'\\varphi'}</Math> is a tautology: for all <Math>v</Math>, <Math>{'v(\\varphi) = T'}</Math>.
              Then for all <Math>v</Math>, <Math>{'v(\\neg\\varphi) = F'}</Math> (by definition of negation).
              So <Math>{'\\neg\\varphi'}</Math> is a contradiction.
            </p>
            <p>
              (<Math>\Leftarrow</Math>) Suppose <Math>{'\\neg\\varphi'}</Math> is a contradiction: for all <Math>v</Math>, <Math>{'v(\\neg\\varphi) = F'}</Math>.
              Then for all <Math>v</Math>, <Math>{'v(\\varphi) = T'}</Math>. So <Math>{'\\varphi'}</Math> is a tautology.
            </p>
          </li>
          <li>
            <p>
              <Math>{'\\varphi'}</Math> is satisfiable iff there exists <Math>v</Math> with <Math>{'v(\\varphi) = T'}</Math>,
              iff there exists <Math>v</Math> with <Math>{'v(\\neg\\varphi) = F'}</Math>,
              iff <Math>{'\\neg\\varphi'}</Math> is not true under all <Math>v</Math>,
              iff <Math>{'\\neg\\varphi'}</Math> is not a tautology.
            </p>
          </li>
          <li>
            <p>
              Take <Math>{'\\varphi = p'}</Math> and <Math>{'\\psi = \\neg p'}</Math>.
              Both are contingencies (each is true under some assignments, false under others).
              But <Math>{'p \\land \\neg p'}</Math> is a contradiction.
            </p>
            <p>
              More interesting: <Math>{'\\varphi = p \\to q'}</Math> and <Math>{'\\psi = p \\land \\neg q'}</Math>.
              Both contingent, but <Math>{'(p \\to q) \\land (p \\land \\neg q)'}</Math> is a contradiction
              (it requires <Math>p</Math> true, <Math>q</Math> false, but also <Math>{'p \\to q'}</Math> true—impossible).
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: '1.2.6',
    question: (
      <>
        <strong>Models perspective:</strong> Let <Math>{`\\Gamma = \\{ p \\to q, q \\to r \\}`}</Math> be a set of formulas.
        <ol type="a">
          <li>How many truth assignments (models) are there for the variables <Math>p, q, r</Math>?</li>
          <li>How many of these models satisfy both formulas in <Math>\Gamma</Math>?</li>
          <li>List all models that satisfy <Math>\Gamma</Math>.</li>
          <li>Is there any truth assignment that satisfies <Math>\Gamma</Math> but makes <Math>{'p \\to r'}</Math> false?</li>
        </ol>
      </>
    ),
    hint: 'Enumerate systematically. There are 2³ = 8 total assignments.',
    solution: (
      <>
        <ol type="a">
          <li><strong>8</strong> total truth assignments (2³).</li>
          <li>Let's check each:
            <table className="truth-table">
              <thead>
                <tr>
                  <th><Math>p</Math></th>
                  <th><Math>q</Math></th>
                  <th><Math>r</Math></th>
                  <th><Math>{'p \\to q'}</Math></th>
                  <th><Math>{'q \\to r'}</Math></th>
                  <th>Both?</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td><td>✓</td></tr>
                <tr><td>T</td><td>T</td><td>F</td><td>T</td><td>F</td><td>✗</td></tr>
                <tr><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>✗</td></tr>
                <tr><td>T</td><td>F</td><td>F</td><td>F</td><td>T</td><td>✗</td></tr>
                <tr><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td><td>✓</td></tr>
                <tr><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>✗</td></tr>
                <tr><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td><td>✓</td></tr>
                <tr><td>F</td><td>F</td><td>F</td><td>T</td><td>T</td><td>✓</td></tr>
              </tbody>
            </table>
            <strong>4</strong> models satisfy both.
          </li>
          <li>The satisfying models are: (T,T,T), (F,T,T), (F,F,T), (F,F,F).</li>
          <li>
            <strong>No.</strong> Check <Math>{'p \\to r'}</Math> in each satisfying model:
            T→T=T, F→T=T, F→T=T, F→F=T. All true!
            <p>
              This previews <em>semantic entailment</em>: <Math>\Gamma</Math> entails <Math>{'p \\to r'}</Math>
              because every model of <Math>\Gamma</Math> is also a model of <Math>{'p \\to r'}</Math>.
              We'll formalize this in section 1.3.
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

export function Exercises_1_2() {
  return (
    <div className="exercises-content">
      <h1>Exercises: 1.2 Semantics</h1>

      <p className="exercises-intro">
        These exercises cover truth assignments, truth tables, logical equivalence, and the
        classification of formulas. The last exercise previews semantic entailment.
      </p>

      {problems.map((problem) => (
        <Exercise key={problem.id} problem={problem} />
      ))}
    </div>
  );
}
