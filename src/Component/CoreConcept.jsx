import { CORE_CONCEPTS } from "./data"
import CoreConcepts from "./CoreConcepts"
import Section from "./Section"
const CoreConcept = () => {
  return (
    <Section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {
          CORE_CONCEPTS.map( (conceptItems) => (
              <CoreConcepts key={conceptItems.title} {...conceptItems} />
            ))}
       
        
        </ul>

        </Section>
  )
}

export default CoreConcept
