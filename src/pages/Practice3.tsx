import CoursePage from "./CoursePage";

const sections = [
  { id: "class", title: "Задание 1. Минимальный класс и создание объектов" },
  { id: "attributes", title: "Задание 2. Конструктор и атрибуты" },
  { id: "dynamic", title: "Задание 3. Динамические атрибуты и ошибки" },
  { id: "methods", title: "Задание 4. Методы класса" },
];

export default function Practice3() {
  return (
    <CoursePage
      title="Практическая работа 3. Классы, объекты, конструкторы и методы"
      sections={sections}
      previous="lecture-3"
      next="test"
      goal={
        <>
          Научиться создавать классы, настраивать объекты в <code>__init__</code>, обращаться
          к атрибутам через <code>self</code> и определять поведение объекта с помощью методов.
        </>
      }
    >
      <h2 id="class">{sections[0].title}</h2>
      <p>Создайте файл <code>task1_oop.py</code>.</p>
      <ol>
        <li>Определите класс <code>Car</code>. В его теле пока напишите только <code>pass</code>.</li>
        <li>Создайте три объекта класса и сохраните их в переменных <code>lada</code>, <code>bmw</code> и <code>kia</code>.</li>
        <li>Выведите объекты. Вы увидите техническое представление наподобие <code>&lt;__main__.Car object at 0x...&gt;</code>.</li>
      </ol>

      <h2 id="attributes">{sections[1].title}</h2>
      <p>Создайте файл <code>task2_oop.py</code> или дополните предыдущий.</p>
      <ol>
        <li>
          Добавьте в класс <code>Car</code> метод <code>__init__</code> с параметрами{" "}
          <code>self</code>, <code>brand</code>, <code>model</code> и <code>year</code>.
          Сохраните переданные данные в <code>self.brand</code>, <code>self.model</code> и{" "}
          <code>self.year</code>.
        </li>
        <li>
          Создайте два объекта и выведите марку первого и год выпуска второго.
          <pre><code>{`lada = Car("ВАЗ", "2107", 2005)
tesla = Car("Tesla", "Model 3", 2022)

print(lada.brand)  # ВАЗ
print(tesla.year)  # 2022`}</code></pre>
        </li>
        <li>Установите <code>lada.year</code> в <code>2010</code> и выведите новое значение.</li>
      </ol>

      <h2 id="dynamic">{sections[2].title}</h2>
      <p>Создайте файл <code>task3_oop.py</code> и перенесите в него класс <code>Car</code> из задания 2.</p>
      <ol>
        <li>Создайте объект <code>niva = Car("ВАЗ", "2121", 1995)</code>.</li>
        <li>
          Попробуйте вывести <code>niva.color</code> до присваивания. Запустите программу и
          сохраните текст ошибки <code>AttributeError</code>.
        </li>
        <li>
          Закомментируйте строку с ошибкой. Добавьте <code>niva.color = "Зеленый"</code> и
          выведите значение атрибута.
        </li>
        <li>Объясните, почему атрибуты, которые нужны каждому объекту класса, удобнее задать в <code>__init__</code>.</li>
      </ol>

      <h2 id="methods">{sections[3].title}</h2>
      <p>Создайте файл <code>task4_oop.py</code>.</p>
      <ol>
        <li>
          Определите класс <code>Student</code>. Метод <code>__init__</code> должен принимать
          имя <code>name</code> и номер группы <code>group</code> и сохранять их в{" "}
          <code>self.name</code> и <code>self.group</code>.
        </li>
        <li>
          Добавьте метод <code>introduce(self)</code>, который выводит фразу «Привет, меня зовут
          [имя], я учусь в группе [группа]».
        </li>
        <li>Создайте объект <code>ivan = Student("Иван", "БИ-31")</code> и вызовите <code>ivan.introduce()</code>.</li>
        <li>Добавьте метод <code>change_group(self, new_group)</code>, который присваивает <code>new_group</code> атрибуту <code>self.group</code>.</li>
        <li>Вызовите <code>ivan.change_group("БИ-32")</code> и снова представьте студента. Проверьте, что программа выводит новую группу.</li>
      </ol>
    </CoursePage>
  );
}
