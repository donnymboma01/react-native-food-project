import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";

import SearchBar from "../components/SearchBar";
// import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  /* const [results, setResults] = useState([]); // on pouvait appeler ca restaurants et setRestaurants au lieu de results.
  const [errorMessage, setErrorMessage] = useState("");*/
  const [searchApi, results, errorMessage] = useResults();

  /* const searchApi = async (searchTerm) => {
    console.log("Hi there infinite stupid loop");
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
  }, []); */

  return (
    <View>
      <SearchBar
        search={search}
        onSearchChange={(newSearch) => setSearch(newSearch)}
        onSearchSubmit={() => searchApi(search)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}
      <Text>We have found {results.length} restaurants</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
