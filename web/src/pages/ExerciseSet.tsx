import { useParams } from 'react-router-dom';
import { Exercises_1_1 } from '../content/exercises/Exercises_1_1';
import { Exercises_1_2 } from '../content/exercises/Exercises_1_2';
import { Exercises_1_3 } from '../content/exercises/Exercises_1_3';

const exerciseSets: Record<string, React.ComponentType> = {
  '1-1-syntax': Exercises_1_1,
  '1-2-semantics': Exercises_1_2,
  '1-3-entailment': Exercises_1_3,
};

export function ExerciseSet() {
  const { exerciseId } = useParams<{ exerciseId: string }>();

  const ExerciseContent = exerciseId ? exerciseSets[exerciseId] : undefined;

  if (!ExerciseContent) {
    return (
      <div className="exercises-content">
        <h1>Exercises Not Found</h1>
        <p>No exercises available for "{exerciseId}" yet.</p>
      </div>
    );
  }

  return <ExerciseContent />;
}
