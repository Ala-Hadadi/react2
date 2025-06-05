import Alert from "./components/Alert";
import Card from "./components/CardLayout";
import RenderList from "./components/RenderList";
import ShowPlanets from "./components/ShowPlanets";
import CustomerInformation from "./components/CustomerInformation";

const data = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/DylanYoungKilkenny140719v2_%2850_of_52%29_%2852246124397%29_%28cropped%29.jpg/800px-DylanYoungKilkenny140719v2_%2850_of_52%29_%2852246124397%29_%28cropped%29.jpg",
  cardTitle: "Bob Dylan",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const customer = {
  first_name: "Bob",
  last_name: "Dylan",
};

function App() {
  return (
    <>
      {/* <Alert text="OMG! Something really bad has happened!" /> */}

      {/* <Card
        image={data.image}
        cardTitle={data.cardTitle}
        cardDescription={data.cardDescription}
        button={data.button}
      /> */}

      {/* <RenderList /> */}

      {/* <ShowPlanets planets={planets} /> */}

      <CustomerInformation customer={customer} />
    </>
  );
}
export default App;
