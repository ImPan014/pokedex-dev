import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const TypeTable = () => {
  const pokeAPI = "https://pokeapi.co/api/v2/";

  //const types = "type"

  const { state } = useFetch(pokeAPI + "type");
  const { type } = useFetch(pokeAPI);

  return (
    <>
      <div className="container bg-dark-subtle text-emphasis-dark mt-3 pb-3">
        <div className="container d-flex justify-content-center">
          <h1>Type table</h1>
        </div>
        <pre className="chroma">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
              <th key={0} scope="col">
                        
                      </th>
                {state["data"] ? (
                  state["data"].results.slice(0, 18).map((result, contador) => {
                    return (
                      <th key={contador} scope="col">
                        {result.name}
                      </th>
                      //console.log(result)
                    );
                  })
                ) : (
                  <th key={1}>no data</th>
                )}
              </tr>
            </thead>

            <tbody>
              {state["data"] ? (
                state["data"].results.slice(0, 18).map((result, contador) => {
                  return (
                    <tr key={contador} scope="col">
                      <th>{result.name}</th>
                    </tr>
                    //console.log(result)
                  );
                })
              ) : (
                <tr key={1}>
                  <th>no data</th>
                </tr>
              )}
            </tbody>

            {/* <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>{state['data'] ? state['data'].results['0'].name  : "Is Loading"}</td>
              </tr>
              </tbody> */}
          </table>
        </pre>
      </div>
    </>
  );
};
