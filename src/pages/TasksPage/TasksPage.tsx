import { useRef, useState } from "react";

import styles from "./TaskPage.module.css";

const TasksPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [listTasks, setListTasks] = useState<string[]>([]);

  function handleAddClick() {
    if (inputRef.current?.value) {
      // console.log( "Contenu de l'input :" + inputRef.current.value );
      setListTasks([...listTasks, inputRef.current.value]);
    }
  }

  function handleClearClick() {
    setListTasks([]);
  }

  return (
    <>
      <h2>Liste de tâches :</h2>
      <input name="label" ref={inputRef} />
      <button onClick={handleAddClick}>Ajouter</button>
      <button onClick={handleClearClick}>Tout supprimer</button>
      <ul className={styles.task}>
        {listTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default TasksPage;
