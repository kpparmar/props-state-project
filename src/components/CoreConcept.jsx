export default function CoreConcept({Image, Name, Description}) {
    return (
      <li>
        <img src={Image} alt="" />
        <h3>{Name}</h3>
        <p>{Description}</p>
      </li>
    );
  }