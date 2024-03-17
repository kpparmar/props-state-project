export const EXAMPLE = {
  components: {
    Name: "Component",
    Description:
      "Component is a reusable, self-contained unit of UI that encapsulates a specific piece of functionality and can render dynamic content based on input data.",
    code: `const MyComponent = () => <div>Hello, World!</div>;`,
  },
  props: {
    Name: "Props",
    Description: "Props (short for 'properties') in React are used for passing data from a parent component to a child component, enabling customization and reusability of components.",
    code: `const MyComponent = (props) => <div>{props.text}</div>; `,
  },
  state: {
    Name: "State",
    Description: "State in React is a built-in feature used to manage and maintain the internal data of a component, allowing it to dynamically update and re-render in response to user interactions or other changes in the application.",
    code: `const [state, setState] = useState(initialState); `,
  },
  routes: {
    Name: "Routes",
    Description: "React Routes is a library used for managing and defining navigation paths within a React application, enabling multi-page functionality and rendering specific components based on URL.",
    code: `<Router><Route path="/" component={Home} /></Router>`,
  },
};
