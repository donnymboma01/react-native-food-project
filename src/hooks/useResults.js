import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]); // on pouvait appeler ca restaurants et setRestaurants au lieu de results.
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    // console.log("Hi there infinite stupid loop");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
