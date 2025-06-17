import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Article } from './components/Article'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
