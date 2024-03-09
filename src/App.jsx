import Header from "./Component/Header";
import componentImg from "../src/assets/components.png"

const CoreConcepts = (props) => {
return(
  <li>
    <img src={props.image} alt=""/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
)
}
const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
        <CoreConcepts 
        title="Components"
        description="The core UI building block"
        image={componentImg}
        />
        <CoreConcepts />
        <CoreConcepts />
        <CoreConcepts />
        </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
