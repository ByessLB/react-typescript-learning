import { useState } from "react";

const CounterPage = () => {
  /**
   * ? Déclaration de l'état stockant la valeur du compteur
   *
   * Plus d'information sur la déclaration des useState : https://www.carlrippon.com/typed-usestate-with-typescript/
   */
  const [count, setCount] = useState<number>(0);
  /**
   * ? implémenter Fonction permettant d'incrémenter l'état du compteur.
   *
   * Utilisée en tant que "handler" d'un évènement "click".
   */
  function incrementCount() {
    setCount(count + 1);
  };


  /**
   * On renvoie le JSX correspond à ce qui est à afficher
   */
  return (
    <>
      <h2>Compteur :</h2>
      <p>
        Vous avez cliqué <strong>{count}</strong> fois
      </p>
      <button onClick={incrementCount}>Compteur ++ </button>
    </>
  );
};

export default CounterPage;
