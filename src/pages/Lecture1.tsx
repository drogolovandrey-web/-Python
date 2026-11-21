import CoursePage from "./CoursePage";

const sections = [
  { id: "language", title: "Язык программирования Python" },
  { id: "libraries", title: "Пакеты и библиотеки" },
  { id: "sources", title: "Источники" },
];

export default function Lecture1() {
  return (
    <CoursePage
      title="Лекция 1. Введение в Python"
      sections={sections}
      previous="home"
      next="practice-1"
    >
      <h2 id="language">Язык программирования Python</h2>
      <p>
        Python представляет популярный высокоуровневый язык программирования, который предназначен для
        создания приложений различных типов. Это и веб-приложения, и игры, и настольные программы, и
        работа с базами данных. Довольно большое распространение питон получил в области машинного
        обучения и исследований искусственного интеллекта.
      </p>
      <p>
        Язык Python впервые представил в 1991 году нидерландский разработчик Гвидо ван Россум. Python 2.0
        вышел в 2000 году, Python 3.0 — в 2008 году. В октябре 2025 года вышел Python 3.14.
      </p>
      <p>Основные особенности языка программирования Python:</p>
      <ul>
        <li>
          Скриптовый язык. Код программ определяется в виде скриптов.</li>
        <li>Поддержка самых
          различных парадигм программирования, в том числе объектно-ориентированной и функциональной
          парадигм.</li>
        <li>Интерпретация программ. Для работы со скриптами необходим
          интерпретатор, который запускает и выполняет скрипт.
        </li>
        <li>
          Переносимость. Один и тот же скрипт может работать в Windows, macOS и Linux, если установлен
          интерпретатор и доступны нужные библиотеки.
        </li>
        <li>
          Автоматическое управление памятью.</li>
        <li>Динамическая типизация. Имя может сначала
          ссылаться на объект одного типа, а после присваивания — на объект другого типа.
        </li>
      </ul>
      <p>
        У Python лаконичный синтаксис, поэтому на нём удобно учиться программировать. Язык
        применяют и в коммерческих проектах. Для Python есть готовые библиотеки, учебные
        материалы и примеры кода.
      </p>

      <h2 id="libraries">Пакеты и библиотеки</h2>
      <p>
        Вместе с интерпретатором поставляется стандартная библиотека. Для конкретных задач можно
        подключать сторонние пакеты. Ниже несколько примеров.
      </p>
      <h3>Для создания графических приложений</h3>
      <ul>
        <li>Tkinter</li>
        <li>PyQt / PySide</li>
        <li>wxPython</li>
        <li>
          DearPyGui</li>
        <li>EasyGUI</li>
      </ul>
      <h3>Для создания мобильных
          приложений</h3>
      <ul>
        <li>Kivy</li>
        <li>Toga
        </li>
      </ul>
      <h3>Для создания веб-приложений</h3>
      <ul>
        <li>Django</li>
        <li>Flask</li>
        <li>FastAPI</li>
        <li>Pylons</li>
        <li>Bottle</li>
        <li>CherryPy</li>
        <li>TurboGears</li>
        <li>Nagare</li>
      </ul>
      <h3>Для автоматизации процессов</h3>
      <ul>
        <li>Selenium (для тестирования веб-приложений)</li>
        <li>robotframework</li>
        <li>pywinauto</li>
        <li>Lettuce</li>
        <li>Behave</li>
        <li>Requests</li>
      </ul>
      <h3>Для работы с различными типами файлов</h3>
      <ul>
        <li>OpenPyXL (Excel)</li>
        <li>lxml (XML)</li>
        <li>ReportLab / borb (PDF)</li>
        <li>pdfrw / PyPDF2 (PDF)</li>
        <li>Pandas (CSV и Excel)</li>
      </ul>
      <h3>Для машинного обучения, искусственного интеллекта, Data Science</h3>
      <ul>
        <li>Pandas</li>
        <li>SciPy</li>
        <li>PyTorch</li>
        <li>Matplotlib</li>
        <li>Theano</li>
        <li>TensorFlow</li>
        <li>OpenCV</li>
        <li>Scikit-Learn</li>
        <li>
          Keras</li>
        <li>NumPy</li>
      </ul>
      <h3>Для визуализации</h3>
      <ul>

          <li>Matplotlib
        </li>
        <li>Seaborn</li>
        <li>Plotly</li>
        <li>Bokeh</li>
        <li>Altair</li>
        <li>HoloViews</li>
      </ul>

      <h2 id="sources">Источники</h2>
      <p><a href="https://docs.python.org/3/tutorial/appetite.html">Документация Python</a></p>
    </CoursePage>
  );
}
