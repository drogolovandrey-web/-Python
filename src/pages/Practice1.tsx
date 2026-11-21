import CoursePage from "./CoursePage";

const sections = [
  { id: "install", title: "Установка" },
  { id: "interpreter", title: "Запуск интерпретатора" },
  { id: "script", title: "Создание файла программы" },
  { id: "result", title: "Ожидаемый результат" },
];

export default function Practice1() {
  return (
    <CoursePage
      title="Практическая работа 1. Установка и первая программа на Windows"
      sections={sections}
      previous="lecture-1"
      next="lecture-2"
      goal="Установить Python на Windows, запустить интерпретатор и выполнить первый скрипт."
    >
      <h2 id="install">Установка</h2>
      <p>
        Откройте <a href="https://www.python.org/downloads/">страницу загрузки Python</a> и
        скачайте Python Install Manager для Windows.
      </p>
      <figure>
        <a href="images/practice-1/image1.png">
          <img
            src="images/practice-1/image1.png"
            alt="Кнопка Download Python install manager на сайте Python"
            width="838"
            height="508"
          />
        </a>
        <figcaption>Рисунок 1. Загрузка установщика Python для Windows.</figcaption>
      </figure>
      <p>
        Откройте скачанный файл и нажмите «Установить Python». После установки откройте новое окно
        терминала и проверьте, что команда выводит версию Python.
      </p>
      <figure>
        <a href="images/practice-1/image2.png">
          <img
            src="images/practice-1/image2.png"
            alt="Окно установки Python Install Manager в Windows"
            width="653"
            height="548"
          />
        </a>
        <figcaption>Рисунок 2. Окно установки Python Install Manager.</figcaption>
      </figure>
      <pre><code>python --version</code></pre>
      <p>
        Если команда не запускается, проверьте установку по{" "}
        <a href="https://docs.python.org/3/using/windows.html">руководству Python для Windows</a>.
      </p>

      <h2 id="interpreter">Запуск интерпретатора</h2>
      <p>
        Введите в терминале <code>python</code>. Когда появится приглашение{" "}
        <code>&gt;&gt;&gt;</code>, введите команду ниже. Функция <code>print()</code> выведет{" "}
        <code>hello world</code>. Чтобы вернуться в терминал, введите <code>exit()</code>.
      </p>
      <pre><code>{'>>> print("hello world")\nhello world\n>>> exit()'}</code></pre>

      <h2 id="script">Создание файла программы</h2>
      <p>
        Создайте папку для скриптов, например <code>C:\python</code>. Сохраните в ней текстовый
        файл <code>hello.py</code>. Проверьте, что редактор сохранил расширение{" "}
        <code>.py</code>.
      </p>
      <figure>
        <a href="images/practice-1/image3.png">
          <img
            src="images/practice-1/image3.png"
            alt="Файл hello.py в папке C:\python в Проводнике Windows"
            width="724"
            height="378"
          />
        </a>
        <figcaption>Рисунок 3. Файл hello.py в папке для скриптов.</figcaption>
      </figure>
      <p>
        Введите следующий код или <a href="downloads/hello.py" download>скачайте hello.py</a>.
        Первая строка сохраняет введённое имя в переменную <code>name</code>. Вторая выводит
        приветствие.
      </p>
      <pre><code>{'name = input("Введите имя: ")\nprint("Привет,", name)'}</code></pre>
      <p>Перейдите в терминале в папку со скриптом и запустите его.</p>
      <pre><code>{"cd C:\\python\npython hello.py"}</code></pre>
      <p>
        Если доступна команда <code>py</code>, можно выполнить <code>py hello.py</code>. Можно
        также указать полный путь к <code>python.exe</code> из вашей установки и передать ему
        файл <code>hello.py</code>.
      </p>

      <h2 id="result">Ожидаемый результат</h2>
      <p>Программа спрашивает имя, а после нажатия Enter выводит приветствие.</p>
      <pre><samp>{"Введите имя: Tom\nПривет, Tom"}</samp></pre>
    </CoursePage>
  );
}
