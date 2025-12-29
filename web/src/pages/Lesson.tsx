import { useParams } from 'react-router-dom';
import { syllabus } from '../content/syllabus';
import { Lesson_1_1_Syntax } from '../content/lessons/Lesson_1_1_Syntax';
import { Lesson_1_2_Semantics } from '../content/lessons/Lesson_1_2_Semantics';
import { Lesson_1_3_Entailment } from '../content/lessons/Lesson_1_3_Entailment';

const lessonContent: Record<string, React.ComponentType> = {
  '1-1-syntax': Lesson_1_1_Syntax,
  '1-2-semantics': Lesson_1_2_Semantics,
  '1-3-entailment': Lesson_1_3_Entailment,
};

export function Lesson() {
  const { lessonId } = useParams<{ lessonId: string }>();

  // Find lesson metadata
  const lesson = syllabus
    .flatMap(unit => unit.lessons)
    .find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="lesson">
        <h1>Lesson Not Found</h1>
        <p>The lesson "{lessonId}" doesn't exist.</p>
      </div>
    );
  }

  const LessonContent = lessonId ? lessonContent[lessonId] : undefined;

  if (!LessonContent) {
    return (
      <div className="lesson">
        <h1>{lesson.title}</h1>
        <div className="placeholder">
          <p>This lesson hasn't been written yet.</p>
          <p>Check back soon, or ask to start this lesson in the CLI.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson">
      <LessonContent />
    </div>
  );
}
