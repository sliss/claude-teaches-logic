import { Math } from '../components/Math';

export function Home() {
  return (
    <div className="home">
      <h1>Foundations of Mathematical Logic</h1>

      <p className="subtitle">
        A course in formal logic: from propositional logic through Godel's incompleteness theorems.
      </p>

      <section className="intro">
        <h2>Course Overview</h2>
        <p>
          This course covers the core mathematical logic that a math-track undergraduate would know.
          We'll build from propositional logic up through first-order logic, proof systems,
          completeness theorems, and ultimately Godel's incompleteness results.
        </p>

        <h2>What You'll Learn</h2>
        <ul>
          <li>Propositional and first-order logic as formal systems</li>
          <li>The distinction between syntax and semantics</li>
          <li>Natural deduction and formal proofs</li>
          <li>What it means for a proof system to be <em>sound</em> and <em>complete</em></li>
          <li>The Peano axioms and arithmetic as a first-order theory</li>
          <li>Why some true statements are unprovable (Godel)</li>
        </ul>

        <h2>Notation Preview</h2>
        <p>
          We'll be using standard logical notation. For example, the statement
          "for all x, if x is even then x squared is even" would be written:
        </p>
        <Math display>
          {`\\forall x \\, (\\text{Even}(x) \\rightarrow \\text{Even}(x^2))`}
        </Math>
        <p>
          Don't worry if this looks unfamiliar—we'll build up to it.
        </p>
      </section>

      <section className="next-steps">
        <h2>Getting Started</h2>
        <p>
          Select a lesson from the sidebar to begin. We recommend starting with
          <strong> 1.1 Syntax</strong> in Unit 1.
        </p>
      </section>
    </div>
  );
}
