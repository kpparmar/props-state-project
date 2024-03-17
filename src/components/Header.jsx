import logo from "../assets/react-core-concepts.png";

const arrayItem = ["Core", "Fundamentals", "Unique", "Crutial", "Interactive"];

function randomChange(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
    return (
      <header>
        <img src={logo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {arrayItem[randomChange(5)]} React JS is a JavaScript library for building user interfaces, <br /> emphasizing component-based architecture and declarative programming.
        </p>
      </header>
    );
  }