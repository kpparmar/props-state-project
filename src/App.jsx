import { CORE_CONCEPT } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabContent from "./components/TabContent.jsx";
import { useState } from "react";
import { EXAMPLE } from "./example-data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(click) {
    setSelectedTopic(click);
    console.log(selectedTopic);
  }

  let tabContent = "Please select any topic";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLE[selectedTopic].Name}</h3>
        <p>{EXAMPLE[selectedTopic].Description}</p>
        <pre>
          <code>{EXAMPLE[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            { CORE_CONCEPT.map( (conceptItem) => (
              <CoreConcept key={conceptItem.Name} {...conceptItem} />
            )) }

            {/* <CoreConcept {...CORE_CONCEPT[0]} />
            <CoreConcept {...CORE_CONCEPT[1]} />
            <CoreConcept {...CORE_CONCEPT[2]} />
            <CoreConcept {...CORE_CONCEPT[3]} /> */}
          </ul>
        </div>
        <div id="examples">
          <h2>Example</h2>
          <menu>
            <TabContent isSelected={selectedTopic === 'components'} onSubmit={() => handleClick("components")}>
              Components
            </TabContent>
            <TabContent isSelected={selectedTopic === 'props'} onSubmit={() => handleClick("props")}>Props</TabContent>
            <TabContent isSelected={selectedTopic === 'state'} onSubmit={() => handleClick("state")}>State</TabContent>
            <TabContent isSelected={selectedTopic === 'routes'} onSubmit={() => handleClick("routes")}>
              Routes
            </TabContent>
          </menu>
        </div>
        {tabContent}
      </main>
    </>
  );
}

export default App;
