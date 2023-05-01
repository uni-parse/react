import { people } from './_scientistsData.js';
import { getImageUrl } from './_utils.js';

export default function List() {

  const chemist = people.filter(
    person => person.profession == 'chemist'
  )
  const others = people.filter(
    person => person.profession != 'chemist'
  )
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{li(chemist)}</ul>
      <h2>Other</h2>
      <ul>{li(others)}</ul>
    </article>
  );
}

function li(people){
  return people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )
}