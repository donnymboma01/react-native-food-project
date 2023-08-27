import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
// import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  /* const [results, setResults] = useState([]); // on pouvait appeler ca restaurants et setRestaurants au lieu de results.
  const [errorMessage, setErrorMessage] = useState("");*/
  const [searchApi, results, errorMessage] = useResults();

  // console.log(results);

  const filterResultsByPrice = (price) => {
    // price === '$ || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

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
    <>
      <SearchBar
        search={search}
        onSearchChange={(newSearch) => setSearch(newSearch)}
        onSearchSubmit={() => searchApi(search)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricer" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender !"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
