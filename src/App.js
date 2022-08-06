import { Trip } from "./components/Trip";
import {Places} from "./data/Places";
import Layout from './layouts/Layout';
import './scss/main.scss';

function App() {

  return (
    <Layout>
      {
        Places.map(place => (
          <Trip
            key={place.id}
            {...place}
          />
        ))
      }
    </Layout>
  );
}

export default App;
