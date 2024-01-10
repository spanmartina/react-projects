import { useState, useContext, useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import AdopterPetContext from "./AdoptedPetContext";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdopterPetContext);
  const [isPending, startTransition] = useTransition();

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  //Previous code using the useEffect hook
  // const [location, setLocation] = useState("");
  // const [breed, setBreed] = useState("");
  // const [pets, setPets] = useState([]);
  // useEffect(() => {
  //   requestPets();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // async function requestPets() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await res.json();
  //   setPets(json.pets);
  // }

  return (
    <div className="search-params">
      {/* Uncontrolled Forms */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          startTransition(() => {
            setRequestParams(obj);
          });
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">Location</label>
        <input id="location" name="location" placeholder="Location" />
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed" disabled={breeds.length === 0}>
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        {isPending ? (
          <div className="mini loading-pane">
            <h2 className="loader">@</h2>
          </div>
        ) : (
          <button>Submit</button>
        )}
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
