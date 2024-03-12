import { useState } from "react";
import Header from "./Component/Header";
import { CORE_CONCEPTS } from "./Component/data";
import CoreConcepts from "./Component/CoreConcept";
import TabButton from "./Component/TabButton";
import { EXAMPLES } from "./Component/data";
const App = () => {
const [isSelectedTopic, setSelectedTopic] = useState();


  const handleClick = (selectedBtn) => {
    setSelectedTopic(selectedBtn)
}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {
          CORE_CONCEPTS.map( (conceptItems) => (
              <CoreConcepts key={conceptItems.title} {...conceptItems} />
            ))}
       
        
        </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={isSelectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={isSelectedTopic === 'jsx'}  onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={isSelectedTopic === 'props'}  onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={isSelectedTopic === 'state'}  onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!isSelectedTopic && <p>Please select a topic.</p>}
          { isSelectedTopic && <div className="tab">
          <h3>{EXAMPLES[isSelectedTopic].title}</h3>
          <p>{EXAMPLES[isSelectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[isSelectedTopic].code}</code>
          </pre>
         </div>}
         

        </section>
      </main>
    </div>
  );
}

export default App;
