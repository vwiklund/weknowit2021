import React from "react";
import { Redirect } from "react-router-dom";

//evaluating population resaults for searchbycity
const RedirectSearchByCountry = (props) => (
  <div>
    {props.error && (
      <div className="center">
        <p className="weather__error">{props.error}</p>
      </div>
    )}
    {props.population && (
      <Redirect
        to={{
          pathname: "/searchbycountryresaults",
          state: {
            population: props.population,
            city: props.city,
            country: props.country,
          },
        }}
      />
    )}
  </div>
);
export default RedirectSearchByCountry;
