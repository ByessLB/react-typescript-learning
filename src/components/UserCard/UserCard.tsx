// TODO import du module CSS propre à ce composant
// Plus d'informations sur le CSS modulaire : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from "./UserCard.module.css"; // Import css modules stylesheet as styles

// TODO ajouter toutes les interface nécessaire à la représentation des données utilisateur de la web API suivante : https://jsonplaceholder.typicode.com/users
// Plus d'information sur comment faire des objets imbriqués en Typescript : https://www.geeksforgeeks.org/how-to-define-interfaces-for-nested-objects-in-typescript/
export interface Coordinates {
  lat: string;
  lng: string;
}

// TODO ajouter les interfaces manquantes
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Coordinates;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  // TODO compléter cette interface
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className={styles.userCard}>
      <h2>
        {user.name} ({user.username})
      </h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Téléphone:</strong> {user.phone}
      </p>
      <p>
        <strong>Site web:</strong>{" "}
        <a href={`https://${user.website}`} target="_blank">
          {user.website}
        </a>
      </p>

      <h3>Adresse</h3>
      <p>
        {user.address.suite}, {user.address.street}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
      <p>
        Geo: {user.address.geo.lat}, {user.address.geo.lng}
      </p>

      <h3>Entreprise</h3>
      <p>
        <strong>{user.company.name}</strong>
      </p>
      <p>{user.company.catchPhrase}</p>
      <p>{user.company.bs}</p>
    </div>
  );
};
