import React, { useState, useEffect } from "react";
import "./Table.css";

function Table(props) {
  const questions = [
    {
      _id: "6067114f6f0d444dd00a4781",
      theme: "Арчаков",
      cost: "200",
      question: "Назовите полное название YouTube канала.",
      answer: "archakov blog",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4782",
      theme: "Арчаков",
      cost: "300",
      question: "Как зовут Арчакова?",
      answer: "денис",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4783",
      theme: "Арчаков",
      cost: "600",
      question: "Назовите последний проект на YouTube автора.",
      answer: "clubhouse",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4784",
      theme: "Арчаков",
      cost: "1000",
      question: "Сколько уроков в плейлисте React-Pizza?",
      answer: "10",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4785",
      theme: "Java Script",
      cost: "200",
      question: "Расшифруйте абревиатуру - DOM.",
      answer: "document object model",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4786",
      theme: "Java Script",
      cost: "300",
      question: "Этот метод массива удаляет последний элемент.",
      answer: "pop",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4787",
      theme: "Java Script",
      cost: "600",
      question:
        "Назовите последовательность выполнения:\n" +
        "\n" +
        "console.log(1),\n" +
        "setTimeout(() => console.log(2), 5000)\n" +
        "setTimeout(() => console.log(3))\n" +
        "Promise.resolve(4).then(console.log)\n" +
        "console.log(5)\n" +
        "    ",
      answer: "15432",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4788",
      theme: "Java Script",
      cost: "1000",
      question:
        "Что из этого false?\n" +
        "\n" +
        "1 - new String(‘’) == ‘’\n" +
        "2 - new String(‘’) instanceof Object\n" +
        "3 - String(‘’) instanceof String\n" +
        "4 - new String(‘’) === \n" +
        "    ",
      answer: "3",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a4789",
      theme: "История IT",
      cost: "200",
      question: "Первый компьютерный баг это - ...",
      answer: "жук",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a478a",
      theme: "История IT",
      cost: "300",
      question: "Назовите год основания Elbroos Coding Bootcamp.",
      answer: "2018",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a478b",
      theme: "История IT",
      cost: "600",
      question: "В этом году компания Apple представила первый MacBook.",
      answer: "2006",
      __v: 0,
    },
    {
      _id: "6067114f6f0d444dd00a478c",
      theme: "История IT",
      cost: "1000",
      question:
        "Расположите языки в порядке появления:\n" +
        "1 - Java\n" +
        "2 - C#\n" +
        "3 - JavaScript\n" +
        "4 - C++\n" +
        "    ",
      answer: "4132",
      __v: 0,
    },
  ];

  const questionsTheme1 = [
    {
      _id: "6066ddb8707747e0e63e78c7",
      theme: "Арчаков",
      cost: "200",
      question: "Назовите полное название YouTube канала.",
      answer: "archakov blog",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78c8",
      theme: "Арчаков",
      cost: "300",
      question: "Как зовут Арчакова?",
      answer: "денис",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78c9",
      theme: "Арчаков",
      cost: "600",
      question: "Назовите последний проект на YouTube автора.",
      answer: "clubhouse",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78ca",
      theme: "Арчаков",
      cost: "1000",
      question: "Сколько уроков в плейлисте React-Pizza?",
      answer: "10",
      __v: 0,
    },
  ];

  const questionsTheme2 = [
    {
      _id: "6066ddb8707747e0e63e78cb",
      theme: "Java Script",
      cost: "200",
      question: "Расшифруйте абревиатуру - DOM.",
      answer: "document object model",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78cc",
      theme: "Java Script",
      cost: "300",
      question: "Этот метод массива удаляет последний элемент.",
      answer: "pop",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78cd",
      theme: "Java Script",
      cost: "600",
      question:
        "Назовите последовательность выполнения:\n" +
        "\n" +
        "console.log(1),\n" +
        "setTimeout(() => console.log(2), 5000)\n" +
        "setTimeout(() => console.log(3))\n" +
        "Promise.resolve(4).then(console.log)\n" +
        "console.log(5)\n" +
        "    ",
      answer: "15432",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78ce",
      theme: "Java Script",
      cost: "1000",
      question:
        "Что из этого false?\n" +
        "\n" +
        "1 - new String(‘’) == ‘’\n" +
        "2 - new String(‘’) instanceof Object\n" +
        "3 - String(‘’) instanceof String\n" +
        "4 - new String(‘’) === \n" +
        "    ",
      answer: "3",
      __v: 0,
    },
  ];

  const questionsTheme3 = [
    {
      _id: "6066ddb8707747e0e63e78cf",
      theme: "История IT",
      cost: "200",
      question: "Первый компьютерный баг это - ...",
      answer: "жук",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78d0",
      theme: "История IT",
      cost: "300",
      question: "Назовите год основания Elbroos Coding Bootcamp.",
      answer: "2018",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78d1",
      theme: "История IT",
      cost: "600",
      question: "В этом году компания Apple представила первый MacBook.",
      answer: "2006",
      __v: 0,
    },
    {
      _id: "6066ddb8707747e0e63e78d2",
      theme: "История IT",
      cost: "1000",
      question:
        "Расположите языки в порядке появления:\n" +
        "1 - Java\n" +
        "2 - C#\n" +
        "3 - JavaScript\n" +
        "4 - C++\n" +
        "    ",
      answer: "4132",
      __v: 0,
    },
  ];
  const [modal, setModal] = useState({ open: false, id: "" });
  const [questionss, setQuestions] = useState({});

  useEffect(() => {
    fetch("/questions")
      .then((res) => res.json())
      .then((data) => {
        let questionsTheme1 = data.question.filter(
          (el) => el.theme === "Арчаков"
        );
        let questionsTheme2 = data.question.filter(
          (el) => el.theme === "Java Script"
        );
        let questionsTheme3 = data.question.filter(
          (el) => el.theme === "История IT"
        );
        let full = [questionsTheme1, questionsTheme2, questionsTheme3];
        setQuestions(full);
      });
  }, []);

  const resetModal = (e) => {
    e.preventDefault();
    console.log(e.target);
    let { answer, id } = e.target;
    fetch("/questions", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        answer: answer.value,
        id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setModal({ open: false });
        let newQue = [...questionss]
        
      });
  };

  const modalHandler = async (e) => {
    let id = e.target.id;
    let response = await fetch(`/questions/${id}`);
    let result = await response.json();
    let question = result.question;

    setModal({ open: true, question });
  };
  return (
    <>
      <table
        className="table-mygame table table-dark"
        style={{ marginTop: "50px", fontSize: "3rem" }}
      >
        <tbody>
          <tr className="table-secondary">
            <td
              td
              className="table-dark"
              style={{ padding: "50px", border: "10px solid" }}
            >
              Арчаков
            </td>
            {questionss[0]?.map((el) => (
              <td
                key={el._id}
                id={el._id}
                onClick={modalHandler}
                className="tab-cost table-dark"
              >
                {el.cost}
              </td>
            ))}
          </tr>
          <tr className="table-secondary">
            <td
              td
              className="table-dark"
              style={{ padding: "50px", border: "10px solid" }}
            >
              Java Script
            </td>
            {questionss[1]?.map((el) => (
              <td
                key={el._id}
                id={el._id}
                onClick={modalHandler}
                className="tab-cost table-dark"
              >
                {el.cost}
              </td>
            ))}
          </tr>
          <tr className="table-secondary">
            <td td className="table-dark" style={{ padding: "50px" }}>
              История IT
            </td>
            {questionss[2]?.map((el) => (
              <td
                key={el._id}
                id={el._id}
                onClick={modalHandler}
                className="tab-cost table-dark"
              >
                {el.cost}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {modal.open && (
        <div className="test">
          <div className="modal-content">
            {modal.question.question}
            <form
              onSubmit={resetModal}
              id={modal.question._id}
              action="/questions"
              method="POST"
              className="modal-form"
            >
              <input type="text" name="answer" placeholder="Введите ответ" />
              <button className="btn btn-primary">
                Ответить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Table;
