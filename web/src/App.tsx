import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Lesson } from './pages/Lesson';
import { Exercises } from './pages/Exercises';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lesson/:lessonId" element={<Lesson />} />
          <Route path="exercises" element={<Exercises />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
