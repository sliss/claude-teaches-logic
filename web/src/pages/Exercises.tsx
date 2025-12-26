import { syllabus } from '../content/syllabus';

export function Exercises() {
  return (
    <div className="exercises">
      <h1>Exercise Hub</h1>

      <p>
        Work through exercises after completing each lesson.
        Record your attempts—solutions are revealed after you've tried.
      </p>

      <section className="exercise-list">
        {syllabus.map((unit) => (
          <div key={unit.id} className="unit-exercises">
            <h2>{unit.title}</h2>
            <ul>
              {unit.lessons.map((lesson) => (
                <li key={lesson.id} className={`status-${lesson.status}`}>
                  <span className="lesson-title">{lesson.title}</span>
                  <span className="exercise-status">
                    {lesson.status === 'complete' ? '✓ Complete' :
                     lesson.status === 'in-progress' ? '→ In Progress' :
                     '○ Not Started'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="instructions">
        <h2>How Exercises Work</h2>
        <ol>
          <li>Complete the lesson material first</li>
          <li>Attempt the exercises on your own</li>
          <li>Record your attempts (honor system)</li>
          <li>Review the solutions</li>
          <li>Note what you learned and any confusion</li>
        </ol>
      </section>
    </div>
  );
}
