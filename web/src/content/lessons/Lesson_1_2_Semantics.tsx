import { Math } from '../../components/Math';

export function Lesson_1_2_Semantics() {
  return (
    <div className="lesson-content">
      <h1>1.2 Semantics of Propositional Logic</h1>

      <section>
        <h2>From Syntax to Meaning</h2>
        <p>
          In 1.1 we defined which strings are well-formed formulas. But so far,
          formulas like <Math>p \land q</Math> are just patterns of symbols—they
          don't <em>mean</em> anything yet.
        </p>
        <p>
          Semantics gives formulas meaning. The central question: under what
          conditions is a formula <em>true</em>?
        </p>
        <p>
          The answer involves two steps: (1) assign truth values to the atomic
          propositions, then (2) compute the truth value of the whole formula
          using the definitions of the connectives. You know this from boolean
          algebra—what's new is how we formalize it, and how we'll use this
          framework to define concepts like validity and logical consequence.
        </p>
      </section>

      <section>
        <h2>Truth Assignments (Valuations)</h2>
        <p>
          A <strong>truth assignment</strong> (or <strong>valuation</strong>) is
          a function that assigns a truth value to each propositional variable:
        </p>
        <div className="definition">
          <strong>Definition:</strong> A truth assignment is a function{' '}
          <Math>{`v: \\{p, q, r, \\ldots\\} \\to \\{T, F\\}`}</Math>
        </div>
        <p>
          Given a truth assignment <Math>v</Math>, we extend it to all formulas
          by the following recursive rules:
        </p>
        <ul>
          <li><Math>v(\neg\varphi) = T</Math> iff <Math>v(\varphi) = F</Math></li>
          <li><Math>v(\varphi \land \psi) = T</Math> iff <Math>v(\varphi) = T</Math> and <Math>v(\psi) = T</Math></li>
          <li><Math>v(\varphi \lor \psi) = T</Math> iff <Math>v(\varphi) = T</Math> or <Math>v(\psi) = T</Math></li>
          <li><Math>v(\varphi \to \psi) = T</Math> iff <Math>v(\varphi) = F</Math> or <Math>v(\psi) = T</Math></li>
          <li><Math>v(\varphi \leftrightarrow \psi) = T</Math> iff <Math>v(\varphi) = v(\psi)</Math></li>
        </ul>
        <p>
          This is sometimes called the <strong>extension lemma</strong>: any truth
          assignment on the atoms extends uniquely to all formulas. The proof
          follows the recursive structure of wffs.
        </p>
        <p className="note">
          In CS terms: a truth assignment is like an environment binding variables
          to values, and the extension is like evaluation—recursively computing
          a formula's value given the environment.
        </p>
      </section>

      <section>
        <h2>Truth Tables</h2>
        <p>
          Truth tables are a compact way to specify the semantics. You know these,
          but let's be explicit:
        </p>

        <div className="truth-tables-grid">
          <table className="truth-table">
            <caption>Negation</caption>
            <thead>
              <tr><th><Math>\varphi</Math></th><th><Math>\neg\varphi</Math></th></tr>
            </thead>
            <tbody>
              <tr><td>T</td><td>F</td></tr>
              <tr><td>F</td><td>T</td></tr>
            </tbody>
          </table>

          <table className="truth-table">
            <caption>Conjunction</caption>
            <thead>
              <tr><th><Math>\varphi</Math></th><th><Math>\psi</Math></th><th><Math>\varphi \land \psi</Math></th></tr>
            </thead>
            <tbody>
              <tr><td>T</td><td>T</td><td>T</td></tr>
              <tr><td>T</td><td>F</td><td>F</td></tr>
              <tr><td>F</td><td>T</td><td>F</td></tr>
              <tr><td>F</td><td>F</td><td>F</td></tr>
            </tbody>
          </table>

          <table className="truth-table">
            <caption>Disjunction</caption>
            <thead>
              <tr><th><Math>\varphi</Math></th><th><Math>\psi</Math></th><th><Math>\varphi \lor \psi</Math></th></tr>
            </thead>
            <tbody>
              <tr><td>T</td><td>T</td><td>T</td></tr>
              <tr><td>T</td><td>F</td><td>T</td></tr>
              <tr><td>F</td><td>T</td><td>T</td></tr>
              <tr><td>F</td><td>F</td><td>F</td></tr>
            </tbody>
          </table>

          <table className="truth-table">
            <caption>Conditional</caption>
            <thead>
              <tr><th><Math>\varphi</Math></th><th><Math>\psi</Math></th><th><Math>\varphi \to \psi</Math></th></tr>
            </thead>
            <tbody>
              <tr><td>T</td><td>T</td><td>T</td></tr>
              <tr><td>T</td><td>F</td><td>F</td></tr>
              <tr><td>F</td><td>T</td><td>T</td></tr>
              <tr><td>F</td><td>F</td><td>T</td></tr>
            </tbody>
          </table>

          <table className="truth-table">
            <caption>Biconditional</caption>
            <thead>
              <tr><th><Math>\varphi</Math></th><th><Math>\psi</Math></th><th><Math>\varphi \leftrightarrow \psi</Math></th></tr>
            </thead>
            <tbody>
              <tr><td>T</td><td>T</td><td>T</td></tr>
              <tr><td>T</td><td>F</td><td>F</td></tr>
              <tr><td>F</td><td>T</td><td>F</td></tr>
              <tr><td>F</td><td>F</td><td>T</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Material Conditional</h2>
        <p>
          The conditional deserves attention because it's where logic and natural
          language diverge most sharply.
        </p>
        <p>
          In everyday English, "if P then Q" often carries connotations:
        </p>
        <ul>
          <li>Causation: P somehow <em>causes</em> or <em>explains</em> Q</li>
          <li>Relevance: P is <em>related to</em> Q</li>
          <li>Epistemic: we have <em>reason</em> to believe Q given P</li>
        </ul>
        <p>
          The material conditional <Math>p \to q</Math> captures none of this.
          It says only: it's not the case that P is true and Q is false.
          That's it.
        </p>
        <p>
          This leads to "paradoxes of material implication":
        </p>
        <ul>
          <li>
            <Math>F \to q</Math> is always true. "If the moon is made of cheese,
            then 2+2=5" is logically true—because the antecedent is false.
          </li>
          <li>
            <Math>p \to T</Math> is always true. "If it's raining, then 2+2=4"
            is true—because the consequent is true.
          </li>
        </ul>
        <p>
          These feel strange if you expect <Math>\to</Math> to mean something
          stronger. But the material conditional is exactly what we need for
          mathematical reasoning, where we want to say things like "if n is even,
          then n² is even" without implying causation or temporal sequence.
        </p>
        <p className="note">
          <strong>Why this definition?</strong> The material conditional is the
          weakest connective that validates modus ponens: from <Math>p</Math> and{' '}
          <Math>p \to q</Math>, we can conclude <Math>q</Math>. Any stronger
          interpretation would be too restrictive for mathematical reasoning.
        </p>
      </section>

      <section>
        <h2>Classifying Formulas</h2>
        <p>
          Now we can classify formulas by their behavior across <em>all</em> truth
          assignments:
        </p>
        <div className="definition">
          <strong>Definitions:</strong>
          <ul>
            <li>
              <Math>\varphi</Math> is a <strong>tautology</strong> (or <strong>valid</strong>)
              if <Math>v(\varphi) = T</Math> for every truth assignment <Math>v</Math>.
              We write <Math>\vDash \varphi</Math>.
            </li>
            <li>
              <Math>\varphi</Math> is a <strong>contradiction</strong> (or <strong>unsatisfiable</strong>)
              if <Math>v(\varphi) = F</Math> for every truth assignment <Math>v</Math>.
            </li>
            <li>
              <Math>\varphi</Math> is <strong>satisfiable</strong> if{' '}
              <Math>v(\varphi) = T</Math> for <em>some</em> truth assignment <Math>v</Math>.
            </li>
            <li>
              <Math>\varphi</Math> is a <strong>contingency</strong> if it's
              satisfiable but not valid—true under some assignments, false under
              others.
            </li>
          </ul>
        </div>

        <h3>Examples</h3>
        <ul>
          <li>
            <Math>p \lor \neg p</Math> — tautology (law of excluded middle)
          </li>
          <li>
            <Math>p \land \neg p</Math> — contradiction
          </li>
          <li>
            <Math>p \land q</Math> — contingency (satisfiable but not valid)
          </li>
          <li>
            <Math>p \to (q \to p)</Math> — tautology (verify this!)
          </li>
        </ul>

        <h3>Key Relationships</h3>
        <ul>
          <li>
            <Math>\varphi</Math> is a tautology iff <Math>\neg\varphi</Math> is
            a contradiction.
          </li>
          <li>
            <Math>\varphi</Math> is satisfiable iff <Math>\neg\varphi</Math> is
            not a tautology.
          </li>
          <li>
            Every formula is exactly one of: tautology, contradiction, or
            contingency.
          </li>
        </ul>
      </section>

      <section>
        <h2>Logical Equivalence</h2>
        <p>
          Two formulas are <strong>logically equivalent</strong> if they have the
          same truth value under every truth assignment:
        </p>
        <div className="definition">
          <strong>Definition:</strong> <Math>\varphi \equiv \psi</Math> iff for
          all truth assignments <Math>v</Math>, <Math>v(\varphi) = v(\psi)</Math>.
        </div>
        <p className="note">
          Note: <Math>\equiv</Math> is a metalanguage symbol—we use it to assert
          that two object-language formulas have the same meaning. It's not a
          connective in propositional logic itself. By contrast,{' '}
          <Math>\leftrightarrow</Math> is an object-language connective. The
          relationship: <Math>\varphi \equiv \psi</Math> iff{' '}
          <Math>\varphi \leftrightarrow \psi</Math> is a tautology.
        </p>

        <h3>Important Equivalences</h3>
        <p>These should be familiar from boolean algebra:</p>
        <table className="equivalences-table">
          <thead>
            <tr><th>Name</th><th>Equivalence</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Double negation</td>
              <td><Math>\neg\neg\varphi \equiv \varphi</Math></td>
            </tr>
            <tr>
              <td>Commutativity</td>
              <td>
                <Math>\varphi \land \psi \equiv \psi \land \varphi</Math><br/>
                <Math>\varphi \lor \psi \equiv \psi \lor \varphi</Math>
              </td>
            </tr>
            <tr>
              <td>Associativity</td>
              <td>
                <Math>(\varphi \land \psi) \land \chi \equiv \varphi \land (\psi \land \chi)</Math><br/>
                <Math>(\varphi \lor \psi) \lor \chi \equiv \varphi \lor (\psi \lor \chi)</Math>
              </td>
            </tr>
            <tr>
              <td>De Morgan's Laws</td>
              <td>
                <Math>\neg(\varphi \land \psi) \equiv \neg\varphi \lor \neg\psi</Math><br/>
                <Math>\neg(\varphi \lor \psi) \equiv \neg\varphi \land \neg\psi</Math>
              </td>
            </tr>
            <tr>
              <td>Distributivity</td>
              <td>
                <Math>\varphi \land (\psi \lor \chi) \equiv (\varphi \land \psi) \lor (\varphi \land \chi)</Math><br/>
                <Math>\varphi \lor (\psi \land \chi) \equiv (\varphi \lor \psi) \land (\varphi \lor \chi)</Math>
              </td>
            </tr>
            <tr>
              <td>Conditional elimination</td>
              <td><Math>\varphi \to \psi \equiv \neg\varphi \lor \psi</Math></td>
            </tr>
            <tr>
              <td>Contraposition</td>
              <td><Math>\varphi \to \psi \equiv \neg\psi \to \neg\varphi</Math></td>
            </tr>
          </tbody>
        </table>
        <p>
          These equivalences let us transform formulas into different forms
          without changing their meaning. We'll use this heavily when we get to
          normal forms.
        </p>
      </section>

      <section>
        <h2>Truth Assignments as Models</h2>
        <p>
          Here's a perspective shift that will be important later.
        </p>
        <p>
          Instead of thinking of a truth assignment as "inputs" and formulas as
          "computations," think of a truth assignment as describing a <em>possible
          world</em> or <em>model</em>—a way things could be.
        </p>
        <p>
          Under this view:
        </p>
        <ul>
          <li>
            Each truth assignment is a different model of the world
          </li>
          <li>
            A formula is satisfied by a model (or true in a model, or the model
            satisfies the formula) if the assignment makes the formula true
          </li>
          <li>
            A tautology is a formula true in <em>all possible worlds</em>
          </li>
          <li>
            A contradiction is a formula true in <em>no possible world</em>
          </li>
        </ul>
        <p>
          For propositional logic, a "model" is just a truth assignment—pretty
          simple. But this model-theoretic perspective generalizes to first-order
          logic, where models are much richer structures (domains with relations
          and functions).
        </p>
        <p>
          The notation <Math>\vDash</Math> hints at this: <Math>v \vDash \varphi</Math>
          means "model v satisfies formula φ" or "φ is true in model v."
        </p>
        <p className="note">
          This is the foundation of <strong>model theory</strong>: studying the
          relationship between formal theories (sets of formulas) and their
          models (structures that satisfy them). The completeness theorem,
          which we'll reach in Unit 5, is the crown jewel: a formula is provable
          iff it's true in all models.
        </p>
      </section>

      <section>
        <h2>Decidability: A Preview</h2>
        <p>
          Truth tables give us a decision procedure for propositional logic: to
          check if a formula is a tautology, build its truth table. If every row
          shows T, it's a tautology.
        </p>
        <p>
          This works, but the complexity is exponential: a formula with n
          variables requires 2ⁿ rows. For large n, this becomes infeasible.
        </p>
        <p>
          The <strong>SAT problem</strong>—determining if a formula is
          satisfiable—is NP-complete. You probably know this from CS. But note
          what we <em>don't</em> have: there's no known polynomial-time algorithm,
          and proving P ≠ NP remains open.
        </p>
        <p>
          What's significant for logic: propositional logic is <em>decidable</em>.
          We can always determine, in finite time, whether a formula is a
          tautology. First-order logic, as we'll see, is not—there's no algorithm
          that always halts with the right answer.
        </p>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            Truth assignments give meaning to formulas by assigning T/F to atoms
            and extending compositionally
          </li>
          <li>
            The material conditional <Math>p \to q</Math> means only "not (P
            and not Q)"—no causation or relevance implied
          </li>
          <li>
            Formulas are classified as tautologies (always true), contradictions
            (never true), or contingencies (sometimes true)
          </li>
          <li>
            Logical equivalence <Math>\equiv</Math> is a metalanguage relation;{' '}
            <Math>\varphi \equiv \psi</Math> iff <Math>\varphi \leftrightarrow \psi</Math> is
            a tautology
          </li>
          <li>
            Think of truth assignments as <em>models</em>—this perspective
            generalizes to first-order logic
          </li>
          <li>
            Propositional logic is decidable (truth tables), but the decision
            problem (SAT) is NP-complete
          </li>
        </ul>
      </section>
    </div>
  );
}
