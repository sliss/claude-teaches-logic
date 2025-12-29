import { Link } from 'react-router-dom';
import { syllabus } from '../content/syllabus';

// Track which exercise sets are available
const availableExercises = new Set(['1-1-syntax', '1-2-semantics', '1-3-entailment']);

export function Exercises() {
  return (
    <div className="exercises">
      <h1>Exercise Hub</h1>

      <p>
        Work through exercises after completing each lesson.
        Try each problem before revealing the solution.
      </p>

      <section className="exercise-list">
        {syllabus.map((unit) => (
          <div key={unit.id} className="unit-exercises">
            <h2>{unit.title}</h2>
            <ul>
              {unit.lessons.map((lesson) => {
                const hasExercises = availableExercises.has(lesson.id);
                return (
                  <li key={lesson.id} className={hasExercises ? 'available' : 'unavailable'}>
                    {hasExercises ? (
                      <Link to={`/exercises/${lesson.id}`} className="lesson-title">
                        {lesson.title}
                      </Link>
                    ) : (
                      <span className="lesson-title">{lesson.title}</span>
                    )}
                    <span className="exercise-status">
                      {hasExercises ? '→ Available' : '○ Coming soon'}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      <section className="instructions">
        <h2>How Exercises Work</h2>
        <ol>
          <li>Complete the lesson material first</li>
          <li>Attempt the exercises on your own</li>
          <li>Click "Show Solution" to check your work</li>
          <li>Note what you learned and any confusion</li>
        </ol>
      </section>
    </div>
  );
}
