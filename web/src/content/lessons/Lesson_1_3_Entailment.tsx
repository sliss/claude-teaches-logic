import { Math } from '../../components/Math';

export function Lesson_1_3_Entailment() {
  return (
    <div className="lesson-content">
      <h1>1.3 Semantic Entailment</h1>

      <section>
        <h2>The Central Question</h2>
        <p>
          In 1.2 we classified individual formulas: tautologies (always true),
          contradictions (never true), contingencies (sometimes true). Now we
          ask a relational question:
        </p>
        <p className="highlight">
          Given some formulas as premises, what conclusions <em>must</em> follow?
        </p>
        <p>
          This is what logic is fundamentally about—not just which statements
          are true, but which statements <em>guarantee</em> which other statements.
        </p>
      </section>

      <section>
        <h2>Semantic Entailment</h2>
        <p>
          The key definition:
        </p>
        <div className="definition">
          <strong>Definition:</strong> A set of formulas <Math>\Gamma</Math> <strong>semantically
          entails</strong> a formula <Math>\varphi</Math>, written{' '}
          <Math>{`\\Gamma \\vDash \\varphi`}</Math>, iff every truth assignment
          that makes all formulas in <Math>\Gamma</Math> true also makes{' '}
          <Math>\varphi</Math> true.
        </div>
        <p>
          Equivalently: there's no truth assignment where all premises are true
          but the conclusion is false.
        </p>
        <p>
          In the models language from 1.2: every model of <Math>\Gamma</Math> is
          a model of <Math>\varphi</Math>.
        </p>

        <h3>Notation</h3>
        <ul>
          <li>
            <Math>{`\\Gamma \\vDash \\varphi`}</Math> — "<Math>\Gamma</Math> entails <Math>\varphi</Math>"
          </li>
          <li>
            <Math>{`\\varphi_1, \\varphi_2 \\vDash \\psi`}</Math> — shorthand for{' '}
            <Math>{`\\{\\varphi_1, \\varphi_2\\} \\vDash \\psi`}</Math>
          </li>
          <li>
            <Math>{`\\vDash \\varphi`}</Math> — with empty premises, means{' '}
            <Math>\varphi</Math> is a tautology (true in all models, vacuously
            "entailed by nothing")
          </li>
        </ul>

        <h3>Examples</h3>
        <ul>
          <li>
            <Math>{`p, p \\to q \\vDash q`}</Math> — modus ponens. If p is true and
            p→q is true, q must be true.
          </li>
          <li>
            <Math>{`p \\land q \\vDash p`}</Math> — conjunction elimination. If both
            are true, each is true.
          </li>
          <li>
            <Math>{`p \\vDash p \\lor q`}</Math> — disjunction introduction. If p is
            true, then p∨q is true.
          </li>
          <li>
            <Math>{`p \\lor q, \\neg p \\vDash q`}</Math> — disjunctive syllogism.
            If one of p,q is true and p is false, q must be true.
          </li>
        </ul>
      </section>

      <section>
        <h2>Validity of Arguments</h2>
        <p>
          An <strong>argument</strong> is a sequence of premises followed by a
          conclusion. We write it as:
        </p>
        <div className="example-block">
          <Math>{`\\varphi_1, \\varphi_2, \\ldots, \\varphi_n \\therefore \\psi`}</Math>
        </div>
        <p>
          The argument is <strong>valid</strong> iff the premises semantically
          entail the conclusion: <Math>{`\\varphi_1, \\ldots, \\varphi_n \\vDash \\psi`}</Math>.
        </p>
        <p>
          Validity is about the <em>form</em>, not the content. An argument can
          be valid even if its premises are false—validity just says: <em>if</em>{' '}
          the premises were true, the conclusion <em>would have to be</em> true.
        </p>

        <h3>Valid vs. Sound</h3>
        <ul>
          <li>
            <strong>Valid:</strong> The conclusion follows from the premises
            (logical structure is correct)
          </li>
          <li>
            <strong>Sound:</strong> Valid AND all premises are actually true
          </li>
        </ul>
        <p>
          Logic studies validity. Whether premises are true is often an empirical
          or domain-specific question.
        </p>

        <h3>Example: Valid but Unsound</h3>
        <div className="example-block">
          <p>All mammals can fly.</p>
          <p>Humans are mammals.</p>
          <p>∴ Humans can fly.</p>
        </div>
        <p>
          The form is valid (universal instantiation), but the first premise is
          false, so the argument is unsound.
        </p>
      </section>

      <section>
        <h2>Satisfiability of Sets</h2>
        <p>
          We extend satisfiability from single formulas to sets:
        </p>
        <div className="definition">
          <strong>Definition:</strong> A set <Math>\Gamma</Math> is <strong>satisfiable</strong>{' '}
          iff there exists a truth assignment that makes every formula in{' '}
          <Math>\Gamma</Math> true simultaneously.
        </div>
        <p>
          Otherwise, <Math>\Gamma</Math> is <strong>unsatisfiable</strong> (or
          inconsistent).
        </p>

        <h3>Examples</h3>
        <ul>
          <li>
            <Math>{`\\{p, q\\}`}</Math> — satisfiable (set both to T)
          </li>
          <li>
            <Math>{`\\{p, \\neg p\\}`}</Math> — unsatisfiable (no assignment works)
          </li>
          <li>
            <Math>{`\\{p \\to q, q \\to r, p, \\neg r\\}`}</Math> — unsatisfiable (work it out!)
          </li>
        </ul>
      </section>

      <section>
        <h2>The Entailment-Unsatisfiability Connection</h2>
        <p>
          Here's a crucial equivalence:
        </p>
        <div className="theorem">
          <strong>Theorem:</strong>{' '}
          <Math>{`\\Gamma \\vDash \\varphi`}</Math> if and only if{' '}
          <Math>{`\\Gamma \\cup \\{\\neg\\varphi\\}`}</Math> is unsatisfiable.
        </div>
        <p>
          <strong>Proof:</strong>
        </p>
        <ul>
          <li>
            (<Math>\Rightarrow</Math>) Suppose <Math>{`\\Gamma \\vDash \\varphi`}</Math>.
            Then every assignment making <Math>\Gamma</Math> true also makes{' '}
            <Math>\varphi</Math> true. So no assignment makes <Math>\Gamma</Math>{' '}
            true while making <Math>{`\\neg\\varphi`}</Math> true. Hence{' '}
            <Math>{`\\Gamma \\cup \\{\\neg\\varphi\\}`}</Math> is unsatisfiable.
          </li>
          <li>
            (<Math>\Leftarrow</Math>) Suppose <Math>{`\\Gamma \\cup \\{\\neg\\varphi\\}`}</Math>{' '}
            is unsatisfiable. Then no assignment makes both <Math>\Gamma</Math>{' '}
            true and <Math>\varphi</Math> false. So every assignment making{' '}
            <Math>\Gamma</Math> true must make <Math>\varphi</Math> true. Hence{' '}
            <Math>{`\\Gamma \\vDash \\varphi`}</Math>.
          </li>
        </ul>
        <p>
          This equivalence is powerful: it reduces entailment questions to
          satisfiability questions. Instead of asking "does <Math>\varphi</Math>{' '}
          follow from <Math>\Gamma</Math>?", ask "is{' '}
          <Math>{`\\Gamma \\cup \\{\\neg\\varphi\\}`}</Math> consistent?"
        </p>
      </section>

      <section>
        <h2>Connection to SAT</h2>
        <p>
          The <strong>Boolean satisfiability problem (SAT)</strong>: given a
          propositional formula, is it satisfiable?
        </p>
        <p>
          From CS, you know SAT is NP-complete—the canonical NP-complete problem.
          Every problem in NP reduces to it. No known polynomial-time algorithm,
          but also no proof that none exists (that's P vs NP).
        </p>
        <p>
          What the entailment-unsatisfiability connection tells us:
        </p>
        <ul>
          <li>
            Checking <Math>{`\\Gamma \\vDash \\varphi`}</Math> is co-NP-complete
            (equivalent to checking unsatisfiability, which is the complement of SAT)
          </li>
          <li>
            Validity checking is co-NP-complete (<Math>{`\\vDash \\varphi`}</Math>{' '}
            iff <Math>{`\\neg\\varphi`}</Math> is unsatisfiable)
          </li>
          <li>
            Despite worst-case hardness, SAT solvers are remarkably effective
            in practice—a triumph of algorithm engineering
          </li>
        </ul>
        <p>
          For propositional logic, we have decision procedures (brute-force
          truth tables, or smarter SAT solving). First-order logic won't be so
          lucky—validity becomes undecidable.
        </p>
      </section>

      <section>
        <h2>Properties of Entailment</h2>
        <p>
          Some important facts about <Math>\vDash</Math>:
        </p>

        <h3>Reflexivity</h3>
        <p>
          <Math>{`\\Gamma \\vDash \\varphi`}</Math> if <Math>{`\\varphi \\in \\Gamma`}</Math>
        </p>
        <p className="note">Any set of premises entails each of its members.</p>

        <h3>Monotonicity</h3>
        <p>
          If <Math>{`\\Gamma \\vDash \\varphi`}</Math> and{' '}
          <Math>{`\\Gamma \\subseteq \\Delta`}</Math>, then{' '}
          <Math>{`\\Delta \\vDash \\varphi`}</Math>
        </p>
        <p className="note">
          Adding more premises never invalidates an entailment. (This is
          classical logic; non-monotonic logics exist for defeasible reasoning.)
        </p>

        <h3>Transitivity (Cut)</h3>
        <p>
          If <Math>{`\\Gamma \\vDash \\varphi`}</Math> and{' '}
          <Math>{`\\Delta, \\varphi \\vDash \\psi`}</Math>, then{' '}
          <Math>{`\\Gamma, \\Delta \\vDash \\psi`}</Math>
        </p>
        <p className="note">
          If you can derive a lemma, you can use it to derive further conclusions.
        </p>

        <h3>Deduction Theorem (Semantic Version)</h3>
        <p>
          <Math>{`\\Gamma, \\varphi \\vDash \\psi`}</Math> if and only if{' '}
          <Math>{`\\Gamma \\vDash \\varphi \\to \\psi`}</Math>
        </p>
        <p className="note">
          You can always "discharge" a premise by moving it into the conclusion
          as an antecedent. This connects entailment (<Math>\vDash</Math>) with
          the conditional connective (<Math>\to</Math>).
        </p>
      </section>

      <section>
        <h2>Entailment vs. Implication</h2>
        <p>
          A common confusion: what's the difference between <Math>\vDash</Math>{' '}
          and <Math>\to</Math>?
        </p>
        <table className="comparison-table">
          <thead>
            <tr>
              <th></th>
              <th><Math>\to</Math> (Conditional)</th>
              <th><Math>\vDash</Math> (Entailment)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Level</strong></td>
              <td>Object language</td>
              <td>Metalanguage</td>
            </tr>
            <tr>
              <td><strong>Type</strong></td>
              <td>Connective (builds formulas)</td>
              <td>Relation (between formulas)</td>
            </tr>
            <tr>
              <td><strong>Expression</strong></td>
              <td><Math>{`p \\to q`}</Math> is a formula</td>
              <td><Math>{`p \\vDash q`}</Math> is a claim about formulas</td>
            </tr>
          </tbody>
        </table>
        <p>
          The deduction theorem connects them: <Math>{`\\varphi \\vDash \\psi`}</Math>{' '}
          iff <Math>{`\\vDash \\varphi \\to \\psi`}</Math> (the conditional is a
          tautology).
        </p>
        <p>
          Think of it this way: <Math>\to</Math> is a way to <em>express</em>{' '}
          entailment inside the object language, but entailment itself is a
          metalinguistic concept.
        </p>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            <Math>{`\\Gamma \\vDash \\varphi`}</Math> means every model of the
            premises is a model of the conclusion
          </li>
          <li>
            Validity is about form, not truth of premises; soundness adds true
            premises
          </li>
          <li>
            Entailment reduces to unsatisfiability:{' '}
            <Math>{`\\Gamma \\vDash \\varphi`}</Math> iff{' '}
            <Math>{`\\Gamma \\cup \\{\\neg\\varphi\\}`}</Math> is unsatisfiable
          </li>
          <li>
            This connects logic to SAT, making entailment co-NP-complete
          </li>
          <li>
            <Math>\vDash</Math> (entailment) is metalanguage;{' '}
            <Math>\to</Math> (conditional) is object language. The deduction
            theorem bridges them.
          </li>
          <li>
            Entailment is monotonic in classical logic—more premises, same or
            more conclusions
          </li>
        </ul>
      </section>
    </div>
  );
}
