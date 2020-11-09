import React from 'react';
import classes from './FinishedQuiz.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
  console.log(props.quiz)
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
      <div className={classes.FinishedQuiz}>
        <ul>
          {
            props.quiz.map((quizItem, index) => {
              const cls = classes[props.results[quizItem.id]]
              const icons = props.results[quizItem.id] === 'error' ? faTimes : faCheck

              return (
                  <li key={index}>
                    <strong>{index + 1}</strong>.&nbsp;
                    {quizItem.question}
                    <FontAwesomeIcon icon={icons} className={cls} />
                  </li>
              )
            })
          }
        </ul>

        <p>Правильно {successCount} из {props.quiz.length}</p>

        <div>
          <Button
              onClick={props.onRetry}
              type="primary"
          >Повторить</Button>
          <Button
              type="success"
          >Перейти к списку тестов</Button>
        </div>
      </div>
  );
};

export default FinishedQuiz;
