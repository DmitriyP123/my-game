const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/reactMyGame', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const Question = mongoose.model('Question', {
  theme: String,
  cost: String,
  question: String,
  answer: String
});

async function seeds() {
  await Question.create({
    theme: 'Арчаков',
    cost: '200',
    question: 'Назовите полное название YouTube канала.',
    answer: 'archakov blog'
  })

  await Question.create({
    theme: 'Арчаков',
    cost: '300',
    question: 'Как зовут Арчакова?',
    answer: 'денис'
  })

  await Question.create({
    theme: 'Арчаков',
    cost: '600',
    question: 'Назовите последний проект на YouTube автора.',
    answer: 'clubhouse'
  })

  await Question.create({
    theme: 'Арчаков',
    cost: '1000',
    question: 'Сколько уроков в плейлисте React-Pizza?',
    answer: '10'
  })




  await Question.create({
    theme: 'Java Script',
    cost: '200',
    question: 'Расшифруйте абревиатуру - DOM.',
    answer: 'document object model'
  })

  await Question.create({
    theme: 'Java Script',
    cost: '300',
    question: 'Этот метод массива удаляет последний элемент.',
    answer: 'pop'
  })

  await Question.create({
    theme: 'Java Script',
    cost: '600',
    question: `Назовите последовательность выполнения:

console.log(1),
setTimeout(() => console.log(2), 5000)
setTimeout(() => console.log(3))
Promise.resolve(4).then(console.log)
console.log(5)
    `,
    answer: '15432'
  })

  await Question.create({
    theme: 'Java Script',
    cost: '1000',
    question: `Что из этого false?

1 - new String(‘’) == ‘’
2 - new String(‘’) instanceof Object
3 - String(‘’) instanceof String
4 - new String(‘’) === 
    `,
    answer: '3'
  })




  await Question.create({
    theme: 'История IT',
    cost: '200',
    question: 'Первый компьютерный баг это - ...',
    answer: 'жук'
  })

  await Question.create({
    theme: 'История IT',
    cost: '300',
    question: 'Назовите год основания Elbroos Coding Bootcamp.',
    answer: '2018'
  })

  await Question.create({
    theme: 'История IT',
    cost: '600',
    question: 'В этом году компания Apple представила первый MacBook.',
    answer: '2006'
  })

  await Question.create({
    theme: 'История IT',
    cost: '1000',
    question: `Расположите языки в порядке появления:
1 - Java
2 - C#
3 - JavaScript
4 - C++
    `,
    answer: '4132'
  })

  mongoose.connection.close()
}

// seeds()

async function getArrQuest() {
  const questionsTheme1 = await Question.find({theme: 'Арчаков'})
  const questionsTheme2 = await Question.find({theme: 'Java Script'})
  const questionsTheme3 = await Question.find({theme: 'История IT'})
  
  mongoose.connection.close()
  
  console.log(questionsTheme1);
  console.log(questionsTheme2);
  console.log(questionsTheme3);

}

getArrQuest()

module.exports = Question
