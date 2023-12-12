import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  //if there are no result yet return [], else return results
  return [results?.data?.breeds ?? [], results.status];

  //Replaced with fetchBreedList.jsx (using react-query)----------------

  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState("unloaded");

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatus("loading");

  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const json = await res.json();
  //     localCache[animal] = json.breeds || [];
  //     setBreedList(localCache[animal]);
  //     setStatus("loaded");
  //   }
  // }, [animal]);
  // return [breedList, status];
}
