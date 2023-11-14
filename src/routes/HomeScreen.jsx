import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";

export const HomeScreen = () => {

    const legendarios = [150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649.]

  const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";

  const pokemonRandom = Math.floor(Math.random() * (1018 - 1)) + 1;

  const [namePokemon, setNamePokemon] = useState(apiPokemon + pokemonRandom);

  const { state } = useFetch(namePokemon);

  const { formState, pokemonName, onInputChange } = useForm({
    pokemonName: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(formState.pokemonName == "" || formState.pokemonName.includes(" ")){
      return
    }
    let pokemon = apiPokemon + formState.pokemonName.toLowerCase().trim();
    //console.log("nuevo pokemon: " + pokemon);
    setNamePokemon(pokemon);
  };

  const alfanumerico = (event) => {
    if (!((event.which >= 97 && event.which <= 122) || (event.which >= 65 && event.which <= 90) || (event.which >= 48 && event.which <= 57) || event.which == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.which == 46 || event.which == 45 || event.which == 95 || event.which == 32)) {
      if(!event.which == 13) event.preventDefault();
    }
  };

  return (
    <>
      <div className="container bg-dark-subtle text-emphasis-dark mt-3">
        <div className="container d-flex justify-content-center">
          <h3 className="mt-3">Pokedex</h3>
        </div>
        <div className="container d-flex justify-content-center">
          <p>The most complete Pokedex</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <h3 className="d-flex justify-content-center">Search Pokemon</h3>

            <form onSubmit={onSubmit} className="row g-3 mt-2">
              <div className="col-auto">
                <label htmlFor="pokemon" className="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pokemon"
                  name="pokemonName"
                  placeholder={
                    state["data"]
                      ? state["data"].name.charAt(0).toUpperCase() +
                        state["data"].name.slice(1)
                      : "Name"
                  }
                  value={pokemonName}
                  onChange={onInputChange}
                  onKeyPress={(event) => alfanumerico(event)}
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {state["isLoading"] ? (
            <h3>Loading...</h3>
          ) : state["errors"] ? (
            <p>Pokemon Not Found. {state["errors"].error}</p>
          ) : (
            <>
              <div className={legendarios.includes(state['data'].id) ? "border-warning-subtle d-flex flex-column border bg-secondary mb-5 border-4 rounded" : "border-primary d-flex flex-column border bg-secondary mb-5 border-4 rounded"}>
                <h3 className="text-light text-center m-2">
                  {state['data'].id + " " + state["data"].name.charAt(0).toUpperCase() +
                    state["data"].name.slice(1)}
                </h3>
                <img
                  className="p-3"
                  height="300px"
                  src={state["data"].sprites["front_default"]}
                  alt={state["data"].name}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
