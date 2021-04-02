import React from 'react';
import './Table.css'

function Table(props) {

  const questions = [
    {
      _id: '6066ddb8707747e0e63e78c7',
      theme: 'Арчаков',
      cost: '200',
      question: 'Назовите полное название YouTube канала.',
      answer: 'archakov blog',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78c8',
      theme: 'Арчаков',
      cost: '300',
      question: 'Как зовут Арчакова?',
      answer: 'денис',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78c9',
      theme: 'Арчаков',
      cost: '600',
      question: 'Назовите последний проект на YouTube автора.',
      answer: 'clubhouse',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78ca',
      theme: 'Арчаков',
      cost: '1000',
      question: 'Сколько уроков в плейлисте React-Pizza?',
      answer: '10',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78cb',
      theme: 'Java Script',
      cost: '200',
      question: 'Расшифруйте абревиатуру - DOM.',
      answer: 'document object model',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78cc',
      theme: 'Java Script',
      cost: '300',
      question: 'Этот метод массива удаляет последний элемент.',
      answer: 'pop',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78cd',
      theme: 'Java Script',
      cost: '600',
      question: 'Назовите последовательность выполнения:\n' +
        '\n' +
        'console.log(1),\n' +
        'setTimeout(() => console.log(2), 5000)\n' +
        'setTimeout(() => console.log(3))\n' +
        'Promise.resolve(4).then(console.log)\n' +
        'console.log(5)\n' +
        '    ',
      answer: '15432',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78ce',
      theme: 'Java Script',
      cost: '1000',
      question: 'Что из этого false?\n' +
        '\n' +
        '1 - new String(‘’) == ‘’\n' +
        '2 - new String(‘’) instanceof Object\n' +
        '3 - String(‘’) instanceof String\n' +
        '4 - new String(‘’) === \n' +
        '    ',
      answer: '3',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78cf',
      theme: 'История IT',
      cost: '200',
      question: 'Первый компьютерный баг это - ...',
      answer: 'жук',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78d0',
      theme: 'История IT',
      cost: '300',
      question: 'Назовите год основания Elbroos Coding Bootcamp.',
      answer: '2018',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78d1',
      theme: 'История IT',
      cost: '600',
      question: 'В этом году компания Apple представила первый MacBook.',
      answer: '2006',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78d2',
      theme: 'История IT',
      cost: '1000',
      question: 'Расположите языки в порядке появления:\n' +
        '1 - Java\n' +
        '2 - C#\n' +
        '3 - JavaScript\n' +
        '4 - C++\n' +
        '    ',
      answer: '4132',
      __v: 0
    }
  ]

  const questionsTheme1 = [
    {
      _id: '6066ddb8707747e0e63e78c7',
      theme: 'Арчаков',
      cost: '200',
      question: 'Назовите полное название YouTube канала.',
      answer: 'archakov blog',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78c8',
      theme: 'Арчаков',
      cost: '300',
      question: 'Как зовут Арчакова?',
      answer: 'денис',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78c9',
      theme: 'Арчаков',
      cost: '600',
      question: 'Назовите последний проект на YouTube автора.',
      answer: 'clubhouse',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78ca',
      theme: 'Арчаков',
      cost: '1000',
      question: 'Сколько уроков в плейлисте React-Pizza?',
      answer: '10',
      __v: 0
    }
  ]

  const questionsTheme2 = [
    {
      _id: '6066ddb8707747e0e63e78cb',
      theme: 'Java Script',
      cost: '200',
      question: 'Расшифруйте абревиатуру - DOM.',
      answer: 'document object model',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78cc',
      theme: 'Java Script',
      cost: '300',
      question: 'Этот метод массива удаляет последний элемент.',
      answer: 'pop',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78cd',
      theme: 'Java Script',
      cost: '600',
      question: 'Назовите последовательность выполнения:\n' +
        '\n' +
        'console.log(1),\n' +
        'setTimeout(() => console.log(2), 5000)\n' +
        'setTimeout(() => console.log(3))\n' +
        'Promise.resolve(4).then(console.log)\n' +
        'console.log(5)\n' +
        '    ',
      answer: '15432',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78ce',
      theme: 'Java Script',
      cost: '1000',
      question: 'Что из этого false?\n' +
        '\n' +
        '1 - new String(‘’) == ‘’\n' +
        '2 - new String(‘’) instanceof Object\n' +
        '3 - String(‘’) instanceof String\n' +
        '4 - new String(‘’) === \n' +
        '    ',
      answer: '3',
      __v: 0
    }
  ]

  const questionsTheme3 = [
    {
      _id: '6066ddb8707747e0e63e78cf',
      theme: 'История IT',
      cost: '200',
      question: 'Первый компьютерный баг это - ...',
      answer: 'жук',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78d0',
      theme: 'История IT',
      cost: '300',
      question: 'Назовите год основания Elbroos Coding Bootcamp.',
      answer: '2018',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78d1',
      theme: 'История IT',
      cost: '600',
      question: 'В этом году компания Apple представила первый MacBook.',
      answer: '2006',
      __v: 0
    },
    {
      _id: '6066ddb8707747e0e63e78d2',
      theme: 'История IT',
      cost: '1000',
      question: 'Расположите языки в порядке появления:\n' +
        '1 - Java\n' +
        '2 - C#\n' +
        '3 - JavaScript\n' +
        '4 - C++\n' +
        '    ',
      answer: '4132',
      __v: 0
    }
  ]

  return (

    <table className="table-mygame table table-dark" style={{marginTop: '50px', fontSize: '3rem'}}>
      <tbody>

        <tr className="table-secondary">
          <td td className="table-dark" style={{padding: '50px', border: '10px solid'}}>Арчаков</td>
          {questionsTheme1.map(el => (<td key={el._id} id={el._id} className="tab-cost table-dark">{el.cost}</td>))}
        </tr>
        <tr className="table-secondary">
          <td td className="table-dark" style={{padding: '50px', border: '10px solid'}}>Java Script</td>
          {questionsTheme2.map(el => (<td key={el._id} id={el._id} className="tab-cost table-dark">{el.cost}</td>))}
        </tr>
        <tr className="table-secondary">
          <td td className="table-dark" style={{padding: '50px', border: '10px solid'}}>История IT</td>
          {questionsTheme3.map(el => (<td key={el._id} id={el._id} className="tab-cost table-dark">{el.cost}</td>))}
        </tr>
      </tbody>
    </table >
  );
}

export default Table;
