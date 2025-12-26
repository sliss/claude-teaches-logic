import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathProps {
  children: string;
  display?: boolean;
}

// Inline or block math rendering
export function Math({ children, display = false }: MathProps) {
  const html = katex.renderToString(children, {
    displayMode: display,
    throwOnError: false,
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      style={display ? { display: 'block', textAlign: 'center', margin: '1rem 0' } : undefined}
    />
  );
}

// Shorthand for display math
export function DisplayMath({ children }: { children: string }) {
  return <Math display>{children}</Math>;
}
