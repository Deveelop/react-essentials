import { useState } from "react";
import TabButton from "./TabButton"
import { EXAMPLES } from "./data"
import Section from "./Section"
import Tabs from "./Tabs";

const Examples = () => {
    const [isSelectedTopic, setSelectedTopic] = useState();

  const handleClick = (selectedBtn) => {
    setSelectedTopic(selectedBtn)
}

let tabContent = <p>Please select a topic.</p>

if (isSelectedTopic){
  tabContent = <div className="tab">
  <h3>{EXAMPLES[isSelectedTopic].title}</h3>
  <p>{EXAMPLES[isSelectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[isSelectedTopic].code}</code>
  </pre>
 </div>
}

  return (
    <Section title='Examples' id="examples">
         <Tabs buttons={<>
          <TabButton isSelected={isSelectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={isSelectedTopic === 'jsx'}  onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={isSelectedTopic === 'props'}  onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={isSelectedTopic === 'state'}  onClick={() => handleClick('state')}>State</TabButton>
         </>}>{tabContent}</Tabs>
          
         

        </Section>
  )
}

export default Examples
