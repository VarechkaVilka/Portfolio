import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Portfolio.css';
import myVideo from './img/mag.webm';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='glow-on-hover'>
      {theme === 'light' ? 'Тьма' : 'Свет'}
    </button>
  );
}

// Компонент Главной страницы
function Home() {
  const { theme } = useTheme();
  return (
    <section className={`home ${theme}`}>
      <h2>Привет! Я Вилкова Варвара Александровна</h2>
      <p>Фронтенд-разработчик, студентка 2 курса МИДиСа. Это мой сайт портфолио.</p>
      <video autoPlay src={myVideo} type="video/webm">
        Ваш браузер не поддерживает видео.
      </video>
    </section>
  );
}

// Компонент Страницы Проектов
function Projects() {
  const { theme } = useTheme();
  const projectsData = [
    {
      id: 1,
      title: 'Mini-apps ART-VICTORINA💗',
      description: 'Мини вк приложение с использованием React',
      repoLink: '',
      demoLink: 'https://vk.com/app51744525', 
    },
    {
      id: 2,
      title: 'Mini-apps Хотелки',
      description: 'Мини вк приложение с использованием React',
      repoLink: '', 
      demoLink: 'https://vk.com/app52426399', 
    },
    {
      id: 3,
      title: 'АСУ Поликлиника',
      description: 'Windows Forms с использованием MySql',
      repoLink: 'https://github.com/VarechkaVilka/ACU.git',
      demoLink: '', 
    },
  ];

  return (
    <section className={`projects ${theme}`}>
      <h2>Projects💗</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div className={`project-item ${theme}`} key={project.id}>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
      {project.repoLink ? (
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
          REPOSITORY
        </a>
      ) : (
        <span className="disabled-link">REPOSITORY</span>
      )}

      {project.demoLink ? (
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          DEMO
        </a>
      ) : (
        <span className="disabled-link">DEMO</span>
      )}
    </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Компонент Страницы Навыков

function Skills() {
  const { theme } = useTheme();
  const skillsData = [
    { name: 'HTML', description: 'Основа веб-страниц, разметка, теги, структура, семантика.' },
    { name: 'CSS', description: 'Стилизация веб-страниц, каскадность, селекторы, свойства, адаптивный дизайн' },
    { name: 'JavaScript', description: 'Интерактивность веб-страниц.' },
    { name: 'React', description: 'Компонентный подход, виртуальный DOM, JSX.' },
    { name: 'C#', description: 'ООП, SOLID, WinForm, WPF' },
    { name: 'Git', description: 'Система контроля версий, ветвление, слияние, разрешение конфликтов.' },
    { name: '1C', description: 'Конфигурирование, разработка, администрирование.' },
  ];

  return (
    <section className={`skills ${theme}`}>
      <h2>Навыки</h2>
      <div className="skill-list">
        {skillsData.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-header">
              {skill.name}
            </div>
            <div className="skill-content">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// Компонент Страницы Контактов
function Contact() {
  const { theme } = useTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (!name || !email || !message) {
      alert('Ошибочка, заполните все поля.');
      return;
    }

    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);
    alert('Сообщение отправлено,котик!');

    event.target.reset();
  };

  return (
    <section className={`contact ${theme}`}>
      <h2 className='contact-h2'>Связаться со мной</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" name="name" />
          </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Сообщение:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Отправить сообщение</button>
      </form>
    </section>
  );
}

// Главный компонент Portfolio
function Portfolio() {
  const { theme } = useTheme(); 
  return (
    <Router>
      <div className={`portfolio ${theme}`}>
        <header>
          <h1>SEXUALKA</h1>
          <nav>
            <ul>
              <li>
                <Link to="/" className='link-li'>Главная</Link>
              </li>
              <li>
                <Link to="/projects" className='link-li'>Проекты</Link>
              </li>
              <li>
                <Link to="/skills" className='link-li'>Навыки</Link>
              </li>
              <li>
                <Link to="/contact" className='link-li'>Контакты</Link>
              </li>
              <li>
                <ThemeSwitcher /> 
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>© {new Date().getFullYear()}Вилкова Варвара</p>
        </footer>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
