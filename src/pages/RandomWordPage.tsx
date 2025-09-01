import { useEffect, useRef, useState } from "react";

/**
 * Page d'entraînement permettant de comprendre l'utilisation des "useEffect"
 *
 * Plus d'informations : https://fr.legacy.reactjs.org/docs/hooks-effect.html
 *
 * Ce type de hook peut être considéré comme un déclencheur appelant une fonction donnée suivant l’état d’un composant.
 * Le cycle de vie d’un composant est composé de trois étapes :
 * - Mount : le montage. Il intervient quand une instance du composant est créée dans le DOM.
 * - Update : la mise à jour. Cette phase est déclenchée par un changement d'état du composant.
 * - Unmount : le démontage. C’est étape a lieu quand un composant est retiré du DOM.
 *
 *
 * TODO :
 * Etudiez le code suivant et ajoutez des message utilisateurs en « alert() » à plusieurs niveaux (et uniquement en modifiant le code des fonctions anonymes passées aux « useEffect ».
 * Ajoutez l’affichage des messages suivants aux bon endroits du code :
 * - « Clic sur le bouton de génération de mot 1 »
 * - « Clic sur le bouton de génération de mot 2 »
 * - « Clic sur un des boutons de génération de mot »
 *
 * ATTENTION : Veillez à ne pas afficher les alertes au chargement de la page.
 */
const RandomWordPage = () => {
  console.log("Rendering component...");
  const [firstWord, setFirstWord] = useState<string>("");
  const [secondWord, setSecondWord] = useState<string>("");

  useEffect(() => {
    // ? mettre quelque chose ici
    // Question, quand ce déclenche la fonction associée à ce "useEffect" ?
    if (firstWord != "") {
      alert("Un premier mot a été créé !");
    }
    /*
     * Ici, après vérification du fait du changement de la variable,
     * l'effet s'exécute et une alert apparaît
     */
  }, [firstWord]);

  useEffect(() => {
    // ? mettre quelque chose ici
    // Question, quand ce déclenche la fonction associée à ce "useEffect" ?
    if (secondWord != "") {
      alert("Un second mot a été créé !");
    }
    /*
     * Ici, après vérification du fait du changement de la variable,
     * l'effet s'exécute et une alert apparaît
     */
  }, [secondWord]);

  useEffect(() => {
    // ? mettre quelque chose ici
    // Question, quand ce déclenche la fonction associée à ce "useEffect" ?
    alert("L'effet s'exécute qu'une fois !");
    /*
    * L'effet s'exécute qu'une fois, au démarage du au fait
    * de dépendance null
    */
  }, []); // tableau de dépendances à des variables d'état vide ! Qu'est ce ça fait ?

  useEffect(() => {
    // ? mettre quelque chose ici
    // Question, quand ce déclenche la fonction associée à ce "useEffect" ?
    alert("Je m'exécute à chaque rendu !");
    /*
    * S'exécute à chaque changement d'état
    */
  });

  /**
   * Fonction utilisée pour générer un mot aléatoire lors du clic sur le bouton 1
   */
  const handleClick1 = () => {
    setFirstWord(generateRandomWord());
  };

  /**
   * Fonction utilisée pour générer un mot aléatoire lors du clic sur le bouton 1
   */
  const handleClick2 = () => {
    setSecondWord(generateRandomWord);
  };

  /**
   * Génère un mot aléatoire
   */
  const generateRandomWord = (): string => {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "");
  };

  return (
    <>
      <div>
        {" "}
        {firstWord} - {secondWord}{" "}
      </div>
      <button onClick={handleClick1}>Changer premier mot</button>
      <button onClick={handleClick2}>Changer second mot</button>
    </>
  );
};

export default RandomWordPage;
