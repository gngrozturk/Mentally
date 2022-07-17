import React, { useState } from "react";
import styles from "../styles/checkList.module.scss";

function Checklist({ questions }) {
  const [checked, setChecked] = useState([]);
  const checkList = questions;

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <div className={styles.container}>
      {checkList.map((item, index) => (
        <div key={index} className={styles.listItem}>
          <label for="question">{item}</label>
          <input value={item} type="checkbox" onChange={handleCheck} />
        </div>
      ))}
      <p className={styles.counter}>
        {questions.length} durumdan {checked.length} tanesi işaretlendi.
      </p>
    </div>
  );
}

export default Checklist;
