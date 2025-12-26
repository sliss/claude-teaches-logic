import { NavLink, Outlet } from 'react-router-dom';
import { syllabus } from '../content/syllabus';

export function Layout() {
  return (
    <div className="app-layout">
      <nav className="sidebar">
        <h1>Logic Course</h1>
        <NavLink to="/" end>Home</NavLink>

        <h2>Lessons</h2>
        <ul>
          {syllabus.map((unit) => (
            <li key={unit.id}>
              <span className="unit-title">{unit.title}</span>
              <ul>
                {unit.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <NavLink to={`/lesson/${lesson.id}`}>{lesson.title}</NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h2>Exercises</h2>
        <NavLink to="/exercises">Exercise Hub</NavLink>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
