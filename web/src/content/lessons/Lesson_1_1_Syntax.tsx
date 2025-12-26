import { Math } from '../../components/Math';

export function Lesson_1_1_Syntax() {
  return (
    <div className="lesson-content">
      <h1>1.1 Syntax of Propositional Logic</h1>

      <section>
        <h2>What Propositional Logic Is</h2>
        <p>
          Propositional logic studies the behavior of <em>logical connectives</em>—and, or,
          not, implies—without looking inside the propositions themselves. It's the logic
          of compound statements built from atomic claims.
        </p>
        <p>
          From your boolean algebra background, you know most of this operationally.
          What's different here is that we're treating it as a <em>formal system</em>:
          a precisely defined artificial language with explicit rules.
        </p>
        <p>
          Why bother? Because later we'll ask meta-questions: Is every tautology provable?
          Is the proof system consistent? These questions require treating the logic itself
          as a mathematical object we can reason about.
        </p>
        <p>
          If you're coming from CS, this is analogous to a programming language: both have
          formally defined syntax (a grammar), parse trees, and semantics defined separately
          from syntax. The key difference is purpose—programs describe computations with state
          and effects; logical formulas describe truth relationships, timelessly.
        </p>
      </section>

      <section>
        <h2>The Alphabet</h2>
        <p>A propositional language consists of:</p>

        <h3>1. Propositional Variables</h3>
        <p>
          Symbols that stand for atomic propositions. Formally, we fix a countable set
          of propositional variables: <Math>{`\\{p, q, r, s, \\ldots\\}`}</Math> or
          equivalently <Math>{`\\{p_0, p_1, p_2, \\ldots\\}`}</Math>.
        </p>
        <p>
          These are <em>uninterpreted</em>—they're just symbols. They get meaning only
          when we assign truth values (that's semantics, next section).
        </p>
        <p className="note">
          Convention: We reserve Greek letters (<Math>\varphi, \psi, \chi, \ldots</Math>)
          for the metalanguage. They are not propositional variables—they're symbols we
          use when talking <em>about</em> formulas. More on this distinction below.
        </p>

        <h3>2. Logical Connectives</h3>
        <table className="connectives-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Read as</th>
              <th>Boolean equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Math>\neg</Math></td>
              <td>Negation</td>
              <td>"not"</td>
              <td><code>!</code> or <code>~</code></td>
            </tr>
            <tr>
              <td><Math>\land</Math></td>
              <td>Conjunction</td>
              <td>"and"</td>
              <td><code>&&</code> or <code>&</code></td>
            </tr>
            <tr>
              <td><Math>\lor</Math></td>
              <td>Disjunction</td>
              <td>"or"</td>
              <td><code>||</code> or <code>|</code></td>
            </tr>
            <tr>
              <td><Math>\rightarrow</Math></td>
              <td>Conditional</td>
              <td>"if...then" / "implies"</td>
              <td>No direct equivalent*</td>
            </tr>
            <tr>
              <td><Math>\leftrightarrow</Math></td>
              <td>Biconditional</td>
              <td>"if and only if"</td>
              <td><code>==</code> (equality)</td>
            </tr>
          </tbody>
        </table>
        <p className="note">
          *The conditional <Math>p \rightarrow q</Math> is equivalent to <Math>\neg p \lor q</Math>,
          which in boolean terms is <code>!p || q</code>. We'll discuss its behavior in semantics.
        </p>

        <h3>3. Punctuation</h3>
        <p>Parentheses <Math>(</Math> and <Math>)</Math> for grouping.</p>
      </section>

      <section>
        <h2>Well-Formed Formulas (WFFs)</h2>
        <p>
          Not every string of symbols is a valid formula. We define the set of
          <em>well-formed formulas</em> recursively:
        </p>

        <div className="definition">
          <strong>Definition (WFF):</strong>
          <ol>
            <li>Every propositional variable is a wff. <span className="note">(Base case)</span></li>
            <li>If <Math>\varphi</Math> is a wff, then <Math>(\neg\varphi)</Math> is a wff.</li>
            <li>If <Math>\varphi</Math> and <Math>\psi</Math> are wffs, then so are:
              <ul>
                <li><Math>(\varphi \land \psi)</Math></li>
                <li><Math>(\varphi \lor \psi)</Math></li>
                <li><Math>(\varphi \rightarrow \psi)</Math></li>
                <li><Math>(\varphi \leftrightarrow \psi)</Math></li>
              </ul>
            </li>
            <li>Nothing else is a wff. <span className="note">(Closure)</span></li>
          </ol>
        </div>

        <p>This recursive definition means every wff has a unique <em>parse tree</em>.</p>

        <h3>Examples</h3>
        <ul>
          <li><Math>p</Math> — wff (rule 1)</li>
          <li><Math>(\neg p)</Math> — wff (rule 2)</li>
          <li><Math>((p \land q) \rightarrow r)</Math> — wff (rule 3)</li>
          <li><Math>p \land \land q</Math> — NOT a wff</li>
          <li><Math>\rightarrow p q</Math> — NOT a wff</li>
        </ul>
      </section>

      <section>
        <h2>Notational Conventions</h2>
        <p>
          Fully parenthesized formulas get unwieldy. We adopt conventions to drop parentheses:
        </p>

        <h3>Precedence (highest to lowest)</h3>
        <ol>
          <li><Math>\neg</Math> (binds tightest)</li>
          <li><Math>\land</Math></li>
          <li><Math>\lor</Math></li>
          <li><Math>\rightarrow</Math></li>
          <li><Math>\leftrightarrow</Math> (binds loosest)</li>
        </ol>

        <h3>Association</h3>
        <p>
          <Math>\rightarrow</Math> associates to the right: <Math>p \rightarrow q \rightarrow r</Math> means <Math>p \rightarrow (q \rightarrow r)</Math>
        </p>
        <p>
          <Math>\land</Math> and <Math>\lor</Math> associate to the left (though it rarely matters since they're associative).
        </p>
        <p className="note">
          Why right-association for <Math>\rightarrow</Math>? It makes nested conditionals chain
          naturally: <Math>p \rightarrow q \rightarrow r \rightarrow s</Math> reads as
          "given p, given q, given r, you get s"—each antecedent peels off from the left.
          This corresponds to <em>currying</em> in functional programming, where a
          function <code>A → B → C</code> takes an A and returns a function <code>B → C</code>.
          The Curry-Howard correspondence makes this analogy precise.
        </p>

        <h3>Examples</h3>
        <ul>
          <li><Math>\neg p \land q</Math> means <Math>((\neg p) \land q)</Math></li>
          <li><Math>p \land q \lor r</Math> means <Math>((p \land q) \lor r)</Math></li>
          <li><Math>p \rightarrow q \rightarrow r</Math> means <Math>(p \rightarrow (q \rightarrow r))</Math></li>
        </ul>
      </section>

      <section>
        <h2>Object Language vs. Metalanguage</h2>
        <p>
          A crucial distinction:
        </p>
        <ul>
          <li>
            <strong>Object language:</strong> The formal language we're studying.
            Its symbols are <Math>p, q, \neg, \land, \lor, \rightarrow, \leftrightarrow</Math>.
          </li>
          <li>
            <strong>Metalanguage:</strong> The language we use to <em>talk about</em> the
            object language. Usually English plus some conventions.
          </li>
        </ul>
        <p>
          When I write <Math>\varphi</Math> or <Math>\psi</Math>, these are <em>metavariables</em>—they
          stand for arbitrary formulas in the object language. They're not part of propositional
          logic itself; they're abbreviations we use when stating general facts.
        </p>
        <p>
          This distinction becomes important when we discuss Gödel: the incompleteness theorems
          are <em>about</em> formal systems, proved in the metalanguage.
        </p>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Propositional logic is a formal language with precise syntax</li>
          <li>WFFs are defined recursively—every formula has a unique structure</li>
          <li>Precedence conventions reduce parentheses but don't change meaning</li>
          <li>Distinguish the object language (what we study) from the metalanguage (how we study it)</li>
        </ul>
      </section>
    </div>
  );
}
